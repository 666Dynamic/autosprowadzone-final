## 2025-03-10 - [Intl.NumberFormat Initialization Overhead]
**Learning:** `Intl.NumberFormat` initialization is extremely expensive and causes significant CPU overhead when created inside functions or React components that are called frequently (like rapid state updates in a bidding simulator).
**Action:** Always cache `Intl.NumberFormat` instances using `useMemo` in React components or as module-level constants (e.g., using a `Map` for dynamic arguments like currency) outside of standard functions.
