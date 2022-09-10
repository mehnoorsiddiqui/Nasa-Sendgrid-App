
# V3 Whitelabel Ips Validate Response

## Structure

`V3WhitelabelIpsValidateResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number` | Required | The ID of the reverse DNS record. |
| `valid` | `boolean` | Required | Indicates if the reverse DNS record is valid. |
| `validationResults` | [`ValidationResults22`](../../doc/models/validation-results-22.md) | Required | - |

## Example (as JSON)

```json
{
  "id": 112,
  "valid": false,
  "validation_results": {
    "a_record": null
  }
}
```

