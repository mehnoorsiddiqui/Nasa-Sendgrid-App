
# Automations Link Stats Response

## Structure

`AutomationsLinkStatsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `results` | [`Results5[]`](../../doc/models/results-5.md) | Required | - |
| `totalClicks` | `number` | Required | - |
| `metadata` | [`Metadata1`](../../doc/models/metadata-1.md) | Required | - |

## Example (as JSON)

```json
{
  "results": [
    {
      "url": "url7",
      "url_location": null,
      "step_id": "00000329-0000-0000-0000-000000000000",
      "clicks": 193
    }
  ],
  "total_clicks": 104,
  "_metadata": {
    "prev": null,
    "self": null,
    "next": null,
    "count": null
  }
}
```

