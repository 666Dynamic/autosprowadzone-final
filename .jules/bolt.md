
## 2024-03-24 - Cache Intl.NumberFormat Instantiations
**Learning:** In React applications handling financial data, recreating `Intl.NumberFormat` instances repeatedly during render loops (like calculating rows in a pricing table) is a significant CPU bottleneck due to V8's slow initialization of these objects.
**Action:** Always extract `Intl.NumberFormat` instantiations to the module scope or wrap them in a singleton pattern (like a static cached record) when building utility functions, ensuring they are created once and reused across renders.
