/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, optional, Schema, string } from '../schema';
import { Type4Enum, type4EnumSchema } from './type4Enum';

export interface V3AlertsResponse2 {
  /** A Unix timestamp indicating when the alert was created. */
  createdAt: number;
  /** The email address that the alert will be sent to. */
  emailTo: string;
  /** If the alert is of type stats_notification, this indicates how frequently the stats notifications will be sent. For example: "daily", "weekly", or "monthly". */
  frequency?: string;
  /** The ID of the alert. */
  id: number;
  type: Type4Enum;
  /** A Unix timestamp indicating when the alert was last modified. */
  updatedAt: number;
  /** If the alert is of type usage_limit, this indicates the percentage of email usage that must be reached before the alert will be sent. */
  percentage?: number;
}

export const v3AlertsResponse2Schema: Schema<V3AlertsResponse2> = object({
  createdAt: ['created_at', number()],
  emailTo: ['email_to', string()],
  frequency: ['frequency', optional(string())],
  id: ['id', number()],
  type: ['type', type4EnumSchema],
  updatedAt: ['updated_at', number()],
  percentage: ['percentage', optional(number())],
});
