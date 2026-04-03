# FENKIT MCP Landing (`07-ickit-mcp-land`)

Marketing site for the `fenkit-mcp` package.

## Current stack

- React 19
- Vite 8
- TypeScript
- Tailwind CSS 4

## Features

- Bilingual content (`en` / `es`)
- MCP setup command showcase for supported AI clients
- Product comparison and toolkit sections

## Scripts

| Command | Description |
| --- | --- |
| `pnpm run dev` | Start Vite dev server |
| `pnpm run build` | Type-check + production build |
| `pnpm run lint` | Run ESLint |
| `pnpm run preview` | Preview production build |

## Run locally

```bash
pnpm install
pnpm run dev
```

## Project layout

- `src/content.ts` — localized content and setup commands
- `src/components/` — landing sections
- `src/App.tsx` — page composition
