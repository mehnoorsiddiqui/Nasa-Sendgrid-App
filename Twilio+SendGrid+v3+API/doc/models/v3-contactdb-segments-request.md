
# V3 Contactdb Segments Request

## Structure

`V3ContactdbSegmentsRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string` | Required | - |
| `listId` | `number \| undefined` | Optional | The list ID you would like this segment to be built from. |
| `conditions` | [`ContactDBSegmentsConditions[] \| undefined`](../../doc/models/contact-db-segments-conditions.md) | Optional | The conditions by which this segment should be created. |

## Example (as JSON)

```json
{
  "name": "name0",
  "list_id": null,
  "conditions": null
}
```

