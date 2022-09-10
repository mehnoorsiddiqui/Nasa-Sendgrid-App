
# V3 Marketing Lists Response 1

## Structure

`V3MarketingListsResponse1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | The generated ID for your list.<br>**Constraints**: *Minimum Length*: `36`, *Maximum Length*: `36` |
| `name` | `string \| undefined` | Optional | The name you gave your list. |
| `contactCount` | `number \| undefined` | Optional | The number of contacts currently stored on the list. |
| `metadata` | [`SelfMetadata \| undefined`](../../doc/models/self-metadata.md) | Optional | - |
| `contactSample` | [`ContactDetails2 \| undefined`](../../doc/models/contact-details-2.md) | Optional | - |

## Example (as JSON)

```json
{
  "id": null,
  "name": null,
  "contact_count": null,
  "_metadata": null,
  "contact_sample": null
}
```

