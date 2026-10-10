# Class 14 quiz — expected answers (orchestrator only; never shown to the student agent)

1. Sending the same signal from all antennas with the right per-antenna phase makes the copies
   arrive *in step* at the phone, so they add up instead of partly cancelling: more received
   power (with 4 antennas, about 4x for the same total transmit power), so a higher data rate
   or longer range, and less energy wasted elsewhere (also what makes serving several users at
   once — MU-MIMO — possible).

2. The channel from each AP antenna to the client's antenna (its phase, and size) — i.e. how
   each antenna's copy arrives at the client. That can only be observed where the signal is
   received, at the client; the AP never hears its own downlink signal arrive. So the client
   measures it and feeds it back (explicit feedback).

3. NDPA (announcement: "a sounding packet is coming; you, measure it and report") ->
   NDP (the sounding packet: training fields only, to measure the channel) ->
   compressed beamforming feedback (client's report of how to steer) ->
   beamformed data (AP uses the report to steer its data frames).

4. It is a measuring stick: it contains only the known training symbols (preamble / long
   training fields), one per transmit stream, so the client can compare what arrived with what
   it knows was sent and work out the channel (CSI) from every AP antenna. No payload needed.

5. It computes the steering matrix V (via SVD of the channel; for a 1-antenna client, simply the
   channel vector normalized to length 1 and phase-aligned to a reference antenna), compresses
   it into a few angles (φ, ψ) and quantizes them to bits. The AP only needs to know *which way
   to steer* — the per-antenna phase/amplitude pattern — not the overall loudness or the
   absolute phase, so dropping those loses nothing it needs and costs fewer bits.

6. φ = the phase of one AP antenna relative to the reference (last) antenna — a phase
   difference between antennas. ψ = how the (unit) energy is split among the antennas (relative
   amplitudes), like latitude angles on a sphere.

7. A wave from angle θ reaches the next antenna a little later (extra path (λ/2)·sin θ for λ/2
   spacing), so its phase lags by a fixed step (π sin θ); the step depends only on θ, and a
   difference cancels the unknown absolute phase, so θ = arcsin(step/π).

8. It gathers many measurements (subcarriers / packets), finds the small "space" (set of
   directions) they all live in — the signal subspace, via eigen-decomposition of their
   covariance — and the leftover perpendicular "noise" directions. Then it tries every candidate
   angle: the true path angles' steering patterns lie inside the signal space (perpendicular to
   the noise space), so 1/(leftover) spikes there -> sharp peaks, one per path.

9. The steering matrix V that the client computed by SVD is exactly an orthonormal basis of
   that same signal space (the directions of the paths, seen from the AP's antennas). The
   normalizations (unit length, phase referenced to the last antenna) do not change the space,
   so the inter-antenna phase differences survive and the MUSIC peaks land at the same angles.

10. Loses (any one): overall amplitude; the absolute per-subcarrier phase, hence time of flight
    / distance; resolution through quantization of angles; subcarriers through grouping; control
    over timing (the AP decides how often to sound). Advantage (any one): every standard
    802.11ac/ax device produces it; it is sent unencrypted over the air so any device in monitor
    mode can capture it — no special chip/firmware like CSI tools; hardware offsets common to all
    antennas (CFO, timing offset) cancel in it.

11. The AP's (the beamformer's) antennas form the array; the angle is the direction of the
    client (or of the reflecting paths) as seen from the AP (angle of departure).
