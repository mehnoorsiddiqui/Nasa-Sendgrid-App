/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, Schema } from '../schema';
import { Error8, error8Schema } from './error8';

export interface V3WhitelabelIpsValidate500Error1 {
  /** The error messages for the failed validation. */
  errors: Error8[];
}

export const v3WhitelabelIpsValidate500Error1Schema: Schema<V3WhitelabelIpsValidate500Error1> = object(
  { errors: ['errors', array(lazy(() => error8Schema))] }
);
