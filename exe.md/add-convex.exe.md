# add-convex.exe.md

Add Convex backend and database to your Next.js project.

## Context

I want to add Convex as my backend and database. First, read the official quickstart guide:
https://docs.convex.dev/quickstart/nextjs

## Tasks

### 1. Set working directory as the project root
```bash
cd [path-to-app]
```

### 2. Install Convex

```bash
pnpm add convex
```

### 3. Initialize Convex

Display these instructions to the user:

```
Please complete the following manual steps:

1. Open a new terminal in your project directory
2. Run: npx convex dev (and follow the prompts to create a new project)
3. Keep this terminal running (it syncs your functions)
4. Tell me when you see "Convex functions ready!"
```

Wait for the user to confirm they've completed these steps before continuing.

### 4. Create the client provider

Create `src/components/providers/ConvexClientProvider.tsx`:

```tsx
"use client";

import { ConvexProvider, ConvexReactClient } from "convex/react";
import { ReactNode } from "react";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export function ConvexClientProvider({ children }: { children: ReactNode }) {
  return <ConvexProvider client={convex}>{children}</ConvexProvider>;
}
```

### 5. Wire up the provider

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

### 6. Create a sample API function

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

After importing, delete the sampleData.jsonl file.

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

### 8. Update Vercel build command

1. Navigate to the NextJS project root:
```bash
cd [path-to-app]
```

2. Check if this project is deployed to Vercel by looking for .vercel/project.json
   - If not found, skip (project isn't deployed to Vercel yet)

3. If it's a Vercel project, check if vercel.json exists in the project root

4. If vercel.json exists:
   - Parse the existing JSON
   - Add or update the "buildCommand" field to: "npx convex deploy --cmd 'npm run build'"
   - Preserve all other existing configuration

5. If vercel.json doesn't exist:
   - Create vercel.json with:
   {
     "buildCommand": "npx convex deploy --cmd 'npm run build'"
   }