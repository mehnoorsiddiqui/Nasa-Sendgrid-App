
# Ganalytics

Allows you to enable tracking provided by Google Analytics.

## Structure

`Ganalytics`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `enable` | `boolean \| undefined` | Optional | Indicates if this setting is enabled. |
| `utmSource` | `string \| undefined` | Optional | Name of the referrer source. (e.g. Google, SomeDomain.com, or Marketing Email) |
| `utmMedium` | `string \| undefined` | Optional | Name of the marketing medium. (e.g. Email) |
| `utmTerm` | `string \| undefined` | Optional | Used to identify any paid keywords. |
| `utmContent` | `string \| undefined` | Optional | Used to differentiate your campaign from advertisements. |
| `utmCampaign` | `string \| undefined` | Optional | The name of the campaign. |

## Example (as JSON)

```json
{
  "enable": null,
  "utm_source": null,
  "utm_medium": null,
  "utm_term": null,
  "utm_content": null,
  "utm_campaign": null
}
```

