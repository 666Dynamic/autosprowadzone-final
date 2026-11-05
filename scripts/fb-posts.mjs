#!/usr/bin/env node
/**
 * Zamienia listę ofert z maila (wklejoną do pliku tekstowego) na gotowe posty na Facebooka.
 *
 * Użycie:
 *   npm run fb -- oferty.txt            # posty do fb-posts/<data>/posty.md
 *   npm run fb -- oferty.txt --zdjecia  # + pobiera zdjęcia z Dropboxa do folderów aut
 *   npm run fb -- oferty.txt --vin      # dopisuje VIN do postów
 *
 * Format wejścia = to, co przychodzi w mailu: dla każdego auta kolejno
 * data pierwszej rejestracji, paliwo, marka, model, wersja, nadwozie, VIN, kolor, przebieg, cena €, link Dropbox.
 */
import fs from 'node:fs'
import path from 'node:path'

const RATE = 4.21 // jak w lib/calculator-constants.ts
const COMMISSION = 2470
const TRANSPORT = 2500 // średnio
const FIXED = 250 + 161.5 + 149 // tłumaczenia + rejestracja + przegląd
const SITE = 'https://sprowadzoneauto.pl'
const WHATSAPP = '+49 156 79264391'

const args = process.argv.slice(2)
const file = args.find((a) => !a.startsWith('--'))
const withPhotos = args.includes('--zdjecia')
const withVin = args.includes('--vin')
if (!file) {
  console.error('Podaj plik z ofertami, np.: npm run fb -- oferty.txt')
  process.exit(1)
}

const FUEL = { benzin: 'benzyna', diesel: 'diesel', phev: 'hybryda plug-in', hybrid: 'hybryda', hev: 'hybryda', elektro: 'elektryk', ev: 'elektryk', lpg: 'LPG', cng: 'CNG' }
const BODY = { stationcar: 'kombi', kombi: 'kombi', hatchback: 'hatchback', suv: 'SUV', sedan: 'sedan', limousine: 'sedan', coupe: 'coupé', cabrio: 'kabriolet', convertible: 'kabriolet', van: 'van', mpv: 'van' }
const COLOR = { white: 'biały', black: 'czarny', red: 'czerwony', blue: 'niebieski', grey: 'szary', gray: 'szary', silver: 'srebrny', beige: 'beżowy', brown: 'brązowy', green: 'zielony', yellow: 'żółty', orange: 'pomarańczowy', gold: 'złoty' }
const VIN_YEAR = { E: 2014, F: 2015, G: 2016, H: 2017, J: 2018, K: 2019, L: 2020, M: 2021, N: 2022, P: 2023, R: 2024, S: 2025, T: 2026 }

const num = (s) => Number(String(s).replace(/[.\s]/g, '').replace(',', '.'))
const fmt = (n) => new Intl.NumberFormat('pl-PL', { maximumFractionDigits: 0 }).format(n)
const tr = (map, s) => map[String(s).trim().toLowerCase()] ?? s

