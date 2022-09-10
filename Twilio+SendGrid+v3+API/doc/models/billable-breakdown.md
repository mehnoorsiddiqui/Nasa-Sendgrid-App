
# Billable Breakdown

`billable_breakdown` will only appear to the parent user in an account with subusers.

## Structure

`BillableBreakdown`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `total` | `number \| undefined` | Optional | The sum of all the subuser's billable contacts |
| `breakdown` | `unknown \| undefined` | Optional | A map of each subuser's billable contact usage. Each key is the subuser's ID and each value is the usage thus far this month. |

## Example (as JSON)

```json
{
  "total": null,
  "breakdown": null
}
```

