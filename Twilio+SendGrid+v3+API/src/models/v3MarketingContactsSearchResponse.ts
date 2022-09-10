/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, number, object, optional, Schema } from '../schema';
import { ContactDetails3, contactDetails3Schema } from './contactDetails3';
import { SelfMetadata, selfMetadataSchema } from './selfMetadata';

export interface V3MarketingContactsSearchResponse {
  result?: ContactDetails3[];
  metadata?: SelfMetadata;
  /** The total number of contacts matched. */
  contactCount: number;
}

export const v3MarketingContactsSearchResponseSchema: Schema<V3MarketingContactsSearchResponse> = object(
  {
    result: ['result', optional(array(lazy(() => contactDetails3Schema)))],
    metadata: ['_metadata', optional(lazy(() => selfMetadataSchema))],
    contactCount: ['contact_count', number()],
  }
);
