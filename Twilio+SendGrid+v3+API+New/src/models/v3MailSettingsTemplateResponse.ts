/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, object, Schema, string } from '../schema';

export interface V3MailSettingsTemplateResponse {
  /** Indicates if the legacy email template mail setting is enabled. */
  enabled: boolean;
  /** The HTML content of your legacy email template. */
  htmlContent: string;
}

export const v3MailSettingsTemplateResponseSchema: Schema<V3MailSettingsTemplateResponse> = object(
  { enabled: ['enabled', boolean()], htmlContent: ['html_content', string()] }
);
