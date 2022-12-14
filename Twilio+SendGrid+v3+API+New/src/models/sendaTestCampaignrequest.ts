/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

export interface SendaTestCampaignrequest {
  to: string;
}

export const sendaTestCampaignrequestSchema: Schema<SendaTestCampaignrequest> = object(
  { to: ['to', string()] }
);
