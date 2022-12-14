/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema, string } from '../schema';
import { Stat8, stat8Schema } from './stat8';

export interface V3MailboxProvidersStatsResponse {
  /** The date that the statistics were gathered. */
  date?: string;
  /** The list of statistics. */
  stats?: Stat8[];
}

export const v3MailboxProvidersStatsResponseSchema: Schema<V3MailboxProvidersStatsResponse> = object(
  {
    date: ['date', optional(string())],
    stats: ['stats', optional(array(lazy(() => stat8Schema)))],
  }
);
