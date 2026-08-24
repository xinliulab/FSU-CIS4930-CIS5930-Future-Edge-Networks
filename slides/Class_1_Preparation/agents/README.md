# Class 1 Preparation Slide Agents

This folder defines three reusable agents for developing `Class_1_Preparation` slides.

## Agents

- `slides-writer.md`: writes and revises slides as a young FSU professor teaching Future Edge Networks.
- `technical-history-reviewer.md`: checks technical, historical, and factual accuracy.
- `education-reviewer.md`: checks pedagogy, student accessibility, curiosity, humor, and classroom flow.

## Recommended Workflow

1. Ask `slides-writer` to draft or revise a slide section.
2. Ask `technical-history-reviewer` to flag factual, historical, or technical issues.
3. Ask `education-reviewer` to make the material clearer, funnier, and more engaging for students.
4. Send the combined feedback back to `slides-writer` for a final revision.

## Local Context

The main LaTeX entry point is:

```text
../main.tex
```

The XG history section is:

```text
../3_xg.tex
```

Figures live in:

```text
../figure/
```

