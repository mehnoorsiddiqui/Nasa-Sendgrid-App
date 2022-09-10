
# Content

## Structure

`Content`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string` | Required | The MIME type of the content you are including in your email (e.g., `“text/plain”` or `“text/html”`).<br>**Constraints**: *Minimum Length*: `1` |
| `value` | `string` | Required | The actual content of the specified MIME type that you are including in your email.<br>**Constraints**: *Minimum Length*: `1` |

## Example (as JSON)

```json
{
  "type": "type0",
  "value": "value2"
}
```

