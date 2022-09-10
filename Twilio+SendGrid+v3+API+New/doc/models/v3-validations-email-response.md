
# V3 Validations Email Response

## Structure

`V3ValidationsEmailResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `result` | [`Result2`](../../doc/models/result-2.md) | Required | - |

## Example (as JSON)

```json
{
  "result": {
    "email": "email0",
    "verdict": "Invalid",
    "score": 82.36,
    "local": "local6",
    "host": "host8",
    "suggestion": null,
    "checks": {
      "domain": {
        "has_valid_address_syntax": false,
        "has_mx_or_a_record": false,
        "is_suspected_disposable_address": false
      },
      "local_part": {
        "is_suspected_role_address": false
      },
      "additional": {
        "has_known_bounces": false,
        "has_suspected_bounces": false
      }
    },
    "source": null,
    "ip_address": "ip_address6"
  }
}
```

