
# Invalid Email

## Structure

`InvalidEmail`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `created` | `number \| undefined` | Optional | A Unix timestamp indicating when the email address was added to the invalid emails list. |
| `email` | `string \| undefined` | Optional | The email address that was marked as invalid. |
| `reason` | `string \| undefined` | Optional | The reason that the email address was marked as invalid. |

## Example (as JSON)

```json
{
  "created": 1620141015,
  "email": "invalid@example.com",
  "reason": "Mail domain mentioned in email address is unknown"
}
```

