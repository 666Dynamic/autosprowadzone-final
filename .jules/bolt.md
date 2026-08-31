## 2024-05-19 - [Cache Intl.NumberFormat for better performance]
**Learning:** Instantiating `Intl.NumberFormat` repeatedly inside functions like `formatCurrency` is a performance bottleneck, taking ~7s for 100k iterations compared to ~70ms when cached.
**Action:** Always cache `Intl.NumberFormat` instances in a module-scoped variable or use `useMemo` in React components when formatting numbers frequently.
