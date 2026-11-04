
## 2024-05-18 - [Intl.NumberFormat Re-Instantiation Overhead]
**Learning:** `Intl.NumberFormat` instantiation is a known JavaScript performance bottleneck. Using `useMemo` to cache an `Intl.NumberFormat` instance that depends on frequently changing data (like a rapidly changing price in a bidding simulation) defeats the purpose of the cache, causing continuous, expensive object recreation.
**Action:** Always cache `Intl.NumberFormat` instances statically at the module level (e.g., using a Record for different currencies) and pass the changing values to the `.format()` method of the cached instance.
