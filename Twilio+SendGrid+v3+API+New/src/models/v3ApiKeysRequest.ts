/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, object, optional, Schema, string } from '../schema';

export interface V3ApiKeysRequest {
  /** The name you will use to describe this API Key. */
  name: string;
  /** The individual permissions that you are giving to this API Key. */
  scopes?: string[];
}

export const v3ApiKeysRequestSchema: Schema<V3ApiKeysRequest> = object({
  name: ['name', string()],
  scopes: ['scopes', optional(array(string()))],
});
