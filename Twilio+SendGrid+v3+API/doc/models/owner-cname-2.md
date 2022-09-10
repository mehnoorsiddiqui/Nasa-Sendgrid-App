
# Owner Cname 2

## Structure

`OwnerCname2`

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

