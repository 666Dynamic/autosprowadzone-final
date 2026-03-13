## 2024-05-18 - [Cached Intl Formatters]
**Learning:** Re-instantiating `Intl.NumberFormat` on every function call for formatting currencies or numbers is a measurable performance bottleneck in this app, especially considering `formatCurrency` and `formatNumber` are used extensively. Running a test rendering loop 10,000 times showed execution time drop from ~2000ms to ~11ms by simply caching the formatter instances.
**Action:** When working with `Intl` APIs for rendering repetitive data in Next.js or React, always instantiate the formatters once outside the function scope and reuse them.
