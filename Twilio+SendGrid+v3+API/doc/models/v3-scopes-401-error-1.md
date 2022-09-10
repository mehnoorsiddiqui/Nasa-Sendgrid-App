
# V3 Scopes 401 Error 1

## Structure

`V3Scopes401Error1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error2[]`](../../doc/models/error-2.md) | Required | This 401 response indicates that the user making the call doesn't have the authorization to view the list of scopes. |

## Example (as JSON)

```json
{
  "errors": [
    {
      "field": null,
      "message": "message5"
    },
    {
      "field": null,
      "message": "message6"
    },
    {
      "field": null,
      "message": "message7"
    }
  ]
}
```

