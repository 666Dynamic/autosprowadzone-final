## 2026-06-04 - [Intl.NumberFormat Caching]
**Learning:** Instantiating `Intl.NumberFormat` is surprisingly expensive in V8/JavaScript. Rapidly recreating these instances inside render loops or formatting utility functions (like `formatCurrency`/`formatNumber`) causes significant CPU overhead and can slow down React re-renders.
**Action:** Always cache `Intl.NumberFormat` instances in module-scoped variables, constants files, or using `useMemo` (if dynamically configured but rarely changing) to reuse them instead of creating new instances per format call.
