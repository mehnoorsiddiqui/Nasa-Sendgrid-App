/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface APIKeyNameandID {
  /** The ID of your API Key. */
  apiKeyId?: string;
  /** The name of your API Key. */
  name?: string;
}

export const aPIKeyNameandIDSchema: Schema<APIKeyNameandID> = object({
  apiKeyId: ['api_key_id', optional(string())],
  name: ['name', optional(string())],
});
