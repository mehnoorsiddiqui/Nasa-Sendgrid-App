
# Error 2

## Structure

`Error2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `field` | `string \| undefined` | Optional | This empty field is returned instead of the list of scopes if the user making the call doesn't have the authorization required. |
| `message` | `string` | Required | Explains why the scopes cannot be returned. |

## Example (as JSON)

```json
{
  "field": null,
  "message": "message0"
}
```

