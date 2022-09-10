
# Suppressions Suppression Group

## Structure

`SuppressionsSuppressionGroup`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number` | Required | The id of the suppression group. |
| `name` | `string` | Required | The name of the suppression group. Each group created by a user must have a unique name.<br>**Constraints**: *Maximum Length*: `30` |
| `description` | `string` | Required | A description of the suppression group.<br>**Constraints**: *Maximum Length*: `100` |
| `lastEmailSentAt` | `number \| undefined` | Optional | - |
| `isDefault` | `boolean \| undefined` | Optional | Indicates if this is the default suppression group.<br>**Default**: `false` |
| `unsubscribes` | `number \| undefined` | Optional | The unsubscribes associated with this group. |

## Example (as JSON)

```json
{
  "id": 60.0,
  "name": "name0",
  "description": "description0",
  "last_email_sent_at": null,
  "is_default": null,
  "unsubscribes": null
}
```

