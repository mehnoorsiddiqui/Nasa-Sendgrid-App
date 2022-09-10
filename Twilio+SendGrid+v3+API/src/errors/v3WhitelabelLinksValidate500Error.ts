/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '../core';
import { Error3 } from '../models/error3';

/**
 * Creates an instance of V3WhitelabelLinksValidate500
 */
interface V3WhitelabelLinksValidate500 {
  /** The reasons why the validation failed. */
  errors: Error3[];
}

export class V3WhitelabelLinksValidate500Error extends ApiError<V3WhitelabelLinksValidate500> {}
