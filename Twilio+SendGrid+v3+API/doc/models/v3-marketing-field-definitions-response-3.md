
# V3 Marketing Field Definitions Response 3

## Structure

`V3MarketingFieldDefinitionsResponse3`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customFields` | [`CustomFieldDefinitionsResponse[]`](../../doc/models/custom-field-definitions-response.md) | Required | - |
| `reservedFields` | [`ReservedFieldDefinitionsResponse[]`](../../doc/models/reserved-field-definitions-response.md) | Required | - |
| `metadata` | [`Metadata \| undefined`](../../doc/models/metadata.md) | Optional | - |

## Example (as JSON)

```json
{
  "custom_fields": {
    "id": "a1_D",
    "name": "custom_field_name",
    "field_type": "Date"
  },
  "reserved_fields": [
    {
      "id": "_rf20_T",
      "name": "automation_id",
      "field_type": "Text",
      "read_only": true
    }
  ]
}
```

