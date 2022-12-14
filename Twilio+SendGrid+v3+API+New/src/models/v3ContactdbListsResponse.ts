/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, optional, Schema, string } from '../schema';

export interface V3ContactdbListsResponse {
  /** The ID of the list */
  id?: number;
  /** The new name for the list */
  name?: string;
  /** The number of recipients on the list */
  recipientCount?: number;
}

export const v3ContactdbListsResponseSchema: Schema<V3ContactdbListsResponse> = object(
  {
    id: ['id', optional(number())],
    name: ['name', optional(string())],
    recipientCount: ['recipient_count', optional(number())],
  }
);
