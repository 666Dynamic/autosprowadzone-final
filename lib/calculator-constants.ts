/**
 * Calculator constants for car import cost calculations
 * Updated for 2026 regulations
 */

export const CALCULATOR_CONFIG = {
  // Price boundaries
  MIN_PRICE_EUR: 1,
  MAX_PRICE_EUR: 500000,
  
  // Exchange rate
  DEFAULT_EXCHANGE_RATE: 4.21,
  
  // Excise tax (Akcyza)
  AKC_THRESHOLD_CC: 2000,
  AKC_RATE_LOW: 0.031,   // 3.1% for engines ≤2000cc
  AKC_RATE_HIGH: 0.186,  // 18.6% for engines >2000cc
  
  // Fixed costs
  COMMISSION: 2500,
  TRANSLATION: 250,
  REGISTRATION_STANDARD: 161.50,
  REGISTRATION_INDIVIDUAL: 1080,
  
  // Inspection costs
  INSPECTION_BASE: 98,
  INSPECTION_LPG: 63,
  INSPECTION_ACCIDENT: 94,
  
  // Transport estimates (informational)
  TRANSPORT_MIN: 1500,
  TRANSPORT_MAX: 3500,
} as const

export function validatePrice(price: number): boolean {
  return (
    !isNaN(price) &&
    price >= CALCULATOR_CONFIG.MIN_PRICE_EUR &&
    price <= CALCULATOR_CONFIG.MAX_PRICE_EUR
  )
}

export function validateExchangeRate(rate: number): boolean {
  return !isNaN(rate) && rate > 0 && rate < 10
}

// Cached formatters to prevent performance overhead from repeated instantiations
const currencyFormatterPLN = new Intl.NumberFormat('pl-PL', {
  style: 'currency',
  currency: 'PLN',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
})

const currencyFormatterEUR = new Intl.NumberFormat('pl-PL', {
  style: 'currency',
  currency: 'EUR',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
})

const numberFormatter = new Intl.NumberFormat('pl-PL', {
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
})

export function formatCurrency(value: number, currency: 'PLN' | 'EUR' = 'PLN'): string {
  return currency === 'EUR' ? currencyFormatterEUR.format(value) : currencyFormatterPLN.format(value)
}

export function formatNumber(value: number): string {
  return numberFormatter.format(value)
}
