---
originalLink: /chapters/05-眼光在规则的上一层/04-工具范式层级松紧
title: Tool, Paradigm, Layer, Tightness
---

# Tool, Paradigm, Layer, Tightness

Discernment judges four things. How each line is written is not among them.

## The four

| | The question | What is seen | The verdict |
|---|---|---|---|
| Tool | What should this be done with | A hand-written loop that groups, sums and sorts | This is data processing; use a data-processing tool |
| Paradigm | What form should organize it | An abstract base class, two subclasses and a factory, just to export by format | One function with one branch |
| Layer | Which layer should handle it | try, logging and `return None` in every function | Raise on error; leave it to the central exception handler |
| Tightness | How tight should the constraint be | The signature demands `list[int]`; the body only iterates | Constrain only the behavior that is used |

## Tool

```python
# What is seen
totals: dict[str, float] = {}
for order in orders:
    totals[order.customer] = totals.get(order.customer, 0.0) + order.amount
ranked = sorted(totals.items(), key=lambda kv: kv[1], reverse=True)
top = [name for name, _ in ranked[:3]]

# After the verdict
top = orders.groupby("customer")["amount"].sum().nlargest(3).index.tolist()
```

## Paradigm

```python
# What is seen
class Exporter(ABC):
    @abstractmethod
    def export(self, rows: list[dict]) -> str: ...


class JsonExporter(Exporter): ...


class CsvExporter(Exporter): ...


class ExporterFactory:
    _registry: dict[str, type[Exporter]] = {"json": JsonExporter, "csv": CsvExporter}

    @classmethod
    def create(cls, fmt: str) -> Exporter:
        return cls._registry[fmt]()


# After the verdict
def export(rows: list[dict], fmt: str) -> str:
    match fmt:
        case "json":
            return to_json(rows)
        case "csv":
            return to_csv(rows)
        case _:
            raise ValueError(fmt)
```

## What the four share

- All four questions ask: should this be done here, in this way.
- All four judgments happen before the first line of implementation is read.
- All four take only seconds.
- Most of the four cannot be written as lint rules.

Rules reach the way a line is written. The level above that belongs to discernment.
