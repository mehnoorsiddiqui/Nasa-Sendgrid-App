
# Results 3

## Structure

`Results3`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | This is the ID of the Automation you are requesting stats for. |
| `aggregation` | `string` | Required | This describes the time unit to which the stat is rolled up. It is based on the `aggregated_by` parameter included in the request. It can be "total" or the date (in YYYY-MM-DD format) the stats are for. |
| `stepId` | `string` | Required | This is the ID of the step if the stats were requested to be grouped by `step_id`. |
| `stats` | [`Metrics2 \| undefined`](../../doc/models/metrics-2.md) | Optional | - |

## Example (as JSON)

```json
{
  "id": "00001770-0000-0000-0000-000000000000",
  "aggregation": "aggregation0",
  "step_id": "step_id4",
  "stats": null
}
```

