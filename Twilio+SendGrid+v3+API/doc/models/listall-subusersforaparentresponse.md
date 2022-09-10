
# Listall Subusersforaparentresponse

## Structure

`ListallSubusersforaparentresponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `disabled` | `boolean` | Required | Whether or not the user is enabled or disabled. |
| `id` | `number` | Required | The ID of this subuser. |
| `username` | `string` | Required | The name by which this subuser will be referred. |
| `email` | `string` | Required | The email address to contact this subuser. |

## Example (as JSON)

```json
{
  "disabled": false,
  "email": "example@example.com",
  "id": 1234,
  "username": "example_subuser"
}
```

