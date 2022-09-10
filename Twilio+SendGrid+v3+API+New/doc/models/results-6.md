
# Results 6

## Structure

`Results6`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `url` | `string` | Required | This is the URL of the link clicked. If `{{custom_fields}}` are part of the URL, they will be included. |
| `urlLocation` | `number \| undefined` | Optional | This is the location of the link clicked in each Single Send A/B variation, or in the Single Send itself if there are no variations. Links are numbered from the top down; the topmost link is index `0`.<br>**Constraints**: `>= 0` |
| `abVariation` | `string` | Required | This is the A/B variation of the Single Send stat returned. It is set to `"all"` if the `ab_variation` query parameter was not set in the request and `group_by` doesn't contain `ab_variation`. |
| `abPhase` | [`AbPhase1Enum`](../../doc/models/ab-phase-1-enum.md) | Required | - |
| `clicks` | `number` | Required | the number of clicks on this particular link<br>**Constraints**: `>= 1` |

## Example (as JSON)

```json
{
  "url": "url4",
  "url_location": null,
  "ab_variation": "0000053c-0000-0000-0000-000000000000",
  "ab_phase": "all",
  "clicks": 110
}
```

