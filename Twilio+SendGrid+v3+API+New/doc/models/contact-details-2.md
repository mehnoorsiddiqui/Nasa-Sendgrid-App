
# Contact Details 2

## Structure

`ContactDetails2`

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
| `segmentIds` | `string[] \| undefined` | Optional | - |
| `customFields` | `unknown \| undefined` | Optional | - |
| `createdAt` | `string` | Required | - |
| `updatedAt` | `string` | Required | - |
| `metadata` | [`SelfMetadata \| undefined`](../../doc/models/self-metadata.md) | Optional | - |

## Example (as JSON)

```json
{
  "id": "00001770-0000-0000-0000-000000000000",
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
    "000020ef-0000-0000-0000-000000000000",
    "000020f0-0000-0000-0000-000000000000",
    "000020f1-0000-0000-0000-000000000000"
  ],
  "segment_ids": null,
  "custom_fields": null,
  "created_at": "2016-03-13T12:52:32.123Z",
  "updated_at": "2016-03-13T12:52:32.123Z",
  "_metadata": null
}
```

