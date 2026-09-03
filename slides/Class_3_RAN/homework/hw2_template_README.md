# HW2: XG Architecture Call Flow

**CIS4930 / CIS5930 Future Edge Networks — after Class 3/4, XG Architecture Basics**

**Due: Wednesday, September 16, 11:59 p.m. ET.** You have two weeks.

100 points + 10 bonus. Submit by pushing to the default branch of this repo. Your page
must open by double-clicking `index.html` — one self-contained file, no build step, no
server needed.

## What you will build

One HTML page covering **all five generations — 1G, 2G, 3G, 4G, and 5G**. It does two
things:

1. **Draws the call flow** of each generation: every message, in order, between the
   phone, the base station, and the core network — from power-on to the first byte of
   user data reaching the Internet (for 1G–3G, also voice reaching the called party).
2. **Explains why the architecture changed** between one generation and the next, with
   an everyday-life analogy that makes it easy to remember.

You are encouraged to use AI for all of it. AI will draw five correct-looking diagrams in
one prompt — that is why the drawings are only 40 of the 100 points. The other 60 test
whether you understand what you drew.

And here is the thing you can only see once you have all five in front of you: **the same
architectural cut happens over and over.** The base station splits into a radio part and
a control part. The switch splits into one box that decides and one that carries. The
packet core splits the same way. Then the control plane itself splits. Four times, the
same seam: **what decides, separated from what carries.** A page that shows five diagrams
and never notices that pattern has missed the assignment.

## Part 1 — Draw all five call flows correctly (40 pts)

8 points per generation. Requirements for each:

- One lifeline per box, with the correct node names **for that generation** — no MME in
  3G, no RNC in 5G, no SGSN in 1G.
- Every arrow labelled with the message name, in the right order. Authentication comes
  before the data path is set up, not after.
- **Control plane and user plane visually distinct on every arrow**, with a legend.
- The generations must be switchable or otherwise navigable — five diagrams dumped in a
  row with no way to compare them will lose Part 3 points.

The steps must live in your code as **one visible data structure** — an array per
generation, with objects carrying `from`, `to`, `plane`, `message` — and the page must
render the diagrams from that data. We grade the data as much as the pixels.

Point deductions (per occurrence):

- Unlabelled arrow: −2
- Node name from the wrong generation: −3
- A control-plane box (BSC as a bearer, MME, AMF) shown carrying user packets to the
  Internet: −8. This is the single most important idea in the lecture.
- 1G shown with a data path, or 2G/3G voice shown as packets: −5

## Part 2 — Explain the four transitions (40 pts)

10 points each. For **every** one of these four jumps, your page must answer four
questions:

- **1G → 2G**
- **2G → 3G**
- **3G → 4G**
- **4G → 5G**

The four questions (2.5 pts each):

1. **What was wrong, or what was impossible, in the older generation?** Be specific and
   concrete — an attack that worked, a cost that did not scale, a service that could not
   exist.
2. **What changed in the architecture?** Name the boxes. Which appeared, which split into
   two, which disappeared entirely, and which interface is new.
3. **An everyday-life analogy** — a restaurant, an airport, a hospital, a courthouse,
   anything — that maps element-for-element. State the mapping explicitly: this character
   = this box, this event = this message. A character with no network counterpart is
   decoration and earns nothing.
4. **Where your analogy breaks.** Every analogy misleads somewhere. Say where yours does,
   and what the network really does at that point. Knowing exactly where your comparison
   fails is the strongest evidence that you understand the real mechanism.

One rule for the analogies: **the character who gives orders must never personally carry
the goods, and the carrier must never decide.** If your waiter cooks, your analogy is
telling the 1G story no matter which transition you attached it to.

Note on clichés: "showing ID at a club," "highway lanes," "mailing a letter" are the first
analogies every AI produces. You may use one, but it starts at −3 and must still map
element-for-element. An analogy we have never seen before, that holds up, is what full
marks look like.

## Part 3 — One page, one argument (10 pts)

- **Linked (5 pts):** clicking or hovering an arrow shows its explanation, or clicking an
  explanation highlights the arrows it is about. The diagrams and the writing must be one
  system, not two stacked sections.
- **The pattern, made visible (5 pts):** somewhere on the page, show the recurring
  decide-versus-carry split across generations in a single view — a comparison table, an
  overlay, a timeline, your choice. A reader should be able to see the repetition without
  being told about it in a paragraph.

## Part 4 — Process and AI disclosure (10 pts)

- **Your commit history (4 pts):** at least **three commits spread across the two weeks**,
  not one commit the night before. We look at `git log`. Build this in passes.
- **Disclosure (6 pts):** at the bottom of the page — which tools you used and for what,
  **two prompts you actually sent, pasted verbatim**, and **at least one thing the AI got
  wrong** or stated vaguely that you had to fix, plus how you knew it was wrong.

If your honest answer is "the AI made no mistakes," go verify two of its claims: which box
allocates your IP address in each generation, and which box makes the handover decision.
That is where it usually breaks.

## Bonus — Kill switch (+10)

Make every core-network box clickable. Clicking it "crashes" that box: every arrow that
would now fail turns grey; everything that still works stays lit. Get the dependencies
right — crashing the MME during an ongoing session must **not** grey the user-plane
arrows. If it does, the bonus becomes a deduction on Part 1, because your page just
contradicted its own legend.

## In-class spot check

In the class after the deadline, a few students will be asked to put their own page on
screen for three minutes and answer: *point at this arrow — who sent it, which plane is
it on, and if I delete it, what does the user actually see?* This counts toward
participation, and it is why your explanations matter more than your artwork.

## Suggested two-week plan

You do not have to follow this, but do not start on day thirteen.

- **Week 1:** get all five diagrams drawn and correct, rendering from your data structure.
  Commit. This is the part AI is good at, so it should not take the whole week.
- **Week 2:** the four transitions. This is where the points are and where AI will happily
  hand you something confident and wrong. Then linkage, the pattern view, and the bonus if
  you want it.

## Grading summary

| part | pts | what earns them |
|---|---|---|
| 1 — Five call flows | 40 | 8 per generation: right boxes, right order, planes marked, data-driven |
| 2 — Four transitions | 40 | 10 per transition: what was broken / what changed / a true analogy / where it breaks |
| 3 — One page, one argument | 10 | interactive linkage (5) + the recurring pattern made visible (5) |
| 4 — Process and AI disclosure | 10 | three commits across two weeks (4) + verbatim prompts and a caught mistake (6) |
| Bonus — Kill switch | +10 | truthful dependencies when a box crashes |
