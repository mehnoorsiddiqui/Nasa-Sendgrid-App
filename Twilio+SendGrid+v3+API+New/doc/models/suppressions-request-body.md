
# Suppressions Request Body

## Structure

`SuppressionsRequestBody`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `recipientEmails` | `string[]` | Required | The array of email addresses to add or find. |

## Example (as JSON)

```json
{
  "recipient_emails": [
    "test1@example.com",
    "test2@example.com"
  ]
}
```

