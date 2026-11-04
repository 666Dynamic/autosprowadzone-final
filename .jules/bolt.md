
## 2024-05-27 - Cache Intl.NumberFormat to avoid expensive instantiations
**Learning:** `useMemo` does not prevent expensive object creation if the dependency updates frequently (such as a changing value in an animated bidding sequence). Creating new `Intl.NumberFormat` instances in rapid render loops incurs significant CPU overhead and garbage collection pauses.
**Action:** Always cache `Intl.NumberFormat` instances at the module level or in a shared utility (like a constants file) rather than repeatedly instantiating them inside functional components, especially when formatting data that changes rapidly.
