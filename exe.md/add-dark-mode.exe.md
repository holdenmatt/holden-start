# add-dark-mode.exe.md

Add dark mode support to your project using next-themes and shadcn/ui.

(_This is a plain English executable - paste into Claude Code, Cursor, Codex, or Jules to run._)

## Tasks

### 1. Install

```bash
pnpm add next-themes
```

### 2. Create theme provider

Create `components/providers/theme-provider.tsx`:

```tsx
"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import * as React from "react";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
```

### 3. Update layout

In `app/layout.tsx`, add the import:

```tsx
import { ThemeProvider } from "@/components/providers/theme-provider";
```

Then wrap the body content:

```tsx
<body
  className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
>
  <ThemeProvider
    attribute="class"
    defaultTheme="system"
    enableSystem
    disableTransitionOnChange
  >
    {children}
  </ThemeProvider>
</body>
```

Also add `suppressHydrationWarning` to the html tag:

```tsx
<html lang="en" suppressHydrationWarning>
```

### 4. Create dark mode toggle

Create `components/atoms/mode-toggle.tsx`:

```tsx
"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function DarkModeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className={className}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle dark mode</span>
    </Button>
  );
}
```

### 5. Add toggle to header

In `app/page.tsx`, import and add the toggle:

```tsx
import { DarkModeToggle } from "@/components/atoms/mode-toggle";

// Then in the header:
<header className="container flex h-16 items-center justify-center">
  <DarkModeToggle className="ml-auto" />
</header>;
```

The `ml-auto` pushes the toggle to the right side of the header.
