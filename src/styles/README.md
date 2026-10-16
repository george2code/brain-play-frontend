# Tailwind CSS 4

`app/globals.css` imports Tailwind, shadcn and shared styles once.

- `tokens.css`: theme colours, type, radii and semantic game colours via `@theme inline`.
- `utilities.css`: repeated visual patterns only. Responsive layout stays in TSX.
- `components/ui`: official shadcn Base UI / Nova primitives. Base UI uses `render`, not Radix `asChild`.
- The MVP has an intentional light theme. Add an alternate token palette before exposing a theme toggle.
- `cn()` merges atomic classes, not composite utilities. Use atomic overrides on shadcn controls.
- SVG game previews consume the same semantic CSS variables.
