
# V3 Suppression Bounces Request

## Structure

`V3SuppressionBouncesRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `deleteAll` | `boolean \| undefined` | Optional | This parameter allows you to delete **every** email in your bounce list. This should not be used with the emails parameter. |
| `emails` | `string[] \| undefined` | Optional | Delete multiple emails from your bounce list at the same time. This should not be used with the delete_all parameter. |

## Example (as JSON)

```json
{
  "delete_all": false
}
```