function parse(text) {
  const lines = text.split(/\r?\n/).map((l) => l.trim()).filter(Boolean)
  const cars = []
  let start = 0
  lines.forEach((line, i) => {
    if (!/^https?:\/\//.test(line)) return
    const rec = lines.slice(start, i + 1)
    start = i + 1
    if (rec.length < 10) return
    const [fuel, make, model, variant, body, vin, color, km, price, link] = rec.slice(-10)
    const dateLine = rec.length > 10 ? rec[rec.length - 11] : ''
    const year = /^\d{4}/.test(dateLine) ? Number(dateLine.slice(0, 4)) : VIN_YEAR[vin[9]] ?? ''
    cars.push({ year, fuel, make, model, variant, body, vin, color, km: num(km), price: num(price), link })
  })
  return cars
}

function estimate(car) {
  const pln = car.price * RATE
  const fuel = car.fuel.toLowerCase()
  const cc = Number((car.variant.match(/^(\d\.\d)/) || [])[1] || 0)
  const large = cc > 2.0
  let excise = large ? 0.186 : 0.031
  if (fuel === 'phev') excise = large ? 0.093 : 0
  if (fuel === 'hybrid' || fuel === 'hev') excise = large ? 0.093 : 0.0155
  if (fuel === 'elektro' || fuel === 'ev') excise = 0
  const total = pln + pln * excise + COMMISSION + TRANSPORT + FIXED
  return Math.round(total / 100) * 100
}

function variantPl(v) {
  return v
    .replace(/(\d+)HP/i, '$1 KM')
    .replace(/\bAutomatic\b/i, 'automat')
    .replace(/\bManual\b/i, 'manual')
}

function post(car) {
  const title = `${car.make} ${car.model} ${variantPl(car.variant)}`
  return [
    `🚗 ${title} · ${car.year}`,
    '',
    `✅ ${fmt(car.km)} km`,
    `✅ ${tr(FUEL, car.fuel)} · ${tr(BODY, car.body)} · ${tr(COLOR, car.color)}`,
    withVin ? `✅ VIN: ${car.vin} (sprawdź historię sam)` : null,
    '',
    `💶 Cena w Niemczech: ${fmt(car.price)} €`,
    `🇵🇱 Pod Twój dom w Polsce z transportem, akcyzą, rejestracją i naszą prowizją: ok. ${fmt(estimate(car))} zł`,
    '',
    'Auto z niemieckiej giełdy B2B dla dealerów — zwykle 20–30% taniej niż podobne na Otomoto. Porównaj sam.',
    '',
    `👉 Chcesz to auto albo podobne? Napisz na WhatsApp ${WHATSAPP} lub przez ${SITE}`,
    '',
    `#autozniemiec #sprowadzonezniemiec #${car.make.toLowerCase().replace(/\W/g, '')} #${(car.make + car.model).toLowerCase().replace(/\W/g, '')} #importaut`,
  ]
    .filter((l) => l !== null)
    .join('\n')
}

function summary(cars) {
  return [
    '🔥 Świeże auta z niemieckich giełd dla dealerów — ceny pod dom w Polsce',
    '',
    ...cars.map((c) => `🚗 ${c.make} ${c.model} ${variantPl(c.variant)} · ${c.year} · ${fmt(c.km)} km → ok. ${fmt(estimate(c))} zł`),
    '',
    'Ceny zawierają transport, akcyzę, rejestrację i naszą stałą prowizję 2470 zł. Zwykle 20–30% taniej niż na Otomoto.',
    `Zdjęcia i szczegóły — napisz na WhatsApp ${WHATSAPP} albo przez ${SITE}`,
    '',
    '#autozniemiec #sprowadzonezniemiec #importaut #autazniemiec',
  ].join('\n')
}

async function downloadPhotos(car, dir) {
  const url = car.link.replace(/([?&])dl=0/, '$1dl=1')
  const res = await fetch(url, { redirect: 'follow' })
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  const zip = path.join(dir, 'zdjecia.zip')
  fs.writeFileSync(zip, Buffer.from(await res.arrayBuffer()))
  const { execFileSync } = await import('node:child_process')
  execFileSync('ditto', ['-x', '-k', zip, dir])
  fs.unlinkSync(zip)
}

const cars = parse(fs.readFileSync(file, 'utf8'))
if (!cars.length) {
  console.error('Nie znalazłem żadnych aut — sprawdź format pliku.')
  process.exit(1)
}

const outDir = path.join('fb-posts', new Date().toISOString().slice(0, 10))
fs.mkdirSync(outDir, { recursive: true })

let md = `# Posty na Facebooka — ${cars.length} aut\n\n## Post zbiorczy (do grup)\n\n${summary(cars)}\n\n`
for (const [i, car] of cars.entries()) {
  const slug = `${String(i + 1).padStart(2, '0')}-${car.make}-${car.model}-${car.year}`.toLowerCase().replace(/[^a-z0-9-]/g, '')
  const carDir = path.join(outDir, slug)
  fs.mkdirSync(carDir, { recursive: true })
  const text = post(car)
  fs.writeFileSync(path.join(carDir, 'post.txt'), text + '\n')
  md += `---\n\n## ${i + 1}. ${car.make} ${car.model} (${car.year})\n\nZdjęcia: ${car.link}\n\n${text}\n\n`
  if (withPhotos) {
    try {
      await downloadPhotos(car, carDir)
      console.log(`📷 ${slug}: zdjęcia pobrane`)
    } catch (e) {
      console.log(`⚠️  ${slug}: nie udało się pobrać zdjęć (${e.message})`)
    }
  }
}
fs.writeFileSync(path.join(outDir, 'posty.md'), md)
console.log(`✅ ${cars.length} postów → ${path.join(outDir, 'posty.md')}`)
