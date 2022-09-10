
# List All Segmentsresponse

## Structure

`ListAllSegmentsresponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `segments` | [`CreateaSegmentrequest[]`](../../doc/models/createa-segmentrequest.md) | Required | - |

## Example (as JSON)

```json
{
  "segments": [
    {
      "name": "name3",
      "list_id": null,
      "conditions": [
        {
          "field": "field4",
          "value": "value4",
          "operator": "gt",
          "and_or": null
        },
        {
          "field": "field5",
          "value": "value3",
          "operator": "lt",
          "and_or": null
        }
      ],
      "recipient_count": null
    },
    {
      "name": "name4",
      "list_id": null,
      "conditions": [
        {
          "field": "field3",
          "value": "value5",
          "operator": "contains",
          "and_or": null
        }
      ],
      "recipient_count": null
    },
    {
      "name": "name5",
      "list_id": null,
      "conditions": [
        {
          "field": "field2",
          "value": "value6",
          "operator": "eq",
          "and_or": null
        },
        {
          "field": "field3",
          "value": "value5",
          "operator": "contains",
          "and_or": null
        },
        {
          "field": "field4",
          "value": "value4",
          "operator": "gt",
          "and_or": null
        }
      ],
      "recipient_count": null
    }
  ]
}
```

