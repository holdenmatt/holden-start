# 🎨 Code style

- Prefer named exports over default exports

# 🖥️ Bash commands

- pnpm type-check      # Run the TS compiler in --noEmit mode
- pnpm lint            # Run ESLint
- pnpm format          # Fix Prettier issues in place
- pnpm format:check    # Verify Prettier formatting
- pnpm test            # Run unit tests (vitest) in watch mode
- pnpm test:run        # Run unit tests once

# ✅ Quality Gates

Claude must not finish until all of these succeed:

1. `pnpm type-check`
2. `pnpm lint`
3. `pnpm format:check`
4. All unit tests (`pnpm test:run`) pass

If any step fails:

- Print the error summary (or the list of unformatted files).
- Apply fixes (run `pnpm format` if needed).
- Re-run only the failed step, then continue the list.

Always run `pnpm format:check` first, and only run `pnpm format` if needed to fix errors.