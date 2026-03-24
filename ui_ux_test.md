Comprehensive UI/UX & Functional QA Testing Plan

Project: Fazty Academy - Interactive Graphic Design Presentation
Scope: Dynamic UI Components, Framer Motion Animations, State Machines, and Interaction Design.
Role: Senior UI/UX QA Expert

Phase 1: Global UI/UX Heuristics & Best Practices

Before testing specific modules, the global environment must pass these expert heuristic checks.

[ ] The "Tech-Noir" Contrast Check: Verify that the background (bg-slate-900 or #0f172a) maintains at least a 4.5:1 contrast ratio with all body text (text-slate-100), and a 7:1 ratio for main headlines.

[ ] Typography Scale & Anti-Aliasing: Ensure fonts (e.g., Cairo, Tajawal) render smoothly without jagged edges. On MacOS/iOS, verify -webkit-font-smoothing: antialiased; is active.

[ ] Viewport & Overflow: Vigorously resize the browser window. The dynamic presentation must never trigger a horizontal scrollbar (overflow-x: hidden on the body).

[ ] Performance (60FPS Baseline): Open Chrome DevTools -> Rendering -> enable "FPS meter". Trigger the animations. If the FPS drops below 50fps during Framer Motion transitions, the developer needs to use will-change: transform or hardware acceleration (translateZ(0)).

Phase 2: Interaction Design (Clickability & Controls)

Testing the tangible feel of the application. Dynamic websites often suffer from "ghost clicks" or moving targets.

[ ] Hitbox Size (Fitts's Law): All interactive buttons and toggles MUST have a minimum clickable area of 44x44 pixels (WCAG standard), even if the visual icon is smaller (use padding).

[ ] Hover & Active Feedback: Every button must have a clear :hover state (e.g., slight scale up or brightness increase) AND an :active state (e.g., scale: 0.95 via Framer Motion) so the user physically feels the click.

[ ] Rapid Click & Debounce Resistance (Spam Testing): Rapidly click the "Next/Prev" slide buttons or the "Next Step" button in the Balance Simulator 10 times in 1 second.

Expected Result: The app should not crash, skip states, or queue up 10 animations that play long after the user stops clicking. Animations should smoothly interrupt and redirect.

[ ] Cursor State: Ensure cursor: pointer is strictly applied to clickable elements and cursor: grab / cursor: grabbing is applied to sliders and draggable elements.

Phase 3: Dynamic Containers & Visibility Edge Cases

Because elements are morphing, moving, and resizing dynamically, container boundaries and z-indexes are high-risk areas.

[ ] Z-Index Stacking Contexts Post-Animation: After a dynamic change (e.g., the Giant Circle dropping in the Balance Simulator), verify that the newly generated elements do not overlap or block the "Next Step" or "Trace Eye Path" buttons. Buttons must maintain the highest z-index relative to the canvas.

[ ] Container Layout Shifting (CLS): When the "White Space" slider expands the gaps, or when the "Proximity Magnet" regroups items, the parent container must grow/shrink smoothly (layout prop in Framer Motion). It must not snap abruptly or cause the presentation controls (Next/Prev slide) to jump off the screen.

[ ] Bounding Box Constraints: Dragging sliders or the Before/After inspector handle out of the container bounds rapidly should not break the UI. The handle must stop strictly at 0% and 100% of the parent container.

Phase 4: Deep Dive - Module-Specific Testing

Module 2: Contrast Matrix

Shape Toggle: When the square morphs into a circle, test if the background color bleeds outside the borderRadius during the transition.

Typography Toggle: When font weight increases dynamically, check if the text wraps to a new line abruptly. It should preferably cross-fade or the container should smoothly adapt to the wider text.

Module 3: Balance Simulator (State Machine)

Physics Calibration: The rotation animation (rotateZ) must use a spring physics curve (type: "spring", stiffness: 100, damping: 10). Test if the "wobble" feels like a realistic heavy scale settling, rather than a robotic linear movement.

State Reversal: What happens if the user goes back to the previous slide and returns? Does the state machine reset to State 0 properly, or is it stuck in State 5? It must unmount and reset cleanly.

Module 4: Proximity Magnet

Trajectory Clipping: When scattered elements fly into the center to group together, do they clip through the edges of their hidden containers? Ensure overflow: visible is set during the animation so they aren't cut off mid-flight.

Module 8 & 9: Sliders (White Space & Before/After)

Touch Event Hijacking: On touchscreens (iPad/Surface), dragging the slider must not trigger the browser's native "swipe to go back" or scroll the page. The slider must call e.preventDefault() on touch move.

Dynamic Padding Limit: Push the "White Space" slider to the absolute maximum (100%). Check if the text inside the containers becomes crushed to 1 pixel wide. Set strict maximum padding boundaries (clamp()).

Before/After Handle: Ensure the vertical dividing line is clearly visible on both light and dark images. Add a slight drop shadow (drop-shadow-lg) to the handle so it doesn't blend into the design.

Phase 5: Error Handling & Accessibility (A11y)

Keyboard Navigation (Tab Traversal): The instructor might be using a clicker or keyboard. Press Tab. You must clearly see a focus ring (e.g., ring-2 ring-amber-500) around the active button.

Spacebar/Enter Execution: Ensure focused buttons can be triggered using the Enter or Space key, not just mouse clicks.

Graceful Degradation: If the device struggles to render 60fps animations, verify if Framer Motion reduces motion gracefully without breaking the layout of the presentation.