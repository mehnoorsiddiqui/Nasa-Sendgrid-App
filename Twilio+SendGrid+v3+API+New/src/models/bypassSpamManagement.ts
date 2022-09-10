/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, object, optional, Schema } from '../schema';

/** Allows you to bypass the spam report list to ensure that the email is delivered to recipients. Bounce and unsubscribe lists will still be checked; addresses on these other lists will not receive the message. This filter cannot be combined with the `bypass_list_management` filter. See our [documentation](https://sendgrid.com/docs/ui/sending-email/index-suppressions/#bypass-suppressions) for more about bypass filters. */
export interface BypassSpamManagement {
  /** Indicates if this setting is enabled. */
  enable?: boolean;
}

export const bypassSpamManagementSchema: Schema<BypassSpamManagement> = object({
  enable: ['enable', optional(boolean())],
});
