
# Transactional Templates Template

## Structure

`TransactionalTemplatesTemplate`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | The ID of the transactional template. |
| `name` | `string` | Required | The name for the transactional template.<br>**Constraints**: *Maximum Length*: `100` |
| `generation` | [`Generation1Enum`](../../doc/models/generation-1-enum.md) | Required | - |
| `updatedAt` | `string` | Required | The date and time that this transactional template version was updated.<br>**Constraints**: *Pattern*: `^(\d{4}-\d{2}-\d{2}) ((\d{2}):(\d{2}):(\d{2}))$` |
| `versions` | [`TransactionalTemplatesVersionOutputLean[] \| undefined`](../../doc/models/transactional-templates-version-output-lean.md) | Optional | The different versions of this transactional template. |
| `warning` | [`Warning1 \| undefined`](../../doc/models/warning-1.md) | Optional | - |

## Example (as JSON)

```json
{
  "id": "33feeff2-5069-43fe-8853-428651e5be79",
  "name": "example_name",
  "updated_at": "2021-04-28 13:12:46",
  "warning": {
    "message": "Sample warning message"
  },
  "generation": "legacy"
}
```

