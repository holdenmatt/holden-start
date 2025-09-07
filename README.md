# holden-start

An opinionated starter for new web projects, optimized for building with tools like Claude Code or Cursor.

## Stack

- Next.js 15 (App Router)
- Tailwind 4
- shadcn/ui components
- pnpm + Turbopack
- ESLint/Prettier for formatting/linting (and auto-sorted imports + Tailwind classes)

## Install

First, install [just](https://github.com/casey/just#installation) (command runner).

```bash
git clone https://github.com/holdenmatt/holden-start.git my-app
cd my-app
pnpm i
pnpm dev
```