/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, object, optional, Schema, string } from '../schema';

export interface SettingsSubscriptionTracking {
  /** Indicates if subscription tracking is enabled. */
  enabled?: boolean;
  /** The information and HTML for your unsubscribe link. */
  htmlContent?: string;
  /** The HTML that will be displayed on the page that your customers will see after clicking unsubscribe, hosted on SendGrid’s server. */
  landing?: string;
  /** The information in plain text for your unsubscribe link. You should have the “<% %>” tag in your content, otherwise the user will have no URL for unsubscribing. */
  plainContent?: string;
  /** Your custom defined replacement tag for your templates. Use this tag to place your unsubscribe content anywhere in your emailtemplate. */
  replace?: string;
  /** The URL where you would like your users sent to unsubscribe. */
  url?: string;
}

export const settingsSubscriptionTrackingSchema: Schema<SettingsSubscriptionTracking> = object(
  {
    enabled: ['enabled', optional(boolean())],
    htmlContent: ['html_content', optional(string())],
    landing: ['landing', optional(string())],
    plainContent: ['plain_content', optional(string())],
    replace: ['replace', optional(string())],
    url: ['url', optional(string())],
  }
);
