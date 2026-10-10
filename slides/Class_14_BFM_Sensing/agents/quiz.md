# Class 14 quiz — Beamforming Feedback as a Sensing Signal

Questions only. Answer from the slides alone.
The expected answers live in `quiz-answers.md`; the student agent must never open that file.

1. An access point (AP) has 4 antennas and a phone has 1. Why would the AP bother to
   *beamform* instead of just transmitting from one antenna? What does the phone get out of it?

2. To beamform, what exactly does the AP need to know? Why can't the AP simply measure it
   itself — why does the *client* have to tell it?

3. Put these in time order and say in one short phrase what each one is for:
   beamformed data · NDP · compressed beamforming feedback · NDPA.

4. The NDP is a "null data" packet. If it carries no data, what is it for, and how does the
   client use it?

5. After measuring the channel, the client does not send the raw CSI back. What does it
   compute and send instead, and why is that enough for the AP?

6. For a 4-antenna AP and a 1-antenna client, the feedback contains angles named φ (phi) and
   ψ (psi). In plain words, what does a φ angle tell you about the AP's antennas? What do the
   ψ angles describe?

7. Why is a phase *difference* between two antennas enough
   to tell the direction of the device? Give the one-line reasoning (no need for the exact
   formula, but you may use it).

8. When the signal bounces off walls (multipath), a single phase step is no longer clean.
   In plain words, what does the MUSIC algorithm do to still find the angles?

9. Why can the same angle-finding method be run on beamforming feedback (BFM) instead of CSI —
   and why does it find the same angle?

10. Name one thing beamforming feedback *loses* compared with raw CSI, and one practical reason
    a researcher might still prefer beamforming feedback for sensing.

11. In BFM-based angle estimation, whose antennas form the antenna array — the AP's or the
    client's? So the angle you get is the direction of what, seen from where?
