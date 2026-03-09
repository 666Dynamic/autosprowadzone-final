## 2024-03-09 - Intl.NumberFormat Caching Optimization
**Learning:** Instantiating `Intl.NumberFormat` inside React components (especially in `useMemo` or render logic) is a significant performance bottleneck because initialization is computationally expensive.
**Action:** Cache `Intl.NumberFormat` instances in a static module scope variable or a `Map` outside components to reuse instances globally, saving CPU cycles on frequent re-renders or utility function calls.
