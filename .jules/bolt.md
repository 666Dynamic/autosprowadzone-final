## 2025-02-23 - [Optimize Intl.NumberFormat Instantiation]
**Learning:** Instantiating `Intl.NumberFormat` inside React component render loops or formatting utility functions creates a significant CPU and memory overhead, especially when rendering lists or frequently updating numbers (like in a calculator).
**Action:** Always extract and cache `Intl.NumberFormat` instances in a module-scoped variable or constants file instead of creating them dynamically per-call.
