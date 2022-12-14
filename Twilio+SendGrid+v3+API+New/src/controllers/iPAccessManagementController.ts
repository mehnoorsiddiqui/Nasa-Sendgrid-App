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
  ContentTypeEnum,
  contentTypeEnumSchema,
} from '../models/contentTypeEnum';
import {
  IPAccessResponse,
  iPAccessResponseSchema,
} from '../models/iPAccessResponse';
import {
  V3AccessSettingsActivityResponse,
  v3AccessSettingsActivityResponseSchema,
} from '../models/v3AccessSettingsActivityResponse';
import {
  V3AccessSettingsWhitelistRequest,
  v3AccessSettingsWhitelistRequestSchema,
} from '../models/v3AccessSettingsWhitelistRequest';
import { number, optional, string, unknown } from '../schema';
import { BaseController } from './baseController';

export class IPAccessManagementController extends BaseController {
  /**
   * **This endpoint allows you to add one or more allowed IP addresses.**
   *
   * To allow one or more IP addresses, pass them to this endpoint in an array. Once an IP address is
   * added to your allow list, it will be assigned an `id` that can be used to remove the address. You
   * can retrieve the ID associated with an IP using the "Retrieve a list of currently allowed IPs"
   * endpoint.
   *
   * @param onBehalfOf   Example: The subuser's username. This header
   *                                                                generates the API call as if the subuser account
   *                                                                was making the call.
   * @param body
   * @return Response from the API call
   */
  async pOSTAccessSettingsWhitelist(
    onBehalfOf?: string,
    body?: V3AccessSettingsWhitelistRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<IPAccessResponse>> {
    const req = this.createRequest('POST', '/v3/access_settings/whitelist');
    const mapped = req.prepareArgs({
      onBehalfOf: [onBehalfOf, optional(string())],
      body: [body, optional(v3AccessSettingsWhitelistRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.header('on-behalf-of', mapped.onBehalfOf);
    req.json(mapped.body);
    req.throwOn(401, GlobalErrorResponseSchema1Error, '');
    req.throwOn(403, GlobalErrorResponseSchema1Error, '');
    req.throwOn(404, GlobalErrorResponseSchema1Error, '');
    req.throwOn(500, V3MailSend500Error1Error, '');
    return req.callAsJson(iPAccessResponseSchema, requestOptions);
  }

  /**
   * **This endpoint allows you to retrieve a list of IP addresses that are currently allowed to access
   * your account.**
   *
   * Each IP address returned to you will have `created_at` and `updated_at` dates. Each IP will also be
   * associated with an `id` that can be used to remove the address from your allow list.
   *
   * @param onBehalfOf   Example: The subuser's username. This header generates the API call as if the
   *                               subuser account was making the call.
   * @return Response from the API call
   */
  async gETAccessSettingsWhitelist(
    onBehalfOf?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<IPAccessResponse>> {
    const req = this.createRequest('GET', '/v3/access_settings/whitelist');
    const mapped = req.prepareArgs({
      onBehalfOf: [onBehalfOf, optional(string())],
    });
    req.header('on-behalf-of', mapped.onBehalfOf);
    req.throwOn(401, GlobalErrorResponseSchema1Error, '');
    req.throwOn(403, GlobalErrorResponseSchema1Error, '');
    req.throwOn(404, GlobalErrorResponseSchema1Error, '');
    req.throwOn(500, V3MailSend500Error1Error, '');
    return req.callAsJson(iPAccessResponseSchema, requestOptions);
  }

  /**
   * **This endpoint allows you to remove one or more IP addresses from your list of allowed addresses.
   * **
   *
   * To remove one or more IP addresses, pass this endpoint an array containing the ID(s) associated with
   * the IP(s) you intend to remove. You can retrieve the IDs associated with your allowed IP addresses
   * using the "Retrieve a list of currently allowed IPs" endpoint.
   *
   * It is possible to remove your own IP address, which will block access to your account. You will need
   * to submit a [support ticket](https://sendgrid.com/docs/ui/account-and-settings/support/) if this
   * happens. For this reason, it is important to double check that you are removing only the IPs you
   * intend to remove when using this endpoint.
   *
   * @param contentType
   * @param onBehalfOf   Example: The subuser's username. This header generates the API call as if
   *                                        the subuser account was making the call.
   * @return Response from the API call
   */
  async dELETEAccessSettingsWhitelist(
    contentType: ContentTypeEnum,
    onBehalfOf?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<unknown>> {
    const req = this.createRequest('DELETE', '/v3/access_settings/whitelist');
    const mapped = req.prepareArgs({
      contentType: [contentType, contentTypeEnumSchema],
      onBehalfOf: [onBehalfOf, optional(string())],
    });
    req.header('Content-Type', mapped.contentType);
    req.header('on-behalf-of', mapped.onBehalfOf);
    req.throwOn(401, GlobalErrorResponseSchema1Error, '');
    req.throwOn(403, GlobalErrorResponseSchema1Error, '');
    req.throwOn(404, GlobalErrorResponseSchema1Error, '');
    req.throwOn(500, V3MailSend500Error1Error, '');
    return req.callAsJson(unknown(), requestOptions);
  }

  /**
   * **This endpoint allows you to retrieve a list of all of the IP addresses that recently attempted to
   * access your account either through the User Interface or the API.**
   *
   * @param limit        Limits the number of IPs to return.
   * @param onBehalfOf   Example: The subuser's username. This header generates the API call as if the
   *                               subuser account was making the call.
   * @return Response from the API call
   */
  async gETAccessSettingsActivity(
    limit?: number,
    onBehalfOf?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<V3AccessSettingsActivityResponse>> {
    const req = this.createRequest('GET', '/v3/access_settings/activity');
    const mapped = req.prepareArgs({
      limit: [limit, optional(number())],
      onBehalfOf: [onBehalfOf, optional(string())],
    });
    req.header('on-behalf-of', mapped.onBehalfOf);
    req.query('limit', mapped.limit);
    req.throwOn(401, GlobalErrorResponseSchema1Error, '');
    req.throwOn(403, GlobalErrorResponseSchema1Error, '');
    req.throwOn(404, GlobalErrorResponseSchema1Error, '');
    req.throwOn(500, V3MailSend500Error1Error, '');
    return req.callAsJson(
      v3AccessSettingsActivityResponseSchema,
      requestOptions
    );
  }

  /**
   * **This endpoint allows you to retreive a specific IP address that has been allowed to access your
   * account.**
   *
   * You must include the ID for the specific IP address you want to retrieve in your call. You can
   * retrieve the IDs associated with your allowed IP addresses using the "Retrieve a  list of currently
   * allowed IPs" endpoint.
   *
   * @param ruleId       The ID of the allowed IP address that you want to retrieve.
   * @param onBehalfOf   Example: The subuser's username. This header generates the API call as if the
   *                               subuser account was making the call.
   * @return Response from the API call
   */
  async gETAccessSettingsWhitelistRuleId(
    ruleId: string,
    onBehalfOf?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<IPAccessResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      ruleId: [ruleId, string()],
      onBehalfOf: [onBehalfOf, optional(string())],
    });
    req.header('on-behalf-of', mapped.onBehalfOf);
    req.appendTemplatePath`/v3/access_settings/whitelist/${mapped.ruleId}`;
    return req.callAsJson(iPAccessResponseSchema, requestOptions);
  }

  /**
   * **This endpoint allows you to remove a specific IP address from your list of allowed addresses.**
   *
   * When removing a specific IP address from your list, you must include the ID in your call.  You can
   * retrieve the IDs associated with your allowed IP addresses using the "Retrieve a list of currently
   * allowed IPs" endpoint.
   *
   * @param ruleId       The ID of the allowed IP address that you want to retrieve.
   * @param onBehalfOf   Example: The subuser's username. This header generates the API call as if the
   *                               subuser account was making the call.
   * @return Response from the API call
   */
  async dELETEAccessSettingsWhitelistRuleId(
    ruleId: string,
    onBehalfOf?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<unknown>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({
      ruleId: [ruleId, string()],
      onBehalfOf: [onBehalfOf, optional(string())],
    });
    req.header('on-behalf-of', mapped.onBehalfOf);
    req.appendTemplatePath`/v3/access_settings/whitelist/${mapped.ruleId}`;
    return req.callAsJson(unknown(), requestOptions);
  }
}
