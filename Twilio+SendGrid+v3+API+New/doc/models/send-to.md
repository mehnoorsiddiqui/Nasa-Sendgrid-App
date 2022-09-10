
# Send To

## Structure

`SendTo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `listIds` | `string[] \| undefined` | Optional | The recipient List IDs that will receive the Single Send.<br>**Constraints**: *Maximum Items*: `10` |
| `segmentIds` | `string[] \| undefined` | Optional | The recipient Segment IDs that will receive the Single Send.<br>**Constraints**: *Maximum Items*: `10` |
| `all` | `boolean \| undefined` | Optional | Set to `true` to send to All Contacts. If set to `false`, at least one `list_ids` or `segment_ids` value must be provided before the Single Send is scheduled to be sent to recipients.<br>**Default**: `false` |

## Example (as JSON)

```json
{
  "list_ids": null,
  "segment_ids": null,
  "all": null
}
```

