/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import {
  AggregatedBy2Enum,
  aggregatedBy2EnumSchema,
} from '../models/aggregatedBy2Enum';
import {
  ClientType1Enum,
  clientType1EnumSchema,
} from '../models/clientType1Enum';
import { Country1Enum, country1EnumSchema } from '../models/country1Enum';
import {
  V3BrowsersStatsResponse,
  v3BrowsersStatsResponseSchema,
} from '../models/v3BrowsersStatsResponse';
import {
  V3ClientsStatsResponse,
  v3ClientsStatsResponseSchema,
} from '../models/v3ClientsStatsResponse';
import {
  V3DevicesStatsResponse,
  v3DevicesStatsResponseSchema,
} from '../models/v3DevicesStatsResponse';
import {
  V3GeoStatsResponse,
  v3GeoStatsResponseSchema,
} from '../models/v3GeoStatsResponse';
import {
  V3MailboxProvidersStatsResponse,
  v3MailboxProvidersStatsResponseSchema,
} from '../models/v3MailboxProvidersStatsResponse';
import {
  V3StatsResponse,
  v3StatsResponseSchema,
} from '../models/v3StatsResponse';
import { array, number, optional, string } from '../schema';
import { BaseController } from './baseController';

export class StatsController extends BaseController {
  /**
   * **This endpoint allows you to retrieve all of your global email statistics between a given date
   * range.**
   *
   * Parent accounts can see either aggregated stats for the parent account or aggregated stats for a
   * subuser specified in the `on-behalf-of` header. Subuser accounts will see only their own stats.
   *
   * @param startDate     The starting date of the statistics to retrieve. Must follow format
   *                                           YYYY-MM-DD.
   * @param onBehalfOf    Example: The subuser's username. This header generates the API call as
   *                                           if the subuser account was making the call.
   * @param limit         The number of results to return.
   * @param offset        The point in the list to begin retrieving results.
   * @param aggregatedBy  How to group the statistics. Must be either "day", "week", or "month".
   * @param endDate       The end date of the statistics to retrieve. Defaults to today. Must
   *                                           follow format YYYY-MM-DD.
   * @return Response from the API call
   */
  async gETStats(
    startDate: string,
    onBehalfOf?: string,
    limit?: number,
    offset?: number,
    aggregatedBy?: AggregatedBy2Enum,
    endDate?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<V3StatsResponse[]>> {
    const req = this.createRequest('GET', '/v3/stats');
    const mapped = req.prepareArgs({
      startDate: [startDate, string()],
      onBehalfOf: [onBehalfOf, optional(string())],
      limit: [limit, optional(number())],
      offset: [offset, optional(number())],
      aggregatedBy: [aggregatedBy, optional(aggregatedBy2EnumSchema)],
      endDate: [endDate, optional(string())],
    });
    req.header('on-behalf-of', mapped.onBehalfOf);
    req.query('start_date', mapped.startDate);
    req.query('limit', mapped.limit);
    req.query('offset', mapped.offset);
    req.query('aggregated_by', mapped.aggregatedBy);
    req.query('end_date', mapped.endDate);
    return req.callAsJson(array(v3StatsResponseSchema), requestOptions);
  }

  /**
   * **This endpoint allows you to retrieve your email statistics segmented by country and state/province.
   * **
   *
   * **We only store up to 7 days of email activity in our database.** By default, 500 items will be
   * returned per request via the Advanced Stats API endpoints.
   *
   * Advanced Stats provide a more in-depth view of your email statistics and the actions taken by your
   * recipients. You can segment these statistics by geographic location, device type, client type,
   * browser, and mailbox provider. For more information about statistics, please see our [User
   * Guide](https://sendgrid.com/docs/User_Guide/Statistics/index.html).
   *
   * @param startDate     The starting date of the statistics to retrieve. Must follow format
   *                                           YYYY-MM-DD.
   * @param country       The country you would like to see statistics for. Currently only
   *                                           supported for US and CA.
   * @param onBehalfOf    Example: The subuser's username. This header generates the API call as
   *                                           if the subuser account was making the call.
   * @param limit         The number of results to return.
   * @param offset        The point in the list to begin retrieving results.
   * @param aggregatedBy  How to group the statistics. Must be either "day", "week", or "month".
   * @param endDate       The end date of the statistics to retrieve. Defaults to today. Must
   *                                           follow format YYYY-MM-DD.
   * @return Response from the API call
   */
  async gETGeoStats(
    startDate: string,
    country?: Country1Enum,
    onBehalfOf?: string,
    limit?: number,
    offset?: number,
    aggregatedBy?: AggregatedBy2Enum,
    endDate?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<V3GeoStatsResponse[]>> {
    const req = this.createRequest('GET', '/v3/geo/stats');
    const mapped = req.prepareArgs({
      startDate: [startDate, string()],
      country: [country, optional(country1EnumSchema)],
      onBehalfOf: [onBehalfOf, optional(string())],
      limit: [limit, optional(number())],
      offset: [offset, optional(number())],
      aggregatedBy: [aggregatedBy, optional(aggregatedBy2EnumSchema)],
      endDate: [endDate, optional(string())],
    });
    req.header('on-behalf-of', mapped.onBehalfOf);
    req.query('start_date', mapped.startDate);
    req.query('country', mapped.country);
    req.query('limit', mapped.limit);
    req.query('offset', mapped.offset);
    req.query('aggregated_by', mapped.aggregatedBy);
    req.query('end_date', mapped.endDate);
    return req.callAsJson(array(v3GeoStatsResponseSchema), requestOptions);
  }

  /**
   * **This endpoint allows you to retrieve your email statistics segmented by the device type.**
   *
   * **We only store up to 7 days of email activity in our database.** By default, 500 items will be
   * returned per request via the Advanced Stats API endpoints.
   *
   * ## Available Device Types
   * | **Device** | **Description** | **Example** |
   * |---|---|---|
   * | Desktop | Email software on desktop computer. | I.E., Outlook, Sparrow, or Apple Mail. |
   * | Webmail |	A web-based email client. | I.E., Yahoo, Google, AOL, or Outlook.com. |
   * | Phone | A smart phone. | iPhone, Android, Blackberry, etc.
   * | Tablet | A tablet computer. | iPad, android based tablet, etc. |
   * | Other | An unrecognized device. |
   *
   * Advanced Stats provide a more in-depth view of your email statistics and the actions taken by your
   * recipients. You can segment these statistics by geographic location, device type, client type,
   * browser, and mailbox provider. For more information about statistics, please see our [Statistics
   * Overview](https://sendgrid.com/docs/ui/analytics-and-reporting/stats-overview/).
   *
   * @param startDate     The starting date of the statistics to retrieve. Must follow format
   *                                           YYYY-MM-DD.
   * @param onBehalfOf    Example: The subuser's username. This header generates the API call as
   *                                           if the subuser account was making the call.
   * @param limit         The number of results to return.
   * @param offset        The point in the list to begin retrieving results.
   * @param aggregatedBy  How to group the statistics. Must be either "day", "week", or "month".
   * @param endDate       The end date of the statistics to retrieve. Defaults to today. Must
   *                                           follow format YYYY-MM-DD.
   * @return Response from the API call
   */
  async gETDevicesStats(
    startDate: string,
    onBehalfOf?: string,
    limit?: number,
    offset?: number,
    aggregatedBy?: AggregatedBy2Enum,
    endDate?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<V3DevicesStatsResponse[]>> {
    const req = this.createRequest('GET', '/v3/devices/stats');
    const mapped = req.prepareArgs({
      startDate: [startDate, string()],
      onBehalfOf: [onBehalfOf, optional(string())],
      limit: [limit, optional(number())],
      offset: [offset, optional(number())],
      aggregatedBy: [aggregatedBy, optional(aggregatedBy2EnumSchema)],
      endDate: [endDate, optional(string())],
    });
    req.header('on-behalf-of', mapped.onBehalfOf);
    req.query('start_date', mapped.startDate);
    req.query('limit', mapped.limit);
    req.query('offset', mapped.offset);
    req.query('aggregated_by', mapped.aggregatedBy);
    req.query('end_date', mapped.endDate);
    return req.callAsJson(array(v3DevicesStatsResponseSchema), requestOptions);
  }

  /**
   * **This endpoint allows you to retrieve your email statistics segmented by client type.**
   *
   * **We only store up to 7 days of email activity in our database.** By default, 500 items will be
   * returned per request via the Advanced Stats API endpoints.
   *
   * Advanced Stats provide a more in-depth view of your email statistics and the actions taken by your
   * recipients. You can segment these statistics by geographic location, device type, client type,
   * browser, and mailbox provider. For more information about statistics, please see our [Statistics
   * Overview](https://sendgrid.com/docs/ui/analytics-and-reporting/stats-overview/).
   *
   * @param startDate     The starting date of the statistics to retrieve. Must follow format
   *                                           YYYY-MM-DD.
   * @param onBehalfOf    Example: The subuser's username. This header generates the API call as
   *                                           if the subuser account was making the call.
   * @param endDate       The end date of the statistics to retrieve. Defaults to today. Must
   *                                           follow format YYYY-MM-DD.
   * @param aggregatedBy  How to group the statistics. Must be either "day", "week", or "month".
   * @return Response from the API call
   */
  async gETClientsStats(
    startDate: string,
    onBehalfOf?: string,
    endDate?: string,
    aggregatedBy?: AggregatedBy2Enum,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<V3ClientsStatsResponse[]>> {
    const req = this.createRequest('GET', '/v3/clients/stats');
    const mapped = req.prepareArgs({
      startDate: [startDate, string()],
      onBehalfOf: [onBehalfOf, optional(string())],
      endDate: [endDate, optional(string())],
      aggregatedBy: [aggregatedBy, optional(aggregatedBy2EnumSchema)],
    });
    req.header('on-behalf-of', mapped.onBehalfOf);
    req.query('start_date', mapped.startDate);
    req.query('end_date', mapped.endDate);
    req.query('aggregated_by', mapped.aggregatedBy);
    return req.callAsJson(array(v3ClientsStatsResponseSchema), requestOptions);
  }

  /**
   * **This endpoint allows you to retrieve your email statistics segmented by a specific client type.**
   *
   * **We only store up to 7 days of email activity in our database.** By default, 500 items will be
   * returned per request via the Advanced Stats API endpoints.
   *
   * ## Available Client Types
   * - phone
   * - tablet
   * - webmail
   * - desktop
   *
   * Advanced Stats provide a more in-depth view of your email statistics and the actions taken by your
   * recipients. You can segment these statistics by geographic location, device type, client type,
   * browser, and mailbox provider. For more information about statistics, please see our [Statistics
   * Overview](https://sendgrid.com/docs/ui/analytics-and-reporting/stats-overview/).
   *
   * @param clientType    Specifies the type of client to retrieve stats for. Must be either
   *                                           "phone", "tablet", "webmail", or "desktop".
   * @param startDate     The starting date of the statistics to retrieve. Must follow format
   *                                           YYYY-MM-DD.
   * @param onBehalfOf    Example: The subuser's username. This header generates the API call as
   *                                           if the subuser account was making the call.
   * @param endDate       The end date of the statistics to retrieve. Defaults to today. Must
   *                                           follow format YYYY-MM-DD.
   * @param aggregatedBy  How to group the statistics. Must be either "day", "week", or "month".
   * @return Response from the API call
   */
  async gETClientsClientTypeStats(
    clientType: ClientType1Enum,
    startDate: string,
    onBehalfOf?: string,
    endDate?: string,
    aggregatedBy?: AggregatedBy2Enum,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<V3ClientsStatsResponse[]>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      clientType: [clientType, clientType1EnumSchema],
      startDate: [startDate, string()],
      onBehalfOf: [onBehalfOf, optional(string())],
      endDate: [endDate, optional(string())],
      aggregatedBy: [aggregatedBy, optional(aggregatedBy2EnumSchema)],
    });
    req.header('on-behalf-of', mapped.onBehalfOf);
    req.query('start_date', mapped.startDate);
    req.query('end_date', mapped.endDate);
    req.query('aggregated_by', mapped.aggregatedBy);
    req.appendTemplatePath`/v3/clients/${mapped.clientType}/stats`;
    return req.callAsJson(array(v3ClientsStatsResponseSchema), requestOptions);
  }

  /**
   * **This endpoint allows you to retrieve your email statistics segmented by recipient mailbox provider.
   * **
   *
   * **We only store up to 7 days of email activity in our database.** By default, 500 items will be
   * returned per request via the Advanced Stats API endpoints.
   *
   * Advanced Stats provide a more in-depth view of your email statistics and the actions taken by your
   * recipients. You can segment these statistics by geographic location, device type, client type,
   * browser, and mailbox provider. For more information about statistics, please see our [Statistics
   * Overview](https://sendgrid.com/docs/ui/analytics-and-reporting/stats-overview/).
   *
   * @param startDate         The starting date of the statistics to retrieve. Must follow format
   *                                               YYYY-MM-DD.
   * @param mailboxProviders  The mail box providers to get statistics for. You can include up to
   *                                               10 by including this parameter multiple times.
   * @param onBehalfOf        Example: The subuser's username. This header generates the API call
   *                                               as if the subuser account was making the call.
   * @param limit             The number of results to return.
   * @param offset            The point in the list to begin retrieving results.
   * @param aggregatedBy      How to group the statistics. Must be either "day", "week", or
   *                                               "month".
   * @param endDate           The end date of the statistics to retrieve. Defaults to today. Must
   *                                               follow format YYYY-MM-DD.
   * @return Response from the API call
   */
  async gETMailboxProvidersStats(
    startDate: string,
    mailboxProviders?: string,
    onBehalfOf?: string,
    limit?: number,
    offset?: number,
    aggregatedBy?: AggregatedBy2Enum,
    endDate?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<V3MailboxProvidersStatsResponse[]>> {
    const req = this.createRequest('GET', '/v3/mailbox_providers/stats');
    const mapped = req.prepareArgs({
      startDate: [startDate, string()],
      mailboxProviders: [mailboxProviders, optional(string())],
      onBehalfOf: [onBehalfOf, optional(string())],
      limit: [limit, optional(number())],
      offset: [offset, optional(number())],
      aggregatedBy: [aggregatedBy, optional(aggregatedBy2EnumSchema)],
      endDate: [endDate, optional(string())],
    });
    req.header('on-behalf-of', mapped.onBehalfOf);
    req.query('start_date', mapped.startDate);
    req.query('mailbox_providers', mapped.mailboxProviders);
    req.query('limit', mapped.limit);
    req.query('offset', mapped.offset);
    req.query('aggregated_by', mapped.aggregatedBy);
    req.query('end_date', mapped.endDate);
    return req.callAsJson(
      array(v3MailboxProvidersStatsResponseSchema),
      requestOptions
    );
  }

  /**
   * **This endpoint allows you to retrieve your email statistics segmented by browser type.**
   *
   * **We only store up to 7 days of email activity in our database.** By default, 500 items will be
   * returned per request via the Advanced Stats API endpoints.
   *
   * Advanced Stats provide a more in-depth view of your email statistics and the actions taken by your
   * recipients. You can segment these statistics by geographic location, device type, client type,
   * browser, and mailbox provider. For more information about statistics, please see our [Statistics
   * Overview](https://sendgrid.com/docs/ui/analytics-and-reporting/stats-overview/).
   *
   * @param startDate     The starting date of the statistics to retrieve. Must follow format
   *                                           YYYY-MM-DD.
   * @param browsers      The browsers to get statistics for. You can include up to 10 different
   *                                           browsers by including this parameter multiple times.
   * @param onBehalfOf    Example: The subuser's username. This header generates the API call as
   *                                           if the subuser account was making the call.
   * @param limit         The number of results to return.
   * @param offset        The point in the list to begin retrieving results.
   * @param aggregatedBy  How to group the statistics. Must be either "day", "week", or "month".
   * @param endDate       The end date of the statistics to retrieve. Defaults to today. Must
   *                                           follow format YYYY-MM-DD.
   * @return Response from the API call
   */
  async gETBrowsersStats(
    startDate: string,
    browsers?: string,
    onBehalfOf?: string,
    limit?: number,
    offset?: number,
    aggregatedBy?: AggregatedBy2Enum,
    endDate?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<V3BrowsersStatsResponse[]>> {
    const req = this.createRequest('GET', '/v3/browsers/stats');
    const mapped = req.prepareArgs({
      startDate: [startDate, string()],
      browsers: [browsers, optional(string())],
      onBehalfOf: [onBehalfOf, optional(string())],
      limit: [limit, optional(number())],
      offset: [offset, optional(number())],
      aggregatedBy: [aggregatedBy, optional(aggregatedBy2EnumSchema)],
      endDate: [endDate, optional(string())],
    });
    req.header('on-behalf-of', mapped.onBehalfOf);
    req.query('start_date', mapped.startDate);
    req.query('browsers', mapped.browsers);
    req.query('limit', mapped.limit);
    req.query('offset', mapped.offset);
    req.query('aggregated_by', mapped.aggregatedBy);
    req.query('end_date', mapped.endDate);
    return req.callAsJson(array(v3BrowsersStatsResponseSchema), requestOptions);
  }
}
