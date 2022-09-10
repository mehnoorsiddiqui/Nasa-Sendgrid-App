
# V3 Asm Suppressions Response

## Structure

`V3AsmSuppressionsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `email` | `string` | Required | The email address that was suppressed. |
| `groupId` | `number` | Required | The id of the suppression group that this email address belongs to. |
| `groupName` | `string` | Required | The name of the suppression group that this email address belongs to. |
| `createdAt` | `number` | Required | A UNIX timestamp indicating when the suppression was created. |

## Example (as JSON)

```json
{
  "email": "email6",
  "group_id": 228,
  "group_name": "group_name6",
  "created_at": 6
}
```

