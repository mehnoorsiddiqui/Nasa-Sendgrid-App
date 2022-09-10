
# Parse Setting

## Structure

`ParseSetting`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `url` | `string \| undefined` | Optional | The public URL where you would like SendGrid to POST the data parsed from your email. Any emails sent with the given hostname provided (whose MX records have been updated to point to SendGrid) will be parsed and POSTed to this URL. |
| `hostname` | `string \| undefined` | Optional | A specific and unique domain or subdomain that you have created to use exclusively to parse your incoming email. For example, `parse.yourdomain.com`. |
| `spamCheck` | `boolean \| undefined` | Optional | Indicates if you would like SendGrid to check the content parsed from your emails for spam before POSTing them to your domain. |
| `sendRaw` | `boolean \| undefined` | Optional | Indicates if you would like SendGrid to post the original MIME-type content of your parsed email. When this parameter is set to `true`, SendGrid will send a JSON payload of the content of your email. |

## Example (as JSON)

```json
{
  "url": "http://email.myhostname.com",
  "hostname": "myhostname.com",
  "spam_check": false,
  "send_raw": true
}
```

