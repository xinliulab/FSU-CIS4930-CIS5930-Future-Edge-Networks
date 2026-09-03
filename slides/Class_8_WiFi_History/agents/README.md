# Slide Review Agents — Class 8 (Wi-Fi History)

The agent definitions live in `.claude/agents/` at the repository root. This folder holds
only the shared state they pass between each other. See
`slides/Class_5_ISAC/agents/README.md` for the full description of the loop:

```
ran-slides-engineer -> ran-fact-checker -> ran-education-reviewer -> ran-student
```

Run it one section at a time, facts outrank teachability, cap at three iterations per
section.

## Files here

- `quiz.md` — one comprehension question per frame. The only file `ran-student` opens.
- `quiz-answers.md` — the expected answers, for the orchestrator to score against.
  `ran-student` must never open this one.
