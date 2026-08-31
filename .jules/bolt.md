
## 2024-05-18 - Lexicographical ISO Date Operations
**Learning:** Instantiating `Date` objects inside large arrays (e.g., during `.map()`, `.filter()`, or `.sort()`) incurs significant performance overhead. Since the application uses strict ISO 8601 date strings (`YYYY-MM-DD`), dates can be correctly and efficiently compared or sorted using direct string operations (lexicographical comparison).
**Action:** When working with ISO date strings in iteration loops, pre-calculate comparing thresholds (like `new Date().toISOString()`) outside the loop, and use `string <= string` or `string > string` for comparisons and sorting to avoid expensive and repetitive `Date` parsing.
