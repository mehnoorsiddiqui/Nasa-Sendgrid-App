
# Transactional Templates Version Output

## Structure

`TransactionalTemplatesVersionOutput`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `warnings` | [`Warning1[] \| undefined`](../../doc/models/warning-1.md) | Optional | - |
| `active` | [`Active1Enum \| undefined`](../../doc/models/active-1-enum.md) | Optional | - |
| `name` | `string` | Required | Name of the transactional template version.<br>**Constraints**: *Maximum Length*: `100` |
| `htmlContent` | `string \| undefined` | Optional | The HTML content of the version. Maximum of 1048576 bytes allowed.<br>**Constraints**: *Maximum Length*: `1048576` |
| `plainContent` | `string \| undefined` | Optional | Text/plain content of the transactional template version. Maximum of 1048576 bytes allowed.<br>**Default**: `'<generated from html_content if left empty>'`<br>**Constraints**: *Maximum Length*: `1048576` |
| `generatePlainContent` | `boolean \| undefined` | Optional | If true, plain_content is always generated from html_content. If false, plain_content is not altered.<br>**Default**: `true` |
| `subject` | `string` | Required | Subject of the new transactional template version.<br>**Constraints**: *Maximum Length*: `255` |
| `editor` | [`EditorEnum \| undefined`](../../doc/models/editor-enum.md) | Optional | - |
| `testData` | `string \| undefined` | Optional | For dynamic templates only, the mock json data that will be used for template preview and test sends. |
| `id` | `string \| undefined` | Optional | ID of the transactional template version. |
| `templateId` | `string \| undefined` | Optional | ID of the transactional template. |
| `updatedAt` | `string \| undefined` | Optional | The date and time that this transactional template version was updated. |
| `thumbnailUrl` | `string \| undefined` | Optional | A Thumbnail preview of the template's html content. |

## Example (as JSON)

```json
{
  "warnings": null,
  "active": null,
  "name": "name0",
  "html_content": null,
  "plain_content": null,
  "generate_plain_content": null,
  "subject": "subject6",
  "editor": null,
  "test_data": null,
  "id": null,
  "template_id": null,
  "updated_at": null,
  "thumbnail_url": null
}
```

