
# V3 Partner Settings New Relic Request

## Structure

`V3PartnerSettingsNewRelicRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `licenseKey` | `string \| undefined` | Optional | The license key for your New Relic account. |
| `enabled` | `boolean \| undefined` | Optional | Indicates if this partner setting is enabled. |
| `enableSubuserStatistics` | `boolean \| undefined` | Optional | Indicates if your subuser statistics will be sent to your New Relic Dashboard. |

## Example (as JSON)

```json
{
  "license_key": "",
  "enabled": true,
  "enable_subuser_statistics": true
}
```

