# Teacher brief — Class 14 (Mon 10/12): Using 802.11 Beamforming Feedback as a Sensing Signal

Deliverable: `slides/Class_14_BFM_Sensing/slides.html`, one self-contained HTML deck,
**about 24–28 slides including the title**, English only.
Do **not** open anything else in `slides/Class_14_BFM_Sensing/agents/` (the quiz lives there).

## Where the students are

Read first: `slides/Class_12_WiFi_Sensing/*.tex` (last lecture, 10/5) and skim
`slides/Class_8_WiFi_History/04_mimo_era.tex`. From Class 12 they have:
CSI = the complex number h per subcarrier per antenna that the card computes to decode;
"phase is a 6 cm ruler with no numbers"; two antennas λ/2 apart → phase step π·sinθ → angle
(ArrayTrack); an AoA spectrum by sweeping θ in software; multipath gives several lobes;
SpotFi (which used MUSIC, but MUSIC itself was never explained); hardware offsets (CFO,
carrier phase, timing/STO, SFO) wreck the raw phase. Class 8 named MU-MIMO and "preamble +
header + payload". They are CS undergrads: vectors and dot products yes, eigenvectors only
vaguely, SVD probably never.

**Running example (reuse Class 12's):** 5 GHz Wi-Fi, λ ≈ 6 cm; an AP with **4 antennas in a
line, λ/2 = 3 cm apart**; a **1-antenna client** at **θ = 30°**, so each next AP antenna is a
**quarter turn** apart. Keep these numbers all deck long.

## The story the author asked for (in this order)

1. **Why beamforming.** One antenna sprays energy everywhere. Several antennas sending the
   same signal: copies add or cancel depending on their phases at the receiver. Choose a phase
   per antenna so all copies arrive in step at the client → a beam. Payoff in numbers
   (4 antennas, same total power → about 4× received power, ~6 dB) and what that buys (rate,
   range; serving two clients at once = MU-MIMO, which they met in Class 8).
2. **Why beamforming feedback.** The right phases depend on the channel from each AP antenna
   to the client — and only the client can observe how the AP's signal arrives. So the AP has
   to ask. (History, one line: 802.11n allowed several incompatible beamforming options and
   it barely shipped; 802.11ac/Wi-Fi 5 kept one: explicit, compressed feedback after an NDP.)
3. **The feedback procedure (channel sounding).** NDPA → SIFS → NDP → SIFS → compressed
   beamforming report → (more clients: Beamforming Report Poll in 11ac; a trigger frame in
   11ax, clients answer together) → beamformed data. Explain each piece by its job before its
   name: NDPA = "heads-up: a sounding packet follows; these clients, measure it and report";
   NDP = a packet that is all preamble (training fields), no data — a measuring stick.
4. **How the BFM is computed.** Client measures the CSI from the NDP's training fields
   (exactly last week's CSI) → it does not send raw CSI → it computes what the AP actually
   needs, the steering matrix V (SVD of H; for one client antenna this is just the channel
   vector conjugated and scaled to length 1 — "rotate each antenna's arrow back so they all
   point the same way") → compresses V to angles φ, ψ → quantizes → sends the frame.
   That compressed V is the BFM (beamforming feedback matrix).
5. **CSI → angle with MUSIC.** Steering vector = the phase-step pattern a direction θ leaves
   on the array. Multipath: each measurement is a mix of a few steering vectors with weights
   that change across subcarriers/packets. MUSIC: (a) collect many snapshots, (b) find the
   few directions they all live in (signal subspace; eigenvectors of their covariance) and
   the leftover perpendicular directions (noise subspace), (c) for each candidate θ measure
   how much of a(θ) sticks out into the noise space; P(θ) = 1/that → sharp peaks at the path
   angles. Give a physical analogy (points scattered on a tabletop; "up" is the noise
   direction; a candidate that lies flat on the table is a hit). Contrast with last week's
   sweep (wide lobes) using the same data.
6. **BFM → the same angle → sensing.** Punchline: V *is* an orthonormal basis of that signal
   subspace — the Wi-Fi chip already did MUSIC's hardest step (the decomposition) for us. For
   one stream the φ's literally are the inter-antenna phase differences of Class 12. Rebuild V
   from the angles for every subcarrier and many frames, stack V·Vᴴ, run the same MUSIC scan
   → same peaks as CSI. Then: what BFM keeps and loses, and why that is a good deal for
   sensing — any standard 802.11ac/ax device emits it, it goes over the air **unencrypted**,
   any Wi-Fi card in monitor mode can capture it; no special chip/firmware as CSI needs.
7. **Wrap-up:** take-homes, a lead-in to today's live demo (tracking people with a Google
   Pixel Watch 3 as the client — keep the demo slide generic and say in the notes that the
   instructor will fill in the setup), an exit question (privacy: anyone nearby can sniff it).

Give each of these sections a visible roadmap marker so the students always know which of
the questions we are on. A roadmap slide right after the opener lists them.

## Facts you may rely on (verify anything else)

- Sounding (802.11ac): VHT NDP Announcement is a *control* frame; it lists the target STAs by
  AID and the feedback type (SU/MU, Nc). After SIFS (16 µs) the AP sends the VHT NDP: a PPDU
  with preamble only (L-STF, L-LTF, L-SIG, VHT-SIG-A, VHT-STF, VHT-LTFs, VHT-SIG-B) and no
  Data field; the VHT-LTFs are known training symbols, at least one per sounded stream. After
  SIFS the first beamformee answers with a **VHT Compressed Beamforming** frame; for MU, the
  AP polls the next STAs with **Beamforming Report Poll** frames. 802.11ax: HE NDPA → HE
  sounding NDP → **BFRP Trigger** frame → STAs answer simultaneously in an HE TB PPDU.
- The feedback frame is a management frame of subtype **Action No Ack** (category VHT, or HE in
  11ax). It carries a MIMO Control field (Nc, Nr, channel width, grouping Ng, codebook info,
  feedback type, sounding dialog token), the average SNR per stream, and the angles for every
  reported subcarrier (MU adds per-subcarrier delta-SNR).
- These action frames are **not encrypted**, even on WPA2/WPA3 networks with protected
  management frames (VHT/HE categories are not "robust" action frames). A card in monitor mode
  captures them; Wireshark decodes them. How often the AP sounds is the vendor's choice (the
  standard does not fix it).
- SVD: H (client antennas × AP antennas) = U Σ Vᴴ. Columns of V = transmit directions ordered
  by strength. The client feeds back the first Nc columns (Nc = number of streams). For a
  1-antenna client H is a row hᵀ and V's first column = conj(h)/‖h‖ up to a phase; sending
  x·conj(h)/‖h‖ makes all four copies arrive in phase, total ‖h‖·x.
- Compression (Givens rotations, IEEE 802.11ac §"Compressed beamforming feedback matrix"):
  first multiply each column by a phase so its **last row is real and ≥ 0**; then represent
  V by angles. Count: Nc·(2Nr − Nc − 1) angles, half φ, half ψ (Nr = AP antennas). Our 4×1
  example: 6 angles — φ11, φ21, φ31 and ψ21, ψ31, ψ41 — and
  v = [e^{jφ11}·cosψ21·cosψ31·cosψ41, e^{jφ21}·sinψ21·cosψ31·cosψ41, e^{jφ31}·sinψ31·cosψ41, sinψ41]ᵀ.
  So φ_k1 = phase of antenna k relative to antenna 4; ψ's split the length-1 among the four
  antennas like latitude angles on a globe. 8 real numbers → 6 angles.
- Quantization: φ uniform over [0, 2π) with bφ bits, ψ over [0, π/2] with bψ bits.
  SU codebooks (bψ, bφ) = (2, 4) or (4, 6); MU = (5, 7) or (7, 9). Subcarrier grouping
  Ng = 1, 2, 4 in VHT (4 or 16 in HE): one set of angles per group.
- Steering vector for a λ/2 line array: a(θ) = [1, e^{−jπ sinθ}, e^{−j2π sinθ}, e^{−j3π sinθ}]ᵀ
  (match Class 12's sign convention: each next antenna lags).
- MUSIC: Schmidt, IEEE Trans. Antennas & Propagation, 1986. With N antennas it resolves at
  most N−1 paths (3 for our AP).
- MUSIC on BFM: v·vᴴ does not change if v is multiplied by any phase, so the per-subcarrier
  phase normalization is harmless; R = Σ_k v_k v_kᴴ over subcarriers and frames; remember
  V ∝ conj(h), so conjugate (or flip the sign of θ).
- What BFM erases: anything common to all antennas at one subcarrier — overall gain, the
  carrier/CFO phase, timing offset STO/SFO (good: last week's offsets cancel) — but also the
  delay (time-of-flight) phase slope across subcarriers (bad: no distance) and absolute
  amplitude. It adds quantization error and coarser frequency resolution (grouping), and the
  AP, not you, decides how often to sound. Per-antenna hardware phase offsets in the AP's
  transmit chains do *not* cancel and need calibration, exactly as for CSI-based angle.
- CSI needs special hardware/firmware: Intel 5300 CSI Tool, Atheros CSI Tool, Nexmon CSI
  (Broadcom), ESP32.
- Related work to cite on the "who uses this" slide (verify venue/year before printing):
  BFMSense (Yi et al., NSDI 2024); Wi-BFI tool (Haque, Meneghello, Restuccia, WiNTECH 2023);
  BeamSense (Haque, Zhang, Restuccia, 2023). Verify the Pixel Watch 3 Wi-Fi spec before
  saying anything about it beyond "a Wi-Fi client".

## Interactive figures worth building (native SVG/canvas, no libraries)

Moving the knob must *be* the explanation. Suggested:
1. Beam pattern of the 4-antenna AP: slider for the per-antenna phase step (or the steering
   angle), polar/fan plot, the client at 30°, readout of power at the client.
2. Arrows at the client: four channel arrows added head-to-tail; a button "beamform" rotates
   each back to the same direction; readout of received power.
3. Sounding timeline revealed step by step (`.frag`), with SIFS gaps to scale-ish and µs labels.
4. CSI → V → angles for the running example: four h arrows → normalize → reference to antenna 4
   → show φ11, φ21, φ31 (≈ the quarter-turn steps!) and ψ's; a bits selector shows quantization.
5. Last week's sweep vs MUSIC on the same two-path data: sliders for the two path angles;
   the sweep's lobes merge, MUSIC's peaks stay sharp.
6. CSI-MUSIC vs BFM-MUSIC overlaid: same simulated two-path channel over ~50 subcarriers with a
   random common phase per packet; BFM path = normalize → Givens angles → quantize (bits
   selector) → rebuild → MUSIC. Peaks coincide; show where quantization starts to hurt.
Numerics must be right: implement complex arithmetic and a Hermitian eigen-solver (e.g. Jacobi
on the 2N×2N real symmetric embedding) carefully, and sanity-check the peaks land on the true
angles. Every live figure must also read correctly as a static picture before any click.
