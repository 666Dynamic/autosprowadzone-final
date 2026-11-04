
## 2025-05-18 - [Optimization] Cache Intl.NumberFormat Instances
**Learning:** Instantiating `Intl.NumberFormat` repeatedly inside functions or React renders (e.g. `useMemo(() => new Intl.NumberFormat().format(val), [val])`) is a common performance pitfall since the underlying OS locale resolution and formatting initialization takes time.
**Action:** Always instantiate `Intl.NumberFormat` statically outside the component or function. For dynamic arguments like currencies, cache the instances in a `Map`.
