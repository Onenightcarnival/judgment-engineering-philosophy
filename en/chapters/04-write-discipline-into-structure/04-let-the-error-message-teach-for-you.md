---
originalLink: /chapters/04-纪律写进结构/04-让报错替你教
title: Let the Error Message Teach for You
---

# Let the Error Message Teach for You

An error message is an event built in advance.

When the author of the rule is absent, the error message speaks for them.

## Three grades

| What the message says | What the receiver gets |
|---|---|
| Something is wrong here | Knows there is an error |
| Which rule was broken | Knows where to change |
| What it should look like instead | Knows the end state |

A third-grade error message is itself an instruction.

## An example

```toml
[tool.ruff.lint.flake8-tidy-imports.banned-api]
"typing.TYPE_CHECKING".msg = "No type-only import blocks. On an import cycle, check the domain boundaries first."
```

The rule bans one way of writing and, in the same breath, says where to look after hitting it.

## Timing

| The same sentence appears | When the agent reads it |
|---|---|
| At the top of the prompt | Thousands of lines away from the offending code |
| In the error message | With the offending code right in front of it |

An error message arrives at the moment it is most needed.

## Point at the right layer

The fix an error message points to has to land on the right layer.

| The fix the message leads to | Result |
|---|---|
| Working around it in code | The check passes; the error stays where it was |
| Going back to the layer that produced the error | The error disappears |

See [Let Structure Expose the Error](../06-forward-design/04-let-structure-expose-the-error.md).

## The limit

An error message can teach only what can be stated. For what cannot be stated, no end state can be written into the message.
