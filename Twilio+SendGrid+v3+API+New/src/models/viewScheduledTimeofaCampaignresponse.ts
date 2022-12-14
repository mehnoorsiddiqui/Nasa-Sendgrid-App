/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { bigint, object, Schema } from '../schema';

export interface ViewScheduledTimeofaCampaignresponse {
  sendAt: bigint;
}

export const viewScheduledTimeofaCampaignresponseSchema: Schema<ViewScheduledTimeofaCampaignresponse> = object(
  { sendAt: ['send_at', bigint()] }
);
