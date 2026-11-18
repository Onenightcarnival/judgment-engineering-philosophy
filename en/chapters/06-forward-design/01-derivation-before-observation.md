---
originalLink: /chapters/06-正向设计/01-推导先于观察
title: Derivation Before Observation
---

# Derivation Before Observation

A design has two possible bases. Observation answers "how do others do it". Derivation answers "what will necessarily follow from doing it this way".

Where derivation is possible, observation is not relied on.

## The two bases

| | Observation | Derivation |
|---|---|---|
| The question it answers | How do others do it | What will necessarily follow |
| What it requires | A precedent can be found | Understanding the mechanism |
| The guarantee it gives | The precedent held under its own conditions | If the premises hold, the conclusion holds |
| When it fails | The conditions changed and nobody noticed | A premise was wrong |

An observed practice carries its original conditions. The practice gets copied; the conditions stay behind.

## Three steps

1. List the options.
2. Work out the necessary consequences of each option.
3. Choose by consequences.

The second step records only what must happen, not what might.

## An example

A web service whose routes need a database session. Two options.

```python
# Option 1: the session factory lives in global state; the route fetches it
@router.get("/orders/{order_id}")
async def get_order(order_id: int, request: Request) -> Order:
    async with request.app.state.session_factory() as session:
        ...


# Option 2: the route declares the dependency in its signature
@router.get("/orders/{order_id}")
async def get_order(order_id: int, session: AsyncSession = Depends(get_session)) -> Order:
    ...
```

| | Global state | Declared in the signature |
|---|---|---|
| What a route depends on | Known after reading the body | Known from the signature |
| Replacing a dependency in tests | Change the global state | Replace this one dependency |
| Adding one more use | Reachable from anywhere, no record | Every use is written in a signature |

At this point the choice is already made. Which option most projects use never entered the process.

## The premise

Derivation requires understanding the mechanism. Without it, the derived "necessity" is imagination.

Defer to the baseline while not understanding; derive once understanding. The order does not reverse.
