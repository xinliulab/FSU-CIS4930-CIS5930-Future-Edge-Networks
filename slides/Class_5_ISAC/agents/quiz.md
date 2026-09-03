# Comprehension Questions

One question per frame, written by `ran-slides-engineer` as frames are added.

**`ran-student` reads this file and only this file.** The expected answers live in
`quiz-answers.md`, which the student agent must never open. They were previously kept
here beneath each question, and two separate student passes reported accidentally
seeing an expected answer while filtering for question lines. Splitting the files
removes the failure mode instead of relying on the agent to look away.

A question must be answerable from the slide itself. If it needs the instructor's
spoken explanation, the slide is not carrying its own weight, and exposing that is the
point of this file. A question whose answer is the frame title is too easy to ask.

### [file] Frame title
Q: ...

### [1_generation_recap] Somebody paid about $50 for that icon this month
Q: Your data usage doubles this month. What happens to your bill, and what does that
tell you about what a carrier is actually selling?

### [1_generation_recap] The bills are flat. The build is not.
Q: Is revenue per phone line going up or down, and is network spending going up or down?

### [1_generation_recap] Your phone picks the loudest tower, not the honest one
Q: What decides which tower your phone connects to, and what identity does the phone
normally hand over once it gets there?

### [1_generation_recap] 2G checked your ID. You never got to check theirs.
Q: In 2G, who proves their identity to whom, and from which generation did that change?

### [3_architecture_evolution] Wait --- where did SGSN and GGSN go?
Q: SGSN and GGSN worked. Why did 4G split them apart, and was that split finished in 4G?

### [3_architecture_evolution] And the MSC? It had been there since 2G.
Q: LTE had no circuit switch. So what happened when an early LTE phone made a call?

### [3_architecture_evolution] This is not a coincidence anymore
Q: State in one sentence the seam that the 2G base station split, the 2001 MSC split,
and the 4G core split all fall along.

### [6_5g_core] Third time. Where did the MME go?
Q: The MME made control decisions and never touched user packets. It was already on
the right side of the 4G split. So why did 5G split it again?

### [7_security] The same problem, four times
Q: What did every generation from 2G to 5G fail to fix about the first contact
between a phone and a tower?

### [7_security] 5G stopped sending the identity in the clear
Q: What is sent over the air in 5G instead of the permanent subscriber identity, and
what are the two ways that protection can still fail?

### [7_security] Two ways it still leaks
Q: Why does a phone supporting older generations create a security problem?

### [8_economics] Roughly where a fifth of your bill goes
Q: About how much of a $50 monthly bill goes back into building the network, and why
is that figure only an estimate?

### [8_economics] Four national carriers became three
Q: Name two carrier brands that no longer exist independently, and say what the
overall direction of this market has been.

### [8_economics] What a satellite can and cannot take
Q: Why does a satellite network not simply replace towers?

### [5_part2_open] Two things from Monday you need today
Q: State the rule from Monday in the form the slide gives it, and say how many times
you have already seen it happen.
Q-note: this question exists to detect cold-start failure. If the answer comes back
with the wrong count, or with "different speeds" but not the deciding/carrying seam,
the refresher is not doing its job.

### [4_oran] O-RAN opens the seams, then adds control loops
Q: What does opening an interface between two boxes actually buy you, and what does it
cost you?

### [4_oran] So: where does the fake-tower detector live?
Q: Earlier the lecture asked where a fake-tower detector could live. What is the answer,
and what made that answer possible?

### [5_synthesis] Five generations in one low-resolution map
Q: Across all five generations, what is the one thing that kept moving?
