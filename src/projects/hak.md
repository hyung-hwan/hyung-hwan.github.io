---
name: hak
order: 3
status: active
tags: projects
kicker: Language · C
repository: https://github.com/hyung-hwan/hak
summary: An experimental command language with a bytecode virtual machine and a class library written in itself.
topics:
  - interpreter
  - command language
  - objects
  - green processes
permalink: false
---

Hak is a command language with a real object runtime underneath it: classes and inheritance, message sends, lambdas, exceptions, and green processes with semaphores. A single character-at-a-time reader feeds the compiler, so a script file, an interactive prompt, and a client on the far end of its binary exchange protocol all reach the same engine.
