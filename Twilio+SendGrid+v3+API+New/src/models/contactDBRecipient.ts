/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema } from '../schema';
import { Recipient, recipientSchema } from './recipient';

export interface ContactDBRecipient {
  recipients?: Recipient[];
}

export const contactDBRecipientSchema: Schema<ContactDBRecipient> = object({
  recipients: ['recipients', optional(array(lazy(() => recipientSchema)))],
});
