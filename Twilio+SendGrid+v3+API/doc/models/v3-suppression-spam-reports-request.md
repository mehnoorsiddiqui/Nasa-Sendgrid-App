
# V3 Suppression Spam Reports Request

## Structure

`V3SuppressionSpamReportsRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `deleteAll` | `boolean \| undefined` | Optional | Indicates if you want to delete all email addresses on the spam report list. |
| `emails` | `string[] \| undefined` | Optional | A list of specific email addresses that you want to remove from the spam report list. |

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

