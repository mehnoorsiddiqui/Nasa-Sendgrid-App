
# V3 Mail Settings Response

## Structure

`V3MailSettingsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `result` | [`Result4[]`](../../doc/models/result-4.md) | Required | The list of all mail settings. |

## Example (as JSON)

```json
{
  "result": [
    {
      "title": "title6",
      "enabled": false,
      "name": "name8",
      "description": "description8"
    },
    {
      "title": "title5",
      "enabled": true,
      "name": "name9",
      "description": "description9"
    },
    {
      "title": "title4",
      "enabled": false,
      "name": "name0",
      "description": "description0"
    }
  ]
}
```

