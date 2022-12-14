/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

export interface V3IpsPoolsRequest {
  /** The name of your new IP pool. */
  name: string;
}

export const v3IpsPoolsRequestSchema: Schema<V3IpsPoolsRequest> = object({
  name: ['name', string()],
});
