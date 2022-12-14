/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema } from '../schema';
import { APIKeyNameandID, aPIKeyNameandIDSchema } from './aPIKeyNameandID';

export interface V3ApiKeysResponse1 {
  result?: APIKeyNameandID[];
}

export const v3ApiKeysResponse1Schema: Schema<V3ApiKeysResponse1> = object({
  result: ['result', optional(array(lazy(() => aPIKeyNameandIDSchema)))],
});
