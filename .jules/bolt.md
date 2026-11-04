
## 2025-02-28 - Date instantiation performance in Next.js build / render loops
**Learning:** Instantiating `new Date(YYYY-MM-DD)` objects inside loops (like sorting blog posts or filtering by published date) is significantly slower (~3x) than using basic string comparison in Node.js/V8. Because ISO 8601 string dates sort lexicographically exactly the same as Date objects, converting them is unnecessary overhead.
**Action:** Always favor direct lexicographical string comparison when checking or sorting ISO 8601 formatted date strings instead of creating `Date` objects, particularly in data processing functions that are executed frequently or over large arrays.
