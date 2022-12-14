/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema } from '../schema';
import { Errors9, errors9Schema } from './errors9';

export interface V3TeammatesResponse4 {
  errors?: Errors9[];
}

export const v3TeammatesResponse4Schema: Schema<V3TeammatesResponse4> = object({
  errors: ['errors', optional(array(lazy(() => errors9Schema)))],
});
