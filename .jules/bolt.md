## 2024-06-19 - Caching Intl.NumberFormat
**Learning:** Instantiating `Intl.NumberFormat` repeatedly inside functions like `formatCurrency` or `formatNumber` can cause significant CPU overhead, particularly when called frequently during React renders.
**Action:** Always cache `Intl.NumberFormat` instances in module-scoped variables or maps (e.g., `Record<string, Intl.NumberFormat>`) to reuse them across function calls.
