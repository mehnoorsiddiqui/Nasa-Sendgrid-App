
# V3 Marketing Contacts Imports Request

## Structure

`V3MarketingContactsImportsRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `listIds` | `string[] \| undefined` | Optional | All contacts will be added to each of the specified lists. |
| `fileType` | `string` | Required, Constant | Upload file type.<br>**Default**: `'csv'` |
| `fieldMappings` | `unknown[]` | Required | Import file header to reserved/custom field mapping.<br>**Constraints**: *Minimum Items*: `1` |

## Example (as JSON)

```json
{
  "file_type": "csv",
  "field_mappings": null
}
```

