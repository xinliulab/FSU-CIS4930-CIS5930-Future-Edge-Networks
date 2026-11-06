# Final Project: Teach an AI to Sense with Your BFM

**CIS4930 / CIS5930 Future Edge Networks**

**Due: Wednesday, December 9, 11:59 p.m. ET.** 40% of the course grade. There is no final
presentation.

**Three deliverables** (weights are of the course grade, as in the syllabus):
1. **Code and data (20%)** - pushed to your final-project repository on GitHub.
2. **Demo video (10%)** - 3 to 5 minutes of your system working; you may talk over your
   slides. Upload it to Canvas.
3. **Paper (10%)** - up to 7 pages in the AAAI two-column format, posted on arXiv. Details
   below.

## The idea

In HW4 you found the beamforming feedback (BFM) in the air around you, decoded it, and drew
its first picture. You saw that when you move, the picture moves. The final project closes the
loop: **collect BFM yourself, label it, and train an AI model to recognize something physical
from it.**

This is the whole arc of the course on one page: Wi-Fi communication produces BFM for free,
BFM is a sensing signal, and learning turns the signal into an answer.

## Two example projects (or bring your own)

- **What is my hand doing?** Hold your phone and repeat a few gestures: lift it, lower it,
  wave it, draw a circle, hold it still. Your phone answers the AP's soundings the whole time,
  so each gesture leaves its own trace in the BFM your phone sends. Label the time spans,
  train a classifier, and report how well the model tells the gestures apart.
- **Which room am I in?** Walk through your home with your phone, pausing in each room.
  Collect a few sessions per room on different days. Train a model that answers "which room"
  from a short window of BFM, and test it on a day the model never saw.
- **Your own idea.** Sitting or standing? Door open or closed? Someone walking between the AP
  and the client, or not? Anything physical that your BFM can see is fair game. If you are
  unsure whether your idea is the right size, email me a two-sentence description first.

Keep the task modest. Two or three classes recognized reliably from your own data is a
complete project; ten classes recognized poorly is not.

## Ground rules

- **Your own data, from your own device.** The model must be trained on BFM you captured
  yourself, and the reports must be **sent by your own device** - your own phone or laptop
  answering the AP's soundings. Never build on feedback from other people's devices. Your
  home Wi-Fi works, and for this project **FSU's campus Wi-Fi is also allowed** - connect
  your own phone to it and capture your own phone's reports. If your home Wi-Fi never sounds
  at all (some apartment networks don't - HW4 taught you how to check), campus Wi-Fi is your
  way out.
- **Privacy, as in HW4.** Do not publish raw captures with other people's traffic. In the
  paper, name devices as vendor plus a short name, not full MAC addresses.
- **Use AI for everything, own everything.** You may use AI tools for the whole pipeline:
  the capture scripts, the decoding, the training code, the figures, and the writing. You are
  the organizer. You are responsible for every number and every claim in the paper, and you
  must be able to answer questions about your own data and figures.

## The pipeline

1. **Collect.** Capture BFM as in HW4 (your sniffer, locked to your AP's channel). Record
   while the thing you want to recognize is happening, and write down the labels as you go -
   a timestamped note per gesture, per room, per state. Collect more than one session, on
   more than one day if you can.
2. **Decode.** Turn the reports into angle sequences with
   [Wi-BFI](https://github.com/kfoysalhaque/Wi-BFI), the
   [BFMScan](https://github.com/xlstacklab/26UbiComp_BFMScan) parser, or your own code.
3. **Label.** Cut the sequences into windows and attach your labels.
4. **Train.** Any model you like - a small CNN, an LSTM, a transformer, or something
   classical like a random forest on handcrafted features. Simple and well evaluated beats
   fancy and unverified.
5. **Evaluate honestly.** Split by session, never by window: if windows from the same minute
   of capture land in both training and test sets, the accuracy is fiction. The strongest
   evidence is a test on a session collected on a different day. Report a confusion matrix,
   not just one accuracy number.

**Read BFMScan first** (paper and code:
[github.com/xlstacklab/26UbiComp_BFMScan](https://github.com/xlstacklab/26UbiComp_BFMScan)).
It is the worked example of this whole pipeline - how to go from raw reports to angles, how
to see motion in them, and how to evaluate a BFM sensing system. BFMSense
([NSDI 2024](https://usenix.org/conference/nsdi24/presentation/yi)) is the second reading.

## The paper

Write it as a real AI paper, **7 pages at most** (references do not count against the
limit), in the **AAAI two-column format** - the standard format of AAAI, one of the major AI
conferences. Use the official [AAAI author kit](https://aaai.org/authorkit26/); Overleaf also
hosts ready-to-use copies ([AAAI templates on Overleaf](https://www.overleaf.com/gallery/tagged/aaai)).

A natural structure: abstract; introduction (what you recognize and why BFM can see it);
background and related work (BFM, BFMScan, BFMSense); data collection (setup, devices,
sessions, labels); method; evaluation (splits, confusion matrix, where it fails); discussion
and conclusion. Every figure must come from your own data.

## Posting on arXiv

Posting the paper on arXiv is **required**. By the deadline:

1. Email me the final PDF for a quick check **before** you post. If arXiv asks you for an
   endorsement for your category (cs.NI is a good fit), ask me and I will endorse it.
2. Submit it to arXiv yourself, then paste the arXiv link or submission ID on Canvas.
3. Push everything to your final-project repository: the paper source and PDF in `paper/`,
   your code in `code/`, and a `README.md` with the arXiv link and one paragraph on how to
   reproduce your result.

If posting stalls (arXiv moderation can take a few days), the emailed PDF, the Canvas
submission ID, and the pushed repo by the deadline count as on time.

## What earns the points

- **Code and data (20% of course grade):** your own labeled BFM, more than one session, a
  working pipeline, and a repo README that lets someone redo your result.
- **Demo video (10%):** the system actually running on your data, shown end to end in 3 to 5
  minutes.
- **Paper (10%):** a clear task, an honest evaluation (split by session, confusion matrix,
  failure cases), real figures from your own data, readable writing, posted on arXiv.

## Suggested schedule

- **Week of 11/9:** pick the task, email me if unsure; first labeled capture session.
- **Week of 11/16:** decode, label, first model trained on anything at all.
- **Week of 11/23 (Thanksgiving):** more sessions, the different-day test set.
- **Week of 11/30:** freeze results, write the paper (12/2 has no class - use it).
- **By 12/9:** PDF to me, post on arXiv, record the demo video, upload it to Canvas, push the repo.
