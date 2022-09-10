
# Results 2

Result map of the import job.

## Structure

`Results2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestedCount` | `number \| undefined` | Optional | Requested contact count from the import. |
| `createdCount` | `number \| undefined` | Optional | Created contact count from the import. |
| `updatedCount` | `number \| undefined` | Optional | Updated contact count from the import. |
| `deletedCount` | `number \| undefined` | Optional | Count of deleted contacts that resulted in error. |
| `erroredCount` | `number \| undefined` | Optional | Count of imported contacts that resulted in error. |
| `errorsUrl` | `string \| undefined` | Optional | The download URL of the file which provides information about any errors. |

## Example (as JSON)

```json
{
  "requested_count": null,
  "created_count": null,
  "updated_count": null,
  "deleted_count": null,
  "errored_count": null,
  "errors_url": null
}
```

