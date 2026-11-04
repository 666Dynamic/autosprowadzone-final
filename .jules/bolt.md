## 2024-06-10 - Intl.NumberFormat Caching
**Learning:** Instantiating `Intl.NumberFormat` frequently (e.g., inside React `useMemo` hooks with frequently updating dependencies like price, or inside frequently called utility functions like `formatCurrency`) can cause significant CPU overhead and trigger unnecessary re-renders or frame drops.
**Action:** Always cache `Intl.NumberFormat` instances in a module-scoped variable or constant object to prevent re-instantiation, especially during rapid UI updates like simulated bidding or calculation results.
