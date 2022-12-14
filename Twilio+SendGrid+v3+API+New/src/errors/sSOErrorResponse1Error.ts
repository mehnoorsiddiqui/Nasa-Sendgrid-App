/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '../core';

/**
 * Creates an instance of SSOErrorResponse1
 */
interface SSOErrorResponse1 {
  message?: string;
  field?: string | null;
  error_id?: string;
}

export class SSOErrorResponse1Error extends ApiError<SSOErrorResponse1> {}
