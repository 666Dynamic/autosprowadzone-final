## 2024-05-30 - Intl.NumberFormat Instantiation
**Learning:** Instantiating new `Intl.NumberFormat` instances is notoriously slow and should be avoided inside rapid render loops or function bodies. In React, using `useMemo` with the value to format in the dependency array defeats the caching.
**Action:** Cache `Intl.NumberFormat` instances globally or in module scope rather than creating new ones inside components or utility functions.
