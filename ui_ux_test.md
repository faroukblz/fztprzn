Comprehensive UI/UX & Functional QA Testing Plan

Project: Fazti Academy — Interactive Presentation Platform
Scope: All course modules — Dynamic UI Components, Framer Motion Animations, State Machines, and Interaction Design.
Role: Senior UI/UX QA Expert

---

Phase 1: Global UI/UX Heuristics & Best Practices

Before testing any specific module, the global environment must pass these expert heuristic checks.

[ ] The "Tech-Noir" Contrast Check: Verify that the background (bg-brand-950 / #0d0e28) maintains at least a 4.5:1 contrast ratio with all body text, and a 7:1 ratio for main headlines.

[ ] Typography Scale & Anti-Aliasing: Ensure fonts (Cairo, Inter) render smoothly without jagged edges. On MacOS/iOS, verify -webkit-font-smoothing: antialiased; is active.

[ ] Viewport & Overflow: Vigorously resize the browser window. Within the course viewer, the presentation must never trigger a horizontal scrollbar. The Home page must scroll vertically without issues.

[ ] Performance (60FPS Baseline): Open Chrome DevTools -> Rendering -> enable "FPS meter". Trigger the animations in each slide. If the FPS drops below 50fps during Framer Motion transitions, the developer needs to use will-change: transform or hardware acceleration (translateZ(0)).

[ ] Routing & Navigation: Verify all routes work (/home, /course/fazty-academy, /course/sales-psychology, etc.). The browser back button must correctly return the user to the Home page. Deep-linking directly to a course URL must work.

---

Phase 2: Interaction Design (Clickability & Controls)

Testing the tangible feel of the application. Dynamic presentations often suffer from "ghost clicks" or moving targets.

[ ] Hitbox Size (Fitts's Law): All interactive buttons and toggles MUST have a minimum clickable area of 44x44 pixels (WCAG standard), even if the visual icon is smaller (use padding).

[ ] Hover & Active Feedback: Every button must have a clear :hover state (e.g., slight scale up or brightness increase) AND an :active state (e.g., scale: 0.95 via Framer Motion) so the user physically feels the click.

[ ] Rapid Click & Debounce Resistance (Spam Testing): Rapidly click the "Next/Prev" slide buttons, carousel arrows, or any stateful buttons 10 times in 1 second.

Expected Result: The app should not crash, skip states, or queue up 10 animations that play long after the user stops clicking. Animations should smoothly interrupt and redirect.

[ ] Cursor State: Ensure cursor: pointer is strictly applied to clickable elements and cursor: grab / cursor: grabbing is applied to sliders and draggable elements.

---

Phase 3: Dynamic Containers & Visibility Edge Cases

Because elements are morphing, moving, and resizing dynamically, container boundaries and z-indexes are high-risk areas.

[ ] Z-Index Stacking Contexts Post-Animation: After a dynamic change (e.g., carousel card transitions, chat bubble animations, equation block reveals), verify that newly generated elements do not overlap or block navigation buttons. Buttons must maintain the highest z-index relative to the content canvas.

[ ] Container Layout Shifting (CLS): When carousel cards shift, chat bubbles appear, or equation blocks animate in, the parent container must grow/shrink smoothly. It must not snap abruptly or cause the presentation controls (Next/Prev slide) to jump off screen.

[ ] Bounding Box Constraints: Dragging sliders or interactive handles out of the container bounds rapidly should not break the UI. Handles must stop strictly at their boundary limits.

---

Phase 4: Platform-Wide Component Testing

### 4.1: Course Viewer (All Courses)

[ ] Keyboard Navigation: Arrow keys (Left/Right, Up/Down) must advance/reverse slides. Verify this works on every course viewer.

[ ] Slide Counter: The "XX / YY" counter in the top-right must reflect the correct current slide and total count for each course.

[ ] Home Button: The "الرئيسية" button in the top-left must correctly navigate back to the Home page from any course.

[ ] Slide Transitions: AnimatePresence with spring physics must feel smooth and responsive, not sluggish or stuttering.

### 4.2: Home Page

[ ] Course Cards: Each course card must navigate to its correct route when clicked.

[ ] Card Hover States: Border brightening, title color change, and the "اكتشف المزيد" link gap animation must all trigger smoothly on hover.

[ ] Top Navigation Bar: Sticky nav must stay visible while scrolling. Backdrop blur must work correctly.

[ ] Responsive Grid: Course cards must collapse from 3-columns (lg) to 2-columns (md) to 1-column (sm) correctly.

---

Phase 5: Module-Specific Testing

### Course 1: أساسيات التصميم الجرافيكي (Graphic Design Fundamentals)

Contrast Matrix (Slide 3): Shape toggle — when the square morphs into a circle, background color must not bleed outside the borderRadius during transition. Typography toggle — when font weight increases, text must not abruptly wrap to a new line.

Balance Simulator (Slide 4): The rotation animation (rotateZ) must use spring physics. The "wobble" must feel like a realistic heavy scale, not a robotic linear movement. State reversal (going back and returning) must reset the state machine cleanly.

Proximity Magnet (Slide 5): When scattered elements fly into position, they must not clip through container edges. Ensure overflow: visible is set during animation.

Sliders (Slides 8 & 9): Touch event hijacking must be tested on touchscreens. Slider must not trigger browser's native swipe gestures. Dynamic padding must be clamped so content doesn't get crushed at extreme values. Before/After handle must have drop-shadow for visibility.

### Course 2: سيكولوجية البيع (Sales Psychology)

Marketing Formulas Carousel (Slide 1): Cards must cycle smoothly with wrap-around. Active card must be scaled to 1.0 with full opacity. Inactive cards must be visually recessed (scale 0.82, opacity 0.35). Dot indicators must sync with the active card. Navigation arrows must work in both directions.

WhatsApp Business Mockup (Slide 2): Chat bubbles must animate in sequentially with correct stagger delays (0.4s → 5.2s). Customer messages align left, bot messages align right. Feature cards must respond to hover with icon scale and text brightness. The phone frame must not overflow or clip chat content.

Facebook Marketplace Equation (Slide 3): Phase transitions (title → blocks → result) must be clean and not overlap. Equation blocks must appear with staggered timing. The result block's pulsing glow must loop smoothly. Reset must cleanly return to Phase 0.

---

Phase 6: Error Handling & Accessibility (A11y)

[ ] Keyboard Navigation (Tab Traversal): The instructor might be using a clicker or keyboard. Press Tab. You must clearly see a focus ring (e.g., ring-2 ring-amber-500) around the active button.

[ ] Spacebar/Enter Execution: Ensure focused buttons can be triggered using the Enter or Space key, not just mouse clicks.

[ ] Graceful Degradation: If the device struggles to render 60fps animations, verify if Framer Motion reduces motion gracefully without breaking the layout of the presentation.

[ ] Screen Reader Compatibility: All icons must have aria-label or be wrapped in visually hidden text. Slide content must be navigable by screen readers with proper heading hierarchy.