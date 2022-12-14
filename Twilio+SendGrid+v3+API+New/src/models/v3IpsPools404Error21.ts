/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema } from '../schema';
import { Errors3, errors3Schema } from './errors3';

export interface V3IpsPools404Error21 {
  errors?: Errors3[];
}

export const v3IpsPools404Error21Schema: Schema<V3IpsPools404Error21> = object({
  errors: ['errors', optional(array(lazy(() => errors3Schema)))],
});
