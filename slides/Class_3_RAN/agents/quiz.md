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
