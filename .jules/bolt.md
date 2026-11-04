## 2024-07-07 - [Intl.NumberFormat caching]
**Learning:** Instantiating Intl.NumberFormat is extremely expensive (can be >100x slower than using a cached instance). In React loops or utility functions called repeatedly, creating new formatters on the fly destroys performance.
**Action:** Always cache Intl.NumberFormat instances in module-scoped variables when formatting currencies or numbers, rather than recreating them inside functions or useMemo hooks (where putting the value in the dependency array forces recreation anyway).
