# CLAUDE.md

## 📚 Onboarding

At the start of each session, read:
1. Any `**/README.md` docs across the project
2. Any `**/README.*.md` docs across the project

## ✅ Quality Gates

When writing code, Claude must not finish until all of these succeed:

1. `pnpm type-check`
2. `pnpm lint`
3. `pnpm format:check`
4. All unit tests (`pnpm test:run`) pass

If any step fails:

- Print the error summary (or the list of unformatted files).
- Apply fixes (run `pnpm format` if needed).
- Re-run only the failed step, then continue the list.

Always run `pnpm format:check` first, and only run `pnpm format` if needed to fix errors.