
# Global Error Response Schema 1 Error

## Structure

`GlobalErrorResponseSchema1Error`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error[] \| undefined`](../../doc/models/error.md) | Optional | - |
| `id` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "errors": [
    {
      "field": "field_name",
      "message": "error message"
    }
  ]
}
```

