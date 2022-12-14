/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, boolean, object, optional, Schema, string } from '../schema';

export interface V3SuppressionInvalidEmailsRequest {
  /** Indicates if you want to remove all email address from the invalid emails list. */
  deleteAll?: boolean;
  /** The list of specific email addresses that you want to remove. */
  emails?: string[];
}

export const v3SuppressionInvalidEmailsRequestSchema: Schema<V3SuppressionInvalidEmailsRequest> = object(
  {
    deleteAll: ['delete_all', optional(boolean())],
    emails: ['emails', optional(array(string()))],
  }
);
