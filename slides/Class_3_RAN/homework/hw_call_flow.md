# HW: Trace the Call

**CIS4930 / CIS5930 Future Edge Networks — after Class 3/4, XG Architecture Basics**

100 points. Submit through GitHub Classroom as a single `README.md` in your assignment
repo, plus any image files it references. Everything must render on the GitHub web view.

## Why this assignment looks the way it does

You have AI. So does everyone else, and so will everyone you work with after this course.
This assignment is not trying to find out whether you can *produce* an explanation of
cellular architecture — a model can do that in ten seconds. It is trying to find out
whether you can **tell a correct explanation from a confident wrong one**, and whether
you know what breaks when a specific box goes away.

Use AI freely. Part E requires you to show what you used and what it got wrong.

---

## Part A — Draw the ladder (30 pts)

**Your generation** is set by the last digit of your FSU ID:

| last digit | generation you draw |
|---|---|
| 0, 1, 2 | 2G (GSM + GPRS) |
| 3, 4 | 3G (UMTS) |
| 5, 6, 7 | 4G (LTE / EPS) |
| 8, 9 | 5G standalone |

Draw a **sequence diagram** of what happens between the moment the phone is switched on
and the moment the first byte of your data reaches the Internet — or, for 2G and 3G, the
moment voice audio reaches the called party. Use a Mermaid `sequenceDiagram` block in your
`README.md` so it renders on GitHub.

Required in the diagram:

1. **One lifeline per box**, with the real node name for your generation. No anachronisms:
   there is no MME in 3G and no RNC in 5G.
2. **Every message labelled** with the name the standard uses, in order.
3. **Control plane vs user plane marked on every arrow.** Use `-->>` for signalling and
   `->>` for user traffic, or Mermaid `Note`/`rect` blocks — say in one line which
   convention you chose.
4. **Phase headings**: find a cell / prove identity / set up the path / carry the traffic /
   move. Mermaid `rect` blocks are the easy way to do this.
5. **The five phases must contain the right messages.** Putting authentication after the
   data bearer is up is a factual error, not a stylistic one.

Then, in a table below the diagram, pick **five** arrows and fill in:

| arrow | who sent it | plane | if this message never arrives, what does the phone's owner actually see? |
|---|---|---|---|

That last column is most of the grade for this part. "The attach fails" is not an answer.
"No signal bars, and the phone keeps retrying every few seconds until it drops to LTE" is.

Finally, one paragraph (5 sentences max): **name one thing your generation could not do,
and the single architectural change in the next generation that fixed it.** Name the boxes.

## Part B — Audit the machine (25 pts)

The passage below was produced by a language model and sounds completely fluent. It
contains **at least six factual errors**.

> When you open a web page on a 5G standalone network, the phone first sends its IMSI to
> the gNodeB. The gNodeB forwards this to the AMF, which looks the subscriber up in the
> HSS and returns an authentication challenge. Because 5G uses mutual authentication, this
> was the first generation in which the phone could verify that the network was real. Once
> authentication succeeds, the AMF sets up the session, allocates your IP address, and
> begins forwarding your packets out to the Internet. Voice calls take a separate route:
> the AMF hands them to the MSC, which connects them to the PSTN over a circuit. If you
> move to a new cell, the UPF makes the handover decision based on your measurement
> reports. All of this happens whether or not your carrier has deployed a 5G core, since
> the 5G icon on your phone confirms that you are attached to one.

For each error, give three things:

- **the quoted words** that are wrong (short — a phrase, not the whole sentence),
- **the correction**, naming the right box or the right generation,
- **why the error is plausible** — one sentence on what the model probably confused it with.

Scoring: 3 pts per correctly identified and corrected error, up to 21. 4 pts for the
"why plausible" column being genuinely diagnostic rather than restating the correction.
**Inventing an error that is not there costs 2 pts**, so read carefully rather than
padding the list.

## Part C — Break it (25 pts)

