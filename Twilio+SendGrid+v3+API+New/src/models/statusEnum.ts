/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for StatusEnum
 */
export enum StatusEnum {
  Pending = 'pending',
  Ready = 'ready',
  Failure = 'failure',
}

/**
 * Schema for StatusEnum
 */
export const statusEnumSchema: Schema<StatusEnum> = stringEnum(StatusEnum);
