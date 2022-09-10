
# Partner Settings New Relic

## Structure

`PartnerSettingsNewRelic`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `enableSubuserStatistics` | `boolean \| undefined` | Optional | Indicates if your subuser statistics will be sent to your New Relic Dashboard. |
| `enabled` | `boolean` | Required | Indicates if this setting is enabled. |
| `licenseKey` | `string` | Required | The license key provided with your New Relic account. |

## Example (as JSON)

```json
{
  "enable_subuser_statistics": null,
  "enabled": false,
  "license_key": "license_key4"
}
```

