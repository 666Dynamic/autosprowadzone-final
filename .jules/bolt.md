## 2025-06-09 - Intl.NumberFormat Caching
**Learning:** Instantiating `Intl.NumberFormat` instances within rendering cycles (or repeatedly called functions like formatters) causes substantial CPU overhead because of parsing rules and locale initialization.
**Action:** Always instantiate `Intl.NumberFormat` and other heavy standard API classes (e.g. `Intl.DateTimeFormat`) once, preferably as module-scoped variables or centralized caches, instead of recreating them inside loops, components, or formatting functions.
