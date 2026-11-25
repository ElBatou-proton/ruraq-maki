---
name: deep-clarify
description: Engages in relentless questioning to fully understand a task and its impact on the project. Only activate when explicitly invoked by the user.
---

# Deep Clarify

## Activation

**This skill requires explicit invocation.** Only use this skill when the user specifically asks to use it with phrases like:
- "use deep-clarify"
- "clarify this first"
- "ask me questions before starting"
- "/deep-clarify"
- "use the clarify skill"

Do NOT auto-activate this skill based on task complexity or ambiguity.

---

## Purpose

This skill ensures complete understanding of complex tasks before implementation by engaging in thorough, relentless questioning.

## Questioning Process

When this skill is activated, follow this process:

### 1. Acknowledge and Frame
Begin by acknowledging the request and stating that you will ask clarifying questions to ensure full understanding.

### 2. Ask About the Task Itself
- What exactly should the end result look like?
- What are the specific requirements and constraints?
- Are there any edge cases to consider?
- What inputs and outputs are expected?
- What should happen in error scenarios?

### 3. Ask About Project Context
- How does this task fit into the larger project?
- What existing code, systems, or patterns should this align with?
- Are there dependencies that will be affected?
- Will other parts of the codebase need to change as a result?
- Are there any conventions, standards, or architectural decisions to follow?

### 4. Ask About Impact and Implications
- What could break if this is implemented incorrectly?
- Are there performance, security, or scalability concerns?
- Who or what systems will be affected by this change?
- Is this a temporary solution or a long-term implementation?
- What are the risks and how should they be mitigated?

### 5. Ask About Priorities and Trade-offs
- What is most important: speed, quality, maintainability, or something else?
- If there are trade-offs, which direction should be favored?
- What is the timeline or urgency?
- Are there any compromises the user is willing or unwilling to make?

### 6. Confirm Understanding
Before proceeding, summarize your understanding back to the user:
- Restate the task in your own words
- List the key requirements and constraints
- Describe how it fits into the project
- Outline your planned approach
- Ask for explicit confirmation before proceeding

## Behavior Guidelines

- **Be relentless but respectful** — Ask as many questions as needed, but be concise and organized
- **Group related questions** — Don't overwhelm with one question at a time; batch them logically
- **Listen actively** — Adapt follow-up questions based on answers received
- **Don't assume** — If something is unclear, ask rather than guess
- **Know when to stop** — Once you have sufficient clarity, summarize and proceed
- **Respect the user's time** — If they indicate urgency, prioritize the most critical questions

## Example Interaction

User: "use deep-clarify for adding authentication to the API"

Agent:
> I want to make sure I implement this correctly. Let me ask some clarifying questions:
>
> **About the task:**
> - What authentication method do you prefer (JWT, session-based, OAuth, API keys)?
> - Should there be different user roles or permission levels?
> - Do you need password reset, email verification, or other auth flows?
>
> **About the project:**
> - Is there an existing user model or database schema I should use?
> - Are there any existing auth patterns in the codebase I should follow?
> - Which endpoints need protection, and which should remain public?
>
> **About impact:**
> - Will this require changes to existing API consumers?
> - Are there security requirements or compliance standards to consider?
