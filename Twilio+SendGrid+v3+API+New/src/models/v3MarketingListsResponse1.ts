/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, number, object, optional, Schema, string } from '../schema';
import { ContactDetails2, contactDetails2Schema } from './contactDetails2';
import { SelfMetadata, selfMetadataSchema } from './selfMetadata';

export interface V3MarketingListsResponse1 {
  /** The generated ID for your list. */
  id?: string;
  /** The name you gave your list. */
  name?: string;
  /** The number of contacts currently stored on the list. */
  contactCount?: number;
  metadata?: SelfMetadata;
  contactSample?: ContactDetails2;
}

export const v3MarketingListsResponse1Schema: Schema<V3MarketingListsResponse1> = object(
  {
    id: ['id', optional(string())],
    name: ['name', optional(string())],
    contactCount: ['contact_count', optional(number())],
    metadata: ['_metadata', optional(lazy(() => selfMetadataSchema))],
    contactSample: [
      'contact_sample',
      optional(lazy(() => contactDetails2Schema)),
    ],
  }
);
