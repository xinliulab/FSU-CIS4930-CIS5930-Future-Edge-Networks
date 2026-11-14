# Class 23 deck: review log (2026-11-14)

`slides.html` is the Class 23 lecture (Mon 11/16), "Edge AI Agents: From Perception to Action".
The author asked for an HTML deck, a broad survey rather than depth, few paper citations, a global
picture of where agent research stands, and the agent loop at the center. The homepage's old topic
list (agent loop, latency budgets, choosing what to sense, checking actions, privacy) was not to be
followed as the structure.

Structure: five questions. (1) What is an agent: the loop, old agents vs LLM agents, the loop as
code, one traced run, the four parts around the model, "agent or not". (2) Four eras, the METR task
length trend, an autonomy ladder. (3) A map of research areas laid on the loop, a second map of the
worlds agents act in, then one slide per area (perception, reasoning, memory, tools, learning,
evaluation, multi-agent, bodies). (4) At the edge: time (latency budget slider, nested loops),
sensing, checks, privacy, then where each part should run. (5) What is open: p^n slider, open
problems, take-homes, exit question. Running example: a phone agent that books dinner for four.

Reviewers: `ran-student` reads headless-Chrome screenshots taken from `slides.html?all#N` plus the
extracted notes, with no other lecture as memory, and answers `quiz.md` (answers in
`quiz-answers.md`, which it never sees). `ran-fact-checker` checks every claim against sources.

| Round | Reviewer | Verdict | Main findings -> fixes |
|---|---|---|---|
| 1 | student | 15/15 quiz, CONFUSED (+ BORED on slides 22-24) | "The edge" meant a place on slide 2 and a kind of world on slide 17 -> slide 17 now shades the worlds next to you and says their agents run at the edge. Slide 26 promised Time/Privacy/Connection/Cost but the deck covered time, sensing, checks, privacy -> slide 26 is now that roadmap and the slide titles carry the labels. Code ignored the user's "no" -> `user_says_yes` plus `continue`. Coin-flip arithmetic in notes (0.95^20 is 36%, not 50%) -> 14 steps. Undefined terms (token, latency, policy, Hz, operators, 6G) -> defined in place. Privacy fix did not cut a visible circle -> split-the-agent card. A "Discuss" question on each research-area slide. Latency chart rescales and shows the 5 ms robot step on the same scale. |
| 2 | student | 15/15, CONFUSED | Why writing 150 tokens is slower than reading 3,000 was never said -> one line on the latency slide (reading is parallel, writing is one token at a time). Why a robot's big model runs 7-9 times a second while the phone agent needs 3 s per step -> it runs on the robot and writes no sentences, only a short internal summary. Memory vs cache wording, tokens for images, MCP's foundation, Era 4 trimmed, orphan words. |
| 3 | student | 15/15, BORED (not confused) | Boredom is the eight research-area slides in one template; kept, because the author asked for breadth (the notes mark some discussion prompts as optional). Taken: an "edge server" button on the latency slider (cloud 46 s, edge 45 s, phone 110 s for the default task) with notes saying the edge buys little time for the phone task and pays off where steps must take milliseconds. One-way vs round-trip light speed, nested-loop rates aligned, legend fixes. Loop stopped: quiz passes with no CONFUSED verdict. |
| 1 | fact-checker | 6 must-fix, 17 should-fix | DQN: one method, one network per game. Android phone agent: previewed Feb 2026, widened May 2026. On-device alone does not stop prompt injection. METR title "How long can an agent work on its own?" invites the misreading METR's FAQ warns about -> "How long a task can an agent finish?". GPT-4 point 3.5 min under TH1.1 -> "about 4 minutes". OSWorld 2026 scores are OSWorld-Verified, vendor-reported. Roomba, AutoGPT, era-2 takeaway, SAE ladder caveat, 1X NEO pre-orders, Moltbook, Apple text model, Gartner reasons. Source links added on the era, perception, evaluation, latency, privacy, and open-problems slides. |
