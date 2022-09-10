
# V3 Suppression Invalid Emails Request

## Structure

`V3SuppressionInvalidEmailsRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `deleteAll` | `boolean \| undefined` | Optional | Indicates if you want to remove all email address from the invalid emails list. |
| `emails` | `string[] \| undefined` | Optional | The list of specific email addresses that you want to remove. |

## Example (as JSON)

```json
{
  "delete_all": false,
  "emails": [
    "example1@example.com",
    "example2@example.com"
  ]
}
```

