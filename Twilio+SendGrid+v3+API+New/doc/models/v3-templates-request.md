
# V3 Templates Request

## Structure

`V3TemplatesRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string` | Required | The name for the new transactional template.<br>**Constraints**: *Maximum Length*: `100` |
| `generation` | [`GenerationEnum \| undefined`](../../doc/models/generation-enum.md) | Optional | - |

## Example (as JSON)

```json
{
  "name": "example_name",
  "generation": "dynamic"
}
```

