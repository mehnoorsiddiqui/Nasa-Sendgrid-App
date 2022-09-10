
# V3 Marketing Singlesends Request

## Structure

`V3MarketingSinglesendsRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string \| undefined` | Optional | The name of the duplicate Single Send. If you choose to leave the name field blank, your duplicate will be assigned the name of the Single Send it was copied from with the text 'Copy of ' prepended to it. The end of the new Single Send name, including 'Copy of ', will be trimmed if the name exceeds the character limit.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `100` |

## Example (as JSON)

```json
{
  "name": null
}
```

