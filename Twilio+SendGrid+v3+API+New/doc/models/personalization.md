
# Personalization

## Structure

`Personalization`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `from` | [`FromEmailObject \| undefined`](../../doc/models/from-email-object.md) | Optional | - |
| `to` | [`ToEmailArray[]`](../../doc/models/to-email-array.md) | Required | - |
| `cc` | [`CCBCCEmailObject[] \| undefined`](../../doc/models/ccbcc-email-object.md) | Optional | An array of recipients who will receive a copy of your email. Each object in this array must contain the recipient's email address. Each object in the array may optionally contain the recipient's name.<br>**Constraints**: *Maximum Items*: `1000` |
| `bcc` | [`CCBCCEmailObject[] \| undefined`](../../doc/models/ccbcc-email-object.md) | Optional | An array of recipients who will receive a blind carbon copy of your email. Each object in this array must contain the recipient's email address. Each object in the array may optionally contain the recipient's name.<br>**Constraints**: *Maximum Items*: `1000` |
| `subject` | `string \| undefined` | Optional | The subject of your email. See character length requirements according to [RFC 2822](http://stackoverflow.com/questions/1592291/what-is-the-email-subject-length-limit#answer-1592310).<br>**Constraints**: *Minimum Length*: `1` |
| `headers` | `unknown \| undefined` | Optional | A collection of JSON key/value pairs allowing you to specify handling instructions for your email. You may not overwrite the following headers: `x-sg-id`, `x-sg-eid`, `received`, `dkim-signature`, `Content-Type`, `Content-Transfer-Encoding`, `To`, `From`, `Subject`, `Reply-To`, `CC`, `BCC` |
| `substitutions` | `unknown \| undefined` | Optional | Substitutions allow you to insert data without using Dynamic Transactional Templates. This field should **not** be used in combination with a Dynamic Transactional Template, which can be identified by a `template_id` starting with `d-`. This field is a collection of key/value pairs following the pattern "substitution_tag":"value to substitute". The key/value pairs must be strings. These substitutions will apply to the text and html content of the body of your email, in addition to the `subject` and `reply-to` parameters. The total collective size of your substitutions may not exceed 10,000 bytes per personalization object. |
| `dynamicTemplateData` | `unknown \| undefined` | Optional | Dynamic template data is available using Handlebars syntax in Dynamic Transactional Templates. This field should be used in combination with a Dynamic Transactional Template, which can be identified by a `template_id` starting with `d-`. This field is a collection of key/value pairs following the pattern "variable_name":"value to insert". |
| `customArgs` | `unknown \| undefined` | Optional | Values that are specific to this personalization that will be carried along with the email and its activity data. Substitutions will not be made on custom arguments, so any string that is entered into this parameter will be assumed to be the custom argument that you would like to be used. This field may not exceed 10,000 bytes. |
| `sendAt` | `number \| undefined` | Optional | A unix timestamp allowing you to specify when your email should be delivered. Scheduling delivery more than 72 hours in advance is forbidden. |

## Example (as JSON)

```json
{
  "to": [
    {
      "email": "john_doe@example.com",
      "name": "John Doe"
    }
  ]
}
```

