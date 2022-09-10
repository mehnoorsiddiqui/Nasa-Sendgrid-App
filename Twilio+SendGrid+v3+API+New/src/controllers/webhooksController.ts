/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import {
  GlobalErrorResponseSchema1Error,
} from '../errors/globalErrorResponseSchema1Error';
import { V3MailSend500Error1Error } from '../errors/v3MailSend500Error1Error';
import {
  V3UserWebhooksEventSettingsSigned400Error,
} from '../errors/v3UserWebhooksEventSettingsSigned400Error';
import {
  V3UserWebhooksEventSettingsSigned401Error,
} from '../errors/v3UserWebhooksEventSettingsSigned401Error';
import {
  V3UserWebhooksEventSettingsSigned500Error,
} from '../errors/v3UserWebhooksEventSettingsSigned500Error';
import {
  AggregatedBy3Enum,
  aggregatedBy3EnumSchema,
} from '../models/aggregatedBy3Enum';
import {
  V3UserWebhooksEventSettingsSignedRequest,
  v3UserWebhooksEventSettingsSignedRequestSchema,
} from '../models/v3UserWebhooksEventSettingsSignedRequest';
import {
  V3UserWebhooksEventSettingsSignedResponse,
  v3UserWebhooksEventSettingsSignedResponseSchema,
} from '../models/v3UserWebhooksEventSettingsSignedResponse';
import {
  V3UserWebhooksEventTestRequest,
  v3UserWebhooksEventTestRequestSchema,
} from '../models/v3UserWebhooksEventTestRequest';
import {
  V3UserWebhooksParseSettingsResponse,
  v3UserWebhooksParseSettingsResponseSchema,
} from '../models/v3UserWebhooksParseSettingsResponse';
import {
  V3UserWebhooksParseStatsResponse,
  v3UserWebhooksParseStatsResponseSchema,
} from '../models/v3UserWebhooksParseStatsResponse';
import {
  WebhooksEventWebhookResponse,
  webhooksEventWebhookResponseSchema,
} from '../models/webhooksEventWebhookResponse';
import {
  WebhooksEventWebhookUpdatewithOAuthRequest,
  webhooksEventWebhookUpdatewithOAuthRequestSchema,
} from '../models/webhooksEventWebhookUpdatewithOAuthRequest';
import { array, optional, string } from '../schema';
import { BaseController } from './baseController';

