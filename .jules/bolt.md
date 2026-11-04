## 2025-05-23 - [Intl.NumberFormat Performance]
**Learning:** Instantiating `Intl.NumberFormat` repeatedly inside loops (e.g., inside formatters) is extremely slow (~932ms for 1M iterations). Caching instances significantly improves performance (~12ms).
**Action:** Always cache `Intl.NumberFormat` instances in a module-level constant or a `Map` when formatting large datasets or repeatedly calling formatters.
