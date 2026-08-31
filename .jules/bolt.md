
## 2024-02-23 - [Cache Intl.NumberFormat for Rendering Performance]
**Learning:** Instantiating `Intl.NumberFormat` repeatedly inside React components or render-bound utility functions introduces significant CPU overhead. Benchmarking showed that using a cached instance can be ~100x faster than creating a new instance on every call.
**Action:** Always pre-instantiate and cache `Intl.NumberFormat` objects in a module-level constant rather than creating them inline within components or frequent utility functions.
