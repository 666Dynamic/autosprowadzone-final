
## 2024-04-15 - Cached Intl.NumberFormat instances to reduce CPU overhead
**Learning:** Instantiating `Intl.NumberFormat` repeatedly inside functions or render loops in this codebase causes significant CPU overhead. Specifically, running 100,000 un-cached instances takes around 8.76s, whereas using a single cached instance reduces this to ~63ms (a ~100x improvement).
**Action:** When implementing currency or number formatting using `Intl.NumberFormat`, instantiate the formatter statically outside the function or React component to reuse it, especially when it will be called frequently (e.g., inside loops or render cycles). Also, ensure that performance testing scripts (like `test-perf.js`) are deleted before committing to maintain a clean git history.
