
## 2025-04-01 - Cache Intl.NumberFormat to prevent render overhead
**Learning:** `Intl.NumberFormat` instantiation in JavaScript is notoriously slow, and when used directly in render loops without caching (such as form components dynamically rendering updated values), it can significantly delay the main thread. This app's `formatCurrency` utility was continuously recreating `Intl.NumberFormat` instances for every format call inside a React component.
**Action:** When creating formatting utility functions, cache `Intl` instances using a global object or `Map` instead of instantiating them directly within the utility wrapper.
