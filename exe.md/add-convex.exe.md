# add-convex.exe.md

Add Convex backend and database to your Next.js project.

_This is a plain English executable - paste into Claude Code, Cursor, Codex, or Jules to run._

## Context

I want to add Convex as my backend and database. First, read the official quickstart guide:
https://docs.convex.dev/quickstart/nextjs

## Tasks

### 1. Install Convex

```bash
pnpm add convex
```

### 2. Initialize Convex

Display these instructions to the user:

```
Please complete the following manual steps:

1. Open a new terminal in your project directory
2. Run: npx convex dev
3. Follow the prompts to:
   - Log in with GitHub
   - Create a new project
   - Choose a project name
4. Keep this terminal running (it syncs your functions)
5. Tell me when you see "Watching for file changes..."
```

Wait for the user to confirm they've completed these steps before continuing.

### 3. Create the client provider

Create `components/providers/ConvexClientProvider.tsx`:

```tsx
"use client";

import { ConvexProvider, ConvexReactClient } from "convex/react";
import { ReactNode } from "react";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export function ConvexClientProvider({ children }: { children: ReactNode }) {
  return <ConvexProvider client={convex}>{children}</ConvexProvider>;
}
```

### 4. Wire up the provider

In `app/layout.tsx`, import and wrap the body content:

```tsx
import { ConvexClientProvider } from "@/components/providers/ConvexClientProvider";

// Then wrap the body content:
<body
  className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
>
  <ConvexClientProvider>{children}</ConvexClientProvider>
</body>;
```

### 5. Create a sample API function

Create `convex/tasks.ts` as an example:

```typescript
import { query } from "./_generated/server";

export const get = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("tasks").collect();
  },
});
```

### 6. Add sample data (optional)

Create `sampleData.jsonl`:

```json
{"text": "Buy groceries", "isCompleted": true}
{"text": "Go for a swim", "isCompleted": true}
{"text": "Integrate Convex", "isCompleted": false}
```

Then run:

```bash
npx convex import --table tasks sampleData.jsonl
```

### 7. Update the homepage to test

In `app/page.tsx`, first add "use client" at the top, then add imports:

```tsx
"use client";

import { useQuery } from "convex/react";
import { api } from "../convex/_generated/api";
```

Then update just the main section:

```tsx
<main className="flex flex-col items-center">
  <h1 className="mb-4 text-2xl font-bold">Tasks</h1>
  {(() => {
    const tasks = useQuery(api.tasks.get);

    if (tasks === undefined) return <p>Loading...</p>;
    if (tasks.length === 0) return <p>No tasks yet</p>;

    return (
      <ul className="space-y-2">
        {tasks.map(({ _id, text }) => (
          <li key={_id}>{text}</li>
        ))}
      </ul>
    );
  })()}
</main>
```
