
# Design Output

## Structure

`DesignOutput`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | ID of the Design. |
| `updatedAt` | `string \| undefined` | Optional | Datetime that Design was last updated. |
| `createdAt` | `string \| undefined` | Optional | Datetime that Design was created. |
| `thumbnailUrl` | `string \| undefined` | Optional | A Thumbnail preview of the template's html content. |
| `name` | `string \| undefined` | Optional | The name of the new design.<br>**Default**: `'Duplicate: <original design name>'` |
| `editor` | [`EditorEnum \| undefined`](../../doc/models/editor-enum.md) | Optional | - |
| `generatePlainContent` | `boolean \| undefined` | Optional | If true, plain_content is always generated from html_content. If false, plain_content is not altered.<br>**Default**: `true` |
| `subject` | `string \| undefined` | Optional | Subject of the Design.<br>**Constraints**: *Maximum Length*: `5000` |
| `categories` | `string[] \| undefined` | Optional | The list of categories applied to the design<br>**Constraints**: *Maximum Items*: `10`, *Unique Items Required*, *Maximum Length*: `255` |
| `htmlContent` | `string` | Required | The HTML content of the Design.<br>**Constraints**: *Maximum Length*: `1048576` |
| `plainContent` | `string \| undefined` | Optional | Plain text content of the Design.<br>**Default**: `'<generated from html_content if left empty>'`<br>**Constraints**: *Maximum Length*: `1048576` |

## Example (as JSON)

```json
{
  "id": null,
  "updated_at": null,
  "created_at": null,
  "thumbnail_url": null,
  "name": null,
  "editor": null,
  "generate_plain_content": null,
  "subject": null,
  "categories": null,
  "html_content": "html_content4",
  "plain_content": null
}
```

