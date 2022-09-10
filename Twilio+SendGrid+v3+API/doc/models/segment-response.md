
# Segment Response

## Structure

`SegmentResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | ID assigned to the segment when created. |
| `name` | `string` | Required | Name of the segment.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `100` |
| `queryDsl` | `string` | Required | SQL query which will filter contacts based on the conditions provided |
| `contactsCount` | `number` | Required | Total number of contacts present in the segment |
| `contactsSample` | [`ContactResponse[]`](../../doc/models/contact-response.md) | Required | A subset of all contacts that are in this segment |
| `createdAt` | `string` | Required | ISO8601 timestamp of when the object was created |
| `updatedAt` | `string` | Required | ISO8601 timestamp of when the object was last updated |
| `sampleUpdatedAt` | `string` | Required | ISO8601 timestamp of when the samples were last updated |
| `nextSampleUpdate` | `string` | Required | ISO8601 timestamp of when the samples will be next updated |
| `parentListIds` | `string[]` | Required | The array of list ids to filter contacts on when building this segment. It allows only one such list id for now. We will support more in future<br>**Constraints**: *Unique Items Required* |
| `queryVersion` | `string` | Required | If not set, segment contains a Query for use with Segment v1 APIs. If set to '2', segment contains a SQL query for use in v2. |
| `status` | [`Status2`](../../doc/models/status-2.md) | Required | - |

## Example (as JSON)

```json
{
  "id": null,
  "name": null,
  "query_dsl": null,
  "contacts_count": null,
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
  "created_at": null,
  "updated_at": null,
  "sample_updated_at": null,
  "next_sample_update": null,
  "parent_list_ids": null,
  "query_version": null,
  "status": null
}
```

