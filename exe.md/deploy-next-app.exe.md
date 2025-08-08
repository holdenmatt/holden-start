# Deploy to Vercel

These are instructions for Claude Code to deploy the current Next.js project to Vercel.

## Prerequisites Check

First, verify we can deploy:
- We're in a Next.js project root (package.json exists with "next" dependency)
- node_modules exists (if not, run `pnpm install`)
- Vercel CLI is installed (if not, tell user: `npm i -g vercel`)

If any prerequisite fails, exit with a clear error message.

## Deploy

Run `vercel --prod --yes`

This handles everything:
- Login if needed
- Project linking on first deploy
- Production deployment

## Success

Show the production URL when deployment completes.