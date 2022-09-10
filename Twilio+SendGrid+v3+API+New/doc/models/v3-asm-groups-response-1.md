
# V3 Asm Groups Response 1

## Structure

`V3AsmGroupsResponse1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string \| undefined` | Optional | The name of your suppression group. Required when creating a group.<br>**Constraints**: *Maximum Length*: `30` |
| `description` | `string \| undefined` | Optional | A brief description of your suppression group. Required when creating a group.<br>**Constraints**: *Maximum Length*: `100` |
| `isDefault` | `boolean \| undefined` | Optional | Indicates if you would like this to be your default suppression group. |
| `id` | `number` | Required | The ID of the suppression group. |
| `unsubscribes` | `number \| undefined` | Optional | The number of unsubscribes, or suppressions, in this group. |
| `lastEmailSentAt` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "name": null,
  "description": null,
  "is_default": null,
  "id": 112,
  "unsubscribes": null,
  "last_email_sent_at": null
}
```

