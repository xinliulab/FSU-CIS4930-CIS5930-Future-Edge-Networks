# Expected Answers

Companion to `quiz.md`. **Do not show this file to `ran-student`.** It exists so the
orchestrator can score the student's answers without the student having seen them.

Keep the headings in sync with `quiz.md`.

### [file] Frame title
Expected: ...
```

## Part 1

### [1_generation_recap] Somebody paid about $50 for that icon this month
Expected: Nothing happens to the bill. The product is access to the network, not
data by the gigabyte, which is why carriers compete on bundles rather than on price
per megabit.

### [1_generation_recap] The bills are flat. The build is not.
Expected: Revenue per line is roughly flat and slightly down (AT&T postpaid phone ARPU
$56.57, down 0.3% year over year, and about flat for three years). Spending is going up
(AT&T guides $23-24 billion a year of capital investment through 2028, and last quarter
was $5.7 billion against $4.9 billion a year earlier). Both figures are AT&T's.

### [1_generation_recap] Your phone picks the loudest tower, not the honest one
Expected: Signal strength decides, and the choice happens before any identity check.
The phone normally answers with a temporary ID -- unless the tower insists on the
permanent one, which is exactly what an IMSI catcher is built to do.

### [1_generation_recap] 2G checked your ID. You never got to check theirs.
Expected: The phone proves itself to the network; the network proves nothing back, and
it also chose whether to encrypt at all. From 3G onward the network must prove itself
too -- but the phone still has to pick a tower before it can check anything.

### [3_architecture_evolution] Wait --- where did SGSN and GGSN go?
Expected: Each box made control decisions and carried user traffic, two jobs with very
different growth rates -- ten times the video does not mean ten times the attach
requests, so scaling for data forced you to buy decision capacity you did not need. 4G
started the cut: the MME decides and never touches packets. But the gateways kept doing
both, and finishing the split took until 2017.

### [3_architecture_evolution] And the MSC? It had been there since 2G.
Expected: It dropped back to 2G or 3G to make the call -- circuit-switched fallback,
CSFB. Texts still reached a legacy switch too. The MSC was not replaced when LTE
arrived; it was demoted to a fallback and stayed in service for years.

### [3_architecture_evolution] This is not a coincidence anymore
Expected: The seam between deciding and carrying. One box becomes two when the part
that makes decisions and the part that moves traffic need to grow or change separately.

## Part 2

### [6_5g_core] Third time. Where did the MME go?
Expected: Because the decisions inside it did not resemble each other. Checking who
you are happens once, tracking where you are happens constantly, and setting up a
session happens per app -- three different loads in one box. 5G separated them into
AMF (access and mobility) and SMF (sessions).

### [7_security] The same problem, four times
Expected: The phone still has to choose a tower and start talking to it before it can
verify anything about that tower. Each generation closed a specific weakness; none
removed the need to go first.

### [7_security] 5G stopped sending the identity in the clear
Expected: A concealed identifier (SUCI), encrypted so only the home network can open
it. It fails if the operator has not enabled concealment, and it can be sidestepped by
pushing the phone down to an older generation that never had it.

### [7_security] Two ways it still leaks
Expected: Backward compatibility means the phone can be pushed onto an older
generation so it keeps working outside 5G coverage -- and once there, it plays by that
generation's weaker rules.

### [8_economics] Roughly where a fifth of your bill goes
Expected: Roughly $12 a month, about a fifth. It is crude because the capex figure
covers broadband and business lines too, and because "connections" counts tablets and
watches rather than just phones.

### [8_economics] Four national carriers became three
Expected: Any two of AT&T Wireless (into Cingular), Nextel (into Sprint), Alltel (into
Verizon), or Sprint (into T-Mobile). The direction is consolidation, not fragmentation.

### [8_economics] What a satellite can and cannot take
Expected: Coverage and capacity are different products. A satellite covers a huge area
and everyone inside it shares that capacity, so it wins where there are no towers and
loses where people are dense, which is exactly where towers are built.

### [5_part2_open] Two things from Monday you need today
Expected: One box becomes two along the seam between deciding and carrying, because the
halves grow at different rates. Three times so far: the 2G base station, the MSC in
2001, and the GPRS core.

### [4_oran] O-RAN opens the seams, then adds control loops
Expected: It buys the option to put a different vendor's box on the other side of that
line. It costs integration work, because two boxes that both claim the same interface
still have to be made to work together.

### [4_oran] So: where does the fake-tower detector live?
Expected: As an xApp on the Near-RT RIC, reading measurements from the RAN over E2.
It became possible because opening the interfaces turned a change that used to require
the base-station vendor into an application somebody else can write.

### [5_synthesis] Five generations in one low-resolution map
Expected: Where control lives. The radio name changes every generation, but the deeper
story is which box decides and where that box sits.
