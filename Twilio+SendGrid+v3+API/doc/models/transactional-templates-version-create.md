
# Transactional Templates Version Create

## Structure

`TransactionalTemplatesVersionCreate`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `active` | [`Active1Enum \| undefined`](../../doc/models/active-1-enum.md) | Optional | - |
| `name` | `string` | Required | Name of the transactional template version.<br>**Constraints**: *Maximum Length*: `100` |
| `htmlContent` | `string \| undefined` | Optional | The HTML content of the version. Maximum of 1048576 bytes allowed.<br>**Constraints**: *Maximum Length*: `1048576` |
| `plainContent` | `string \| undefined` | Optional | Text/plain content of the transactional template version. Maximum of 1048576 bytes allowed.<br>**Default**: `'<generated from html_content if left empty>'`<br>**Constraints**: *Maximum Length*: `1048576` |
| `generatePlainContent` | `boolean \| undefined` | Optional | If true, plain_content is always generated from html_content. If false, plain_content is not altered.<br>**Default**: `true` |
| `subject` | `string` | Required | Subject of the new transactional template version.<br>**Constraints**: *Maximum Length*: `255` |
| `editor` | [`EditorEnum \| undefined`](../../doc/models/editor-enum.md) | Optional | - |
| `testData` | `string \| undefined` | Optional | For dynamic templates only, the mock json data that will be used for template preview and test sends. |

## Example (as JSON)

```json
{
  "template_id": "Excepteur Ut qui",
  "active": 1,
  "name": "pariatur non incididunt commodo",
  "html_content": "dolor",
  "generate_plain_content": false,
  "subject": "aliquip nulla Ut",
  "editor": "design",
  "plain_content": "labore dolore"
}
```

