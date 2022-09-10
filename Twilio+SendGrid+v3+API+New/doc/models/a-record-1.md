
# A Record 1

## Structure

`ARecord1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `valid` | `boolean` | Required | Indicates if the reverse DNS record could be validated. |
| `reason` | `string \| null` | Required | The reason the reverse DNS record could not be validated. Is `null` if the reverse DNS record was validated. |

## Example (as JSON)

```json
{
  "valid": false,
  "reason": "reason4"
}
```

