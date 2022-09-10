
# Createmonitorsettingsrequest

## Structure

`Createmonitorsettingsrequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `email` | `string` | Required | The email address to which Sendgrid should send emails for monitoring. |
| `frequency` | `number` | Required | The frequency at which to forward monitoring emails. An email will be sent when your subuser sends this many (e.g., 1,000) emails. |

## Example (as JSON)

```json
{
  "email": "example@example.com",
  "frequency": 50000
}
```

