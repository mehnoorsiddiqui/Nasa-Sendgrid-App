/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema } from '../schema';
import { Result7, result7Schema } from './result7';

export interface V3TeammatesPendingResponse {
  result?: Result7[];
}

export const v3TeammatesPendingResponseSchema: Schema<V3TeammatesPendingResponse> = object(
  { result: ['result', optional(array(lazy(() => result7Schema)))] }
);
