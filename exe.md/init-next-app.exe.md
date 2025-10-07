# Initialize a Next.js app

These are instructions for a coding agent to setup a Next.js app after cloning from my starter project:
https://github.com/holdenmatt/holden-start

## Steps

1. **Get project name from user**
   - Ask for the project name if not provided
   - Validate it's a valid directory name (lowercase, no spaces, etc.)
   - Check if a directory with that name already exists

2. **Update project metadata**
   - Update the `name` field in package.json to match the project name
   - If there's a README.md, update the title to match the project
   - Update the title in the `src/app/layout.tsx` metadata

3. **Install dependencies**
   - Run `pnpm install`
   - Make sure it completes successfully

4. **Final instructions for the user**
   - Tell them the project was created successfully
   - Show them how to start developing:
     ```
     cd <project_name>
     pnpm dev
     ```

## Error Handling

- If pnpm isn't installed, tell the user to install it first
- If any step fails, clean up any partially created directories

## Success Criteria

The script succeeds when:
- A new directory exists with the project name
- Dependencies are installed
- The dev server can be started with `pnpm dev`