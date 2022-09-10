
# Singlesends Link Stats Response

## Structure

`SinglesendsLinkStatsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `results` | [`Results6[]`](../../doc/models/results-6.md) | Required | This is the index of the link's location in the email contents. |
| `metadata` | [`Metadata1`](../../doc/models/metadata-1.md) | Required | - |
| `totalClicks` | `number \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "results": [
    {
      "url": "url7",
      "url_location": null,
      "ab_variation": "0000129f-0000-0000-0000-000000000000",
      "ab_phase": "all",
      "clicks": 193
    }
  ],
  "_metadata": {
    "prev": null,
    "self": null,
    "next": null,
    "count": null
  },
  "total_clicks": null
}
```

