/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

/** The user may choose to create up to 120 custom fields or none at all. This is not a reserved field. */
export interface CustomFields {
  customFieldName1?: string;
  customFieldName2?: string;
}

export const customFieldsSchema: Schema<CustomFields> = object({
  customFieldName1: ['custom_field_name1', optional(string())],
  customFieldName2: ['custom_field_name2', optional(string())],
});
