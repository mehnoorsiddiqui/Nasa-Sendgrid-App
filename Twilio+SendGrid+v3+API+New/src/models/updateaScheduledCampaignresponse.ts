/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, Schema, string } from '../schema';

export interface UpdateaScheduledCampaignresponse {
  /** The campaign ID */
  id: number;
  /** The unix timestamp to send the campaign. */
  sendAt: number;
  /** The status of the schedule. */
  status: string;
}

export const updateaScheduledCampaignresponseSchema: Schema<UpdateaScheduledCampaignresponse> = object(
  {
    id: ['id', number()],
    sendAt: ['send_at', number()],
    status: ['status', string()],
  }
);
