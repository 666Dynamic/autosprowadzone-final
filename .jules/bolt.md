## 2026-05-20 - [Intl.NumberFormat Caching]
**Learning:** Instantiating `Intl.NumberFormat` is computationally expensive. When used inside functions called repeatedly (like `formatCurrency` in `lib/calculator-constants.ts`) or in React `useMemo` hooks that depend on rapidly changing state (like the simulated bidding `price` in `components/about-auctions.tsx`), it causes measurable performance degradation.
**Action:** Always cache `Intl.NumberFormat` instances in module-scoped variables or static records rather than creating new instances on every format call.
