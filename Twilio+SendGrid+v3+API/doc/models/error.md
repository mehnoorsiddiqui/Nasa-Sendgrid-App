
# Error

## Structure

`Error`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `message` | `string` | Required | the error message |
| `field` | `string \| undefined` | Optional | the field that generated the error |
| `help` | `unknown \| undefined` | Optional | helper text or docs for troubleshooting |

## Example (as JSON)

```json
{
  "message": "message0",
  "field": null,
  "help": null
}
```

