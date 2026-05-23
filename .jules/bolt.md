
## 2024-02-14 - [Date Object Instantiation in Loops]
**Learning:** Instantiating `Date` objects repeatedly inside mapping, filtering, or sorting loops (e.g., `new Date(dateISO).getTime()`) introduces unnecessary computational overhead, which becomes a bottleneck as the dataset grows (e.g., number of blog posts).
**Action:** When filtering or sorting data based on ISO 8601 date strings (`YYYY-MM-DD` or `YYYY-MM-DDTHH:mm:ss.sssZ`), utilize direct lexicographical string comparisons (e.g., `dateISO <= today` or `(b.dateISO > a.dateISO ? 1 : b.dateISO < a.dateISO ? -1 : 0)`). Pre-calculate any required reference dates (like `new Date().toISOString()`) outside of the loop.
