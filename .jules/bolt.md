## 2025-02-12 - Cached Intl.NumberFormat prevents unnecessary Instantiations
**Learning:** `Intl.NumberFormat` instantiation is notoriously slow in JavaScript. Inside a rapid render cycle or frequently called formatting utilities (like `formatCurrency`), recalculating `new Intl.NumberFormat(...)` introduces measurable CPU overhead and blocks the main thread.
**Action:** Extract `Intl.*` instances into module-scoped variables (or constants files) and reuse them via their `.format()` method, which is completely stateless and safe to share across multiple calls.
