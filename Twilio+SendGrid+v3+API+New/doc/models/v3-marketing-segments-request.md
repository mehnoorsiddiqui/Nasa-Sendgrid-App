
# V3 Marketing Segments Request

## Structure

`V3MarketingSegmentsRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string` | Required | Name of the segment.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `100` |
| `parentListIds` | `string[] \| undefined` | Optional | The array of list ids to filter contacts on when building this segment. It allows only one such list id for now. We will support more in future<br>**Constraints**: *Unique Items Required* |
| `queryDsl` | `string` | Required | SQL query which will filter contacts based on the conditions provided |
| `parentListId` | `string \| undefined` | Optional | The id of the list if this segment is a child of a list.  This implies the query is rewritten as `(${query_dsl}) AND CONTAINS(list_ids, ${parent_list_id})` |

## Example (as JSON)

```json
{
  "name": "name0",
  "parent_list_ids": null,
  "query_dsl": "query_dsl2",
  "parent_list_id": null
}
```

