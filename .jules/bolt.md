
## 2024-05-24 - [Pause State Timers Off-Screen]
**Learning:** Framer Motion automatically optimizes standard visual animations for `motion.div` when off-screen. However, for custom state-driven timers (like `setInterval` or `setTimeout`) that drive React state updates, you must manually use the `useInView` hook to pause execution and prevent background re-renders.
**Action:** When inspecting components with continuous state changes (e.g. carousels, live counters, fake bidding simulations), wrap the effect logic with an early return if `!inView` to eliminate CPU overhead when the component is not in the viewport.
