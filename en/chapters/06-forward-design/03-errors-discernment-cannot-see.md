---
originalLink: /chapters/06-正向设计/03-眼光看不见的错
title: Errors Discernment Cannot See
---

# Errors Discernment Cannot See

Discernment judges fast. It looks at the frame: whether the tool is right, whether the paradigm fits, which layer handles it, how tight the constraints are.

Errors of behavior are outside its field of view.

## A piece of code that looks clean

```python
def chunks(items: list[int], size: int) -> list[tuple[int, ...]]:
    return list(zip(*[iter(items)] * size))
```

One line, an idiom, fully annotated.

## What discernment sees

The constraint is too tight.

| What the signature demands | What the body uses |
|---|---|
| `items` is a `list` | `items` can be iterated |
| The elements are `int` | Nothing is asked of the elements |

A signature constrains only the behavior the body uses. This is duck typing.

```python
def chunks[T](items: Iterable[T], size: int) -> list[tuple[T, ...]]:
    return list(zip(*[iter(items)] * size))
```

Strings, generators, sequences of any element type can now be passed in.

This judgment takes under ten seconds and does not require running the code.

## What discernment does not see

```python
>>> chunks([1, 2, 3, 4, 5], 2)
[(1, 2), (3, 4)]
```

The 5 is gone. A tail that does not fill a group is dropped, with no error.

After the signature is fixed, this error is still there.

```python
>>> list(itertools.batched([1, 2, 3, 4, 5], 2))
[(1, 2), (3, 4), (5,)]
```

## Two kinds of check

| | Discernment | Verification |
|---|---|---|
| The question | Should it be done this way | Was it done correctly |
| What it looks at | The frame | Behavior and edge cases |
| Speed | Seconds | Requires running, requires working it through |
| What it cannot see | Errors of behavior | Errors of direction |

Neither replaces the other.

- Discernment alone: the direction is right, and the details ship with errors.
- Verification alone: every case passes, and the thing built was not worth building.

## The order

Discernment first, then verification.

- What is not worth doing need not be verified.
- What is worth doing must be verified.

A passing happy path says something only about the happy path.
