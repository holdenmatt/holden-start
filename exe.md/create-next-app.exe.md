# Create Next.js App from Starter Template

These are instructions for Claude Code to create a new Next.js project from the holden-start template.

## Steps

1. **Get project name from user**
   - Ask for the project name if not provided
   - Validate it's a valid directory name (lowercase, no spaces, etc.)
   - Check if a directory with that name already exists

2. **Clone the starter template**
   ```bash
   git clone https://github.com/holdenmatt/holden-start.git <project_name>
   ```

3. **Clean up the cloned project**
   - Remove the `.git` directory to start fresh
   - Remove any existing pnpm-lock.yaml (to ensure clean install)

4. **Update project metadata**
   - Update the `name` field in package.json to match the project name
   - If there's a README.md, update the title to match the project
   - Update the title in the `src/app/layout.tsx` metadata

5. **Install dependencies**
   - Run `pnpm install`
   - Make sure it completes successfully

6. **Initialize new git repository**
   - Run `git init` to start a fresh repo
   - Add all files: `git add .`
   - Create initial commit: `git commit -m "Initial commit from holden-start template"`

7. **Final instructions for the user**
   - Tell them the project was created successfully
   - Show them how to start developing:
     ```
     cd <project_name>
     pnpm dev
     ```

## Error Handling

- If the git clone fails, check internet connection and repo availability
- If pnpm isn't installed, tell the user to install it first
- If any step fails, clean up any partially created directories

## Success Criteria

The script succeeds when:
- A new directory exists with the project name
- Dependencies are installed
- The dev server can be started with `pnpm dev`