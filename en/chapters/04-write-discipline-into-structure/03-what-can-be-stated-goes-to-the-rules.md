---
originalLink: /chapters/04-纪律写进结构/03-说得清的交给规则
title: What Can Be Stated Goes to the Rules
---

# What Can Be Stated Goes to the Rules

A judgment that can be stated is not left for people to remember.

"Can be stated" means it can be written as a checkable end state.

## Sorting

| Judgment | Can it be stated | Where it goes |
|---|---|---|
| `__init__.py` contains only imports | Yes | A rule |
| A broad `except` must be marked explicitly | Yes | A rule |
| Datetimes carry a time zone | Yes | A rule |
| No blocking call inside an async function | Yes | A rule |
| No more than five levels of nesting | Yes | A rule |
| A class does not belong here | No | Discernment |
| Which layer this logic belongs in | No | Discernment |

## First ask whether a rule already exists

```text
__init__.py should contain only imports, no implementation code.
See whether ruff has a rule that can be configured for this.
```

- The first sentence is the end state.
- The second hands over the means.

The judgment stays in one's own hands. Finding the rule and editing the configuration go to the agent.

## A rule is discernment set solid

Every rule switched on and every rule ignored in a rule set is the record of one judgment.

The judgment is made once. The rule runs without limit.

## A reminder in the prompt is not a rule

| | A reminder in the prompt | A rule in the check |
|---|---|---|
| When not followed | No consequence | Does not pass |
| After the context grows | Diluted | Unchanged |
| For people | No effect | Works the same |

## After handing over

Formatting, line width, import order, nesting depth: nobody needs to speak about them again.

Review attention is kept for what the rules cannot reach.
