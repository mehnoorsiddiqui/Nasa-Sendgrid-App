/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for ClientType1Enum
 */
export enum ClientType1Enum {
  Phone = 'phone',
  Tablet = 'tablet',
  Webmail = 'webmail',
  Desktop = 'desktop',
}

/**
 * Schema for ClientType1Enum
 */
export const clientType1EnumSchema: Schema<ClientType1Enum> = stringEnum(ClientType1Enum);
