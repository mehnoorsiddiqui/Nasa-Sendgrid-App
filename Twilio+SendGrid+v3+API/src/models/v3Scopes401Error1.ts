/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, Schema } from '../schema';
import { Error2, error2Schema } from './error2';

export interface V3Scopes401Error1 {
  /** This 401 response indicates that the user making the call doesn't have the authorization to view the list of scopes. */
  errors: Error2[];
}

export const v3Scopes401Error1Schema: Schema<V3Scopes401Error1> = object({
  errors: ['errors', array(lazy(() => error2Schema))],
});
