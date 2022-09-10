/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  boolean,
  object,
  optional,
  Schema,
  string,
  unknown,
} from '../schema';
import { Status1Enum, status1EnumSchema } from './status1Enum';

export interface SinglesendResponseShort {
  id: string;
  /** name of the Single Send */
  name: string;
  abtest?: unknown;
  status: Status1Enum;
  /** categories to associate with this Single Send */
  categories: string[];
  /** The ISO 8601 time at which to send the Single Send. This must be in future or the string "now". Emails can be scheduled up to 72 hours in advance. However, this scheduling constraint does not apply to campaigns sent via [Marketing Campaigns](https://docs.sendgrid.com/ui/sending-email/how-to-send-email-with-marketing-campaigns/). */
  sendAt?: string;
  /** true if the Single Send's AB Test functionality has been toggled on */
  isAbtest: boolean;
  /** the ISO 8601 time at which the Single Send was last updated */
  updatedAt: string;
  /** the ISO 8601 time at which the Single Send was created */
  createdAt: string;
}

export const singlesendResponseShortSchema: Schema<SinglesendResponseShort> = object(
  {
    id: ['id', string()],
    name: ['name', string()],
    abtest: ['abtest', unknown()],
    status: ['status', status1EnumSchema],
    categories: ['categories', array(string())],
    sendAt: ['send_at', optional(string())],
    isAbtest: ['is_abtest', boolean()],
    updatedAt: ['updated_at', string()],
    createdAt: ['created_at', string()],
  }
);
