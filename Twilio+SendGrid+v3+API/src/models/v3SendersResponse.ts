/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema } from '../schema';
import { SenderID, senderIDSchema } from './senderID';

export interface V3SendersResponse {
  result?: SenderID[];
}

export const v3SendersResponseSchema: Schema<V3SendersResponse> = object({
  result: ['result', optional(array(lazy(() => senderIDSchema)))],
});
