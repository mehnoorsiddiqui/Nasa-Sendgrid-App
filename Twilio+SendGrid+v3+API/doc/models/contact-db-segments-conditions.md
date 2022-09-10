
# Contact DB Segments Conditions

## Structure

`ContactDBSegmentsConditions`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `field` | `string` | Required | - |
| `value` | `string` | Required | - |
| `operator` | [`OperatorEnum`](../../doc/models/operator-enum.md) | Required | - |
| `andOr` | [`AndOrEnum \| undefined`](../../doc/models/and-or-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "field": "field6",
  "value": "value2",
  "operator": "ne",
  "and_or": null
}
```

