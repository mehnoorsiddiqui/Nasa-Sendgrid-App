/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for WinnerCriteriaEnum
 */
export enum WinnerCriteriaEnum {
  Open = 'open',
  Click = 'click',
  Manual = 'manual',
}

/**
 * Schema for WinnerCriteriaEnum
 */
export const winnerCriteriaEnumSchema: Schema<WinnerCriteriaEnum> = stringEnum(WinnerCriteriaEnum);
