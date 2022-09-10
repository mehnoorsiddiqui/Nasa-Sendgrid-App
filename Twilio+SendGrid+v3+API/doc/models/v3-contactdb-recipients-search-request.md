
# V3 Contactdb Recipients Search Request

## Structure

`V3ContactdbRecipientsSearchRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `listId` | `number` | Required | - |
| `conditions` | [`ContactDBSegmentsConditions[]`](../../doc/models/contact-db-segments-conditions.md) | Required | The conditions by which this segment should be created. |

## Example (as JSON)

```json
{
  "list_id": 102,
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
  ]
}
```

