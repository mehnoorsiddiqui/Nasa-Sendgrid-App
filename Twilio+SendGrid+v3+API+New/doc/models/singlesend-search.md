
# Singlesend Search

## Structure

`SinglesendSearch`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string \| undefined` | Optional | leading and trailing wildcard search on name of the Single Send<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `100` |
| `status` | [`Status3Enum[] \| undefined`](../../doc/models/status-3-enum.md) | Optional | current status of the Single Send<br>**Constraints**: *Unique Items Required* |
| `categories` | `string[] \| undefined` | Optional | categories to associate with this Single Send, match any single send that has at least one of the categories<br>**Constraints**: *Unique Items Required* |

## Example (as JSON)

```json
{
  "name": null,
  "status": null,
  "categories": null
}
```

