# HW4: Capture Wi-Fi Beamforming Feedback Around You

**CIS4930 / CIS5930 Future Edge Networks**

**Due: Wednesday, November 4, 11:59 p.m. ET** (extended by one week). 100 points.

**Submit by pushing to the default branch of this repo. That is the only place you submit.**
Canvas only shows your grade.

## Why this assignment

Wi-Fi now does two jobs: it communicates, and it can sense. To send a strong beam to your
laptop, the access point (AP) has to know the channel between them. So it asks: it sends a
short announcement (NDPA) and a training packet (NDP), your laptop measures the channel, and
your laptop sends back a **compressed beamforming report**, the beamforming feedback matrix
(BFM). The BFM is a compressed copy of the channel, written as a list of angles.

That report travels through the air **unencrypted**. Any laptop in monitor mode can read it.
Most devices never give you the raw channel (CSI), but every modern Wi-Fi AP and client
produce BFM for free. That makes BFM a sensing signal anyone can use.

In the second half of this course we turn to AI. Your **final project** trains an AI model on
BFM that you capture yourself. HW4 is the first step: find the BFM around you, find out where
it comes from, and draw its first picture.

You are encouraged to use AI tools (ChatGPT, Claude, Copilot, anything) to help you. What is
graded is your own capture, your own environment, and whether you can explain them.

## Where you may capture (read this first)

- Capture **only on a network you own or have permission to use**, such as your home Wi-Fi.
  Do **not** capture on FSU's campus network.
- Keep your capture files on your laptop. **Do not push `.pcap` / `.pcapng` files**, and in
  your report write each device as its vendor plus a short name (for example `Netgear-AP`,
  `Apple-1`), not its full MAC address.

## Your sniffer: find your laptop in this table

| your laptop | how to get monitor mode |
|---|---|
| **macOS** | Built in. Hold Option, click the Wi-Fi icon, choose **Open Wireless Diagnostics**, then menu **Window > Sniffer**. Pick your AP's channel and width. It saves a `.pcap` file. |
| **Linux** (Intel AX200/AX210 and most USB adapters) | `sudo iw dev wlan0 set type monitor`, then set the channel, then capture with Wireshark or `tcpdump`. |
| **Windows** | Boot Ubuntu from a USB stick ("Try Ubuntu", nothing is installed) and use the Linux row. |

If none of these works for you, email the instructor **by Monday, October 19**.

## Part 1. Capture (20 pts)

1. Find your AP's channel and bandwidth (your phone or laptop's Wi-Fi details show them).
   Put your sniffer on that channel and width.
2. On another device connected to the same AP, stream a video. Beamforming reports appear
   when the AP is sending data. Capture for at least 5 minutes, and stop the video for one
   minute in the middle.
3. Open the capture in Wireshark. Two filters show what you need:
   `wlan.fc.type_subtype == 0x0015` (the NDP announcements) and
   `wlan.fc.type_subtype == 0x000e` (the beamforming reports).

In `report.md`: your laptop and how you got monitor mode, the exact commands, a screenshot of
one compressed beamforming report opened in Wireshark, and how many NDPA and report frames you
captured (in total and per second).

## Part 2. Where does the BFM come from? (35 pts)

Fill in the **source table** in `report.md`: one row per AP–client pair that sent reports.

| column | what it means |
|---|---|
| beamformer | the device that asked (sent the NDPA and NDP): vendor + ID |
| beamformee | the device that answered with the report: vendor + ID. Is it yours? |
| channel, bandwidth | e.g. 36, 80 MHz |
| standard | 802.11ac (VHT) or 802.11ax (HE) |
| Nr x Nc | the size of the matrix in the report |
| subcarriers | how many subcarriers the report covers |
| angle bits | how many bits each angle (phi, psi) uses |
| reports per second | average over your capture |

Then:
- **Figure A:** reports per second against time over your whole capture. Mark when the video
  stopped and restarted.
- Explain in a few sentences: which device sends the report and why it is that direction;
  what happened to the report rate when the video stopped, and why.

## Part 3. The first picture of your channel (35 pts)

Pick one AP–client pair from your table. Decode its reports into angles. You may use
[Wi-BFI](https://github.com/kfoysalhaque/Wi-BFI), the parser in
[BFMScan](https://github.com/xlstacklab/26UbiComp_BFMScan), or your own code.

Record two short captures of the same pair, about one minute each:
**(a) nobody moves**, and **(b) you walk between the AP and the client**.

- **Figure B:** one angle (for example phi_11) as a heatmap: time in seconds on the x-axis,
  subcarrier frequency in MHz on the y-axis. One heatmap for (a), one for (b).
- **Figure C:** the angle spectrum over time (x: time in seconds, y: angle in degrees),
  computed with MUSIC as in BFMScan, for (b).
- Explain in a few sentences what changes between (a) and (b), and point at where in your
  figures you were walking.

## Part 4. Toward your final project (10 pts)

In 3 to 5 sentences: what would you like an AI model to recognize from BFM like yours? What
would the input be, what would the label be, and how would you collect the labels? Is your
report rate (from Part 2) fast enough for it?

## What to push

| file | what it is |
|---|---|
| `report.md` | your answers and figures (Parts 1 to 4), already laid out for you |
| `figures/` | your figure images, shown inside `report.md` |
| `code/` | the code you wrote to decode and plot |

## In-class spot check

In the class after the deadline, a few students will open their own `report.md` and answer
for three minutes: *Point at one row of your source table: which device is it, and why does
it send reports? In Figure B (b), where were you walking?*

## Reading

- Class 14 slides: Beamforming Feedback as a Sensing Signal
- BFMScan (IMWUT 2026): paper and code at
  [github.com/xlstacklab/26UbiComp_BFMScan](https://github.com/xlstacklab/26UbiComp_BFMScan)
- BFMSense (USENIX NSDI 2024):
  [paper](https://usenix.org/conference/nsdi24/presentation/yi)
- Wi-BFI (ACM WiNTECH 2023), an open-source BFM decoder:
  [github.com/kfoysalhaque/Wi-BFI](https://github.com/kfoysalhaque/Wi-BFI)

## Suggested two-week plan

- **Week 1:** get monitor mode working and finish Part 1 and Part 2. Push.
- **Week 2:** the two short captures, Part 3, then Part 4. Push.

## Grading summary

| part | pts | what earns them |
|---|---|---|
| 1. Capture | 20 | monitor mode working, commands, a real report in Wireshark, frame counts |
| 2. Where the BFM comes from | 35 | a correct source table from your own capture, Figure A, the explanation |
| 3. The first picture | 35 | Figures B and C from your own data, and what changes when you walk |
| 4. Toward your final project | 10 | a concrete AI task with input, label, and a check on the report rate |
