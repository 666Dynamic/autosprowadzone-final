const iters = 100000;

console.time("Uncached Intl.NumberFormat");
for (let i = 0; i < iters; i++) {
  new Intl.NumberFormat('pl-PL', {
    style: 'currency',
    currency: 'PLN',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(i);
}
console.timeEnd("Uncached Intl.NumberFormat");

const formatter = new Intl.NumberFormat('pl-PL', {
  style: 'currency',
  currency: 'PLN',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

console.time("Cached Intl.NumberFormat");
for (let i = 0; i < iters; i++) {
  formatter.format(i);
}
console.timeEnd("Cached Intl.NumberFormat");
