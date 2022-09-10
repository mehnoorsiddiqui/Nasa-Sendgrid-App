
# Stats Category Stats

## Structure

`StatsCategoryStats`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `date` | `string` | Required | The date the statistics were gathered. |
| `stats` | [`Stat1[] \| undefined`](../../doc/models/stat-1.md) | Optional | - |

## Example (as JSON)

```json
{
  "date": "2015-01-01",
  "stats": [
    {
      "metrics": {
        "blocks": 0,
        "bounce_drops": 0,
        "bounces": 0,
        "clicks": 0,
        "deferred": 0,
        "delivered": 0,
        "invalid_emails": 0,
        "opens": 0,
        "processed": 0,
        "requests": 0,
        "spam_report_drops": 0,
        "spam_reports": 0,
        "unique_clicks": 0,
        "unique_opens": 0,
        "unsubscribe_drops": 0,
        "unsubscribes": 0
      },
      "name": "cat1",
      "type": "category"
    },
    {
      "metrics": {
        "blocks": 0,
        "bounce_drops": 0,
        "bounces": 0,
        "clicks": 0,
        "deferred": 0,
        "delivered": 0,
        "invalid_emails": 0,
        "opens": 0,
        "processed": 0,
        "requests": 0,
        "spam_report_drops": 0,
        "spam_reports": 0,
        "unique_clicks": 0,
        "unique_opens": 0,
        "unsubscribe_drops": 0,
        "unsubscribes": 0
      },
      "name": "cat2",
      "type": "category"
    }
  ]
}
```

