
## 2025-03-04 - [Performance] Pausing Background Activity for Off-screen Components
**Learning:** Found a specific performance anti-pattern in `components/about-auctions.tsx` where animated car sliders and bidding cycle mock intervals were running globally in `useEffect` when the app initialized. Because the component is rendered well below the fold, this caused CPU overhead and unnecessary React renders for users who just landed on the hero section.
**Action:** Consistently apply `useInView` from `framer-motion` (or intersection observers) to pause background intervals or complex state updates in components that aren't visible on the screen. Always add `isInView` to the dependency array of the interval hooks and clear intervals when not in view.
