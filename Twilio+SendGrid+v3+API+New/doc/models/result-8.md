
# Result 8

## Structure

`Result8`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | Export jobs ID. |
| `status` | `string \| undefined` | Optional | Allowed values: `pending`, `ready`, or `failure`. |
| `createdAt` | `string \| undefined` | Optional | This ISO8601 timestamp when the export was created. |
| `completedAt` | `string \| undefined` | Optional | This ISO8601 timestamp when the export was completed. |
| `expiresAt` | `string \| undefined` | Optional | This ISO8601 timestamp when the export expires. |
| `urls` | `string[] \| undefined` | Optional | One or more download URLs for the contact file(s) if the status is `ready`. |
| `userId` | `string \| undefined` | Optional | User ID. |
| `exportType` | `string \| undefined` | Optional | Allowed types: `contacts_export`, `list_export`, or `segment_export`. |
| `segments` | [`Segment[] \| undefined`](../../doc/models/segment.md) | Optional | - |
| `lists` | [`List[] \| undefined`](../../doc/models/list.md) | Optional | - |
| `metadata` | [`Metadata2 \| undefined`](../../doc/models/metadata-2.md) | Optional | - |

## Example (as JSON)

```json
{
  "id": null,
  "status": null,
  "created_at": null,
  "completed_at": null,
  "expires_at": null,
  "urls": null,
  "user_id": null,
  "export_type": null,
  "segments": null,
  "lists": null,
  "_metadata": null
}
```

