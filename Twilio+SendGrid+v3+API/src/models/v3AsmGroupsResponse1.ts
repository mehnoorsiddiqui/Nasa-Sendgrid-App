/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  boolean,
  nullable,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';

export interface V3AsmGroupsResponse1 {
  /** The name of your suppression group. Required when creating a group. */
  name?: string;
  /** A brief description of your suppression group. Required when creating a group. */
  description?: string;
  /** Indicates if you would like this to be your default suppression group. */
  isDefault?: boolean;
  /** The ID of the suppression group. */
  id: number;
  /** The number of unsubscribes, or suppressions, in this group. */
  unsubscribes?: number;
  lastEmailSentAt?: string | null;
}

export const v3AsmGroupsResponse1Schema: Schema<V3AsmGroupsResponse1> = object({
  name: ['name', optional(string())],
  description: ['description', optional(string())],
  isDefault: ['is_default', optional(boolean())],
  id: ['id', number()],
  unsubscribes: ['unsubscribes', optional(number())],
  lastEmailSentAt: ['last_email_sent_at', optional(nullable(string()))],
});
