# Slide Review Agents — Class 5 (Sept 9)

Same loop as Class 3/4. The agent definitions live in `.claude/agents/` at the repository
root; this folder holds the shared state they pass between each other.

Deck-specific conventions for Class 5:

- Macros live in `slides/Class_5_Idea/idea_macros.tex`. Everything from the Class 3/4
  deck (`\qa`, `\ask`, `\takeaway`, `\source`, `\glossline`, `\expand`, TikZ styles)
  plus three lecture-specific macros: `\papercard` (one citation card per paper),
  `\watch` (official talk video link with a suggested clip), and `\brokenassumption`
  (the recurring "assumption -> broken by" pair that stitches the lecture together).
- This is an *ideas* lecture, not a *knowledge* lecture. Each paper segment must answer
  one question the student did not think was askable, in 6–10 minutes, and must NOT try
  to teach the paper's full mechanism.
- Every quantitative claim about a paper carries the paper URL in a LaTeX comment
  directly above it.
- Figures are TikZ diagrams drawn in the deck palette. Do not screenshot figures out of
  paper PDFs: a drawn diagram matches the deck and carries no license question. Official
  talk videos are linked with `\watch`, not embedded.

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

Run it one section at a time. Cap at three iterations per section. Facts first, then
teachability.

## Files here

- `quiz.md` — one comprehension question per frame. The only file `ran-student` opens.
- `quiz-answers.md` — the expected answers, for the orchestrator to score against.
  `ran-student` must never open this one.
