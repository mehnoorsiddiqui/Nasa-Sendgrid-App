/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema } from '../schema';
import {
  ContactDBRecipient,
  contactDBRecipientSchema,
} from './contactDBRecipient';

export interface V3ContactdbRecipientsSearchResponse {
  recipients?: ContactDBRecipient[];
}

export const v3ContactdbRecipientsSearchResponseSchema: Schema<V3ContactdbRecipientsSearchResponse> = object(
  {
    recipients: [
      'recipients',
      optional(array(lazy(() => contactDBRecipientSchema))),
    ],
  }
);
