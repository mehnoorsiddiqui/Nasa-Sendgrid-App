
# Contact DB Recipientresponse

## Structure

`ContactDBRecipientresponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errorCount` | `number` | Required | The number of errors found while adding recipients. |
| `errorIndices` | `number[] \| undefined` | Optional | The indices of the recipient(s) sent that caused the error. |
| `newCount` | `number` | Required | The count of new recipients added to the contactdb. |
| `persistedRecipients` | `string[]` | Required | The recipient IDs of the recipients that already existed from this request. |
| `updatedCount` | `number` | Required | The recipients who were updated from this request. |
| `errors` | [`Errors71[] \| undefined`](../../doc/models/errors-71.md) | Optional | - |

## Example (as JSON)

```json
{
  "error_count": 1,
  "error_indices": [
    2
  ],
  "new_count": 2,
  "persisted_recipients": [
    "YUBh",
    "bWlsbGVyQG1pbGxlci50ZXN0"
  ],
  "updated_count": 0,
  "errors": [
    {
      "message": "Invalid email.",
      "error_indices": [
        2
      ]
    }
  ]
}
```

