
# Additional 2

## Structure

`Additional2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `hasKnownBounces` | `boolean` | Required | WHether email sent to this address from your account has bounced. |
| `hasSuspectedBounces` | `boolean` | Required | Whether our model predicts that the email address might bounce. |

## Example (as JSON)

```json
{
  "has_known_bounces": false,
  "has_suspected_bounces": false
}
```

