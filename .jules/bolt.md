## 2024-10-24 - [Intl.NumberFormat Optimization]
**Learning:** `Intl.NumberFormat` instances in `lib/calculator-constants.ts` are re-instantiated on every call to `formatCurrency` and `formatNumber`. This is a known performance bottleneck, as formatting functions are often called frequently (e.g., in a React render loop or when processing large lists). Instantiating these formatters repeatedly carries significant CPU overhead.
**Action:** Cache the `Intl.NumberFormat` instances in the constants file so they are created once and reused across all formatting calls.
