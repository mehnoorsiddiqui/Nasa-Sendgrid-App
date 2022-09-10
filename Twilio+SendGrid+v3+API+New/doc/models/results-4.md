
# Results 4

## Structure

`Results4`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | This is the ID of the Single Dend you require stats for. |
| `abVariation` | `string` | Required | This is the A/B variation of the Single Send stat returned. If the `group_by` parameter doesn't include `ab_variation` in the request, then the value is "all". |
| `abPhase` | [`AbPhaseEnum`](../../doc/models/ab-phase-enum.md) | Required | - |
| `aggregation` | `string \| undefined` | Optional | This describes the time unit to which the stat is rolled up. It is based on the `aggregated_by` parameter included in the request. It can be "total" or the date (in YYYY-MM-DD format) the stats are for.<br>**Default**: `'total'` |
| `stats` | [`Metrics2 \| undefined`](../../doc/models/metrics-2.md) | Optional | - |

## Example (as JSON)

```json
{
  "id": "00001770-0000-0000-0000-000000000000",
  "ab_variation": "0000053c-0000-0000-0000-000000000000",
  "ab_phase": "all",
  "aggregation": null,
  "stats": null
}
```

