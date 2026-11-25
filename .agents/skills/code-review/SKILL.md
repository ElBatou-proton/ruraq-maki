---
name: code-review
description: Reviews changes from a feature branch against project guidelines, runs linting/tests, and merges into the target branch once all checks pass. Use when the user wants to review and merge their development branch.
---

# Code Review and Merge Skill

## Activation

**This skill can be activated automatically when the user asks to review, test, and merge branches, or when invoking the `/code-review` command.**

Example trigger phrases:
- "review my branch"
- "merge feature into main"
- "run tests and merge"
- "use the code-review skill"
- "/code-review"

---

## Purpose

This skill provides a structured workflow to review code changes on a feature branch, verify code quality against local standards (including any `AGENTS.md` or configuration files), run project-level linters and test suites, and merge the branch into the target branch (such as `main`) upon successful completion of all checks.

## Process Flow

### 1. Analyze the Diff and Changes

Before performing any reviews or merges, inspect the changes:

```bash
# Verify the branches exist and show their difference status
git log --oneline [target-branch]..[feature-branch]

# Inspect the full diff of changes
git diff [target-branch]...[feature-branch]
```

Review the diff to identify:
- Logical errors or bugs.
- Security vulnerabilities or anti-patterns.
- Code readability and maintainability.
- Potential performance improvements.

### 2. Check Coding Standards and Guidelines

Look for project-specific instructions and style guides:
- Check for `AGENTS.md` (or `.github/workflows/`, `CONTRIBUTING.md`, etc.).
- Inspect general linter configs: `.eslintrc.json`, `tsconfig.json`, `.prettierrc`, `ruff.toml`, `pyproject.toml`, etc.
- Verify that the code style in the feature branch matches these guidelines.

### 3. Run Linters and Tests

Locate and execute the testing and linting suites configured in the codebase:

```bash
# Node/npm projects
npm run lint
npm test

# Python projects
pytest
flake8

# Rust projects
cargo clippy
cargo test

# Go projects
go test ./...
```

#### Handling Failures:
- **If checks fail and are easy to fix** (e.g. formatting, simple syntax issues, missing imports, minor linter warnings):
  - Make the necessary edits using precise edit tools.
  - Verify that the checks now pass.
  - Commit the fixes to the feature branch.
- **If checks fail and are complex/require design decisions**:
  - Stop the workflow.
  - Present the linter or test failures clearly to the user.
  - **Do NOT proceed to merge.**

### 4. Merge Branch

Once (and only if) all tests and linters pass successfully, execute the merge:

```bash
# 1. Checkout target branch
git checkout [target-branch]

# 2. Merge the feature branch
git merge [feature-branch]
```

- **Conflict Resolution**: If merge conflicts arise, analyze the conflicting files. If they are straightforward to resolve, resolve them, commit, and proceed. If they are highly complex, present the conflicts and ask the user for guidance.
- **Reporting**: Report the final status back to the user, highlighting:
  - A summary of code changes reviewed.
  - Test/linting run outcome.
  - A confirmation of a successful merge.

---

## Guidelines for the Model

- **No Shortcuts**: Do not skip running tests or linters unless the project has absolutely none configured.
- **Stash Cleanliness**: If you make any temporary changes or if there are uncommitted changes, preserve repository health.
- **Explain Actions**: Keep the user informed at every step of the review and merge process.
