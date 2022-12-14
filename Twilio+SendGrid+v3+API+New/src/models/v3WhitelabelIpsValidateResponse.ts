/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, lazy, number, object, Schema } from '../schema';
import {
  ValidationResults22,
  validationResults22Schema,
} from './validationResults22';

export interface V3WhitelabelIpsValidateResponse {
  /** The ID of the reverse DNS record. */
  id: number;
  /** Indicates if the reverse DNS record is valid. */
  valid: boolean;
  validationResults: ValidationResults22;
}

export const v3WhitelabelIpsValidateResponseSchema: Schema<V3WhitelabelIpsValidateResponse> = object(
  {
    id: ['id', number()],
    valid: ['valid', boolean()],
    validationResults: [
      'validation_results',
      lazy(() => validationResults22Schema),
    ],
  }
);
