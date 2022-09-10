
# Bypass List Management

Allows you to bypass all unsubscribe groups and suppressions to ensure that the email is delivered to every single recipient. This should only be used in emergencies when it is absolutely necessary that every recipient receives your email. This filter cannot be combined with any other bypass filters. See our [documentation](https://sendgrid.com/docs/ui/sending-email/index-suppressions/#bypass-suppressions) for more about bypass filters.

## Structure

`BypassListManagement`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `enable` | `boolean \| undefined` | Optional | Indicates if this setting is enabled. |

## Example (as JSON)

```json
{
  "enable": null
}
```

