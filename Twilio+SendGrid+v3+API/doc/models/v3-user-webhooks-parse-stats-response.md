
# V3 User Webhooks Parse Stats Response

## Structure

`V3UserWebhooksParseStatsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `date` | `string` | Required | The date that the stats were collected. |
| `stats` | [`Stat2[]`](../../doc/models/stat-2.md) | Required | The Parse Webhook usage statistics. |

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

