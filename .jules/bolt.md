## 2024-05-18 - [Cache Intl.NumberFormat for better performance]
**Learning:** `Intl.NumberFormat` instantiation is a relatively expensive operation. Using `useMemo` to memoize the formatted result in React components when the dependency (like a price) changes frequently is an anti-pattern because the memoization provides little benefit while the expensive instantiation happens anyway.
**Action:** Always cache `Intl.NumberFormat` instances at the module level or outside the render cycle so that the same instance is reused for formatting, preventing unnecessary CPU overhead.
