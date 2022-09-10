
# V3 User Credits Response

## Structure

`V3UserCreditsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `remain` | `number` | Required | The remaining number of credits available on your account. |
| `total` | `number` | Required | The total number of credits assigned to your account. |
| `overage` | `number` | Required | The number of overdrawn credits for your account. |
| `used` | `number` | Required | The number of credits that you have used. |
| `lastReset` | `string` | Required | The date that your credit balance was last reset. |
| `nextReset` | `string` | Required | The next date that your credit balance will be reset. |
| `resetFrequency` | `string` | Required | The frequency at which your credit balance will be reset. |

## Example (as JSON)

```json
{
  "remain": 180,
  "total": 10,
  "overage": 70,
  "used": 204,
  "last_reset": "last_reset4",
  "next_reset": "next_reset6",
  "reset_frequency": "reset_frequency8"
}
```

