/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for Status1Enum
 */
export enum Status1Enum {
  Draft = 'draft',
  Scheduled = 'scheduled',
  Triggered = 'triggered',
}

/**
 * Schema for Status1Enum
 */
export const status1EnumSchema: Schema<Status1Enum> = stringEnum(Status1Enum);
