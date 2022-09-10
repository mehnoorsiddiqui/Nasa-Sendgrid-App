
# Createa Segmentrequest

## Structure

`CreateaSegmentrequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string` | Required | The name of this segment. |
| `listId` | `number \| undefined` | Optional | The list id from which to make this segment. Not including this ID will mean your segment is created from the main contactdb rather than a list. |
| `conditions` | [`ContactDBSegmentsConditions[]`](../../doc/models/contact-db-segments-conditions.md) | Required | The conditions for a recipient to be included in this segment. |
| `recipientCount` | `number \| undefined` | Optional | The count of recipients in this list. This is not included on creation of segments. |

## Example (as JSON)

```json
{
  "name": "name0",
  "list_id": null,
  "conditions": [
    {
      "field": "field5",
      "value": "value3",
      "operator": "lt",
      "and_or": null
    },
    {
      "field": "field6",
      "value": "value4",
      "operator": "gt",
      "and_or": null
    },
    {
      "field": "field7",
      "value": "value5",
      "operator": "contains",
      "and_or": null
    }
  ],
  "recipient_count": null
}
```

