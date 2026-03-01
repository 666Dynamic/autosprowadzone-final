## 2023-11-20 - [Performance] Intl.NumberFormat Instantiation Overhead
**Learning:** `Intl.NumberFormat` instantiation is extremely slow and CPU-heavy. Re-creating instances constantly during render loops, or high-frequency utility function calls drastically impacts performance (from ~850ms to ~40,000ms for 100k ops).
**Action:** Always cache `Intl.NumberFormat` and similar API classes globally or outside of the component. Use module-level cache maps if dynamic options like currencies are required.
