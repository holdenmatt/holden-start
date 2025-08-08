mod git 'just/git.just'

# List available commands
default:
    @just --list

# Auto-fix all formatting and linting issues
format:
    pnpm prettier --write .          # Fix formatting
    pnpm lint --fix                  # Fix linting

# Verify code quality and tests pass
check:
    pnpm tsc --pretty --noEmit       # Check types
    pnpm prettier --check .          # Check formatting
    pnpm lint                        # Check linting
    pnpm vitest run                  # Run tests

# Update dependencies interactively
bump:
    pnpm dlx npm-check-updates --interactive

# Add a new shadcn/ui component
add-ui *args:
    pnpm dlx shadcn@latest add {{ args }}

# === Standard Next.js commands ===

# Install dependencies
install:
    pnpm install

# Start development server with Turbopack
dev:
    pnpm dev

# Build for production
build:
    pnpm build

# Run tests in watch mode
test:
    pnpm vitest

# Run all tests once  
test-run:
    pnpm vitest run