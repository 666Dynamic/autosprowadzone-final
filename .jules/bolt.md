## 2025-02-20 - Cache Intl.NumberFormat instances
**Learning:** `Intl.NumberFormat` instantiation is computationally expensive in JavaScript. Creating new instances on every call inside functions like `formatCurrency` or `formatNumber` can cause significant CPU overhead, especially when these functions are used within rapid render loops or list iterations.
**Action:** Cache `Intl.NumberFormat` instances in module-scoped variables or similar caching mechanisms to reuse them across function calls, improving performance without altering functionality.
