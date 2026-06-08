## 2026-06-08 - Cache Intl.NumberFormat instances
**Learning:** Instantiating new Intl.NumberFormat objects inside functions or render loops causes significant CPU overhead. They should be cached.
**Action:** Cache Intl.NumberFormat instances using module-scoped variables or maps instead of creating them on the fly.
