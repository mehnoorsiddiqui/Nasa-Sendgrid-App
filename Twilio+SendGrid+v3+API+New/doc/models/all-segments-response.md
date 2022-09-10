
# All Segments Response

## Structure

`AllSegmentsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | ID assigned to the segment when created. |
| `name` | `string` | Required | Name of the segment.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `100` |
| `contactsCount` | `number` | Required | Total number of contacts present in the segment |
| `createdAt` | `string` | Required | ISO8601 timestamp of when the object was created |
| `updatedAt` | `string` | Required | ISO8601 timestamp of when the object was last updated |
| `sampleUpdatedAt` | `string` | Required | ISO8601 timestamp of when the samples were last updated |
| `nextSampleUpdate` | `string` | Required | ISO8601 timestamp of when the samples will be next updated |
| `parentListIds` | `string[]` | Required | The array of list ids to filter contacts on when building this segment. It allows only one such list id for now. We will support more in future<br>**Constraints**: *Unique Items Required* |
| `queryVersion` | `string` | Required | If not set, segment contains a query for use with Segment v1 APIs. If set to '2', segment contains a SQL query for use in v2. |
| `metadata` | [`Metadata \| undefined`](../../doc/models/metadata.md) | Optional | - |
| `status` | [`Status2`](../../doc/models/status-2.md) | Required | - |

## Example (as JSON)

```json
{
  "id": "00001770-0000-0000-0000-000000000000",
  "name": "name0",
  "contacts_count": 254,
  "created_at": "created_at2",
  "updated_at": "updated_at4",
  "sample_updated_at": "sample_updated_at2",
  "next_sample_update": "next_sample_update0",
  "parent_list_ids": [
    "parent_list_ids7"
  ],
  "query_version": "query_version0",
  "_metadata": null,
  "status": {
    "query_validation": "query_validation0",
    "error_message": null
  }
}
```

