# Class 5 quiz — expected answers

Matches `quiz.md` heading for heading. `ran-student` must never open this file.
# Quiz Answers — Section 01: The Diagram's Hidden Assumptions

### [01_assumptions.tex] The picture you spent two lectures building
Q: In the architecture diagram, which three boxes together make up the gNB, and what attaches to the RAN side above them?
Expected: The RU, DU, and CU together form the gNB (the brace under those three boxes is labeled gNB). Attached above, with dashed links to the DU and CU, is the RIC with its xApps.

### [01_assumptions.tex] Five things the diagram never says out loud
Q: The slide lists five hidden assumptions. Name any three of them, and state what the takeaway promises beyond those five.
Expected: Any three of: (1) the base station stands on the ground; (2) the base station is only a radio; (3) data is transmitted first, computed later (the wave carries bits; a computer does the math afterward); (4) the links inside the base station are trustworthy; (5) attacking the network requires standing up a fake base station. The takeaway promises that by the end of today all five will be broken — plus one assumption so well hidden it is not even a box in the diagram.

### [01_assumptions.tex] Today's tour: four acts, seven papers
Q: According to the tour map, what question does Act III ask, and what does the slide say the goal of the tour is (and is not)?
Expected: Act III asks "Who attacks it, and how?" (papers column: 3 papers + 1 cliffhanger, NDSS'24 + USENIX Sec '19/'24/'25). The goal is NOT to master seven papers today; it is to leave feeling that every box and every line in the diagram can be reimagined.

### [01_assumptions.tex] The course changes gears today
Q: Per the slide, how does the question the course asks change from Classes 2--4 to Class 5 onward, and why is a "correct" diagram still worth attacking?
Expected: Classes 2--4 asked "here is how it works" (standards, boxes, settled answers); from Class 5 onward the question becomes "which assumption breaks?" (papers, prototypes, attacks, open questions). A correct diagram is still worth attacking because correct is not the same as finished: the diagram shows what was built but is silent about what was assumed, and research lives in that silence.
# Quiz Answers — Section 02 (Act I: A Cell Tower in Space)

### [02_space.tex] The tower left the ground
Expected: The assumption that the base station stands on the ground. It is broken by a cell tower (satellite) moving at about 7.5 km/s in low Earth orbit, serving ordinary unmodified phones (e.g., T-Mobile + Starlink satellite texting since July 2025).

