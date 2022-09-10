
# V3 Whitelabel Dns Email Request

## Structure

`V3WhitelabelDnsEmailRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `linkId` | `number` | Required | The ID of the branded link.<br>**Constraints**: `>= 0` |
| `domainId` | `number` | Required | The ID of your SendGrid domain record.<br>**Constraints**: `>= 0` |
| `email` | `string` | Required | The email address to send the DNS information to. |
| `message` | `string \| undefined` | Optional | A custom text block to include in the email body sent with the records.<br>**Default**: `'Please set these DNS records in our hosting solution.'` |

## Example (as JSON)

```json
{
  "link_id": 29719392,
  "domain_id": 46873408,
  "email": "my_colleague@example.com",
  "message": "DNS Record for verification"
}
```

