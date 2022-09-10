
# Errors Seg 1

If the request is incorrect, an array of errors will be returned.

## Structure

`ErrorsSeg1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Errors33[]`](../../doc/models/errors-33.md) | Required | - |

## Example (as JSON)

```json
{
  "errors": [
    {
      "field": "field9",
      "message": "message5"
    },
    {
      "field": "field0",
      "message": "message6"
    },
    {
      "field": "field1",
      "message": "message7"
    }
  ]
}
```

