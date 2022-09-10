
# Ab Test Summary

## Structure

`AbTestSummary`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | [`Type7Enum`](../../doc/models/type-7-enum.md) | Required | - |
| `winnerCriteria` | [`WinnerCriteriaEnum`](../../doc/models/winner-criteria-enum.md) | Required | - |
| `testPercentage` | `number` | Required | What percentage of your recipient will be included in your A/B testing |
| `duration` | `string` | Required | How long the A/B Testing will last |
| `winningTemplateId` | `string` | Required | Winner of the A/B Test |
| `winnerSelectedAt` | `string \| null` | Required | When the winner was selected |
| `expirationDate` | `string \| null` | Required | Last day to select an A/B Test Winner |

## Example (as JSON)

```json
{
  "type": "subject",
  "winner_criteria": "click",
  "test_percentage": 162,
  "duration": "duration6",
  "winning_template_id": "winning_template_id4",
  "winner_selected_at": "winner_selected_at0",
  "expiration_date": "expiration_date6"
}
```

