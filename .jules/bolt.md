
## 2025-03-01 - [Cache Intl.NumberFormat values]
**Learning:** Frequent instantiations of `Intl.NumberFormat` inside formatters like `formatCurrency` significantly slow down formatting operations (e.g. 15.05s vs 145ms for 100,000 iterations). Caching instances yields ~100x performance improvements.
**Action:** Always cache instances of `Intl.NumberFormat` utilizing Maps or static constants for general number and currency formatters instead of instantiating new instances within formatting functions or render loops.
