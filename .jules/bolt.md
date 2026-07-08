## 2024-05-18 - Caching Intl.NumberFormat
**Learning:** Instantiating `Intl.NumberFormat` repeatedly is a common performance bottleneck in V8. Even when wrapped in `useMemo`, if the value changes frequently (like a bidding counter) or if it's placed inside a utility function called often, it incurs significant overhead.
**Action:** Always cache `Intl.NumberFormat` and `Intl.DateTimeFormat` instances. Use module-scoped constants for static configurations, or a `Map` if the locale or currency needs to be dynamic based on parameters.
