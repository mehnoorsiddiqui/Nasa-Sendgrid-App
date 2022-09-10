
# V3 Marketing Contacts Count Response

## Structure

`V3MarketingContactsCountResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `contactCount` | `number` | Required | The total number of contacts. |
| `billableCount` | `number \| undefined` | Optional | The count of contacts this month for billing purposes.<br>**Default**: `0`<br>**Constraints**: `>= 0` |
| `billableBreakdown` | [`BillableBreakdown2 \| undefined`](../../doc/models/billable-breakdown-2.md) | Optional | - |

## Example (as JSON)

```json
{
  "contact_count": 246,
  "billable_count": null,
  "billable_breakdown": null
}
```

