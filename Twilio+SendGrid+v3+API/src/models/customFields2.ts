/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface CustomFields2 {
  customFieldName1?: string;
  customFieldName2?: string;
}

export const customFields2Schema: Schema<CustomFields2> = object({
  customFieldName1: ['custom_field_name1', optional(string())],
  customFieldName2: ['custom_field_name2', optional(string())],
});
