# Class 23 quiz: expected answers (neither the teacher nor the student agent sees this file)

1. A chatbot gives one answer and the human closes the loop. An agent acts on the world itself
   (taps, types, calls tools, moves), looks at the result, and decides again until the goal is met.
2. Perceive (screenshot of the app), think (the model picks the next step, for example "open Maps"),
   act (tap, type, call an app), the world responds (the page loads, "7:00 is full"), then perceive
   again. Memory holds the goal and history; a check sits before risky actions (asks about 7:15,
   treats Confirm as risky).
3. It has a goal (a set temperature), it acts (heater on/off), and it senses the result and decides
   again. What is new: the "think" box is a general model that can read any world described in words
   or pixels, instead of a rule built for one world.
4. `step = model(history + [obs], tools)`. Everything else is the harness: the program that feeds
   the model, runs its actions, checks risky ones, and keeps memory.
5. 1960s-2010s built for one world (Shakey, robot vacuums, AlphaGo); 2022-2023 a language model
   becomes the brain (reason then act, function calling, viral loops that drifted); 2024-2025 agents
   use computers (coding agents, computer use, deep research, reasoning models, MCP as a standard
   plug); 2026 agents leave the chat window (hours-long tasks, phone and personal agents, robots,
   networks).
6. The length of software tasks, measured by how long a skilled person needs, that the best model
   completes 50% of the time. About 4 minutes in 2023 to 16+ hours in 2026; doubling about every 7
   months (about every 3 months since 2024). It measures task difficulty, not how long the agent runs. Caveats: 50% success, not 100%; software tasks that a computer can
   check; the 2026 point is at the limit of the test.
7. Any three of: perception -> perceive; reasoning/planning -> think; memory -> memory; tools ->
   act; bodies -> act; learning -> improves the think box by practice; evaluation -> the world keeps
   score; multi-agent -> many loops; checks/trust -> the gate between think and act; systems -> time
   and cost of every trip around the loop.
8. Tap the screen like a person (works on any app; slow, fragile when layouts change); call the app's
   own function (fast and exact; only if the developer offers it); through a standard plug such as
   MCP / app functions (one tool serves every agent; needs adoption).
9. Writing the output (decode), especially when the model "thinks" with many tokens. Every step's
   time is multiplied by the number of steps. On the phone there is no network time and the
   screenshot stays private, but reading and writing are slower, so each step takes longer.
10. A big model is too slow (7-9 times a second) for smooth motion or a fast world; a small fast
    policy (about 200 times a second) moves the hand; a hard-wired reflex/emergency stop needs no
    model. Put each decision in a loop fast enough for it.
11. Every observation costs tokens, time, energy, and privacy. Use screen structure or an app function
    instead of pixels; pick the few cameras that matter; sense when something changes; coarse first,
    then zoom.
12. Irreversible ones: send, pay, book, delete, unlock, move near a person. Checks: least-privilege
    fences/limits, a verifier model, exact rules a program checks, ask the human, sandbox first.
13. Private data + untrusted content + a way to send data out. Instructions hidden in untrusted content
    (a review) make the agent send private data out, because the model cannot reliably tell
    instructions from data. On-device: keep private data and the model that handles it on the device,
    send the cloud only what it needs, cut one circle of the triangle.
14. About 37% (0.99^100). Recovering from errors, for example a checker that catches 80% of mistakes,
    raises it to about 82%.
15. L2 and L3: acts with your OK, or acts while you supervise. Trust holds them back as much as skill.
