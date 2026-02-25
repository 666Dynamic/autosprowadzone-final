## 2024-05-23 - Optimizing Animations with useInView
**Learning:** Animations and state updates in components like `AboutAuctions` (simulated bidding, image slider) continue to run even when the component is off-screen, consuming significant CPU resources.
**Action:** Use `framer-motion`'s `useInView` hook to conditionally pause `setInterval` and `setTimeout` loops when the component is not visible. This is a simple, high-impact optimization for battery life and performance.
