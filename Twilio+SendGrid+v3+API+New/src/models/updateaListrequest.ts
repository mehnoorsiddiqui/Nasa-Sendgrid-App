/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

export interface UpdateaListrequest {
  /** The new name for your list. */
  name: string;
}

export const updateaListrequestSchema: Schema<UpdateaListrequest> = object({
  name: ['name', string()],
});
