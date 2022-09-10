
# V3 Asm Suppressions Response 1

## Structure

`V3AsmSuppressionsResponse1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `suppressions` | [`Suppression[]`](../../doc/models/suppression.md) | Required | The array of suppression groups. |

## Example (as JSON)

```json
{
  "suppressions": [
    {
      "description": "description7",
      "id": 55,
      "is_default": true,
      "name": "name7",
      "suppressed": true
    },
    {
      "description": "description8",
      "id": 56,
      "is_default": false,
      "name": "name8",
      "suppressed": false
    },
    {
      "description": "description9",
      "id": 57,
      "is_default": true,
      "name": "name9",
      "suppressed": true
    }
  ]
}
```

