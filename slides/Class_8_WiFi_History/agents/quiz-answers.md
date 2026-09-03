# Class 8 Wi-Fi History — Expected Quiz Answers

For the orchestrator only. `ran-student` must never open this file.

### [01_origins.tex] Wi-Fi grew by spending new resources
Expected: Any three of: spectrum (2.4 → 5 → 6 → 60 GHz), bandwidth (20 → 40 → 80 → 160 → 320 MHz), constellation (BPSK → 64/256/1024/4096-QAM), space (SISO → SU-MIMO → MU-MIMO), scheduling (one user → OFDMA resource units), links (one band → multi-link operation), with the matching progression for one.

### [01_origins.tex] Amendment names vs. Wi-Fi generations
Expected: IEEE names the technical amendments (802.11b/a/g/n/ac/ax/be); the Wi-Fi Alliance names the market generations (Wi-Fi 1–7, with 1–3 retroactive/informal). 802.11ad/ay are a parallel 60 GHz branch marketed as WiGig, outside the numbered sequence.

### [01_origins.tex] Four milestones made Wi-Fi possible
Expected: 1985, the FCC opening unlicensed ISM spectrum for spread-spectrum systems. It made spectrum permissionless — nobody needed a license to ship a radio — which is the ground Wi-Fi still stands on.

### [02_foundation.tex] The 802.11 stack: stable MAC, moving PHY
Expected: The 802.11 MAC (association, framing, ACK, security, CSMA/CA) stays recognizable; the PHY below it (PLCP + PMD: DSSS, OFDM, MIMO, OFDMA, single carrier) is rebuilt every generation. A PPDU is the PHY-layer transmission unit placed on air: preamble + header + payload.

### [02_foundation.tex] 1997 solved shared access before speed
Expected: A radio cannot detect collisions while transmitting because its own transmission deafens its receiver, and it cannot hear every other station anyway. So 802.11 avoids collisions (sense, DIFS, random backoff) and requires a positive ACK, because silence proves nothing.

### [03_first_speed_race.tex] 802.11b: coded spreading at 2.4 GHz
Expected: 1/2 Mb/s use Barker spreading (as in 1997); 5.5/11 Mb/s use CCK. CCK carries bits in the phase relationships of complex code words (not simple repetition); spreading provides processing gain and robustness.

### [03_first_speed_race.tex] 802.11a: many orthogonal subcarriers
Expected: Each subcarrier is sampled where its neighbors cross zero, so overlapping spectra cause no inter-carrier interference at the sampling points. 802.11a uses a 64-point FFT with 48 data and 4 pilot subcarriers.

### [03_first_speed_race.tex] Why OFDM needs a cyclic prefix
Expected: Indoor multipath echoes smear one symbol into the next; the CP copies the symbol's tail to its front so echoes land in a discardable guard region. Each subcarrier then sees a single complex gain, so equalization is one multiply per subcarrier (one-tap frequency-domain equalization).

### [03_first_speed_race.tex] 802.11g: the OFDM engine comes home
Expected: The 802.11a OFDM engine (up to 54 Mb/s) plus the popular 2.4 GHz band with its 802.11b installed base. Cost: legacy 11b stations cannot decode OFDM, so mixed networks must send protection frames first — airtime overhead.

### [04_mimo_era.tex] 802.11n: multipath becomes an asset
Expected: 40 MHz channel bonding, up to 4 SU-MIMO spatial streams, short guard interval, and A-MPDU aggregation (600 Mb/s = 4 streams × 40 MHz × 64-QAM 5/6 × short GI). Multipath stops being an impairment and becomes parallel spatial streams.

### [04_mimo_era.tex] What "tighter modulation" means
Expected: A constellation is the set of allowed signal points; more bits per symbol means more points packed closer together in the same space. The same amount of noise can then push a received point onto a neighbor (flip it), so denser constellations are only usable when the signal is cleaner — a higher Signal-to-Noise Ratio.

### [04_mimo_era.tex] 802.11ac: wider, tighter, more users
Expected: Wider channels (up to 160/80+80 MHz), tighter modulation (256-QAM, 8 bits), more streams (8 max), and downlink MU-MIMO (shipped in Wave 2 gear — a product-certification wave, not a standards phase). 6.9 Gb/s is a configuration ceiling with every optimistic option at once, not expected application throughput.

