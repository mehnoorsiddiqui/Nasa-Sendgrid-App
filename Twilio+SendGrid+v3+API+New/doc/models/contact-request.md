
# Contact Request

## Structure

`ContactRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `addressLine1` | `string \| undefined` | Optional | The first line of the address.<br>**Constraints**: *Maximum Length*: `100` |
| `addressLine2` | `string \| undefined` | Optional | An optional second line for the address.<br>**Constraints**: *Maximum Length*: `100` |
| `alternateEmails` | `string[] \| undefined` | Optional | Additional emails associated with the contact.<br>**Constraints**: *Minimum Items*: `0`, *Maximum Items*: `5`, *Maximum Length*: `254` |
| `city` | `string \| undefined` | Optional | The contact's city.<br>**Constraints**: *Maximum Length*: `60` |
| `country` | `string \| undefined` | Optional | The contact's country. Can be a full name or an abbreviation.<br>**Constraints**: *Maximum Length*: `50` |
| `email` | `string` | Required | The contact's primary email. This is required to be a valid email.<br>**Constraints**: *Maximum Length*: `254` |
| `firstName` | `string \| undefined` | Optional | The contact's personal name.<br>**Constraints**: *Maximum Length*: `50` |
| `lastName` | `string \| undefined` | Optional | The contact's family name.<br>**Constraints**: *Maximum Length*: `50` |
| `postalCode` | `string \| undefined` | Optional | The contact's ZIP code or other postal code. |
| `stateProvinceRegion` | `string \| undefined` | Optional | The contact's state, province, or region.<br>**Constraints**: *Maximum Length*: `50` |
| `customFields` | `unknown \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "address_line_1": null,
  "address_line_2": null,
  "alternate_emails": null,
  "city": null,
  "country": null,
  "email": "email6",
  "first_name": null,
  "last_name": null,
  "postal_code": null,
  "state_province_region": null,
  "custom_fields": null
}
```

