# Class 5 comprehension quiz

One question per frame. Answers live in `quiz-answers.md`; do not add them here.
# Quiz — Section 01: The Diagram's Hidden Assumptions

### [01_assumptions.tex] The picture you spent two lectures building
Q: In the architecture diagram, which three boxes together make up the gNB, and what attaches to the RAN side above them?
Expected: (answers in quiz_01-answers.md)

### [01_assumptions.tex] Five things the diagram never says out loud
Q: The slide lists five hidden assumptions. Name any three of them, and state what the takeaway promises beyond those five.
Expected: (answers in quiz_01-answers.md)

### [01_assumptions.tex] Today's tour: four acts, seven papers
Q: According to the tour map, what question does Act III ask, and what does the slide say the goal of the tour is (and is not)?
Expected: (answers in quiz_01-answers.md)

### [01_assumptions.tex] The course changes gears today
Q: Per the slide, how does the question the course asks change from Classes 2--4 to Class 5 onward, and why is a "correct" diagram still worth attacking?
Expected: (answers in quiz_01-answers.md)
# Quiz — Section 02 (Act I: A Cell Tower in Space)

One question per frame. Answer from the slide text alone.

### [02_space.tex] The tower left the ground
Q: What hidden assumption does direct-to-cell satellite service break, and what breaks it?

### [02_space.tex] Same phone. Very different tower.
Q: Name two practical differences between a ground tower and a D2C satellite as your base station, as shown on the slide.

### [02_space.tex] The twist: it secretly runs on GPS
Q: According to the paper's field tests, what can happen to a phone that has satellite signal but no GPS fix?

### [02_space.tex] The move: let the network navigate itself
Q: SN2 removes the GNSS dependency. What does it use as the position source instead, and why is "good enough" precision acceptable?

### [02_space.tex] What refusing to need GPS bought
Q: By roughly what factors did SN2 improve network availability and reduce access latency compared to legacy GNSS-dependent designs?

### [02_space.tex] Why is Netflix fast at 8 pm?
Q: Why do traditional ground-based CDN caches work poorly for a user whose Internet access goes through a satellite?

### [02_space.tex] Your cache is doing 7.5 km/s
Q: A satellite caching Florida's popular content will leave Florida within minutes. What does StarCDN do so the content stays useful to Floridians?

### [02_space.tex] What moving the cache to orbit bought
Q: State StarCDN's two headline results: what happens to ground-to-satellite bandwidth usage and to user-perceived latency?
# Quiz — Section 03: Act II: The Base Station Is a Computer

### [03_compute.tex] The long way to the nearest GPU
Q: In today's edge-AI path shown on the slide, what does the gNB do with the bytes of an inference request, and which hidden assumption does this frame say is about to break?
Expected: (answers in quiz_03-answers.md)

### [03_compute.tex] The accelerator was already in the building
Q: Why does a vRAN base station already contain a GPU or NPU, and why is that accelerator not always fully used?
Expected: (answers in quiz_03-answers.md)

### [03_compute.tex] AoRA: the gNB moonlights as an AI server
Q: What network hop disappears from the inference path in AoRA's picture, and roughly how much transport latency does the paper report saving compared to MEC and to cloud?
Expected: (answers in quiz_03-answers.md)

### [03_compute.tex] Busy hour: who gets the GPU?
Q: When PHY load spikes, who must get the shared accelerator and why, and what does AoRA do with the AI workload in that case?
Expected: (answers in quiz_03-answers.md)

### [03_compute.tex] The strangest question of the day
Q: State the question this frame poses, and name the assumption it says is broken along with what breaks it.
Expected: (answers in quiz_03-answers.md)

### [03_compute.tex] Same math, different department
Q: What mathematical operation do wireless propagation and a neural network's linear layer share, and what does a programmable metasurface add that turns the channel into a layer?
Expected: (answers in quiz_03-answers.md)

### [03_compute.tex] MetaAI: the wave arrives partially computed
Q: Comparing the two rows of the diagram, which box vanishes in the MetaAI row, and what does the slide say happens to the relationship between communication and computation?
Expected: (answers in quiz_03-answers.md)

### [03_compute.tex] What they built --- honestly
Q: Give the prototype frequency bands and the reported classification accuracies, and explain why the slide says SIGCOMM cares even though 82.8% would fail a Kaggle leaderboard.
Expected: (answers in quiz_03-answers.md)
# Quiz — 04_security.tex (Act III)

### [04_security.tex] Can we install antivirus on a cell tower?
Q: The slide argues PCs did not get antivirus because they were computers. What was the real reason, and what recent change makes the same argument apply to the RAN?
Q-note: answer from the slide only.

### [04_security.tex] Not deep learning --- telemetry plus rules
Q: 5G-Spector detects attacks. Is its detection primarily a trained deep-learning model? Name its two components and what each one does.

### [04_security.tex] What it caught, and what it cost
Q: 5G-Spector detects 7 classes of layer-3 attacks and was shown to scale to 11 previously unknown attacks. How were those new detections added, and what does that reuse the O-RAN platform property for?

### [04_security.tex] Attacking without building a tower
Q: What assumption about attacking cellular networks does SigOver break, and what does it do instead of building a fake base station?

### [04_security.tex] Jamming, spoofing, overshadowing
Q: In one line each, what does the victim experience under jamming, under spoofing (fake base station), and under overshadowing?

### [04_security.tex] Hiding in plain signal
Q: SigOver wins with only a 3 dB edge while a fake base station needed a 35 dB edge. Why does a small timing-aligned signal beat a much louder one?

### [04_security.tex] What if the attacker never transmits a radio signal?
Q: This frame flips the previous attack's premise. What is the new question it asks, and where does it hint the answer lives?

### [04_security.tex] The link inside the tower is now a network
Q: What changed about the RU-to-DU link between an old monolithic 4G tower and a disaggregated 5G deployment, and why is integrity protection not mandatory there?

### [04_security.tex] What software alone could do
Q: On the fronthaul testbed (two compromised cells, four users), name two of the three demonstrated impacts with their numbers.

### [04_security.tex] The lineage did not die with LTE
Q: Sni5Gect extends SigOver's core idea to 5G NR. What is that shared core idea, and why is the slide deliberately not explaining how Sni5Gect works?
# Quiz — Section 05: The Design Space (Wrap-up)

### [05_wrap_up.tex] Five assumptions walked in. None walked out.
Q: The recap table lists five assumptions and the move that broke each. For any three of them, state the assumption and its move (X -> Y), and say which assumption the slide notes was never even a box in the diagram.
Expected: (answers in quiz_05-answers.md)

### [05_wrap_up.tex] How to read a paper like today's
Q: The slide gives a three-step recipe for reading a paper. What are the three steps, and which step does the slide say needs you rather than the paper?
Expected: (answers in quiz_05-answers.md)

### [05_wrap_up.tex] The design space (final frame)
Q: According to the final frame, what is the 5G architecture diagram if it is not "the answer," and how does the course's question to you change from here on?
Expected: (answers in quiz_05-answers.md)
