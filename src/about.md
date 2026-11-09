---
tags: about
permalink: false
---

I'm a network systems programmer. I work at the layer where packets are actually handled - ARP and DHCP, firewall and NAT dataplane, kernel modules and the daemons above them. The libraries and language runtimes on this page are the pieces that work gets assembled from. When a system needs to be told what to do, I'd rather give it a small language than another configuration format.

The oldest of this work has been [public](https://groups.google.com/g/comp.lang.awk/c/sCwNdeSeq3U) for the better part of two decades, and its priorities haven't shifted much since: a flexible API, few platform dependencies, and a host application that stays in charge. I would rather give a program tighter control over the machine underneath it than hide that machine away.

Several of these are embedded in production systems I maintain, all of them on ordinary modern hardware. The legacy machines are a personal habit rather than a requirement - Haiku, a PowerPC Mac, a VAX running OpenVMS - and I keep building there because platforms that strange keep turning up real bugs the mainstream ones quietly tolerate.

The approach underneath all of it is the same: understand the low-level mechanism, make it reusable, and leave the implementation open to read.
