/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema } from '../schema';
import { Errors76, errors76Schema } from './errors76';

export interface V3Categories400Error1 {
  /** The error returned. */
  errors?: Errors76[];
}

export const v3Categories400Error1Schema: Schema<V3Categories400Error1> = object(
  { errors: ['errors', optional(array(lazy(() => errors76Schema)))] }
);
