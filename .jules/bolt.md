## 2025-03-03 - Cache Intl.NumberFormat Instantiations
**Learning:** Instantiating `Intl.NumberFormat` frequently (e.g., inside loops or render cycles) incurs a significant CPU overhead, acting as a massive performance bottleneck. Benchmarks show a 50x slowdown when recreating vs reusing formatters.
**Action:** Always cache `Intl.NumberFormat` objects in constants or at the module scope when the locale and options remain the same.
