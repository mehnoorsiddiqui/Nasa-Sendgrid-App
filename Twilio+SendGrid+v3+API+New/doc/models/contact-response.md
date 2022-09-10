
# Contact Response

## Structure

`ContactResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | ID assigned to a contact when added to the system. |
| `email` | `string` | Required | Email of the contact. This is a reserved field.<br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `254` |
| `alternateEmails` | `string[]` | Required | Alternate emails of the contact. This is a reserved field.<br>**Constraints**: *Minimum Items*: `0`, *Unique Items Required*, *Minimum Length*: `3`, *Maximum Length*: `254` |
| `firstName` | `string` | Required | First name of the contact. This is a reserved field.<br>**Constraints**: *Minimum Length*: `1` |
| `lastName` | `string` | Required | Last name of the contact. This is a reserved field.<br>**Constraints**: *Minimum Length*: `1` |
| `addressLine1` | `string` | Required | First line of address of the contact. This is a reserved field.<br>**Constraints**: *Minimum Length*: `0` |
| `addressLine2` | `string` | Required | Second line of address of the contact. This is a reserved field.<br>**Constraints**: *Minimum Length*: `0` |
| `city` | `string` | Required | City associated with the contact. This is a reserved field.<br>**Constraints**: *Minimum Length*: `0`, *Pattern*: `^[a-zA-Z\u0080-\u024F\s\/\-\)\(\`\.\"\']+$` |
| `stateProvinceRegion` | `string` | Required | State associated with the contact. This is a reserved field.<br>**Constraints**: *Minimum Length*: `0` |
| `postalCode` | `number` | Required | Zipcode associated with the address of the contact. This is a reserved field. |
| `country` | `string` | Required | Country associated with the address of the contact. This is a reserved field.<br>**Constraints**: *Minimum Length*: `0` |
| `listIds` | `string[] \| undefined` | Optional | IDs of all lists the contact is part of<br>**Constraints**: *Unique Items Required* |
| `customFields` | [`CustomFields2`](../../doc/models/custom-fields-2.md) | Required | - |
| `segmentIds` | `string[] \| undefined` | Optional | IDs of all segments the contact is part of<br>**Constraints**: *Unique Items Required* |

## Example (as JSON)

```json
{
  "id": "47d23ab0-d895-4359-a0d1-ffc7a6fc7e70",
  "email": "abcd@gmail.com",
  "alternate_emails": [
    "abcd@yahoo.com",
    "abcd@hotmail.com"
  ],
  "first_name": "Ab",
  "last_name": "Cd",
  "address_line_1": "street address / P.O. box / CompanyName / c/o",
  "address_line_2": "apartment, suite, unit, building, floor etc",
  "city": "Redwood City",
  "state_province_region": "CA",
  "postal_code": 94063,
  "country": "USA",
  "custom_fields": {
    "custom_field_name1": "custom_field_value1",
    "custom_field_name2": "custom_field_value2"
  }
}
```

