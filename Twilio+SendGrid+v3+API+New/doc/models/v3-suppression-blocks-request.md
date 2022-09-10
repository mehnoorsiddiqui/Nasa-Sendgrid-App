
# V3 Suppression Blocks Request

## Structure

`V3SuppressionBlocksRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `deleteAll` | `boolean \| undefined` | Optional | Indicates if you want to delete all blocked email addresses. |
| `emails` | `string[] \| undefined` | Optional | The specific blocked email addresses that you want to delete. |

## Example (as JSON)

```json
{
  "delete_all": false,
  "emails": [
    "example1@example.com",
    "example2@example.com"
  ]
}
```

