
# Settings Google Analytics

## Structure

`SettingsGoogleAnalytics`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `enabled` | `boolean \| undefined` | Optional | Indicates if Google Analytics is enabled. |
| `utmCampaign` | `string \| undefined` | Optional | The name of the campaign. |
| `utmContent` | `string \| undefined` | Optional | Used to differentiate ads |
| `utmMedium` | `string \| undefined` | Optional | Name of the marketing medium (e.g. "Email"). |
| `utmSource` | `string \| undefined` | Optional | Name of the referrer source. |
| `utmTerm` | `string \| undefined` | Optional | Any paid keywords. |

## Example (as JSON)

```json
{
  "enabled": true,
  "utm_source": "sendgrid.com",
  "utm_medium": "email",
  "utm_term": "",
  "utm_content": "",
  "utm_campaign": "website"
}
```

