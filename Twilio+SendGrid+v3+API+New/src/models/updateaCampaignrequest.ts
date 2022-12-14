/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, object, Schema, string } from '../schema';

export interface UpdateaCampaignrequest {
  /** The title of the campaign. */
  title: string;
  /** The subject line for your campaign. */
  subject: string;
  /** The categories you want to tag on this campaign. */
  categories: string[];
  /** The HTML content of this campaign. */
  htmlContent: string;
  /** The plain content of this campaign. */
  plainContent: string;
}

export const updateaCampaignrequestSchema: Schema<UpdateaCampaignrequest> = object(
  {
    title: ['title', string()],
    subject: ['subject', string()],
    categories: ['categories', array(string())],
    htmlContent: ['html_content', string()],
    plainContent: ['plain_content', string()],
  }
);
