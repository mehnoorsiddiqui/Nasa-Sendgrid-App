/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema, string } from '../schema';
import { Stat1, stat1Schema } from './stat1';

export interface StatsCategoryStats {
  /** The date the statistics were gathered. */
  date: string;
  stats?: Stat1[];
}

export const statsCategoryStatsSchema: Schema<StatsCategoryStats> = object({
  date: ['date', string()],
  stats: ['stats', optional(array(lazy(() => stat1Schema)))],
});
