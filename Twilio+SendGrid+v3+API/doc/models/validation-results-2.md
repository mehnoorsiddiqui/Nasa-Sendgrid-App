
# Validation Results 2

The individual DNS records that are checked when validating, including the reason for any invalid DNS records.

## Structure

`ValidationResults2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `mailCname` | [`MailCname2 \| undefined`](../../doc/models/mail-cname-2.md) | Optional | - |
| `dkim1` | [`Dkim12 \| undefined`](../../doc/models/dkim-12.md) | Optional | - |
| `dkim2` | [`Dkim12 \| undefined`](../../doc/models/dkim-12.md) | Optional | - |
| `spf` | [`Spf2 \| undefined`](../../doc/models/spf-2.md) | Optional | - |

## Example (as JSON)

```json
{
  "mail_cname": null,
  "dkim1": null,
  "dkim2": null,
  "spf": null
}
```

