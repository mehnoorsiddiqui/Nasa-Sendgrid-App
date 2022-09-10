
# IP Access Response

## Structure

`IPAccessResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `result` | [`Result[] \| undefined`](../../doc/models/result.md) | Optional | An array listing all of your allowed IPs. |

## Example (as JSON)

```json
{
  "result": [
    {
      "id": 1,
      "ip": "192.168.1.1/32",
      "created_at": 1441824715,
      "updated_at": 1441824715
    },
    {
      "id": 2,
      "ip": "192.0.0.0/8",
      "created_at": 1441824715,
      "updated_at": 1441824715
    },
    {
      "id": 3,
      "ip": "192.168.1.3/32",
      "created_at": 1441824715,
      "updated_at": 1441824715
    }
  ]
}
```

