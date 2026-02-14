## 2024-05-23 - Intl.NumberFormat instantiation in loops
**Learning:** Instantiating Intl.NumberFormat inside a render loop or animation frame is extremely expensive (up to 70x slower than reusing).
**Action:** Always cache Intl.NumberFormat instances or move them outside of loops/components.
