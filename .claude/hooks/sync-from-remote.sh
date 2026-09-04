#!/bin/sh
# SessionStart hook: pull the latest course materials from GitHub.
# This repo is edited from several machines (one author, one machine at a time),
# so every session must start from the remote state. Fast-forward only: never
# rewrites or discards local work.
set -u
REPO="${CLAUDE_PROJECT_DIR:-$(pwd)}"
cd "$REPO" || exit 0

BEFORE=$(git rev-parse --short HEAD 2>/dev/null) || exit 0

if ! git fetch origin -q 2>/dev/null; then
  echo "GIT SYNC: FAILED to fetch origin (offline or no access). Local HEAD $BEFORE may be stale — tell the user before editing."
  exit 0
fi

DIRTY=$(git status --porcelain)
if [ -n "$DIRTY" ]; then
  echo "GIT SYNC: uncommitted local changes present, skipped pull. Behind origin/main by $(git rev-list --count HEAD..origin/main) commit(s). Tell the user and resolve before editing:"
  echo "$DIRTY"
  exit 0
fi

BEHIND=$(git rev-list --count HEAD..origin/main 2>/dev/null || echo 0)
AHEAD=$(git rev-list --count origin/main..HEAD 2>/dev/null || echo 0)

if [ "$AHEAD" != "0" ] && [ "$BEHIND" != "0" ]; then
  echo "GIT SYNC: branch has DIVERGED from origin/main ($AHEAD local / $BEHIND remote commits). No pull done — tell the user, do not edit until resolved."
  exit 0
fi

if [ "$BEHIND" = "0" ]; then
  if [ "$AHEAD" != "0" ]; then
    echo "GIT SYNC: already up to date with origin/main, but $AHEAD local commit(s) are UNPUSHED at $BEFORE. Push them."
  else
    echo "GIT SYNC: already in sync with origin/main at $BEFORE. Nothing to pull."
  fi
  exit 0
fi

if git pull --ff-only origin main -q 2>/dev/null; then
  AFTER=$(git rev-parse --short HEAD)
  echo "GIT SYNC: pulled $BEHIND commit(s) from origin/main, $BEFORE -> $AFTER. Files changed:"
  git diff --stat "$BEFORE" "$AFTER" | tail -25
  echo "Report this sync to the user at the start of your reply."
else
  echo "GIT SYNC: FAILED to fast-forward from origin/main. Tell the user; do not edit until resolved."
fi
