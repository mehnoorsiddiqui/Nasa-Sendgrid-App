/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import {
  V3WhitelabelLinksValidate500Error,
} from '../errors/v3WhitelabelLinksValidate500Error';
import {
  LinkBranding200Response,
  linkBranding200ResponseSchema,
} from '../models/linkBranding200Response';
import {
  V3WhitelabelLinksRequest,
  v3WhitelabelLinksRequestSchema,
} from '../models/v3WhitelabelLinksRequest';
import {
  V3WhitelabelLinksRequest1,
  v3WhitelabelLinksRequest1Schema,
} from '../models/v3WhitelabelLinksRequest1';
import {
  V3WhitelabelLinksSubuserRequest,
  v3WhitelabelLinksSubuserRequestSchema,
} from '../models/v3WhitelabelLinksSubuserRequest';
import {
  V3WhitelabelLinksValidateResponse,
  v3WhitelabelLinksValidateResponseSchema,
} from '../models/v3WhitelabelLinksValidateResponse';
import { array, number, optional, string, unknown } from '../schema';
import { BaseController } from './baseController';

export class LinkBrandingController extends BaseController {
  /**
   * **This endpoint allows you to create a new branded link.**
   *
   * To create the link branding, supply the root domain and, optionally, the subdomain — these go into
   * separate fields in your request body. The root domain should match your FROM email address. If you
   * provide a  subdomain, it must be different from the subdomain you used for authenticating your
   * domain.
   *
   * You can submit this request as one of your subusers if you include their ID in the `on-behalf-of`
   * header in the request.
   *
   * @param onBehalfOf   Example: The subuser's username. This header generates the
   *                                                        API call as if the subuser account was making the call.
   * @param body
   * @return Response from the API call
   */
  async pOSTWhitelabelLinks(
    onBehalfOf?: string,
    body?: V3WhitelabelLinksRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<LinkBranding200Response>> {
    const req = this.createRequest('POST', '/v3/whitelabel/links');
    const mapped = req.prepareArgs({
      onBehalfOf: [onBehalfOf, optional(string())],
      body: [body, optional(v3WhitelabelLinksRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.header('on-behalf-of', mapped.onBehalfOf);
    req.json(mapped.body);
    return req.callAsJson(linkBranding200ResponseSchema, requestOptions);
  }

  /**
   * **This endpoint allows you to retrieve all branded links**.
   *
   * You can submit this request as one of your subusers if you include their ID in the `on-behalf-of`
   * header in the request.
   *
   * @param limit        Limits the number of results returned per page.
   * @param onBehalfOf   Example: The subuser's username. This header generates the API call as if the
   *                               subuser account was making the call.
   * @return Response from the API call
   */
  async gETWhitelabelLinks(
    limit?: number,
    onBehalfOf?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<LinkBranding200Response[]>> {
    const req = this.createRequest('GET', '/v3/whitelabel/links');
    const mapped = req.prepareArgs({
      limit: [limit, optional(number())],
      onBehalfOf: [onBehalfOf, optional(string())],
    });
    req.header('on-behalf-of', mapped.onBehalfOf);
    req.query('limit', mapped.limit);
    return req.callAsJson(array(linkBranding200ResponseSchema), requestOptions);
  }

  /**
   * **This endpoint allows you to validate a branded link.**
   *
   * You can submit this request as one of your subusers if you include their ID in the `on-behalf-of`
   * header in the request.
   *
   * @param id           The ID of the branded link that you want to validate.
   * @param onBehalfOf   Example: The subuser's username. This header generates the API call as if the
   *                               subuser account was making the call.
   * @return Response from the API call
   */
  async pOSTWhitelabelLinksIdValidate(
    id: number,
    onBehalfOf?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<V3WhitelabelLinksValidateResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      id: [id, number()],
      onBehalfOf: [onBehalfOf, optional(string())],
    });
    req.header('on-behalf-of', mapped.onBehalfOf);
    req.appendTemplatePath`/v3/whitelabel/links/${mapped.id}/validate`;
    req.throwOn(500, V3WhitelabelLinksValidate500Error, '');
    return req.callAsJson(
      v3WhitelabelLinksValidateResponseSchema,
      requestOptions
    );
  }

  /**
   * **This endpoint allows you to associate a branded link with a subuser account.**
   *
   * Link branding can be associated with subusers from the parent account. This functionality allows
   * subusers to send mail using their parent's link branding. To associate link branding, the parent
   * account must first create a branded link and validate it. The parent may then associate that branded
   * link with a subuser via the API or the [Subuser Management page of the Twilio SendGrid App](https:
   * //app.sendgrid.com/settings/subusers).
   *
   * @param linkId       The ID of the branded link you want to associate.
   * @param body
   * @return Response from the API call
   */
  async pOSTWhitelabelLinksLinkIdSubuser(
    linkId: number,
    body?: V3WhitelabelLinksSubuserRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<LinkBranding200Response>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      linkId: [linkId, number()],
      body: [body, optional(v3WhitelabelLinksSubuserRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/v3/whitelabel/links/${mapped.linkId}/subuser`;
    return req.callAsJson(linkBranding200ResponseSchema, requestOptions);
  }

  /**
   * **This endpoint allows you to retrieve a specific branded link by providing its ID.**
   *
   * You can submit this request as one of your subusers if you include their ID in the `on-behalf-of`
   * header in the request.
   *
   * @param id           The ID of the branded link you want to retrieve.
   * @param onBehalfOf   Example: The subuser's username. This header generates the API call as if the
   *                               subuser account was making the call.
   * @return Response from the API call
   */
  async gETWhitelabelLinksId(
    id: number,
    onBehalfOf?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<LinkBranding200Response>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      id: [id, number()],
      onBehalfOf: [onBehalfOf, optional(string())],
    });
    req.header('on-behalf-of', mapped.onBehalfOf);
    req.appendTemplatePath`/v3/whitelabel/links/${mapped.id}`;
    return req.callAsJson(linkBranding200ResponseSchema, requestOptions);
  }

  /**
   * **This endpoint allows you to update a specific branded link. You can use this endpoint to change a
   * branded link's default status.**
   *
   * You can submit this request as one of your subusers if you include their ID in the `on-behalf-of`
   * header in the request.
   *
   * @param id           The ID of the branded link you want to retrieve.
   * @param onBehalfOf   Example: The subuser's username. This header generates
   *                                                         the API call as if the subuser account was making the call.
   * @param body
   * @return Response from the API call
   */
  async pATCHWhitelabelLinksId(
    id: number,
    onBehalfOf?: string,
    body?: V3WhitelabelLinksRequest1,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<LinkBranding200Response>> {
    const req = this.createRequest('PATCH');
    const mapped = req.prepareArgs({
      id: [id, number()],
      onBehalfOf: [onBehalfOf, optional(string())],
      body: [body, optional(v3WhitelabelLinksRequest1Schema)],
    });
    req.header('Content-Type', 'application/json');
    req.header('on-behalf-of', mapped.onBehalfOf);
    req.json(mapped.body);
    req.appendTemplatePath`/v3/whitelabel/links/${mapped.id}`;
    return req.callAsJson(linkBranding200ResponseSchema, requestOptions);
  }

  /**
   * **This endpoint allows you to delete a branded link.**
   *
   * Your request will receive a response with a 204 status code if the deletion was successful. The call
   * does not return the link's details, so if you wish to record these make sure you call the  "Retrieve
   * a branded link" endpoint *before* you request its deletion.
   *
   * You can submit this request as one of your subusers if you include their ID in the `on-behalf-of`
   * header in the request.
   *
   * @param id           The ID of the branded link you want to retrieve.
   * @param onBehalfOf   Example: The subuser's username. This header generates the API call as if the
   *                               subuser account was making the call.
   * @return Response from the API call
   */
  async dELETEWhitelabelLinksId(
    id: number,
    onBehalfOf?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<unknown>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({
      id: [id, number()],
      onBehalfOf: [onBehalfOf, optional(string())],
    });
    req.header('on-behalf-of', mapped.onBehalfOf);
    req.appendTemplatePath`/v3/whitelabel/links/${mapped.id}`;
    return req.callAsJson(unknown(), requestOptions);
  }

  /**
   * **This endpoint allows you to retrieve the default branded link.**
   *
   * The default branded link is the actual URL to be used when sending messages. If you have more than
   * one branded link, the default is determined by the following order:
   *
   * * The validated branded link marked as `default` (set when you call the "Create a branded link"
   * endpoint or by calling the "Update a branded link" endpoint on an existing link)
   * * Legacy branded links (migrated from the whitelabel wizard)
   * * Default SendGrid-branded links (i.e., `100.ct.sendgrid.net`)
   *
   * You can submit this request as one of your subusers if you include their ID in the `on-behalf-of`
   * header in the request.
   *
   * @param domain       The domain to match against when finding the default branded link.
   * @param onBehalfOf   Example: The subuser's username. This header generates the API call as if the
   *                               subuser account was making the call.
   * @return Response from the API call
   */
  async gETWhitelabelLinksDefault(
    domain?: string,
    onBehalfOf?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<LinkBranding200Response>> {
    const req = this.createRequest('GET', '/v3/whitelabel/links/default');
    const mapped = req.prepareArgs({
      domain: [domain, optional(string())],
      onBehalfOf: [onBehalfOf, optional(string())],
    });
    req.header('on-behalf-of', mapped.onBehalfOf);
    req.query('domain', mapped.domain);
    return req.callAsJson(linkBranding200ResponseSchema, requestOptions);
  }

  /**
   * **This endpoint allows you to retrieve the branded link associated with a subuser.**
   *
   * Link branding can be associated with subusers from the parent account. This functionality allows
   * subusers to send mail using their parent's link branding. To associate link branding, the parent
   * account must first create a branded link and then validate it. The parent may then associate that
   * branded link with a subuser via the API or the [Subuser Management page of the Twilio SendGrid
   * App](https://app.sendgrid.com/settings/subusers).
   *
   * @param username The username of the subuser to retrieve associated branded links for.
   * @return Response from the API call
   */
  async gETWhitelabelLinksSubuser(
    username: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<LinkBranding200Response>> {
    const req = this.createRequest('GET', '/v3/whitelabel/links/subuser');
    const mapped = req.prepareArgs({ username: [username, string()] });
    req.query('username', mapped.username);
    return req.callAsJson(linkBranding200ResponseSchema, requestOptions);
  }

  /**
   * **This endpoint allows you to take a branded link away from a subuser.**
   *
   * Link branding can be associated with subusers from the parent account. This functionality allows
   * subusers to send mail using their parent's link branding. To associate link branding, the parent
   * account must first create a branded link and validate it. The parent may then associate that branded
   * link with a subuser via the API or the [Subuser Management page of the Twilio SendGrid App](https:
   * //app.sendgrid.com/settings/subusers).
   *
   * Your request will receive a response with a 204 status code if the disassociation was successful.
   *
   * @param username The username of the subuser account that you want to disassociate a branded link from.
   * @return Response from the API call
   */
  async dELETEWhitelabelLinksSubuser(
    username: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<unknown>> {
    const req = this.createRequest('DELETE', '/v3/whitelabel/links/subuser');
    const mapped = req.prepareArgs({ username: [username, string()] });
    req.query('username', mapped.username);
    return req.callAsJson(unknown(), requestOptions);
  }
}
