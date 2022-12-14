/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

export interface V3MarketingListsRequest {
  /** Your name for your list */
  name: string;
}

export const v3MarketingListsRequestSchema: Schema<V3MarketingListsRequest> = object(
  { name: ['name', string()] }
);
