---
originalLink: /chapters/03-先成为基准/04-抄思想不抄形状
title: Copy the Idea, Not the Shape
---

# Copy the Idea, Not the Shape

## Two things

| | Idea | Shape |
|---|---|---|
| What it is | Which problem it solves, and by what means | The form it grew into in its original language and environment |
| Moved to a new environment | Holds | Becomes a burden |

## An example

Bringing the standard engineering framework of the Java world to Python.

| | Copy | Do not copy |
|---|---|---|
| Idea | An ecosystem needs one standard engineering framework | |
| Idea | Dependencies are supplied from outside | |
| Shape | | The four-layer directory layout |
| Shape | | Interfaces and implementation classes in pairs |
| Shape | | Containers, factories, inheritance hierarchies |

```python
# Copied the shape
class OrderService(ABC):
    @abstractmethod
    async def create(self, payload: OrderIn) -> Order: ...


class OrderServiceImpl(OrderService):
    def __init__(self, session_factory: SessionFactory) -> None:
        self._session_factory = session_factory

    async def create(self, payload: OrderIn) -> Order: ...


container.register(OrderService, OrderServiceImpl)


# Copied the idea
@router.post("/orders")
async def create_order(payload: OrderIn, session: AsyncSession = Depends(get_session)) -> Order: ...
```

The dependency is supplied from outside in both. The second uses the host language's own means: a function parameter.

## Where the line is drawn

By the habits of the host.

A borrowed idea is expressed in the host's own way, and with restraint.

## The test

In another language, does it still hold.

| Answer | It is |
|---|---|
| It holds | An idea |
| It does not | A shape |
