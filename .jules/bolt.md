
## 2024-05-15 - Cached Intl.NumberFormat instances
**Learning:** Instantiating new `Intl.NumberFormat` instances frequently (e.g., in loops or React component updates) is extremely CPU-intensive, taking ~8s for 100k iterations versus ~70ms for the cached counterpart. In `AboutAuctions`, it triggered a new format instantiation repeatedly during the component's simulated bidding cycle, slowing down rendering significantly on slower devices.
**Action:** When using `Intl.NumberFormat`, always cache and reuse instances at the module level or outside component loops to avoid severe performance overhead.
