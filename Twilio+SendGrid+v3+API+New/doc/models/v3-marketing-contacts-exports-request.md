
# V3 Marketing Contacts Exports Request

## Structure

`V3MarketingContactsExportsRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `listIds` | `string[] \| undefined` | Optional | IDs of the contact lists you want to export. |
| `segmentIds` | `string[] \| undefined` | Optional | IDs of the contact segments you want to export. |
| `notifications` | [`Notifications \| undefined`](../../doc/models/notifications.md) | Optional | - |
| `fileType` | [`FileTypeEnum \| undefined`](../../doc/models/file-type-enum.md) | Optional | - |
| `maxFileSize` | `number \| undefined` | Optional | The maximum size of an export file in MB. Note that when this option is specified, multiple output files may be returned from the export.<br>**Default**: `5000` |

## Example (as JSON)

```json
{
  "list_ids": null,
  "segment_ids": null,
  "notifications": null,
  "file_type": null,
  "max_file_size": null
}
```

