## 2024-05-21 - [Intl.NumberFormat Caching]
**Learning:** Instantiating `Intl.NumberFormat` repeatedly inside functions like `formatCurrency` or `formatNumber` causes significant CPU overhead, especially when these functions are called frequently during rapid UI re-renders (e.g., when a user interacts with a slider component).
**Action:** Always cache `Intl.NumberFormat` instances in the module scope (or use a caching mechanism) to reuse them across function calls, thereby reducing CPU usage and preventing UI lag.
