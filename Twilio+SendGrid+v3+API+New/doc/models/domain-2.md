
# Domain 2

## Structure

`Domain2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `hasValidAddressSyntax` | `boolean` | Required | Whether the email address syntax is valid. |
| `hasMxOrARecord` | `boolean` | Required | Whether the email has appropriate DNS records to deliver a message. |
| `isSuspectedDisposableAddress` | `boolean` | Required | Whether the domain appears to be from a disposable email address service. |

## Example (as JSON)

```json
{
  "has_valid_address_syntax": false,
  "has_mx_or_a_record": false,
  "is_suspected_disposable_address": false
}
```

