/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema } from '../schema';
import { Errors18, errors18Schema } from './errors18';

export interface V3WhitelabelDomainsValidate500Error1 {
  errors?: Errors18[];
}

export const v3WhitelabelDomainsValidate500Error1Schema: Schema<V3WhitelabelDomainsValidate500Error1> = object(
  { errors: ['errors', optional(array(lazy(() => errors18Schema)))] }
);
