
# Segment Summary

## Structure

`SegmentSummary`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | - |
| `contactsCount` | `number` | Required | - |
| `createdAt` | `string` | Required | ISO8601 of created timestamp |
| `name` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `1`, *Maximum Length*: `100` |
| `parentListId` | `string \| undefined` | Optional | The id of the list if this segment is a child of a list.  This implies the query `AND CONTAINS(list_ids, ${parent_list_id})` |
| `sampleUpdatedAt` | `string` | Required | ISO8601 timestamp the sample was last updated |
| `updatedAt` | `string` | Required | ISO8601 timestamp the object was last updated |
| `nextSampleUpdate` | `string \| undefined` | Optional | ISO8601 string that is equal to `sample_updated_at` plus an internally calculated offset that depends on how often contacts enter or exit segments as the scheduled pipeline updates the samples. |

## Example (as JSON)

```json
{
  "id": "00001770-0000-0000-0000-000000000000",
  "contacts_count": 254,
  "created_at": "2016-03-13T12:52:32.123Z",
  "name": null,
  "parent_list_id": null,
  "sample_updated_at": "2016-03-13T12:52:32.123Z",
  "updated_at": "2016-03-13T12:52:32.123Z",
  "next_sample_update": null
}
```

