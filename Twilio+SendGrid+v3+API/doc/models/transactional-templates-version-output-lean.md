
# Transactional Templates Version Output Lean

## Structure

`TransactionalTemplatesVersionOutputLean`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | ID of the transactional template version. |
| `templateId` | `string \| undefined` | Optional | ID of the transactional template. |
| `active` | [`ActiveEnum \| undefined`](../../doc/models/active-enum.md) | Optional | - |
| `name` | `string \| undefined` | Optional | Name of the transactional template version.<br>**Constraints**: *Maximum Length*: `100` |
| `subject` | `string \| undefined` | Optional | Subject of the new transactional template version.<br>**Constraints**: *Maximum Length*: `255` |
| `updatedAt` | `string \| undefined` | Optional | The date and time that this transactional template version was updated. |
| `generatePlainContent` | `boolean \| undefined` | Optional | If true, plain_content is always generated from html_content. If false, plain_content is not altered.<br>**Default**: `true` |
| `editor` | [`EditorEnum \| undefined`](../../doc/models/editor-enum.md) | Optional | - |
| `thumbnailUrl` | `string \| undefined` | Optional | A Thumbnail preview of the template's html content. |

## Example (as JSON)

```json
{
  "id": null,
  "template_id": null,
  "active": null,
  "name": null,
  "subject": null,
  "updated_at": null,
  "generate_plain_content": null,
  "editor": null,
  "thumbnail_url": null
}
```

