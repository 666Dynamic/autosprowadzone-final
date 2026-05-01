## 2024-05-01 - Intl.NumberFormat caching
**Learning:** Instantiating `Intl.NumberFormat` is extremely expensive in Node.js/V8, taking ~6ms per 100 iterations. In UI components like the calculator that update frequently on input changes, re-creating the formatter on every keystroke causes unnecessary main thread overhead.
**Action:** Always cache `Intl.NumberFormat` instances in a module-level constant or a Map when the locale and options are known, rather than recreating them inside utility functions (`formatCurrency`, `formatNumber`) or render loops.
