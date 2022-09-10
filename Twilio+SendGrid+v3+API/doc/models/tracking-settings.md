
# Tracking Settings

Settings to determine how you would like to track the metrics of how your recipients interact with your email.

## Structure

`TrackingSettings`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `clickTracking` | [`ClickTracking2 \| undefined`](../../doc/models/click-tracking-2.md) | Optional | - |
| `openTracking` | [`OpenTracking2 \| undefined`](../../doc/models/open-tracking-2.md) | Optional | - |
| `subscriptionTracking` | [`SubscriptionTracking2 \| undefined`](../../doc/models/subscription-tracking-2.md) | Optional | - |
| `ganalytics` | [`Ganalytics2 \| undefined`](../../doc/models/ganalytics-2.md) | Optional | - |

## Example (as JSON)

```json
{
  "click_tracking": null,
  "open_tracking": null,
  "subscription_tracking": null,
  "ganalytics": null
}
```

