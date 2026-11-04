## 2024-05-16 - [Intl.NumberFormat Instantiation Overhead]
**Learning:** Instantiating `Intl.NumberFormat` instances within formatting functions like `formatCurrency` and `formatNumber` causes significant CPU overhead, especially when these functions are called frequently (e.g., inside loops or React render cycles). A benchmark showed 100k calls took ~12000ms.
**Action:** Always cache `Intl.NumberFormat` instances outside the function scope (e.g., as module-level constants) and reuse them. This simple change can result in a ~100x performance improvement (down to ~116ms).
