/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

export interface V3MarketingFieldDefinitionsRequest1 {
  name: string;
}

export const v3MarketingFieldDefinitionsRequest1Schema: Schema<V3MarketingFieldDefinitionsRequest1> = object(
  { name: ['name', string()] }
);
