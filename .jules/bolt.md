## 2024-05-29 - Cache Intl.NumberFormat
**Learning:** Instantiating `Intl.NumberFormat` on every render for dynamically updating values (like animated numbers or rapidly changing state) causes significant CPU overhead, and `useMemo` does not help if the dependency updates frequently. In functions called frequently, recreating the formatter also adds overhead.
**Action:** Move `Intl.NumberFormat` instances outside the component or module scope, or cache them using a Map, to avoid repeated instantiations when formatting rapidly changing numbers.
