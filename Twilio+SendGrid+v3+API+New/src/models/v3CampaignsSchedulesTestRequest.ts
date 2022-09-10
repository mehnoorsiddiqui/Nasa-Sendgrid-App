/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

export interface V3CampaignsSchedulesTestRequest {
  /** The email address that should receive the test campaign. */
  to: string;
}

export const v3CampaignsSchedulesTestRequestSchema: Schema<V3CampaignsSchedulesTestRequest> = object(
  { to: ['to', string()] }
);
