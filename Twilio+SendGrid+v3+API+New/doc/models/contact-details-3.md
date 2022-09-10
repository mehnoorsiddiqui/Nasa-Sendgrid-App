
# Contact Details 3

## Structure

`ContactDetails3`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | - |
| `firstName` | `string \| undefined` | Optional | - |
| `lastName` | `string \| undefined` | Optional | - |
| `uniqueName` | `string \| undefined` | Optional | - |
| `email` | `string \| undefined` | Optional | - |
| `alternateEmails` | `string[] \| undefined` | Optional | - |
| `addressLine1` | `string \| undefined` | Optional | - |
| `addressLine2` | `string \| undefined` | Optional | - |
| `city` | `string \| undefined` | Optional | - |
| `stateProvinceRegion` | `string \| undefined` | Optional | - |
| `country` | `string \| undefined` | Optional | - |
| `postalCode` | `string \| undefined` | Optional | - |
| `phoneNumber` | `string \| undefined` | Optional | - |
| `whatsapp` | `string \| undefined` | Optional | - |
| `line` | `string \| undefined` | Optional | - |
| `facebook` | `string \| undefined` | Optional | - |
| `listIds` | `string[]` | Required | - |
| `segmentIds` | `string[]` | Required | - |
| `customFields` | `unknown \| undefined` | Optional | - |
| `createdAt` | `string` | Required | - |
| `updatedAt` | `string` | Required | - |
| `metadata` | [`SelfMetadata \| undefined`](../../doc/models/self-metadata.md) | Optional | - |

## Example (as JSON)

```json
{
  "id": "id0",
  "first_name": null,
  "last_name": null,
  "unique_name": null,
  "email": null,
  "alternate_emails": null,
  "address_line_1": null,
  "address_line_2": null,
  "city": null,
  "state_province_region": null,
  "country": null,
  "postal_code": null,
  "phone_number": null,
  "whatsapp": null,
  "line": null,
  "facebook": null,
  "list_ids": [
    "list_ids1",
    "list_ids2",
    "list_ids3"
  ],
  "segment_ids": [
    "segment_ids0",
    "segment_ids1",
    "segment_ids2"
  ],
  "custom_fields": null,
  "created_at": "created_at2",
  "updated_at": "updated_at4",
  "_metadata": null
}
```

