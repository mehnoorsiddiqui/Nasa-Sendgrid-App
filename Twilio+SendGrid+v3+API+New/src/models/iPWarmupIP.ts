/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, Schema, string } from '../schema';

export interface IPWarmupIP {
  /** The IP address. */
  ip: string;
  /** A Unix timestamp indicating when the IP address entered warmup mode. */
  startDate: number;
}

export const iPWarmupIPSchema: Schema<IPWarmupIP> = object({
  ip: ['ip', string()],
  startDate: ['start_date', number()],
});
