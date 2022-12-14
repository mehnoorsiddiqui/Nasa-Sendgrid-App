/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, object, Schema, string } from '../schema';

export interface Result4 {
  /** The title of the mail setting. */
  title: string;
  /** Indicates if this mail setting is currently enabled. */
  enabled: boolean;
  /** The name of the mail setting. */
  name: string;
  /** A description of the mail setting. */
  description: string;
}

export const result4Schema: Schema<Result4> = object({
  title: ['title', string()],
  enabled: ['enabled', boolean()],
  name: ['name', string()],
  description: ['description', string()],
});
