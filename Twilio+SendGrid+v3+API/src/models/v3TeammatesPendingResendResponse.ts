/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, boolean, object, optional, Schema, string } from '../schema';

export interface V3TeammatesPendingResendResponse {
  /** ID to identify invite */
  token?: string;
  /** Teammate's email address */
  email?: string;
  /** Initial set of permissions to give to teammate if they accept the invite */
  scopes?: string[];
  /** Set to true if teammate should have admin privileges */
  isAdmin?: boolean;
}

export const v3TeammatesPendingResendResponseSchema: Schema<V3TeammatesPendingResendResponse> = object(
  {
    token: ['token', optional(string())],
    email: ['email', optional(string())],
    scopes: ['scopes', optional(array(string()))],
    isAdmin: ['is_admin', optional(boolean())],
  }
);
