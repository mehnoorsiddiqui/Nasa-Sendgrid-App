
# V3 Suppression Unsubscribes Response

## Structure

`V3SuppressionUnsubscribesResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `created` | `number` | Required | A Unix timestamp indicating when the recipient was added to the global suppression list. |
| `email` | `string` | Required | The email address of the recipient who is globally suppressed. |

## Example (as JSON)

```json
{
  "created": 60,
  "email": "email6"
}
```

