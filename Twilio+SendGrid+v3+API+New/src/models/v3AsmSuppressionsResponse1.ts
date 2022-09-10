/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, Schema } from '../schema';
import { Suppression, suppressionSchema } from './suppression';

export interface V3AsmSuppressionsResponse1 {
  /** The array of suppression groups. */
  suppressions: Suppression[];
}

export const v3AsmSuppressionsResponse1Schema: Schema<V3AsmSuppressionsResponse1> = object(
  { suppressions: ['suppressions', array(lazy(() => suppressionSchema))] }
);
