
# Dns 5

## Structure

`Dns5`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `domainCname` | [`DomainCname3`](../../doc/models/domain-cname-3.md) | Required | - |
| `ownerCname` | [`OwnerCname3 \| undefined`](../../doc/models/owner-cname-3.md) | Optional | - |

## Example (as JSON)

```json
{
  "domain_cname": {
    "valid": false,
    "type": "mx",
    "host": "host8",
    "data": "data6"
  },
  "owner_cname": null
}
```

