---
originalLink: /chapters/06-正向设计/04-让结构暴露错误
title: Let Structure Expose the Error
---

# Let Structure Expose the Error

There are two kinds of verification. One waits for time to deliver the result. The other is delivered by structure on the spot.

What can be handed to structure is not left to time.

## Two ways to cut

One service, three business domains, each with routes, business logic, templates and data models. The directory can be cut two ways.

Cut horizontally first, by technical layer:

```
app/
  routers/      order.py   billing.py   inventory.py
  services/     order.py   billing.py   inventory.py
  templates/    order.py   billing.py   inventory.py
  models/       order.py   billing.py   inventory.py
```

Cut vertically first, by domain, then by layer inside each domain:

```
app/
  order/        router.py   service.py   template.py   model.py
  billing/      router.py   service.py   template.py   model.py
  inventory/    router.py   service.py   template.py   model.py
```

## Necessary consequences

| | Horizontal first | Vertical first |
|---|---|---|
| What a cross-domain call looks like | An ordinary reference within one directory | An import across directories |
| When a domain boundary is drawn wrong | No signal | Shows up in the imports at once |
| Where coupling heads | Piles up into spaghetti calls | Every instance is visible and countable |
| Extracting one domain | Picking files layer by layer | Moving one directory |

Horizontal first: `services/order.py` referencing `services/billing.py` looks no different from referencing any other file in the same layer. Cross-domain coupling and cooperation within a layer look alike.

Vertical first: a cross-domain call can only be written as `from app.billing import ...`. It sits at the top of the file, visible at a glance.

## The import is a signal

After cutting vertically, a cross-domain import has only three explanations:

- The two domains are in fact one.
- The thing being imported was put in the wrong domain.
- A lower-level module that both depend on is missing.

All three are errors of domain modeling. The code that wrote the import is not at fault; it reports the model faithfully.

This import does not have to be discovered by a reviewer's experience. It is a verification result delivered by the structure.

## The princess is sick, the maid takes the medicine

The signal points at the business architecture. There are two ways to handle it.

| Handling | What is done | Result |
|---|---|---|
| Change the model | Send it back to the business architecture and redraw the domains | The model is right, and this import disappears |
| Change the code | Leave the model alone and work around it in code: type-only imports, inverting the dependency through an interface, adding a forwarding layer, adding an exemption | The check passes; the error in the model stays where it was |

The illness is in the domain model. The medicine goes into the code.

Most real projects cannot do the first, and choose the second.

## It works the same for people and agents

Structure does not distinguish between readers.

- A person writes a cross-domain import: it is visible in review.
- An agent writes a cross-domain import: the check fails on the spot.

Finding this error requires nobody to be present. Correcting it requires going back to the business architecture.

## Pluggable

A vertically cut domain carries all of its layers. The whole directory can be moved to another service.

If it moves in one piece, the boundary is real. If it does not, that is one more signal.

## What structure cannot give

Structure exposes errors of coupling.

Whether the thing is worth doing, it does not answer; that belongs to discernment. Whether the direction is right in the long run, it does not answer either; that is left to time.
