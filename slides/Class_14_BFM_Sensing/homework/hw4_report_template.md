# HW4 Report: Beamforming Feedback Around Me

**Name:**

Replace every *(your answer)* below. Put your figure images in `figures/` and keep the image
links working. Write each device as its vendor plus a short name (for example `Netgear-AP`,
`Apple-1`), never its full MAC address.

## Part 1. Capture

**My laptop and how I got monitor mode:** *(your answer)*

**The exact commands or steps I used:**

```
(your commands)
```

**One compressed beamforming report opened in Wireshark:**

![one beamforming report](figures/part1_wireshark.png)

| | total in my capture | per second |
|---|---|---|
| NDP announcements (`wlan.fc.type_subtype == 0x0015`) | | |
| beamforming reports (`wlan.fc.type_subtype == 0x000e`) | | |

## Part 2. Where does the BFM come from?

| beamformer (asked) | beamformee (answered) | mine? | channel | bandwidth | standard | Nr x Nc | subcarriers | angle bits | reports per second |
|---|---|---|---|---|---|---|---|---|---|
| | | | | | | | | | |

**Figure A. Reports per second over my whole capture** (video stopped and restarted are marked):

![Figure A](figures/figureA_reports_per_second.png)

**Which device sends the report, and why in that direction?** *(your answer)*

**What happened to the report rate when the video stopped, and why?** *(your answer)*

## Part 3. The first picture of my channel

**The pair I used:** *(beamformer -> beamformee, from your table)*

**Figure B. One angle as a heatmap** (x: time in seconds, y: subcarrier frequency in MHz)

(a) nobody moves:

![Figure B (a)](figures/figureB_still.png)

(b) I walk between the AP and the client:

![Figure B (b)](figures/figureB_walking.png)

**Figure C. Angle spectrum over time with MUSIC** (x: time in seconds, y: angle in degrees), for (b):

![Figure C](figures/figureC_music.png)

**What changes between (a) and (b), and where in the figures was I walking?** *(your answer)*

## Part 4. Toward my final project

*(3 to 5 sentences: what an AI model should recognize from BFM like mine, the input, the label,
how I would collect the labels, and whether my report rate is fast enough)*
