/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, number, object, Schema, string } from '../schema';

export interface V3AsmGroupsResponse {
  /** The ID of the suppression group. */
  id: number;
  /** The name of the suppression group. */
  name: string;
  /** A brief description of the suppression group. */
  description: string;
  /** Indicates if this is the default suppression group. */
  isDefault: boolean;
}

export const v3AsmGroupsResponseSchema: Schema<V3AsmGroupsResponse> = object({
  id: ['id', number()],
  name: ['name', string()],
  description: ['description', string()],
  isDefault: ['is_default', boolean()],
});
