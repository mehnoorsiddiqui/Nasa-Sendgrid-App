/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, object, optional, Schema, string } from '../schema';

export interface MailSettingsTemplate {
  /** Indicates if the legacy email template setting is enabled. */
  enabled?: boolean;
  /** The HTML content that you want to use for your legacy email template. */
  htmlContent?: string;
}

export const mailSettingsTemplateSchema: Schema<MailSettingsTemplate> = object({
  enabled: ['enabled', optional(boolean())],
  htmlContent: ['html_content', optional(string())],
});
