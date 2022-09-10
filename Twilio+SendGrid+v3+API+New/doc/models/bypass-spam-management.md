
# Bypass Spam Management

Allows you to bypass the spam report list to ensure that the email is delivered to recipients. Bounce and unsubscribe lists will still be checked; addresses on these other lists will not receive the message. This filter cannot be combined with the `bypass_list_management` filter. See our [documentation](https://sendgrid.com/docs/ui/sending-email/index-suppressions/#bypass-suppressions) for more about bypass filters.

## Structure

`BypassSpamManagement`

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

