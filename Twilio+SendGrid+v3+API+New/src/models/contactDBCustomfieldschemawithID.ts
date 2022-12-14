/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, optional, Schema, string } from '../schema';
import { Type8Enum, type8EnumSchema } from './type8Enum';

export interface ContactDBCustomfieldschemawithID {
  /** The name of the field */
  name?: string;
  type?: Type8Enum;
  /** The ID of the custom field. */
  id?: number;
}

export const contactDBCustomfieldschemawithIDSchema: Schema<ContactDBCustomfieldschemawithID> = object(
  {
    name: ['name', optional(string())],
    type: ['type', optional(type8EnumSchema)],
    id: ['id', optional(number())],
  }
);
