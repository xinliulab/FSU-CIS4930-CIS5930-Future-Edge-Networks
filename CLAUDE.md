# CIS4930/CIS5930 Future Edge Networks — working agreement

This repo holds the whole course package (syllabus, slides, course homepage, readings)
and is edited from **several different machines by a single author**. Only one machine
is ever active at a time, so there is never a concurrent-edit conflict — but the local
clone is almost always **stale at the start of a session**.

## Git rule — apply automatically, do not ask

Every session, without being reminded:

1. **Before touching any file**, sync down from GitHub:
   `git fetch origin && git pull --ff-only origin main`
   A `SessionStart` hook (`.claude/hooks/sync-from-remote.sh`) already runs this and
   prints a `GIT SYNC:` line. Trust that line if it appeared; otherwise run the pull yourself.
2. **State the sync result in the first lines of your reply** — how many commits were
   pulled, the old and new short SHAs, or that it was already in sync.
3. **After finishing the requested edits**, commit and push without asking:
   `git add -A && git commit -m "<what changed>" && git push origin main`
4. **Report the push** — commit SHA, one-line summary of what was committed, and that
   `origin/main` now has it.

So each reply about work in this repo ends up bracketed by two facts the author can
verify: *"pulled X from GitHub"* at the top, *"pushed Y to GitHub"* at the bottom.

### Stop and ask instead of guessing when
- The pull is not a clean fast-forward (diverged branch, or uncommitted local changes
  that predate this session — those are unfinished work from another machine).
- `git push` is rejected (someone/another machine pushed in the meantime): re-run
  `git pull --ff-only`, then push again; report both.
- The edits are clearly incomplete or broken (e.g. LaTeX no longer compiles). Say so and
  ask before pushing a broken state.

### Commit hygiene
- Real one-line messages describing the change (`Add Class 11 slides on beamforming`),
  not `1`, not `update`.
- Recompile the PDF in a slide folder after editing its `.tex`, and commit the PDF too —
  `readme.md` explains that the homepage links point straight at these PDFs.
- Push to `main` directly. No feature branches, no PRs for this repo.

## Layout

- `slides/Class_N_Topic/` — one folder per lecture: `main.tex` + numbered section `.tex`
  files, `figure/`, `agents/` (quizzes), committed `main.pdf`.
- `syllabus/` — syllabus LaTeX source and its PDF.
- `index.html` — public GitHub Pages course homepage.
- `canvas/` — Canvas homepage mirror plus `push_to_canvas.ps1`.
- `reading/` — assigned papers.
- `archive/spring2026/` — retired material from the previous offering.
- `.claude/agents/` — course-specific review agents (slides engineer, fact checker,
  education reviewer, student simulator).
