/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import {
  PartnerSettingsNewRelic,
  partnerSettingsNewRelicSchema,
} from '../models/partnerSettingsNewRelic';
import {
  V3PartnerSettingsNewRelicRequest,
  v3PartnerSettingsNewRelicRequestSchema,
} from '../models/v3PartnerSettingsNewRelicRequest';
import {
  V3PartnerSettingsResponse,
  v3PartnerSettingsResponseSchema,
} from '../models/v3PartnerSettingsResponse';
import { number, optional, string } from '../schema';
import { BaseController } from './baseController';

export class SettingsPartnerController extends BaseController {
  /**
   * **This endpoint allows you to update or change your New Relic partner settings.**
   *
   * Our partner settings allow you to integrate your SendGrid account with our partners to increase your
   * SendGrid experience and functionality. For more information about our partners, and how you can
   * begin integrating with them, please visit our [Partners documentation](https://sendgrid.
   * com/docs/ui/account-and-settings/partners/).
   *
   * By integrating with New Relic, you can send your SendGrid email statistics to your New Relic
   * Dashboard. If you enable this setting, your stats will be sent to New Relic every 5 minutes. You
   * will need your New Relic License Key to enable this setting. For more information, please see our
   * [SendGrid for New Relic documentation](https://sendgrid.com/docs/ui/analytics-and-reporting/tracking-
   * stats-using-new-relic/).
   *
   * @param onBehalfOf   Example: The subuser's username. This header
   *                                                                generates the API call as if the subuser account
   *                                                                was making the call.
   * @param body
   * @return Response from the API call
   */
  async pATCHPartnerSettingsNewRelic(
    onBehalfOf?: string,
    body?: V3PartnerSettingsNewRelicRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<PartnerSettingsNewRelic>> {
    const req = this.createRequest('PATCH', '/v3/partner_settings/new_relic');
    const mapped = req.prepareArgs({
      onBehalfOf: [onBehalfOf, optional(string())],
      body: [body, optional(v3PartnerSettingsNewRelicRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.header('on-behalf-of', mapped.onBehalfOf);
    req.json(mapped.body);
    return req.callAsJson(partnerSettingsNewRelicSchema, requestOptions);
  }

  /**
   * **This endpoint allows you to retrieve your current New Relic partner settings.**
   *
   * Our partner settings allow you to integrate your SendGrid account with our partners to increase your
   * SendGrid experience and functionality. For more information about our partners, and how you can
   * begin integrating with them, please visit our [Partners documentation](https://sendgrid.
   * com/docs/ui/account-and-settings/partners/).
   *
   * By integrating with New Relic, you can send your SendGrid email statistics to your New Relic
   * Dashboard. If you enable this setting, your stats will be sent to New Relic every 5 minutes. You
   * will need your New Relic License Key to enable this setting. For more information, please see our
   * [SendGrid for New Relic documentation](https://sendgrid.com/docs/ui/analytics-and-reporting/tracking-
   * stats-using-new-relic/).
   *
   * @param onBehalfOf   Example: The subuser's username. This header generates the API call as if the
   *                               subuser account was making the call.
   * @return Response from the API call
   */
  async gETPartnerSettingsNewRelic(
    onBehalfOf?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<PartnerSettingsNewRelic>> {
    const req = this.createRequest('GET', '/v3/partner_settings/new_relic');
    const mapped = req.prepareArgs({
      onBehalfOf: [onBehalfOf, optional(string())],
    });
    req.header('on-behalf-of', mapped.onBehalfOf);
    return req.callAsJson(partnerSettingsNewRelicSchema, requestOptions);
  }

  /**
   * **This endpoint allows you to retrieve a list of all partner settings that you can enable.**
   *
   * Our partner settings allow you to integrate your SendGrid account with our partners to increase your
   * SendGrid experience and functionality. For more information about our partners, and how you can
   * begin integrating with them, please visit our [Partners documentation](https://sendgrid.
   * com/docs/ui/account-and-settings/partners/).
   *
   * @param limit        The number of settings to return per page.
   * @param offset       The paging offset.
   * @param onBehalfOf   Example: The subuser's username. This header generates the API call as if the
   *                               subuser account was making the call.
   * @return Response from the API call
   */
  async gETPartnerSettings(
    limit?: number,
    offset?: number,
    onBehalfOf?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<V3PartnerSettingsResponse>> {
    const req = this.createRequest('GET', '/v3/partner_settings');
    const mapped = req.prepareArgs({
      limit: [limit, optional(number())],
      offset: [offset, optional(number())],
      onBehalfOf: [onBehalfOf, optional(string())],
    });
    req.header('on-behalf-of', mapped.onBehalfOf);
    req.query('limit', mapped.limit);
    req.query('offset', mapped.offset);
    return req.callAsJson(v3PartnerSettingsResponseSchema, requestOptions);
  }
}
