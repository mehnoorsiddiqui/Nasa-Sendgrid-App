
# V3 Marketing Contacts Request

## Structure

`V3MarketingContactsRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `listIds` | `string[] \| undefined` | Optional | An array of List ID strings that this contact will be added to. |
| `contacts` | [`ContactRequest[]`](../../doc/models/contact-request.md) | Required | One or more contacts objects that you intend to upsert. The available fields for a contact, including the required `email` field are described below.<br>**Constraints**: *Minimum Items*: `1`, *Maximum Items*: `30000` |

## Example (as JSON)

```json
{
  "list_ids": null,
  "contacts": [
    {
      "address_line_1": null,
      "address_line_2": null,
      "alternate_emails": null,
      "city": null,
      "country": null,
      "email": "email9",
      "first_name": null,
      "last_name": null,
      "postal_code": null,
      "state_province_region": null,
      "custom_fields": null
    },
    {
      "address_line_1": null,
      "address_line_2": null,
      "alternate_emails": null,
      "city": null,
      "country": null,
      "email": "email8",
      "first_name": null,
      "last_name": null,
      "postal_code": null,
      "state_province_region": null,
      "custom_fields": null
    }
  ]
}
```

