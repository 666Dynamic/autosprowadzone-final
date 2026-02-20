## 2024-05-23 - Intl.NumberFormat Caching
**Learning:** Instantiating `Intl.NumberFormat` inside render loops or components is extremely expensive in this environment (benchmarked at ~60x slower than cached usage).
**Action:** Always use module-level constants or cached instances (e.g., via a Map or singleton) for `Intl.NumberFormat` throughout the application to avoid re-creation overhead.
