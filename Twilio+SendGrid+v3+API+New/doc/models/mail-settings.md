
# Mail Settings

A collection of different mail settings that you can use to specify how you would like this email to be handled.

## Structure

`MailSettings`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `bypassListManagement` | [`BypassListManagement2 \| undefined`](../../doc/models/bypass-list-management-2.md) | Optional | - |
| `bypassSpamManagement` | [`BypassSpamManagement2 \| undefined`](../../doc/models/bypass-spam-management-2.md) | Optional | - |
| `bypassBounceManagement` | [`BypassBounceManagement2 \| undefined`](../../doc/models/bypass-bounce-management-2.md) | Optional | - |
| `bypassUnsubscribeManagement` | [`BypassUnsubscribeManagement2 \| undefined`](../../doc/models/bypass-unsubscribe-management-2.md) | Optional | - |
| `footer` | [`Footer2 \| undefined`](../../doc/models/footer-2.md) | Optional | - |
| `sandboxMode` | [`SandboxMode2 \| undefined`](../../doc/models/sandbox-mode-2.md) | Optional | - |

## Example (as JSON)

```json
{
  "bypass_list_management": null,
  "bypass_spam_management": null,
  "bypass_bounce_management": null,
  "bypass_unsubscribe_management": null,
  "footer": null,
  "sandbox_mode": null
}
```

