
# V3 Marketing Contacts Search Emails Request

## Structure

`V3MarketingContactsSearchEmailsRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `emails` | `string[]` | Required | One or more primary emails and/or alternate emails to search through your contacts for.<br>**Constraints**: *Maximum Length*: `100` |

## Example (as JSON)

```json
{
  "emails": [
    "jane_doe@example.com",
    "john_doe@example.com",
    "joann_doe@example.com"
  ]
}
```

