
# Result 2

## Structure

`Result2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `email` | `string` | Required | The email being validated |
| `verdict` | [`VerdictEnum`](../../doc/models/verdict-enum.md) | Required | - |
| `score` | `number` | Required | A numeric representation of the email validity. |
| `local` | `string` | Required | The local part of the email address. |
| `host` | `string` | Required | The domain of the email address. |
| `suggestion` | `string \| undefined` | Optional | A suggested correction in the event of domain name typos (e.g., gmial.com) |
| `checks` | [`Checks2`](../../doc/models/checks-2.md) | Required | - |
| `source` | `string \| undefined` | Optional | The source of the validation, as per the API request. |
| `ipAddress` | `string` | Required | The IP address associated with this email. |

## Example (as JSON)

```json
{
  "email": "email6",
  "verdict": "Valid",
  "score": 147.4,
  "local": "local0",
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
  "ip_address": "ip_address0"
}
```