export class WebhooksController extends BaseController {
  /**
   * **This endpoint allows you to retrieve all of your current inbound parse settings.**
   *
   * @param onBehalfOf   Example: The subuser's username. This header generates the API call as if the
   *                               subuser account was making the call.
   * @return Response from the API call
   */
  async gETUserWebhooksParseSettings(
    onBehalfOf?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<V3UserWebhooksParseSettingsResponse>> {
    const req = this.createRequest('GET', '/v3/user/webhooks/parse/settings');
    const mapped = req.prepareArgs({
      onBehalfOf: [onBehalfOf, optional(string())],
    });
    req.header('on-behalf-of', mapped.onBehalfOf);
    req.throwOn(401, GlobalErrorResponseSchema1Error, '');
    req.throwOn(403, GlobalErrorResponseSchema1Error, '');
    req.throwOn(404, GlobalErrorResponseSchema1Error, '');
    req.throwOn(500, V3MailSend500Error1Error, '');
    return req.callAsJson(
      v3UserWebhooksParseSettingsResponseSchema,
      requestOptions
    );
  }

  /**
   * **This endpoint allows you to retrieve your current event webhook settings.**
   *
   * If an event type is marked as `true`, then the event webhook will include information about that
   * event.
   *
   * SendGrid’s Event Webhook will notify a URL of your choice via HTTP POST with information about
   * events that occur as SendGrid processes your email.
   *
   * Common uses of this data are to remove unsubscribes, react to spam reports, determine unengaged
   * recipients, identify bounced email addresses, or create advanced analytics of your email program.
   *
   * @param onBehalfOf   Example: The subuser's username. This header generates the API call as if the
   *                               subuser account was making the call.
   * @return Response from the API call
   */
  async gETUserWebhooksEventSettings(
    onBehalfOf?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<WebhooksEventWebhookResponse>> {
    const req = this.createRequest('GET', '/v3/user/webhooks/event/settings');
    const mapped = req.prepareArgs({
      onBehalfOf: [onBehalfOf, optional(string())],
    });
    req.header('on-behalf-of', mapped.onBehalfOf);
    return req.callAsJson(webhooksEventWebhookResponseSchema, requestOptions);
  }

  /**
   * **This endpoint allows you to update your current event webhook settings.**
   *
   * If an event type is marked as `true`, then the event webhook will include information about that
   * event.
   *
   * SendGrid’s Event Webhook will notify a URL of your choice via HTTP POST with information about
   * events that occur as SendGrid processes your email.
   *
   * Common uses of this data are to remove unsubscribes, react to spam reports, determine unengaged
   * recipients, identify bounced email addresses, or create advanced analytics of your email program.
   *
   * @param onBehalfOf   Example: The subuser's username. This
   *                                                                          header generates the API call as if the
   *                                                                          subuser account was making the call.
   * @param body
   * @return Response from the API call
   */
  async pATCHUserWebhooksEventSettings(
    onBehalfOf?: string,
    body?: WebhooksEventWebhookUpdatewithOAuthRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<WebhooksEventWebhookResponse>> {
    const req = this.createRequest('PATCH', '/v3/user/webhooks/event/settings');
    const mapped = req.prepareArgs({
      onBehalfOf: [onBehalfOf, optional(string())],
      body: [body, optional(webhooksEventWebhookUpdatewithOAuthRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.header('on-behalf-of', mapped.onBehalfOf);
    req.json(mapped.body);
    return req.callAsJson(webhooksEventWebhookResponseSchema, requestOptions);
  }

  /**
   * **This endpoint allows you to retrieve the statistics for your Parse Webhook useage.**
   *
   * SendGrid's Inbound Parse Webhook allows you to parse the contents and attachments of incomming
   * emails. The Parse API can then POST the parsed emails to a URL that you specify. The Inbound Parse
   * Webhook cannot parse messages greater than 30MB in size, including all attachments.
   *
   * There are a number of pre-made integrations for the SendGrid Parse Webhook which make processing
   * events easy. You can find these integrations in the [Library Index](https://sendgrid.
   * com/docs/Integrate/libraries.html#-Webhook-Libraries).
   *
   * @param startDate     The starting date of the statistics you want to retrieve. Must be in
   *                                           the format YYYY-MM-DD
   * @param limit         The number of statistics to return on each page.
   * @param offset        The number of statistics to skip.
   * @param aggregatedBy  How you would like the statistics to by grouped.
   * @param endDate       The end date of the statistics you want to retrieve. Must be in the
   *                                           format YYYY-MM-DD
   * @param onBehalfOf    Example: The subuser's username. This header generates the API call as
   *                                           if the subuser account was making the call.
   * @return Response from the API call
   */
  async gETUserWebhooksParseStats(
    startDate: string,
    limit?: string,
    offset?: string,
    aggregatedBy?: AggregatedBy3Enum,
    endDate?: string,
    onBehalfOf?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<V3UserWebhooksParseStatsResponse[]>> {
    const req = this.createRequest('GET', '/v3/user/webhooks/parse/stats');
    const mapped = req.prepareArgs({
      startDate: [startDate, string()],
      limit: [limit, optional(string())],
      offset: [offset, optional(string())],
      aggregatedBy: [aggregatedBy, optional(aggregatedBy3EnumSchema)],
      endDate: [endDate, optional(string())],
      onBehalfOf: [onBehalfOf, optional(string())],
    });
    req.header('on-behalf-of', mapped.onBehalfOf);
    req.query('start_date', mapped.startDate);
    req.query('limit', mapped.limit);
    req.query('offset', mapped.offset);
    req.query('aggregated_by', mapped.aggregatedBy);
    req.query('end_date', mapped.endDate);
    return req.callAsJson(
      array(v3UserWebhooksParseStatsResponseSchema),
      requestOptions
    );
  }

  /**
   * **This endpoint allows you to retrieve your signed webhook's public key.**
   *
   * Once you have enabled signing of the Event Webhook, you will need the public key provided to verify
   * the signatures on requests coming from Twilio SendGrid. You can retrieve the public key from this
   * endpoint at any time.
   *
   * For more information about cryptographically signing the Event Webhook, see [Getting Started with
   * the Event Webhook Security Features](https://sendgrid.com/docs/for-developers/tracking-
   * events/getting-started-event-webhook-security-features).
   *
   * @param onBehalfOf   Example: The subuser's username. This header generates the API call as if the
   *                               subuser account was making the call.
   * @return Response from the API call
   */
  async gETUserWebhooksEventSettingsSigned(
    onBehalfOf?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<V3UserWebhooksEventSettingsSignedResponse>> {
    const req = this.createRequest(
      'GET',
      '/v3/user/webhooks/event/settings/signed'
    );
    const mapped = req.prepareArgs({
      onBehalfOf: [onBehalfOf, optional(string())],
    });
    req.header('on-behalf-of', mapped.onBehalfOf);
    return req.callAsJson(
      v3UserWebhooksEventSettingsSignedResponseSchema,
      requestOptions
    );
  }

  /**
   * **This endpoint allows you to enable or disable signing of the Event Webhook.**
   *
   * This endpoint takes a single boolean request parameter, `enabled`. You may either enable or disable
   * signing of the Event Webhook using this endpoint. Once enabled, you can retrieve your public key
   * using the `/webhooks/event/settings/signed` endpoint.
   *
   * For more information about cryptographically signing the Event Webhook, see [Getting Started with
   * the Event Webhook Security Features](https://sendgrid.com/docs/for-developers/tracking-
   * events/getting-started-event-webhook-security-features).
   *
   * @param onBehalfOf   Example: The subuser's username. This
   *                                                                        header generates the API call as if the
   *                                                                        subuser account was making the call.
   * @param body
   * @return Response from the API call
   */
  async pATCHUserWebhooksEventSettingsSigned(
    onBehalfOf?: string,
    body?: V3UserWebhooksEventSettingsSignedRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<V3UserWebhooksEventSettingsSignedResponse>> {
    const req = this.createRequest(
      'PATCH',
      '/v3/user/webhooks/event/settings/signed'
    );
    const mapped = req.prepareArgs({
      onBehalfOf: [onBehalfOf, optional(string())],
      body: [body, optional(v3UserWebhooksEventSettingsSignedRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.header('on-behalf-of', mapped.onBehalfOf);
    req.json(mapped.body);
    req.throwOn(400, V3UserWebhooksEventSettingsSigned400Error, '');
    req.throwOn(401, V3UserWebhooksEventSettingsSigned401Error, '');
    req.throwOn(500, V3UserWebhooksEventSettingsSigned500Error, '');
    return req.callAsJson(
      v3UserWebhooksEventSettingsSignedResponseSchema,
      requestOptions
    );
  }

  /**
   * **This endpoint allows you to test your event webhook by sending a fake event notification post to
   * the provided URL.**
   *
   * SendGrid’s Event Webhook will notify a URL of your choice via HTTP POST with information about
   * events that occur as SendGrid processes your email.
   *
   * Common uses of this data are to remove unsubscribes, react to spam reports, determine unengaged
   * recipients, identify bounced email addresses, or create advanced analytics of your email program.
   *
   * >**Tip**: Retry logic for this endpoint differs from other endpoints, which use a rolling 24-hour
   * retry.
   *
   * If your web server does not return a 2xx response type, we will retry a POST request until we
   * receive a 2xx response or the maximum time of 10 minutes has expired.
   *
   * @param onBehalfOf   Example: The subuser's username. This header
   *                                                              generates the API call as if the subuser account was
   *                                                              making the call.
   * @param body
   * @return Response from the API call
   */
  async pOSTUserWebhooksEventTest(
    onBehalfOf?: string,
    body?: V3UserWebhooksEventTestRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('POST', '/v3/user/webhooks/event/test');
    const mapped = req.prepareArgs({
      onBehalfOf: [onBehalfOf, optional(string())],
      body: [body, optional(v3UserWebhooksEventTestRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.header('on-behalf-of', mapped.onBehalfOf);
    req.json(mapped.body);
    return req.call(requestOptions);
  }
}
