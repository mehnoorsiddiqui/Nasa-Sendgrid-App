
# Asm

An object allowing you to specify how to handle unsubscribes.

## Structure

`Asm`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `groupId` | `number` | Required | The unsubscribe group to associate with this email. |
| `groupsToDisplay` | `number[] \| undefined` | Optional | An array containing the unsubscribe groups that you would like to be displayed on the unsubscribe preferences page.<br>**Constraints**: *Maximum Items*: `25` |

## Example (as JSON)

```json
{
  "group_id": 228,
  "groups_to_display": null
}
```

