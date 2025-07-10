export function ReadmeDisplay() {
  return (
    <div className="font-mono text-sm leading-relaxed">
      <pre className="text-foreground rounded border-2 border-gray-300 bg-white px-8 py-2 dark:border-green-400 dark:bg-black dark:text-green-400">
        {`
README.md  
══════════════════════════════════════════════════════════

# holden-start

An opinionated starter for new web projects, optimized for building with tools like Claude Code or Cursor.

## stack

- Next.js 15 (App Router)
- Tailwind 4
- shadcn/ui components
- pnpm + Turbopack
- ESLint & Prettier (auto-sorted imports + Tailwind classes)

## install
\`\`\`bash
git clone https://github.com/holdenmatt/holden-start.git my-app
cd my-app
pnpm i
pnpm dev
\`\`\`

## fuzzy executables

We include a few (plain english) scripts to bootstrap a new project fast:

- \`exe.md/init.exe.md\` - Configure your new project

Just paste into a tool like Claude Code or Cursor.
`}
      </pre>
    </div>
  );
}
