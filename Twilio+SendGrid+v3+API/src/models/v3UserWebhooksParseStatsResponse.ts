/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, Schema, string } from '../schema';
import { Stat2, stat2Schema } from './stat2';

export interface V3UserWebhooksParseStatsResponse {
  /** The date that the stats were collected. */
  date: string;
  /** The Parse Webhook usage statistics. */
  stats: Stat2[];
}

export const v3UserWebhooksParseStatsResponseSchema: Schema<V3UserWebhooksParseStatsResponse> = object(
  { date: ['date', string()], stats: ['stats', array(lazy(() => stat2Schema))] }
);
