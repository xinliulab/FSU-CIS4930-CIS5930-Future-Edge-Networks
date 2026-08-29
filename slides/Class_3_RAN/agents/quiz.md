# Comprehension Quiz

One question per frame. Written by `ran-slides-engineer` as frames are added, read by
`ran-student`, which is instructed to read **only the `Q:` lines** and answer from the slide
text alone.

A question must be answerable from the slide itself. If it needs the instructor's spoken
explanation, the slide is not carrying its own weight and that is what this file is meant to
expose. A question whose answer is the frame title is too easy to be worth asking.

Format:

```text
### [file] Frame title
Q: ...
Expected: ...
```

## Part 1

### [1_generation_recap] Somebody paid about $50 for that icon this month
Q: Your data usage doubles this month. What happens to your bill, and what does that
tell you about what a carrier is actually selling?
Expected: Nothing happens to the bill. The product is access to the network, not
data by the gigabyte, which is why carriers compete on bundles rather than on price
per megabit.

### [1_generation_recap] The bills are flat. The build is not.
Q: Is revenue per phone line going up or down, and is network spending going up or down?
Expected: Revenue per line is roughly flat and slightly down (AT&T postpaid phone ARPU
$56.57, down 0.3% year over year, and about flat for three years). Spending is going up
(AT&T guides $23-24 billion a year of capital investment through 2028, and last quarter
was $5.7 billion against $4.9 billion a year earlier). Both figures are AT&T's.

### [1_generation_recap] Your phone picks the loudest tower, not the honest one
Q: What decides which tower your phone connects to, and what identity does the phone
normally hand over once it gets there?
Expected: Signal strength decides, and the choice happens before any identity check.
The phone normally answers with a temporary ID -- unless the tower insists on the
permanent one, which is exactly what an IMSI catcher is built to do.

### [1_generation_recap] 2G checked your ID. You never got to check theirs.
Q: In 2G, who proves their identity to whom, and from which generation did that change?
Expected: The phone proves itself to the network; the network proves nothing back, and
it also chose whether to encrypt at all. From 3G onward the network must prove itself
too -- but the phone still has to pick a tower before it can check anything.

### [3_architecture_evolution] Wait --- where did SGSN and GGSN go?
Q: SGSN and GGSN worked. Why did 4G split them apart, and was that split finished in 4G?
Expected: Each box made control decisions and carried user traffic, two jobs with very
different growth rates -- ten times the video does not mean ten times the attach
requests, so scaling for data forced you to buy decision capacity you did not need. 4G
started the cut: the MME decides and never touches packets. But the gateways kept doing
both, and finishing the split took until 2017.

### [3_architecture_evolution] And the MSC? It had been there since 2G.
Q: LTE had no circuit switch. So what happened when an early LTE phone made a call?
Expected: It dropped back to 2G or 3G to make the call -- circuit-switched fallback,
CSFB. Texts still reached a legacy switch too. The MSC was not replaced when LTE
arrived; it was demoted to a fallback and stayed in service for years.

### [3_architecture_evolution] This is not a coincidence anymore
Q: State in one sentence the seam that the 2G base station split, the 2001 MSC split,
and the 4G core split all fall along.
Expected: The seam between deciding and carrying. One box becomes two when the part
that makes decisions and the part that moves traffic need to grow or change separately.

## Part 2

### [6_5g_core] Third time. Where did the MME go?
Q: The MME made control decisions and never touched user packets. It was already on
the right side of the 4G split. So why did 5G split it again?
Expected: Because the decisions inside it did not resemble each other. Checking who
you are happens once, tracking where you are happens constantly, and setting up a
session happens per app -- three different loads in one box. 5G separated them into
AMF (access and mobility) and SMF (sessions).

### [7_security] The same problem, four times
Q: What did every generation from 2G to 5G fail to fix about the first contact
between a phone and a tower?
Expected: The phone still has to choose a tower and start talking to it before it can
verify anything about that tower. Each generation closed a specific weakness; none
removed the need to go first.

### [7_security] 5G stopped sending the identity in the clear
Q: What is sent over the air in 5G instead of the permanent subscriber identity, and
what are the two ways that protection can still fail?
Expected: A concealed identifier (SUCI), encrypted so only the home network can open
it. It fails if the operator has not enabled concealment, and it can be sidestepped by
pushing the phone down to an older generation that never had it.

### [7_security] Two ways it still leaks
Q: Why does a phone supporting older generations create a security problem?
Expected: Backward compatibility means the phone can be pushed onto an older
generation so it keeps working outside 5G coverage -- and once there, it plays by that
generation's weaker rules.

### [8_economics] Roughly where a fifth of your bill goes
Q: About how much of a $50 monthly bill goes back into building the network, and why
is that figure only an estimate?
Expected: Roughly $12 a month, about a fifth. It is crude because the capex figure
covers broadband and business lines too, and because "connections" counts tablets and
watches rather than just phones.

### [8_economics] Four national carriers became three
Q: Name two carrier brands that no longer exist independently, and say what the
overall direction of this market has been.
Expected: Any two of AT&T Wireless (into Cingular), Nextel (into Sprint), Alltel (into
Verizon), or Sprint (into T-Mobile). The direction is consolidation, not fragmentation.

### [8_economics] What a satellite can and cannot take
Q: Why does a satellite network not simply replace towers?
Expected: Coverage and capacity are different products. A satellite covers a huge area
and everyone inside it shares that capacity, so it wins where there are no towers and
loses where people are dense, which is exactly where towers are built.
