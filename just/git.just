# Justfile for git workflows

# Commit staged changes with AI-generated message
commit:
    #!/usr/bin/env bash
    # Check if anything is staged
    if [ -z "$(git diff --cached --stat)" ]; then
        echo "Nothing staged. Run: git add <files>"
        exit 1
    fi
    
    # Generate commit message
    diff=$(git diff --cached | head -500)
    message=$(echo "$diff" | claude -p "Generate a git commit message for these changes. Output ONLY the commit message, no explanation. Use imperative mood, be specific, under 50 chars:")
    
    echo "Committing: $message"
    git commit -m "$message"

# Create a new worktree for parallel work
wt name:
    #!/usr/bin/env bash
    project_name=$(basename {{ justfile_directory() }})
    worktree_path="../${project_name}-{{ name }}"
    
    git worktree add -b {{ name }} $worktree_path
    cd $worktree_path && pnpm install
    
    echo "✅ Worktree ready!"
    echo ""
    echo "   cd $(pwd)/$worktree_path"
    echo ""

# Remove a worktree and its branch (run from main project directory)
wt-rm name:
    #!/usr/bin/env bash
    project_name=$(basename {{ justfile_directory() }})
    git worktree remove ../${project_name}-{{ name }}
    git branch -d {{ name }} 2>/dev/null || true
    echo "🗑️  Removed worktree '${project_name}-{{ name }}'"

# Merge worktree changes and clean up (run from main project directory)
wt-merge name:
    git merge {{ name }}
    @just wt-rm {{ name }}
    @echo "✅ Merged '{{ name }}' into main"