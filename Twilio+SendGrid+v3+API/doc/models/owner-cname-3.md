
# Owner Cname 3

## Structure

`OwnerCname3`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `valid` | `boolean` | Required | Indicates if the DNS record is valid. |
| `type` | [`Type1Enum \| undefined`](../../doc/models/type-1-enum.md) | Optional | - |
| `host` | `string` | Required | Used to verify the link branding. The subdomain of this domain is the ID of the user who created the link branding. |
| `data` | `string` | Required | The domain that the DNS record points to. |

## Example (as JSON)

```json
{
  "valid": false,
  "type": null,
  "host": "host8",
  "data": "data0"
}
```

