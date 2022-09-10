
# Validation Results

The individual validation results for each of the DNS records associated with this branded link.

## Structure

`ValidationResults`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `domainCname` | [`DomainCname2`](../../doc/models/domain-cname-2.md) | Required | - |
| `ownerCname` | [`OwnerCname2 \| undefined`](../../doc/models/owner-cname-2.md) | Optional | - |

## Example (as JSON)

```json
{
  "domain_cname": {
    "valid": false,
    "reason": "reason2"
  },
  "owner_cname": null
}
```

