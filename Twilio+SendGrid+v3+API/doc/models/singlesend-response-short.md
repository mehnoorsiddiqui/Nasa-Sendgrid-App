
# Singlesend Response Short

## Structure

`SinglesendResponseShort`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | - |
| `name` | `string` | Required | name of the Single Send<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `100` |
| `abtest` | `unknown` | Required | - |
| `status` | [`Status1Enum`](../../doc/models/status-1-enum.md) | Required | - |
| `categories` | `string[]` | Required | categories to associate with this Single Send<br>**Constraints**: *Maximum Items*: `10`, *Unique Items Required* |
| `sendAt` | `string \| undefined` | Optional | The ISO 8601 time at which to send the Single Send. This must be in future or the string "now". Emails can be scheduled up to 72 hours in advance. However, this scheduling constraint does not apply to campaigns sent via [Marketing Campaigns](https://docs.sendgrid.com/ui/sending-email/how-to-send-email-with-marketing-campaigns/). |
| `isAbtest` | `boolean` | Required | true if the Single Send's AB Test functionality has been toggled on |
| `updatedAt` | `string` | Required | the ISO 8601 time at which the Single Send was last updated |
| `createdAt` | `string` | Required | the ISO 8601 time at which the Single Send was created |

## Example (as JSON)

```json
{
  "id": "00001770-0000-0000-0000-000000000000",
  "name": "name0",
  "abtest": {
    "key1": "val1",
    "key2": "val2"
  },
  "status": "triggered",
  "categories": [
    "categories4",
    "categories5",
    "categories6"
  ],
  "send_at": null,
  "is_abtest": false,
  "updated_at": "2016-03-13T12:52:32.123Z",
  "created_at": "2016-03-13T12:52:32.123Z"
}
```

