---
name: plan
description: Creates a structured plan for approaching a task. Breaks down the prompt into steps and outputs a markdown todo list. Only activate when explicitly invoked by the user.
---

# Plan

## Activation

**This skill requires explicit invocation.** Only use this skill when the user specifically asks to use it with phrases like:
- "use plan"
- "create a plan"
- "plan this out"
- "/plan"
- "use the plan skill"

Do NOT auto-activate this skill based on task complexity.

---

## Purpose

This skill helps you think through a task systematically before diving into implementation. You will analyze the prompt, consider the approach, and produce a clear markdown plan as a todo list.

## Planning Process

### 1. Understand the Task
- Read the user's prompt carefully
- Identify the core goal and desired outcome
- Note any constraints, requirements, or preferences mentioned

### 2. Analyze the Context
- Consider what files, systems, or code are involved
- Identify dependencies and prerequisites
- Think about potential challenges or edge cases

### 3. Break Down into Steps
- Decompose the task into logical, actionable steps
- Order steps by dependency (what must come first)
- Keep each step focused and achievable
- Consider what can be done in parallel vs sequentially

### 4. Create the Plan File
Write a markdown file named `PLAN.md` in the current working directory with this structure:

```markdown
# Plan: [Brief Task Title]

## Goal
[One or two sentences describing what we're trying to achieve]

## Context
[Brief notes on relevant files, systems, or considerations]

## Tasks

- [ ] Step 1: [Description]
- [ ] Step 2: [Description]
- [ ] Step 3: [Description]
...

## Notes
[Any assumptions, risks, or open questions]
```

### 5. Present the Plan
After creating the file, briefly summarize the plan to the user and ask if they want to:
- Proceed with execution
- Modify the plan
- Add more detail to specific steps

## Guidelines

- **Be specific** — Each todo item should be actionable, not vague
- **Be realistic** — Break large steps into smaller ones if needed
- **Be ordered** — List steps in the order they should be executed
- **Be concise** — Keep descriptions clear but not overly verbose
- **Include file paths** — When steps involve specific files, mention them
- **Flag uncertainties** — Note any assumptions or questions in the Notes section

## Example Output

```markdown
# Plan: Add User Authentication to API

## Goal
Implement JWT-based authentication for the REST API with login, logout, and protected routes.

## Context
- Existing Express app in `src/server.ts`
- User model already exists in `src/models/user.ts`
- No current auth middleware

## Tasks

- [ ] Install dependencies: `jsonwebtoken`, `bcrypt`, `@types/*`
- [ ] Create auth middleware in `src/middleware/auth.ts`
- [ ] Add password hashing to User model
- [ ] Create `POST /auth/login` endpoint
- [ ] Create `POST /auth/logout` endpoint  
- [ ] Create `POST /auth/register` endpoint
- [ ] Add auth middleware to protected routes
- [ ] Add token refresh mechanism
- [ ] Write tests for auth flows
- [ ] Update API documentation

## Notes
- Assuming JWT tokens stored client-side (not server sessions)
- Need to confirm token expiry duration with user
- Should discuss password requirements/validation rules
```
