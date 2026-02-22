## 2026-02-22 - [Performance] Intl.NumberFormat Instantiation
**Learning:** Creating new `Intl.NumberFormat` instances in frequently called functions (e.g., render loops) is extremely expensive. Benchmarks showed a 92x slowdown (~16s vs ~0.18s for 100k calls).
**Action:** Always cache `Intl.NumberFormat` instances at the module scope or using `useMemo` if locale/options are dynamic.
