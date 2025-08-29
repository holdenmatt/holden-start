# List available commands
default:
    @just --list

# Auto-fix all formatting and linting issues (Ultracite/Biome)
format:
    pnpm format                      # Format code and apply safe fixes

# Verify code quality and tests pass
check:
    pnpm tsc --pretty --noEmit       # Check types
    pnpm lint                        # Lint (no fixes)
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

# Run all tests once  
test:
    pnpm vitest run

# Run tests in watch mode
test-watch:
    pnpm vitest