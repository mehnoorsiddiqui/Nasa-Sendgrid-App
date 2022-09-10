/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, Schema } from '../schema';
import { Error3, error3Schema } from './error3';

export interface V3WhitelabelLinksValidate500Error1 {
  /** The reasons why the validation failed. */
  errors: Error3[];
}

export const v3WhitelabelLinksValidate500Error1Schema: Schema<V3WhitelabelLinksValidate500Error1> = object(
  { errors: ['errors', array(lazy(() => error3Schema))] }
);
