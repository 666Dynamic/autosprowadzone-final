## 2024-05-24 - Intl.NumberFormat Caching
**Learning:** `Intl.NumberFormat` instantiation is a massive performance bottleneck when called inside loops or frequently re-rendering React components (e.g. up to 80x slower than cached instances in this Next.js app).
**Action:** Always cache `Intl.NumberFormat` instances in a static Map or `useMemo` outside of fast-executing loops.

## 2024-05-24 - Project-Wide Formatting
**Learning:** Running project-wide formatting scripts (e.g., `npm run format`) modifies thousands of lines unexpectedly, violating the rule to keep optimizations small (< 50 lines) and reviewable.
**Action:** Only format explicitly modified files using `npx prettier --write <file>`.
