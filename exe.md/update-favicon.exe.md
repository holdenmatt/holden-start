# update-favicon.exe.md

Replace the default Next.js favicon with a custom emoji-based design.

*This is a plain English executable - paste into Claude Code, Cursor, Codex, or Jules to run.*

## Context
I want to replace the default Vercel favicon with something unique to my project.

## Tasks

### 1. Determine favicon design
Look at the project name and description in package.json to understand the project.

Ask the user:
```
Creating a favicon for "[project name]"...

Any preferences for emoji or colors? (type 'no' to let me choose):
```

If user provides input, use it. Otherwise, choose an emoji and gradient colors that fit the project.
Avoid cliche choices (🚀💡🔥⚡ for emojis, blue/indigo for colors).

### 2. Generate favicon SVG
Create `app/icon.svg` with this template:

```svg
<svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:[COLOR1]" />
      <stop offset="100%" style="stop-color:[COLOR2]" />
    </linearGradient>
  </defs>
  <rect width="32" height="32" rx="6" fill="url(#gradient)" />
  <text x="50%" y="50%" text-anchor="middle" dominant-baseline="central" font-size="20">[EMOJI]</text>
</svg>
```

Replace:
- `[COLOR1]` and `[COLOR2]` with Tailwind colors (e.g., #10b981 for emerald-500)
- `[EMOJI]` with the chosen emoji

### 3. Create the favicon
Save the SVG as `app/icon.svg`.

### 4. Clean up old favicon
Delete the default favicon:
- `app/favicon.ico`
