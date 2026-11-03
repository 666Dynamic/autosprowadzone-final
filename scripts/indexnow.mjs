// Submits every URL from the live sitemap to IndexNow (Bing, Yandex, Seznam, Naver).
// Run after a deploy: npm run indexnow
const HOST = 'www.sprowadzoneauto.pl'
const KEY = '2a9b5b94fc45e906621562cc64b6d14b'

const sitemap = await fetch(`https://${HOST}/sitemap.xml`).then((r) => r.text())
const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({
    host: HOST,
    key: KEY,
    keyLocation: `https://${HOST}/${KEY}.txt`,
    urlList,
  }),
})

console.log(`IndexNow: ${res.status} ${res.statusText} (${urlList.length} URLs)`)
if (!res.ok) process.exit(1)
