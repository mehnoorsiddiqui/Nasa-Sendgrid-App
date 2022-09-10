
# V3 Whitelabel Links Validate Response

## Structure

`V3WhitelabelLinksValidateResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number` | Required | The ID of the branded link. |
| `valid` | `boolean` | Required | Indicates if the link branding is valid. |
| `validationResults` | [`ValidationResults4`](../../doc/models/validation-results-4.md) | Required | - |

## Example (as JSON)

```json
{
  "id": 112,
  "valid": false,
  "validation_results": {
    "domain_cname": {
      "valid": false,
      "reason": "reason0"
    },
    "owner_cname": null
  }
}
```