### [02_space.tex] Same phone. Very different tower.
Expected: Any two of: the ground tower is fixed/bolted down while the satellite moves at 7.5 km/s; the ground tower serves you for years while the satellite is overhead only for minutes and then gone. (Follow-on breakages students may add: constant handoff, Doppler, which country's satellite serves you, location, authentication, billing.)

### [02_space.tex] The twist: it secretly runs on GPS
Expected: Even with the D2C satellite overhead, the phone can suffer service denials, dropped access, and wrong bills — because the D2C network depends on GNSS for user location (beam, country, billing) and timing (uplink slots run on a shared clock). One satellite system's correctness hangs on another one.

### [02_space.tex] The move: let the network navigate itself
Expected: SN2 uses the D2C satellites themselves as the position source (the "fate-sharing" idea — network and navigation live or die together). Good-enough precision is acceptable because the network only needs position to pick a beam, a country, and a bill, not meter-level GPS-grade accuracy.

### [02_space.tex] What refusing to need GPS bought
Expected: Network availability improved 4.4–23.5x and access latency dropped 1.9–12.3x versus legacy GNSS-dependent designs, evaluated with commodity phones with 3GPP NTN support; the ranges span the scenarios tested.

### [02_space.tex] Why is Netflix fast at 8 pm?
Expected: CDNs are fast because caches sit near the user. Through a satellite, every request must climb to the satellite, drop to a ground station, reach the ground cache, and climb back up — so the "nearby" cache is no longer near, and the ground–satellite link is traversed twice.

### [02_space.tex] Your cache is doing 7.5 km/s
Expected: StarCDN hands the cached content backward through the constellation — against the satellites' direction of motion — to the next satellite arriving overhead, so popular content stays geographically near the users who want it (picture: the satellite moves on; the content stays behind).

### [02_space.tex] What moving the cache to orbit bought
Expected: Roughly 80% reduction in ground-to-satellite bandwidth usage and about a 2.5x improvement in user-perceived latency over ground-based CDN baselines — from trace-driven simulation using real-world Akamai CDN traces.
# Quiz Answers — Section 03: Act II: The Base Station Is a Computer

### [03_compute.tex] The long way to the nearest GPU
Q: In today's edge-AI path shown on the slide, what does the gNB do with the bytes of an inference request, and which hidden assumption does this frame say is about to break?
Expected: The gNB touches every byte but only forwards them --- inference happens farther away (MEC or cloud GPU) and the answer travels all the way back over the backhaul. The assumption being broken is "the base station is only a radio," broken by a gNB that moonlights as an AI server.

### [03_compute.tex] The accelerator was already in the building
Q: Why does a vRAN base station already contain a GPU or NPU, and why is that accelerator not always fully used?
Expected: vRAN runs the physical layer (PHY) as software on commodity servers, and those servers ship GPUs/NPUs to accelerate PHY signal processing. PHY load rises and falls with traffic, so in quiet hours the accelerator has spare capacity --- compute headroom that nobody billed for.

### [03_compute.tex] AoRA: the gNB moonlights as an AI server
Q: What network hop disappears from the inference path in AoRA's picture, and roughly how much transport latency does the paper report saving compared to MEC and to cloud?
Expected: The backhaul hop disappears: inference runs in containers on the PHY's spare headroom inside the base station itself (using standard O-RAN interfaces), so the only link left is the air. The paper reports transport latency cut by over 30% versus MEC and 70% versus cloud-based setups.

### [03_compute.tex] Busy hour: who gets the GPU?
Q: When PHY load spikes, who must get the shared accelerator and why, and what does AoRA do with the AI workload in that case?
Expected: The PHY always wins: if it misses its deadlines, the cell itself fails --- no radio means no anything. AoRA plays it safe and has the AI workload step aside, falling back to MEC or cloud. The open research question is smarter communication--compute co-scheduling: PHY load high means AI gets less, PHY load low means AI gets more.

### [03_compute.tex] The strangest question of the day
Q: State the question this frame poses, and name the assumption it says is broken along with what breaks it.
Expected: The question is "Can the air itself be a computer?" The broken assumption is "data is transmitted first, computed later," broken by a radio wave that arrives already half-computed.

### [03_compute.tex] Same math, different department
Q: What mathematical operation do wireless propagation and a neural network's linear layer share, and what does a programmable metasurface add that turns the channel into a layer?
Expected: Both compute a weighted sum: overlapping waves add up weighted by their propagation paths (y = sum of h_i x_i), and a linear layer adds inputs weighted by learned weights (y = sum of w_i x_i). A programmable metasurface lets software set the channel weights h_i; setting h_i = w_i makes propagation itself perform the layer's computation.

### [03_compute.tex] MetaAI: the wave arrives partially computed
Q: Comparing the two rows of the diagram, which box vanishes in the MetaAI row, and what does the slide say happens to the relationship between communication and computation?
Expected: The GPU box vanishes: instead of sensor -> transmit -> receiver -> GPU -> NN, the wave passes through the metasurface (acting as layer 1) and arrives at the receiver already computed. Communication and computation stop being sequential steps and become the same physical process.

### [03_compute.tex] What they built --- honestly
Q: Give the prototype frequency bands and the reported classification accuracies, and explain why the slide says SIGCOMM cares even though 82.8% would fail a Kaggle leaderboard.
Expected: Prototypes at dual-band 2.4/5 GHz and single-band 3.5 GHz (Wi-Fi and 5G territory); average classification accuracy 82.8%, up to 89.8%, with scope limited to linear layers and simple recognition tasks. SIGCOMM cares because the contribution is the existence proof, not the number: a neural layer ran on real RF hardware, computed while the wave traveled --- no GPU touched it. A first step, not GPT-in-the-air.
# Quiz Answers — 04_security.tex (Act III)

### [04_security.tex] Can we install antivirus on a cell tower?
Expected: PCs got antivirus because they became programmable platforms anyone could ship software to, including defenders — not merely because they were computers. O-RAN made the same change to the RAN by opening it with the RIC and xApps, turning the base station into a programmable platform.

### [04_security.tex] Not deep learning --- telemetry plus rules
Expected: No, it is not primarily deep learning — it is telemetry plus rules. MOBIFLOW is a fine-grained cellular telemetry stream ("NetFlow for the RAN"); MOBIEXPERT is a production-rule xApp running on the RIC that watches that stream for known layer-3 attack patterns. No model to train.

### [04_security.tex] What it caught, and what it cost
Expected: The 11 previously unknown attacks were covered by writing new rules, without redeploying the network. That reuses the O-RAN platform property — the base station as a place where code (an xApp) can be installed and updated. Overhead stayed under 2% CPU and 100 MB.

### [04_security.tex] Attacking without building a tower
Expected: It breaks the assumption that attacking the network requires standing up a fake base station. Instead, SigOver synchronizes to the legitimate LTE downlink and overwrites only the subframes it chooses (slices of the LTE frame, a millisecond each), whispering in perfect sync with the real tower, slightly louder.

### [04_security.tex] Jamming, spoofing, overshadowing
Expected: Jamming — you hear nothing (channel drowned out). Spoofing/fake BS — you switch towers to a rogue cell. Overshadowing — you hear the attacker but believe it is your own tower.

### [04_security.tex] Hiding in plain signal
Expected: Timing is why 3 dB (about twice the power) is enough: a time-aligned signal wins the receiver's capture, while a fake tower must out-shout cell selection — which is why the fake base station needed a 35 dB (about 3000x) edge and still only reached 80% success versus SigOver's 98%.

### [04_security.tex] What if the attacker never transmits a radio signal?
Expected: It asks what an attacker could break purely from software, without touching the air interface at all. It hints the answer lives on a link the students drew last class and never thought twice about — the fronthaul between RU and DU.

### [04_security.tex] The link inside the tower is now a network
Expected: Before, fronthaul was dedicated point-to-point fiber (CPRI) — effectively private wiring, physically trusted. In disaggregated 5G it is switched, packet-based Ethernet (eCPRI), and to stay fast enough nobody is required to check packets are genuine: the fronthaul standards do not require integrity protection (citing performance overhead and assumed low risk). This breaks the assumption that the links inside the base station are trustworthy.

### [04_security.tex] What software alone could do
Expected: Any two of: user performance degraded by more than 80%; targeted users prevented from ever attaching to the cell; signaling storms of more than 2500 messages per minute.

### [04_security.tex] The lineage did not die with LTE
Q: Sni5Gect extends SigOver's core idea to 5G NR. What is that shared core idea, and why is the slide deliberately not explaining how Sni5Gect works?
Expected: The shared core idea is attacking without a rogue base station — sniffing pre-authentication traffic and injecting targeted downlink messages, now on 5G NR. The slide does not explain the mechanism because a student will present the paper in the paper practicum.
# Quiz Answers — Section 05: The Design Space (Wrap-up)

### [05_wrap_up.tex] Five assumptions walked in. None walked out.
Q: The recap table lists five assumptions and the move that broke each. For any three of them, state the assumption and its move (X -> Y), and say which assumption the slide notes was never even a box in the diagram.
Expected: Any three of: (1) on the ground -> Earth to orbit (Act I); (2) only a radio -> GPU, AI, and antivirus moved in (Acts II–III); (3) transmit, then compute -> the wave computes in flight (Act II); (4) inside links trusted -> the fronthaul is an attack surface (Act III); (5) fake base station required -> perfect timing instead (Act III). The assumption that was never even a box: the cache sits on the ground (Act I, StarCDN). Synthesis line below the table: openness -> innovation AND attack surface.

### [05_wrap_up.tex] How to read a paper like today's
Q: The slide gives a three-step recipe for reading a paper. What are the three steps, and which step does the slide say needs you rather than the paper?
Expected: (1) Find the assumption the paper breaks; (2) ask what it deliberately does not solve; (3) ask what you would build on top of it. Steps 1 and 2 need the paper; step 3 needs you (it is the practicum question).

### [05_wrap_up.tex] The design space (final frame)
Q: According to the final frame, what is the 5G architecture diagram if it is not "the answer," and how does the course's question to you change from here on?
Expected: The diagram is the design space, not the answer. Until now the course taught how the network works; from here it asks what you would redesign. The paper practicum starts soon, and Sni5Gect is already on the practicum list.
