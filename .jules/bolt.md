## 2024-05-18 - Avoid premature optimization on Date comparisons
**Learning:** Attempting to optimize `new Date(dateISO)` sorting in small arrays (like processing local MDX blog posts) by switching to lexical string comparison is a premature micro-optimization that can introduce bugs if ISO strings are not perfectly normalized (e.g., missing milliseconds or different timezones). It provides no measurable real-world performance benefit and violates safety boundaries.
**Action:** Do not optimize Date sorting or filtering logic for small datasets unless profiling indicates a severe bottleneck. Always prioritize correctness, especially when the underlying string formats might have slight variations.

## 2024-05-18 - Cache Intl.NumberFormat correctly
**Learning:** `Intl.NumberFormat` instantiation is notoriously slow in JavaScript. However, caching it inside a React component using `useMemo` is an anti-pattern if the dependency array includes values that change frequently (like animated prices), causing the formatter to be recreated anyway.
**Action:** Always extract `Intl.NumberFormat` instances to the module scope (outside the component) or cache them using a `Map` (for dynamic locales/currencies) to ensure they are created exactly once and reused globally.
