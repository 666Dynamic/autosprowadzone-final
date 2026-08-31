import { formatCurrency as oldFormatCurrency } from "./lib/calculator-constants.ts";

const currencyFormatters = new Map<string, Intl.NumberFormat>();

function newFormatCurrency(value: number, currency: 'PLN' | 'EUR' = 'PLN'): string {
  if (!currencyFormatters.has(currency)) {
    currencyFormatters.set(currency, new Intl.NumberFormat('pl-PL', {
      style: 'currency',
      currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }));
  }
  return currencyFormatters.get(currency)!.format(value);
}

function runBenchmark(fn: () => void, iterations: number, name: string) {
    const start = performance.now();
    for (let i = 0; i < iterations; i++) {
        fn();
    }
    const end = performance.now();
    console.log(`${name}: ${(end - start).toFixed(2)}ms`);
}

const iterations = 100000;
const testValues = [10, 1000, 150000, 42.50];

console.log(`Running benchmark with ${iterations} iterations...`);

runBenchmark(() => {
    for (const val of testValues) {
        oldFormatCurrency(val, 'PLN');
        oldFormatCurrency(val, 'EUR');
    }
}, iterations, "Without Caching (Old)");

runBenchmark(() => {
    for (const val of testValues) {
        newFormatCurrency(val, 'PLN');
        newFormatCurrency(val, 'EUR');
    }
}, iterations, "With Caching (New)");
