
# V3 Access Settings Activity Response

## Structure

`V3AccessSettingsActivityResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `result` | [`Result1[]`](../../doc/models/result-1.md) | Required | An array containing the IPs that recently attempted to access your account. |

## Example (as JSON)

```json
{
  "result": [
    {
      "allowed": false,
      "auth_method": "auth_method2",
      "first_at": 174,
      "ip": "ip2",
      "last_at": 246,
      "location": "location2"
    },
    {
      "allowed": true,
      "auth_method": "auth_method3",
      "first_at": 175,
      "ip": "ip3",
      "last_at": 247,
      "location": "location3"
    },
    {
      "allowed": false,
      "auth_method": "auth_method4",
      "first_at": 176,
      "ip": "ip4",
      "last_at": 248,
      "location": "location4"
    }
  ]
}
```

