
# Owner Cname 1

The DNS record created to verify the branded link.

## Structure

`OwnerCname1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `valid` | `boolean` | Required | Indicates if the DNS record is valid. |
| `reason` | `string \| null` | Required | Null if valid. If the DNS record is invalid, this will explain why. |

## Example (as JSON)

```json
{
  "valid": false,
  "reason": "reason4"
}
```

