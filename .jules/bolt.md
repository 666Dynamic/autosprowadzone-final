## 2025-02-28 - [Performance] Cache Intl.NumberFormat instances
**Learning:** Instantiating `Intl.NumberFormat` on every function call or render is significantly slow (takes ~1.17 seconds for 20000 formats) compared to caching the instance (~12ms for 20000 formats). This is a known bottleneck that is easy to fix but often overlooked.
**Action:** Always extract and cache `Intl.NumberFormat` and similar `Intl` API instances outside of loops, frequently called functions, or React component renders to avoid severe performance penalties.
