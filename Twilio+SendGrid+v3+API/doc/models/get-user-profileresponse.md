
# GET User Profileresponse

## Structure

`GETUserProfileresponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `address` | `string` | Required | The user's address. |
| `address2` | `string \| undefined` | Optional | The second line of the user's address. |
| `city` | `string` | Required | The user's city. |
| `company` | `string` | Required | The name of the user's company. |
| `country` | `string` | Required | The user's country. |
| `firstName` | `string` | Required | The user's first name. |
| `lastName` | `string` | Required | The user's last name. |
| `phone` | `string` | Required | The user's phone number. |
| `state` | `string` | Required | The user's state. |
| `website` | `string` | Required | The user's website URL. |
| `zip` | `string` | Required | The user's zip code. |

## Example (as JSON)

```json
{
  "address": "address6",
  "address2": null,
  "city": "city0",
  "company": "company0",
  "country": "country4",
  "first_name": "first_name0",
  "last_name": "last_name8",
  "phone": "phone0",
  "state": "state4",
  "website": "website4",
  "zip": "zip6"
}
```

