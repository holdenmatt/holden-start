# 🖥️ Bash commands

- pnpm lint            # Run ESLint
- pnpm type-check      # Run the TS compiler in --noEmit mode
- pnpm format          # Fix Prettier issues in place
- pnpm format:check    # Verify Prettier formatting
- pnpm test            # Run unit tests (vitest)

# 🎨 Code style

- Prefer named exports over default exports

# ✅ Quality Gates

Claude must not finish until all of these succeed:

1. `pnpm type-check`
2. `pnpm lint`
3. `pnpm format:check`
4. All unit tests (`pnpm test`) pass

If any step fails:

- Print the error summary (or the list of unformatted files).
- Apply fixes (run `pnpm format` if needed).
- Re-run only the failed step, then continue the list.
