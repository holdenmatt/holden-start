# init.exe.md

Configure a new project after cloning the [holden-start](https://github.com/holdenmatt/holden-start) template.

(_This is a fuzzy executable - paste into a tool like Claude Code or Cursor to run it._)

## Context

I've created a new project from the template and need to set it up.

## Tasks

### 1. Determine project details

- Check package.json for the name field
- If name is still "holden-start", ask: "What should this project be called?"
- For description, suggest something simple based on the name (avoid buzzwords like "AI-powered", "revolutionary", etc.)
- Update package.json with the final name and description

### 2. Update metadata in app/layout.tsx

- Replace `title: "holden-start"` with the project name
- Replace the description with the simple description from package.json

### 3. Update homepage (app/page.tsx)

- Replace the quote with a simple heading using the project name
- Add a one-line description if it makes sense
