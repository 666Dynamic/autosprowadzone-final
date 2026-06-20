## 2024-05-24 - Cache Intl.NumberFormat
**Learning:** Instantiating new Intl.NumberFormat objects repeatedly in loops or render cycles is CPU intensive.
**Action:** Always cache Intl.NumberFormat instances in module scope or using a memoized approach.
