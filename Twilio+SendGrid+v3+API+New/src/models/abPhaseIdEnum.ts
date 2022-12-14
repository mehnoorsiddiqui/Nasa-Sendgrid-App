/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for AbPhaseIdEnum
 */
export enum AbPhaseIdEnum {
  Test = 'test',
  Send = 'send',
}

/**
 * Schema for AbPhaseIdEnum
 */
export const abPhaseIdEnumSchema: Schema<AbPhaseIdEnum> = stringEnum(AbPhaseIdEnum);
