## 2024-05-25 - Caching Intl.NumberFormat
**Learning:** Instantiating `Intl.NumberFormat` repeatedly in a render loop or helper functions called frequently causes unnecessary overhead.
**Action:** Cache the `Intl.NumberFormat` instances in variables to be reused.