### [05_efficiency_era.tex] 802.11ax: dense efficiency, not peak
Expected: OFDMA partitions the subcarriers of one PPDU into resource units for several stations, making frequency a multiuser scheduling dimension. The design target is high efficiency in dense deployments, not a larger single-link headline rate.

### [05_efficiency_era.tex] HE OFDM: four times narrower subcarriers
Expected: Legacy: 312.5 kHz spacing, 3.2 µs useful symbol; HE: 78.125 kHz, 12.8 µs — 4× more FFT points in the same 20 MHz. Benefits (any one): the guard interval becomes relatively cheaper / better delay-spread tolerance / finer-grained resource units.

### [05_efficiency_era.tex] Wi-Fi 6E adds spectrum, not a waveform
Expected: New: operation in the 6 GHz band — clean, wide channels with no legacy stations (availability varies by country). Not new: the PHY/MAC — it is the same 802.11ax HE toolbox; a band extension is not a new IEEE amendment.

### [06_wifi7_60ghz.tex] 802.11be: several links act as one
Expected: MLO lets one device hold coordinated links across 2.4/5/6 GHz under one association, used for throughput, load balancing, redundancy, or latency. The required ≥30 Gb/s mode is measured at the MAC data service access point (MAC data SAP).

### [06_wifi7_60ghz.tex] 802.11ad: enormous bandwidth at 60 GHz
Expected: Rates come from raw bandwidth — 2.16 GHz-wide channels (single-carrier PHY up to 4.62 Gb/s; the ≈6.8 Gb/s OFDM PHY was optional and later obsoleted) — rather than dense modulation. The price is severe path and penetration loss: walls end the link and range is room-scale. Antenna gain must be aimed, so transmit/receive sectors are found by beam training.

### [06_wifi7_60ghz.tex] 802.11ay: a wider, spatial 60 GHz system
Expected: Channel bonding/aggregation of 2.16 GHz channels and MIMO (plus better beamforming), with at least one mode ≥20 Gb/s at the MAC data SAP. The use case grew from cable replacement (docking, VR tethers) toward fixed wireless access and backhaul.

### [07_wrap_up.tex] Four waveform ideas explain the PHY story
Expected: DSSS/CCK → 802.11b; OFDM → 802.11a/g/n/ac (and the basis of ax/be); OFDMA → the multiuser move of 802.11ax/be; 60 GHz single carrier → 802.11ad, enhanced by 802.11ay.

### [07_wrap_up.tex] The mainstream branch, b to be
Expected: Headline maxima are comparison anchors, not promised throughput — standards allow more than typical devices implement. * = 6 GHz operation is in 802.11ax-2021 itself, with availability depending on national regulation (certified as Wi-Fi 6E); † = the ≥30 Gb/s figure is required at the MAC data SAP — the honest counter, i.e., what survives preambles, ACKs, and retries — while the ≈46 Gb/s PHY peak counts raw on-air bits.

### [07_wrap_up.tex] A PHY rate is a product of optimism
Expected: Rate ∝ bandwidth × bits/symbol × code rate × spatial streams. Overheads (any two): preamble + pilots (airtime), contention + ACK (MAC), retries (channel loss), TCP/app (protocol overhead).

### [07_wrap_up.tex] MAC and security evolved alongside
Expected: WEP era (1999 tick; WEP was defined in 802.11-1997) aimed at privacy and was later broken; WPA2 (2004) is the 802.11i redesign with CCMP; WPA3 (2018+, a Wi-Fi Alliance certification) adds SAE.

### [07_wrap_up.tex] Wi-Fi and cellular optimize different edges
Expected: Wi-Fi (any two): unlicensed spectrum, local AP ownership, contention-based access, very wide local channels, rapid device ecosystem. Cellular (any two): licensed/managed spectrum, operator control, scheduled access, wide-area mobility, integrated service guarantees. Neither wins: future edge systems choose, combine, and hand off across both.

### [07_wrap_up.tex] Read any generation in five questions
Expected: 1) What spectrum does it use? 2) What does one PPDU look like? 3) How are users separated? 4) What channel conditions does it assume? 5) Which bottleneck moved next?
