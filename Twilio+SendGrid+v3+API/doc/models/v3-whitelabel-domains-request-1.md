
# V3 Whitelabel Domains Request 1

## Structure

`V3WhitelabelDomainsRequest1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `mDefault` | `boolean \| undefined` | Optional | Indicates whether this is the default authenticated domain.<br>**Default**: `false` |
| `customSpf` | `boolean \| undefined` | Optional | Indicates whether to generate a custom SPF record for manual security.<br>**Default**: `false` |

## Example (as JSON)

```json
{
  "default": false,
  "custom_spf": true
}
```

