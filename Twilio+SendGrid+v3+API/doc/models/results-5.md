
# Results 5

## Structure

`Results5`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `url` | `string` | Required | This is the URL of the link clicked. If `{{custom_fields}}` are part of the URL, they will be included. |
| `urlLocation` | `number \| undefined` | Optional | This is the location of the link clicked in each Automation step. Links are located according to their position within the message; the topmost link has index `0`.<br>**Constraints**: `>= 0` |
| `stepId` | `string` | Required | This is the ID of the step if the stats were requested to be grouped by `step_id`. |
| `clicks` | `number` | Required | The number of clicks on this particular link.<br>**Constraints**: `>= 1` |

## Example (as JSON)

```json
{
  "url": "url4",
  "url_location": null,
  "step_id": "00001684-0000-0000-0000-000000000000",
  "clicks": 110
}
```

