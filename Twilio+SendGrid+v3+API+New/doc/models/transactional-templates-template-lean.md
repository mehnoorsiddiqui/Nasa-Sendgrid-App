
# Transactional Templates Template Lean

## Structure

`TransactionalTemplatesTemplateLean`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | The ID of the transactional template. |
| `name` | `string` | Required | The name for the transactional template.<br>**Constraints**: *Maximum Length*: `100` |
| `generation` | [`Generation1Enum`](../../doc/models/generation-1-enum.md) | Required | - |
| `updatedAt` | `string` | Required | The date and time that this transactional template version was updated.<br>**Constraints**: *Pattern*: `^(\d{4}-\d{2}-\d{2}) ((\d{2}):(\d{2}):(\d{2}))$` |
| `versions` | [`TransactionalTemplatesVersionOutputLean[] \| undefined`](../../doc/models/transactional-templates-version-output-lean.md) | Optional | The different versions of this transactional template. |

## Example (as JSON)

```json
{
  "id": "0c314114-a2b7-4523-8cbc-a293d7d19007",
  "name": "example_name",
  "generation": "legacy",
  "updated_at": "2021-04-28 13:12:46",
  "versions": []
}
```

