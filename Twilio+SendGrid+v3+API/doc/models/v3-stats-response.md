
# V3 Stats Response

## Structure

`V3StatsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `date` | `string` | Required | The date the stats were gathered. |
| `stats` | [`Stat3[]`](../../doc/models/stat-3.md) | Required | The individual email activity stats. |

## Example (as JSON)

```json
{
  "date": "date4",
  "stats": [
    {
      "metrics": null
    },
    {
      "metrics": null
    },
    {
      "metrics": null
    }
  ]
}
```

