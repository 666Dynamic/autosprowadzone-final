## 2025-02-27 - [Formatters Cache]
**Learning:** `Intl.NumberFormat` instantiation is notoriously slow. In `components/about-auctions.tsx`, an instance was being cached with `useMemo` based on `price`. However, since `price` was animating rapidly, the cache was invalidated almost constantly, causing a new formatter to be instantiated on nearly every render frame during the animation.
**Action:** Always cache `Intl.NumberFormat` in a module-scoped constant or an object cache outside of the React render cycle, especially when dealing with rapidly updating values like animations or fast typing.
