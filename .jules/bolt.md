## 2024-05-18 - Caching Intl.NumberFormat
**Learning:** Instantiating `Intl.NumberFormat` repeatedly in a loop or rendering loop is significantly slower than using a cached instance. A local benchmark showed 100,000 unoptimized instantiations took 7.39s, while a cached format took 59.87ms.
**Action:** When using `Intl.NumberFormat`, cache the instance to reuse across multiple formatting operations.
