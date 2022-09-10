
# V3 Validations Email Request

## Structure

`V3ValidationsEmailRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `email` | `string` | Required | The email address that you want to validate. |
| `source` | `string \| undefined` | Optional | A one-word classifier for where this validation originated. |

## Example (as JSON)

```json
{
  "email": "example@example.com",
  "source": "signup"
}
```

