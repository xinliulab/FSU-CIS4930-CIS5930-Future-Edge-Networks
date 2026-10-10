# Class 14 deck — teacher/student review log (2026-10-09)

Two agents built `slides.html` in a teach → test → reteach loop:

- **Teacher**: `.claude/agents/wireless-teacher.md` (wireless-systems professor; writes the HTML deck),
  briefed by `teacher-brief.md`.
- **Student**: `.claude/agents/ran-student.md` (2nd-year CS undergrad; reads screenshots of every
  slide plus the spoken notes, with Class 12's slides as its memory of last week), quizzed with
  `quiz.md`; scored by the orchestrator against `quiz-answers.md`, which neither agent saw.

Screenshots for the student come from headless Chrome at 1280×720 with `slides.html?all#N`
(`?all` reveals every step-by-step item and hides the key hint).

| Round | Quiz (of 11) | Verdict | Main findings → fixes |
|---|---|---|---|
| 1 | 11 correct | CONFUSED+BORED | "Only the client can measure h" contradicted Class 12 (the AP measured CSI from uplink) → new slide 7: same air both ways, different tx/rx circuits (t_n ≠ r_n), implicit vs explicit. φ = 90/180/270 not tied to Class 12's step → sign flip from conj(h) stated on slide 14. Timeline, "peak heights are not powers", why delay is erased lived only in notes → moved onto slides. Slide 11 (multi-client polling) and frame fine print boring → folded/trimmed. Also fixed: "Wireshark decodes it" → Wireshark captures, Wi-BFI decodes; LTF ± table slide added. |
| 2 | 11 correct | BORED | Class 12's "off-the-shelf" vs today's "special card" → patched driver/firmware stated. Calibration tension (slide 7 vs 24) → honest t_n bias + options for a sniffer. 90° sent as 92.8° → mid-slice quantization explained. Protocol stretch (slides 7–11) → sensing-hook line on each, unused packet fields greyed. |
| 3 | 11 correct | BORED | Small polish only (formula off slide 15, λ clash on slide 20, calibrated-AP assumption on slide 23, data stream defined, re-sounding hook). Loop stopped: comprehension passed twice. |

Facts checked by the orchestrator: NDP = 52 µs (4 VHT-LTFs); NDPA fields; SIFS 16 µs; angle count
Nc(2Nr−Nc−1) = 6 for 4×1; running-example φ = 90/180/270°, ψ = 45/35.3/30°; (bψ,bφ) codebooks
(2,4)/(4,6)/(5,7)/(7,9) and mid-slice levels; ±-sign LTF algebra h₁ = (y₁−y₂+y₃+y₄)/4.
Citations verified: BFMSense (Yi et al., NSDI 2024); Wi-BFI (Haque, Meneghello, Restuccia,
WiNTECH 2023); BeamSense (Haque, Zhang, Meneghello, Restuccia, Computer Networks 258, 2025).
Pixel Watch 3: Wi-Fi 802.11a/b/g/n/ac/ax, 2.4 + 5 GHz (Google spec page).
Not independently verified: rows 2–4 of the LTF sign table (802.11n P matrix, from memory);
NDPA ≈ 56 µs and report 100–300 µs are estimates labelled as such.

## 2026-10-10: standalone pass (author request)

The author asked that every lecture stand alone: no "last week", "Class 12", "Class 8", or
ArrayTrack/Chronos/SpotFi recaps on slides or in notes. The teacher removed ~60 references and the
student was re-run with **no** previous-class memory (round 5: 11/11, CONFUSED+BORED). It exposed
concepts that had been borrowed from earlier lectures: phase, complex number as an arrow,
subcarrier, and why asking the client fixes the tx/rx-circuit problem. Round 6 added a
"A signal is an arrow" slide (deck now 29 slides), defined subcarriers in place, and put
"the client measures h_n × t_n" on slide 8. Then linked from `index.html` and `canvas/home.html`.
