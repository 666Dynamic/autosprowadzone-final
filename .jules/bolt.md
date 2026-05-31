## 2024-05-24 - [Intl.NumberFormat Optimization]
**Learning:** Intl.NumberFormat instantiation inside of React's useMemo is inefficient. Even with useMemo, passing a dynamic value like 'price' as a dependency means it will be re-instantiated repeatedly.
**Action:** Caching Intl.NumberFormat instances in the module scope or moving it outside of React's render lifecycle allows the formatting method to be called multiple times without the costly instantiation of Intl.NumberFormat on each change.
