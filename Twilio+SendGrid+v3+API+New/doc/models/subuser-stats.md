
# Subuser Stats

## Structure

`SubuserStats`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `date` | `string \| undefined` | Optional | The date the statistics were gathered. |
| `stats` | [`Stat[] \| undefined`](../../doc/models/stat.md) | Optional | The list of statistics. |

## Example (as JSON)

```json
{
  "date": "2016-02-01",
  "stats": [
    {
      "first_name": "John",
      "last_name": "Doe",
      "metrics": {
        "blocks": 0,
        "bounce_drops": 0,
        "bounces": 0,
        "clicks": 5,
        "deferred": 0,
        "delivered": 0,
        "invalid_emails": 0,
        "opens": 10,
        "processed": 10,
        "requests": 10,
        "spam_report_drops": 0,
        "spam_reports": 0,
        "unique_clicks": 0,
        "unique_opens": 0,
        "unsubscribe_drops": 0,
        "unsubscribes": 0
      },
      "name": "user1",
      "type": "subuser"
    }
  ]
}
```

