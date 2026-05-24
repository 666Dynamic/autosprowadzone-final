## 2026-05-24 - [Intl.NumberFormat Caching]
**Learning:** Repeatedly instantiating `Intl.NumberFormat` inside functions or rapid render loops (like animated values) creates significant, unnecessary CPU overhead. Using `useMemo` in React to cache it is ineffective if the dependency array updates frequently (e.g., tied to a changing `price` state).
**Action:** Define `Intl.NumberFormat` instances at the module scope (outside components and functions) to ensure they are instantiated only once, significantly reducing execution time during fast re-renders or tight loop iterations.
