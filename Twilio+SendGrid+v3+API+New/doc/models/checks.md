
# Checks

Granular checks for email address validity.

## Structure

`Checks`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `domain` | [`Domain2`](../../doc/models/domain-2.md) | Required | - |
| `localPart` | [`LocalPart2`](../../doc/models/local-part-2.md) | Required | - |
| `additional` | [`Additional2`](../../doc/models/additional-2.md) | Required | - |

## Example (as JSON)

```json
{
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
}
```

