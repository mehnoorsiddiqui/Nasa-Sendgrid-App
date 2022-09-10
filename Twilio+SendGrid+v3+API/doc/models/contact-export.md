
# Contact Export

## Structure

`ContactExport`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | - |
| `status` | [`StatusEnum`](../../doc/models/status-enum.md) | Required | - |
| `createdAt` | `string` | Required | The ISO8601 timestamp when the export was begun. |
| `updatedAt` | `string` | Required | The ISO8601 timestamp when the export was updated. |
| `completedAt` | `string \| undefined` | Optional | The ISO8601 timestamp when the export was completed. |
| `expiresAt` | `string` | Required | The ISO8601 timestamp when the exported file on S3 will expire. |
| `urls` | `string[] \| undefined` | Optional | One or more download URLs for the contact file if the status is `ready`. |
| `message` | `string \| undefined` | Optional | A human readable message if the status is `failure`. |
| `metadata` | [`Metadata1 \| undefined`](../../doc/models/metadata-1.md) | Optional | - |
| `contactCount` | `number \| undefined` | Optional | The total number of exported contacts. |

## Example (as JSON)

```json
{
  "id": "id0",
  "status": "failure",
  "created_at": "created_at2",
  "updated_at": "updated_at4",
  "completed_at": null,
  "expires_at": "expires_at6",
  "urls": null,
  "message": null,
  "_metadata": null,
  "contact_count": null
}
```

