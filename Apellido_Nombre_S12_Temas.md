# Justification Document: IndustrialEdge Visual System
**Project:** IndustrialEdge - Operational Monitoring Dashboard

## Visual Identity
IndustrialEdge was designed to evoke **precision, reliability, and high-performance**. Unlike consumer apps, industrial interfaces must prioritize data density and quick legibility over "vibrancy". 

### Color Palette Rationale
- **Primary Color (Sky Blue):** Chosen for its professional clarity. It stands out against both light and dark backgrounds without causing eye strain.
- **Surface Neutrals (Slate/Zinc):** Used to create a clean, non-distracting workspace. In dark mode, we use deep slate to minimize glare while maintaining depth.
- **Semantic Colors:** Emerald for "Success/Healthy", Amber for "Warning", and Red for "Critical". These follow industry standards for immediate status recognition.

## Accessibility Strategy
### Contrast Verification (WebAIM Standards)
- **Normal Text:** Passes **AA** (4.5:1 ratio) on all surfaces.
- **Large Text/Headings:** Passes **AAA** (7:1 ratio) for maximum legibility.
- **Focus States:** High-visibility rings around inputs (Sky Blue) ensure keyboard users can easily navigate.
- **Interactive Elements:** Buttons have distinct hover and active states with subtle shadows to provide tactile feedback.

## Theme Implementation
The **Theme Switcher** uses CSS Variables and a `[data-theme]` attribute on the root element. This ensures:
1. **Instant Transition:** No page reload required.
2. **Persistence:** The user's preference is saved in `localStorage`.
3. **Full Coverage:** Every component (cards, inputs, badges) adjusts its borders, shadows, and text colors dynamically.
