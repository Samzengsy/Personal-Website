# Personal Website Visual System

## Direction

- Hallmark route: tuned custom theme
- Macrostructure: Long Document with an N3 persistent side rail and Ft2 inline footer
- Genre: editorial × technical
- Vibe: bright cobalt, precise, editorial, research-led
- Goal: keep the existing information architecture, routes, content, assets, and datasets while improving hierarchy, legibility, motion, component craft, and data presentation

## Theme

- Paper: cool, blue-tinted near-white (`oklch(97.5% 0.012 252)`)
- Ink: deep navy (`oklch(19% 0.038 252)`)
- Accent: cobalt blue (`oklch(57% 0.19 255)`), reserved for active states, important links, and data signals
- Display: Fraunces, used for names and primary section headings
- Body: Sora, used for navigation, prose, labels, and data
- Theme axes: light / roman-serif / cool

All implementation values are exported from `tokens.css`. Components consume semantic classes from `index.css`; data and copy remain in their existing sources.

## Layout and hierarchy

- Desktop preserves the fixed left profile/navigation rail and long scrolling document.
- Mobile preserves the compact identity header and horizontal section navigation.
- Sections vary by editorial treatment—rules, quiet surfaces, timelines, metric panels—rather than repeating one generic card.
- Main reading measure stays within 68 characters; dense evidence and data can use the wider content column.

## Components

- Navigation: cobalt active rail, no pill-heavy desktop treatment, clear keyboard focus.
- Buttons: one filled primary action and one bordered secondary action.
- Tags: compact square-ended labels with restrained tinted surfaces.
- Cards: borders and spacing establish hierarchy; shadows are reserved for the primary hero surface.
- Metrics: unchanged numeric values, represented by labeled bars, comparison rows, and restrained signal colour.
- Timeline: consistent date rail and evidence-first content grouping.

## Motion

- One orchestrated entrance primitive for first paint.
- Short colour/position feedback for interactive controls.
- No looping decoration; `prefers-reduced-motion` disables non-essential motion.

## Responsive and accessibility

- Target widths: 320, 375, 414, 768, 1024, and 1440 px.
- Visible `:focus-visible`, semantic landmarks, existing alt text, and native links/buttons are preserved.
- No horizontal page overflow; the mobile navigation remains intentionally horizontally scrollable.