Five scenarios. Five to eight sentences each. In every answer, **name the boxes** and say
explicitly whether the thing that broke was on the control plane or the user plane.

1. You are in the middle of a VoLTE call when the **MME** serving you crashes. What keeps
   working, what stops working, and at what moment do you personally notice?
2. Your carrier moves the **UPF** that serves your neighbourhood out of a central data
   centre and into a cabinet two kilometres from the tower. Which apps on your phone get
   measurably better, and which get exactly no benefit? Explain using the path a packet
   takes.
3. You are on **NSA 5G** and the LTE anchor cell drops out while the 5G cell stays strong.
   What happens to your data session, and why?
4. Your phone supports 2G through 5G. Someone nearby is running a fake 2G base station.
   Which of 5G's identity protections still protect you, and which are simply bypassed?
   What is the actual mitigation?
5. A vendor proposes deleting the **SMF** and letting the **AMF** program the UPF directly.
   Sketch what would break. Then answer the harder question: which earlier generation's
   architecture is that proposal, and why did 3GPP split those two jobs apart?

## Part D — Your own phone (20 pts)

This part cannot be done by a model, because the data does not exist until you go and
collect it.

Take readings at **three different locations** — at least one indoors, at least one
outdoors, and at least one where you are far from the others (different side of campus,
your apartment, a parking garage). At each one, record whatever your phone will tell you:

- radio technology in use (LTE, NR NSA, NR SA),
- band or frequency,
- cell identity (PCI, cell ID) and the tracking or location area code,
- signal level (RSRP / RSRQ / SINR if available).

How to get at it: on iOS, Field Test Mode via the dialer code `*3001#12345#*`. On Android,
`Settings > About phone > SIM status` gets you part of it, and a field-test app such as
Network Cell Info Lite gets you the rest. If your phone or carrier hides a field, say so —
"not available on my device" is an acceptable entry.

Then deliver:

1. A **table** of your three readings. Screenshots are welcome but the table is required.
2. For each field you recorded, **which part of the architecture does it belong to?** Say
   whether it describes the radio link, the RAN, or the core — and name the box that owns
   it. (Example: a tracking area code is not a radio property.)
3. One paragraph: **on the evidence you collected, has your carrier deployed a 5G core in
   Tallahassee, or only a 5G radio?** If your readings cannot settle it, say what reading
   *would* settle it. Both answers can earn full marks; a confident answer with no
   supporting field cannot.

## Part E — AI disclosure (required, 0 pts, −10 if missing)

A short section at the end of your `README.md`:

- which tools you used and roughly for what,
- **two prompts you actually sent**, pasted verbatim,
- **at least one thing the AI got wrong or vague that you had to fix**, and how you knew.

If your honest answer is that the AI got nothing wrong, go back and check one of its claims
about node names or about which box allocates the IP address. That is where they usually
break.

## In-class spot check

In the class after the deadline, a few students will be asked to put their own diagram on
screen for three minutes. The questions will be: *point at this arrow — who sent it, is it
control or user plane, and if I delete it, what breaks?* This counts toward participation,
and it is the reason the annotation columns above matter more than the drawing.

## Rubric summary

| part | pts | what earns them |
|---|---|---|
| A | 30 | correct nodes and order for the assigned generation; plane marked on every arrow; the failure column is concrete |
| B | 25 | errors found and corrected with the right box or generation named; no invented errors |
| C | 25 | boxes named; control vs user plane identified correctly; the answer follows the packet path rather than restating a definition |
| D | 20 | three real readings; each field mapped to the right layer; the core-vs-radio conclusion is supported by a specific field |
| E | 0 / −10 | present and honest |

## What loses marks fastest

- An arrow with no name on it.
- The right node names in the wrong generation.
- A control-plane box shown carrying user packets. If your diagram has the MME or the AMF
  passing traffic to the Internet, you have missed the single most important idea in this
  lecture.
- Answers that are fluent and long and never name a box.
