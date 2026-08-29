# Slide Review Agents

The agent definitions moved to `.claude/agents/` at the repository root so Claude Code can
invoke them directly as subagents. This folder now holds only the shared state they pass
between each other.

## The agents

| Agent | Role | Writes files? |
|---|---|---|
| `ran-slides-engineer` | Senior cellular engineer turned professor. Drafts and revises the LaTeX. | Yes |
| `ran-fact-checker` | Technical, historical, financial, and security accuracy. | No |
| `ran-education-reviewer` | Comprehension, pacing, cognitive load, humor, visuals. | No |
| `ran-student` | Sophomore with no networking background. Read-only, no web access. | No |

## The loop

```
ran-slides-engineer  --writes/revises-->  section draft + quiz entries
        ^                                          |
        |                                          v
        |                                  ran-fact-checker
        |                                          |
        |                                          v
        |                                  ran-education-reviewer
        |                                          |
        |                                          v
        |                                     ran-student
        +----- CONFUSED or BORED ------------------+
                       |
                  PASS |
                       v
              compile + commit section
```

Run it **one section at a time**. A ninety-frame draft produces feedback too diffuse to act on.

**Precedence when reviewers disagree: facts first, then teachability.** A `Critical` from the
fact checker outranks a boredom complaint from the student. If the only way to make a slide fun
is to make it false, the slide stays boring.

**Cap at three iterations per section.** If the student is still confused after three passes,
the section is scoped wrong rather than worded wrong. Stop and raise it with the instructor
instead of looping again.

## Files here

- `quiz.md` — one comprehension question per frame. The only file `ran-student` opens.
- `quiz-answers.md` — the expected answers, for the orchestrator to score against.
  `ran-student` must never open this one. The two were a single file until two separate
  student passes reported accidentally seeing an answer while filtering for questions;
  splitting them removes the failure mode rather than relying on the agent to look away.

## Why the student agent is read-only

`ran-student` is declared with `tools: Read` and no web search. This is deliberate. Given search
access, it quietly repairs gaps in the slides using outside knowledge and then reports that
everything was clear — which is precisely the failure the loop exists to catch. Its ignorance is
the instrument.

For the same reason, comprehension is measured by whether it answers `quiz.md` questions
correctly from the slides alone, not by asking it whether it understood. Asked directly, a
language model will say yes.
