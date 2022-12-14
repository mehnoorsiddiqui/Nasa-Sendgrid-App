/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema } from '../schema';
import { Result6, result6Schema } from './result6';

export interface V3TeammatesResponse1 {
  result?: Result6[];
}

export const v3TeammatesResponse1Schema: Schema<V3TeammatesResponse1> = object({
  result: ['result', optional(array(lazy(() => result6Schema)))],
});
