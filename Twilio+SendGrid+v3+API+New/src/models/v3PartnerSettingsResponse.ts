/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema } from '../schema';
import { Result5, result5Schema } from './result5';

export interface V3PartnerSettingsResponse {
  result?: Result5[];
}

export const v3PartnerSettingsResponseSchema: Schema<V3PartnerSettingsResponse> = object(
  { result: ['result', optional(array(lazy(() => result5Schema)))] }
);
