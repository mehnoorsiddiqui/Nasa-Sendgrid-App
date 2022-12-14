/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, object, Schema, unknown } from '../schema';

export interface ListRecipientsresponse {
  recipients: unknown[];
}

export const listRecipientsresponseSchema: Schema<ListRecipientsresponse> = object(
  { recipients: ['recipients', array(unknown())] }
);
