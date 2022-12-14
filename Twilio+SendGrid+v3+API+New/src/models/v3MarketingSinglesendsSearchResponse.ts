/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema } from '../schema';
import { Metadata, metadataSchema } from './metadata';
import {
  SinglesendResponseShort,
  singlesendResponseShortSchema,
} from './singlesendResponseShort';

export interface V3MarketingSinglesendsSearchResponse {
  result?: SinglesendResponseShort[];
  metadata?: Metadata;
}

export const v3MarketingSinglesendsSearchResponseSchema: Schema<V3MarketingSinglesendsSearchResponse> = object(
  {
    result: [
      'result',
      optional(array(lazy(() => singlesendResponseShortSchema))),
    ],
    metadata: ['_metadata', optional(lazy(() => metadataSchema))],
  }
);
