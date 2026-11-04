
## 2024-05-28 - [Performance: Cache Intl.NumberFormat instances]
**Learning:** Instantiating `Intl.NumberFormat` repeatedly inside functions or rapid render loops introduces significant CPU overhead in JavaScript applications.
**Action:** Always extract `Intl.NumberFormat` instantiations to static module-scoped caches or constants to avoid redundant initialization costs during rapid UI updates or frequent utility function calls.
