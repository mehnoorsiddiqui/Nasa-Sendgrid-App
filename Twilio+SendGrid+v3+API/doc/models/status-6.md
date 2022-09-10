
# Status 6

## Structure

`Status6`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | Valid values are "worker_delay" and "worker_delay_seconds" (the second value appears only if "worker_delay" has a value of "delayed"). |
| `value` | `string \| undefined` | Optional | Valid values for the ID "worker_delay" are "OK" or "Delayed". Valid values for the ID "worker_delay_seconds" is the time of delay to upload. |

## Example (as JSON)

```json
{
  "id": null,
  "value": null
}
```

