
# Full Segment

## Structure

`FullSegment`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | - |
| `contactsCount` | `number` | Required | - |
| `createdAt` | `string` | Required | ISO8601 of created timestamp |
| `name` | `string` | Required | Name of the segment.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `100` |
| `parentListId` | `string \| undefined` | Optional | The id of the list if this segment is a child of a list.  This implies the query `AND CONTAINS(list_ids, ${parent_list_id})` |
| `sampleUpdatedAt` | `string` | Required | ISO8601 timestamp the sample was last updated |
| `updatedAt` | `string` | Required | ISO8601 timestamp the object was last updated |
| `nextSampleUpdate` | `string \| undefined` | Optional | ISO8601 string that is equal to `sample_updated_at` plus an internally calculated offset that depends on how often contacts enter or exit segments as the scheduled pipeline updates the samples. |
| `contactsSample` | [`ContactResponse[]`](../../doc/models/contact-response.md) | Required | - |
| `queryJson` | `unknown \| undefined` | Optional | AST representation of the query DSL |
| `parentListIds` | `string[] \| undefined` | Optional | The array of list ids to filter contacts on when building this segment. It allows only one such list id for now. We will support more in future<br>**Constraints**: *Unique Items Required* |
| `queryDsl` | `string` | Required | SQL query which will filter contacts based on the conditions provided |

## Example (as JSON)

```json
{
  "id": null,
  "contacts_count": null,
  "created_at": null,
  "name": null,
  "sample_updated_at": null,
  "updated_at": null,
  "contacts_sample": {
    "id": "47d23ab0-d895-4359-a0d1-ffc7a6fc7e70",
    "email": "abcd@gmail.com",
    "alternate_emails": [
      "abcd@yahoo.com",
      "abcd@hotmail.com"
    ],
    "first_name": "Ab",
    "last_name": "Cd",
    "address_line_1": "street address / P.O. box / CompanyName / c/o",
    "address_line_2": "apartment, suite, unit, building, floor etc",
    "city": "Redwood City",
    "state_province_region": "CA",
    "postal_code": 94063,
    "country": "USA",
    "custom_fields": {
      "custom_field_name1": "custom_field_value1",
      "custom_field_name2": "custom_field_value2"
    }
  },
  "query_dsl": null
}
```

