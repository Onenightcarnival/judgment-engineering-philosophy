---
originalLink: /chapters/06-正向设计/02-有理由地偏离平均值
title: Deviate from the Average, with Reasons
---

# Deviate from the Average, with Reasons

The default output is the average. People copy what they have seen, a model outputs the mean of its training data, a team keeps to mainstream practice.

Deviating from the average takes a reason. The reason comes from derivation.

## Four cases

| | Can give a reason | Cannot give a reason |
|---|---|---|
| Does not deviate | Deference | Following the crowd |
| Deviates | Forward design | Novelty for its own sake |

- Deference and following the crowd share the same action.
- Forward design and novelty for its own sake share the same action.

Which cell it falls in depends only on the reason.

## The reason is written down

A set of lint rules is a baseline. Each deviation is registered together with its reason.

| Baseline rule | Deviation | The reason written down |
|---|---|---|
| An async function takes no timeout parameter | Ignored | The timeout parameter is part of the API here |
| No synchronous path operations in an async function | Ignored | These calls are local and fast enough |
| No print | Exempted in the command-line entry point | The command line's output is print |
| No ambiguous full-width characters | Ignored | The text is Chinese |

Two constraints make the register work:

- An exemption must name the rule it exempts.
- A deviation with no reason that can be written falls back to the baseline.

## For agents

A model's default output is the average. With no reason in the instruction, it does not deviate.

There are two ways to make it deviate:

- Give the reason.
- Give what the result looks like after deviating.
