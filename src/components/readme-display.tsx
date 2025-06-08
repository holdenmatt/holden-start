export function ReadmeDisplay() {
  return (
    <div className="font-mono text-sm leading-relaxed">
      <pre className="text-foreground rounded border-2 border-gray-300 bg-white px-8 py-2 dark:border-green-400 dark:bg-black dark:text-green-400">
        {`
README.md  
══════════════════════════════════════════════════════════

An opinionated starter for new web projects in 2025.
Works well with LLMs like Claude Code and Cursor.

📚 Core stack:
• Next.js 15 (App Router)
• Tailwind 4
• shadcn/ui components
• Mode toggle (next-themes)

🚀 DevX:
• pnpm + turbopack
• ESLint + Prettier
• Autosort imports and tailwind classes

📦 Get Started:
$ git clone https://github.com/holdenmatt/holdenstack
$ pnpm i
$ pnpm dev

🛠️  Scripts:
$ pnpm add-ui dialog    # Add shadcn components
$ pnpm bump             # Update dependencies

`}
      </pre>
    </div>
  );
}
