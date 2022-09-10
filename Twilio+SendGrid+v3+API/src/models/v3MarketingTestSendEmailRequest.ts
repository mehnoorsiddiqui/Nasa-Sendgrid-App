/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, number, object, optional, Schema, string } from '../schema';

export interface V3MarketingTestSendEmailRequest {
  /** The ID of the template that you would like to use. If you use a template that contains a subject and content (either text or HTML), then those values specified at the personalizations or message level will not be used. */
  templateId: string;
  /** You can override the active template with an alternative template version by passing the version ID in this field. If this field is blank, the active template version will be used. */
  versionIdOverride?: string;
  /** This ID must belong to a verified sender. Alternatively, you may supply a `from_address` email. */
  senderId?: number;
  /** A custom unsubscribe URL. */
  customUnsubscribeUrl?: string;
  suppressionGroupId?: number;
  /** An array of email addresses you want to send the test message to. */
  emails: string[];
  /** You can either specify this address or specify a verified sender ID. */
  fromAddress?: string;
}

export const v3MarketingTestSendEmailRequestSchema: Schema<V3MarketingTestSendEmailRequest> = object(
  {
    templateId: ['template_id', string()],
    versionIdOverride: ['version_id_override', optional(string())],
    senderId: ['sender_id', optional(number())],
    customUnsubscribeUrl: ['custom_unsubscribe_url', optional(string())],
    suppressionGroupId: ['suppression_group_id', optional(number())],
    emails: ['emails', array(string())],
    fromAddress: ['from_address', optional(string())],
  }
);
