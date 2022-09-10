
# Open Tracking

Allows you to track if the email was opened by including a single pixel image in the body of the content. When the pixel is loaded, Twilio SendGrid can log that the email was opened.

## Structure

`OpenTracking`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `enable` | `boolean \| undefined` | Optional | Indicates if this setting is enabled. |
| `substitutionTag` | `string \| undefined` | Optional | Allows you to specify a substitution tag that you can insert in the body of your email at a location that you desire. This tag will be replaced by the open tracking pixel. |

## Example (as JSON)

```json
{
  "enable": null,
  "substitution_tag": null
}
```

