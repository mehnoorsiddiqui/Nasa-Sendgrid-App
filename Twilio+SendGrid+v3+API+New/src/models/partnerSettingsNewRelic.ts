/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, object, optional, Schema, string } from '../schema';

export interface PartnerSettingsNewRelic {
  /** Indicates if your subuser statistics will be sent to your New Relic Dashboard. */
  enableSubuserStatistics?: boolean;
  /** Indicates if this setting is enabled. */
  enabled: boolean;
  /** The license key provided with your New Relic account. */
  licenseKey: string;
}

export const partnerSettingsNewRelicSchema: Schema<PartnerSettingsNewRelic> = object(
  {
    enableSubuserStatistics: ['enable_subuser_statistics', optional(boolean())],
    enabled: ['enabled', boolean()],
    licenseKey: ['license_key', string()],
  }
);
