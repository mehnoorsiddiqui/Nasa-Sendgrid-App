
# Domain Cname 1

The DNS record generated for the sending domain used for this branded link.

## Structure

`DomainCname1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `valid` | `boolean` | Required | Indicates if this DNS record is valid. |
| `reason` | `string \| null` | Required | Null if the DNS record is valid. If the DNS record is invalid, this will explain why. |

## Example (as JSON)

```json
{
  "valid": false,
  "reason": "reason4"
}
```

