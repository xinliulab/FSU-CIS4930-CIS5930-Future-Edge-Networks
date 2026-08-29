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

### [1_generation_recap] Now multiply that by a nationwide build
Q: Is revenue per phone line going up or down, and is network spending going up or down?
Expected: Revenue per line is flat to slightly down (AT&T postpaid phone ARPU about
$56.64, down 0.8% year over year). Spending is going up (Verizon guided 2025 capex to
$17.5-18.5 billion, up from $17.1 billion). The two move in opposite directions.

### [1_generation_recap] Your phone picks the loudest tower, not the honest one
Q: What decides which tower your phone connects to?
Expected: Signal strength. The phone attaches to the strongest signal it can hear, and
that choice happens before any identity check.

### [1_generation_recap] 2G checked your ID. You never got to check theirs.
Q: In 2G, who proves their identity to whom?
Expected: The phone proves itself to the network. The network proves nothing back.
Authentication ran one direction only, which is what made a fake base station work.

### [3_architecture_evolution] Wait --- where did SGSN and GGSN go?
Q: SGSN and GGSN worked. Why did 4G split them apart anyway?
Expected: Each box was doing two jobs with different growth rates: making control
decisions and carrying user traffic. Traffic grew much faster than the number of
decisions, so scaling for data forced you to buy decision capacity you did not need.
4G cut along that seam into MME (decisions) and S-GW/P-GW (packets).

### [3_architecture_evolution] And the MSC? It had been there since 2G.
Q: Why could the MSC not survive into LTE?
Expected: The MSC was a circuit switch, and LTE carried only IP. Keeping it meant
running a second, separate network alongside the packet one. Voice had to stop being a
network service and become an application riding on IP instead.

### [3_architecture_evolution] You have now watched the same move twice
Q: State in one sentence the rule that explains both the 2G base station split and the
4G core split.
Expected: One box becomes two when its two halves need to change or scale at different
speeds.

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
