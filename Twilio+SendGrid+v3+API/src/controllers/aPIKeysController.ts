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
  APIKeyNameandID,
  aPIKeyNameandIDSchema,
} from '../models/aPIKeyNameandID';
import {
  APIKeyNameIDandScopes,
  aPIKeyNameIDandScopesSchema,
} from '../models/aPIKeyNameIDandScopes';
import {
  V3ApiKeysRequest,
  v3ApiKeysRequestSchema,
} from '../models/v3ApiKeysRequest';
import {
  V3ApiKeysRequest1,
  v3ApiKeysRequest1Schema,
} from '../models/v3ApiKeysRequest1';
import {
  V3ApiKeysRequest2,
  v3ApiKeysRequest2Schema,
} from '../models/v3ApiKeysRequest2';
import {
  V3ApiKeysResponse,
  v3ApiKeysResponseSchema,
} from '../models/v3ApiKeysResponse';
import {
  V3ApiKeysResponse1,
  v3ApiKeysResponse1Schema,
} from '../models/v3ApiKeysResponse1';
import {
  V3ApiKeysResponse2,
  v3ApiKeysResponse2Schema,
} from '../models/v3ApiKeysResponse2';
import { number, optional, string } from '../schema';
import { BaseController } from './baseController';

export class APIKeysController extends BaseController {
  /**
   * **This endpoint allows you to create a new API Key for the user.**
   *
   * To create your initial SendGrid API Key, you should [use the SendGrid App](https://app.sendgrid.
   * com/settings/api_keys). Once you have created a first key with scopes to manage additional API keys,
   * you can use this API for all other key management.
   *
   * > There is a limit of 100 API Keys on your account.
   *
   * A JSON request body containing a `name` property is required when making requests to this endpoint.
   * If the number of maximum keys, 100, is reached, a `403` status will be returned.
   *
   * Though the `name` field is required, it does not need to be unique. A unique API key ID will be
   * generated for each key you create and returned in the response body.
   *
   * It is not necessary to pass a `scopes` field to the API when creating a key, but you should be aware
   * that omitting the `scopes` field from your request will create a key with "Full Access" permissions
   * by default.
   *
   * See the [API Key Permissions List](https://sendgrid.api-docs.io/v3.0/how-to-use-the-sendgrid-v3-
   * api/api-authorization) for all available scopes. An API key's scopes can be updated after creation
   * using the "Update API keys" endpoint.
   *
   * @param onBehalfOf   Example: The subuser's username. This header generates the API
   *                                                call as if the subuser account was making the call.
   * @param body
   * @return Response from the API call
   */
  async createApiKeys(
    onBehalfOf?: string,
    body?: V3ApiKeysRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<V3ApiKeysResponse>> {
    const req = this.createRequest('POST', '/v3/api_keys');
    const mapped = req.prepareArgs({
      onBehalfOf: [onBehalfOf, optional(string())],
      body: [body, optional(v3ApiKeysRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.header('on-behalf-of', mapped.onBehalfOf);
    req.json(mapped.body);
    req.throwOn(400, GlobalErrorResponseSchema1Error, '');
    req.throwOn(401, GlobalErrorResponseSchema1Error, '');
    req.throwOn(403, GlobalErrorResponseSchema1Error, '');
    req.throwOn(404, GlobalErrorResponseSchema1Error, '');
    req.throwOn(500, V3MailSend500Error1Error, '');
    return req.callAsJson(v3ApiKeysResponseSchema, requestOptions);
  }

  /**
   * **This endpoint allows you to retrieve all API Keys that belong to the authenticated user.**
   *
   * A successful response from this API will include all available API keys' names and IDs.
   *
   * For security reasons, there is not a way to retrieve the key itself after it's created. If you lose
   * your API key, you must create a new one. Only the "Create API keys" endpoint will return a key to
   * you and only at the time of creation.
   *
   * An `api_key_id` can be used to update or delete the key, as well as retrieve the key's details, such
   * as its scopes.
   *
   * @param limit
   * @param onBehalfOf   Example: The subuser's username. This header generates the API call as if the
   *                               subuser account was making the call.
   * @return Response from the API call
   */
  async gETApiKeys(
    limit?: number,
    onBehalfOf?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<V3ApiKeysResponse1>> {
    const req = this.createRequest('GET', '/v3/api_keys');
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
    return req.callAsJson(v3ApiKeysResponse1Schema, requestOptions);
  }

  /**
   * **This endpoint allows you to retrieve a single API key using an `api_key_id`.**
   *
   * The endpoint will return a key's name, ID, and scopes. If the API Key ID does not, exist a `404`
   * status will be returned.
   *
   * See the [API Key Permissions List](https://sendgrid.api-docs.io/v3.0/how-to-use-the-sendgrid-v3-
   * api/api-authorization) for all available scopes. An API key's scopes can be updated after creation
   * using the "Update API keys" endpoint.
   *
   * @param apiKeyId
   * @param onBehalfOf   Example: The subuser's username. This header generates the API call as if the
   *                               subuser account was making the call.
   * @return Response from the API call
   */
  async gETApiKeysApiKeyId(
    apiKeyId: string,
    onBehalfOf?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<V3ApiKeysResponse2>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      apiKeyId: [apiKeyId, string()],
      onBehalfOf: [onBehalfOf, optional(string())],
    });
    req.header('on-behalf-of', mapped.onBehalfOf);
    req.appendTemplatePath`/v3/api_keys/${mapped.apiKeyId}`;
    req.throwOn(400, GlobalErrorResponseSchema1Error, '');
    req.throwOn(401, GlobalErrorResponseSchema1Error, '');
    req.throwOn(403, GlobalErrorResponseSchema1Error, '');
    req.throwOn(404, GlobalErrorResponseSchema1Error, '');
    req.throwOn(500, V3MailSend500Error1Error, '');
    return req.callAsJson(v3ApiKeysResponse2Schema, requestOptions);
  }

  /**
   * **This endpoint allows you to update the name of an existing API Key.**
   *
   * You must pass this endpoint a JSON request body with a `name` property, which will be used to rename
   * the key associated with the `api_key_id` passed in the URL.
   *
   * @param apiKeyId
   * @param onBehalfOf   Example: The subuser's username. This header generates the API
   *                                                 call as if the subuser account was making the call.
   * @param body
   * @return Response from the API call
   */
  async pATCHApiKeysApiKeyId(
    apiKeyId: string,
    onBehalfOf?: string,
    body?: V3ApiKeysRequest1,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<APIKeyNameandID>> {
    const req = this.createRequest('PATCH');
    const mapped = req.prepareArgs({
      apiKeyId: [apiKeyId, string()],
      onBehalfOf: [onBehalfOf, optional(string())],
      body: [body, optional(v3ApiKeysRequest1Schema)],
    });
    req.header('Content-Type', 'application/json');
    req.header('on-behalf-of', mapped.onBehalfOf);
    req.json(mapped.body);
    req.appendTemplatePath`/v3/api_keys/${mapped.apiKeyId}`;
    req.throwOn(400, GlobalErrorResponseSchema1Error, '');
    req.throwOn(401, GlobalErrorResponseSchema1Error, '');
    req.throwOn(403, GlobalErrorResponseSchema1Error, '');
    req.throwOn(404, GlobalErrorResponseSchema1Error, '');
    req.throwOn(500, V3MailSend500Error1Error, '');
    return req.callAsJson(aPIKeyNameandIDSchema, requestOptions);
  }

  /**
   * **This endpoint allows you to update the name and scopes of a given API key.**
   *
   * You must pass this endpoint a JSON request body with a `name` field and a `scopes` array containing
   * at least one scope. The `name` and `scopes` fields will be used to update the key associated with
   * the `api_key_id` in the request URL.
   *
   * If you need to update a key's scopes only, pass the `name` field with the key's existing name; the
   * `name` will not be modified. If you need to update a key's name only, use the "Update API key name"
   * endpoint.
   *
   * See the [API Key Permissions List](https://sendgrid.api-docs.io/v3.0/how-to-use-the-sendgrid-v3-
   * api/api-authorization) for all available scopes.
   *
   * @param apiKeyId
   * @param onBehalfOf   Example: The subuser's username. This header generates the API
   *                                                 call as if the subuser account was making the call.
   * @param body
   * @return Response from the API call
   */
  async pUTApiKeysApiKeyId(
    apiKeyId: string,
    onBehalfOf?: string,
    body?: V3ApiKeysRequest2,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<APIKeyNameIDandScopes>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      apiKeyId: [apiKeyId, string()],
      onBehalfOf: [onBehalfOf, optional(string())],
      body: [body, optional(v3ApiKeysRequest2Schema)],
    });
    req.header('Content-Type', 'application/json');
    req.header('on-behalf-of', mapped.onBehalfOf);
    req.json(mapped.body);
    req.appendTemplatePath`/v3/api_keys/${mapped.apiKeyId}`;
    req.throwOn(400, GlobalErrorResponseSchema1Error, '');
    req.throwOn(401, GlobalErrorResponseSchema1Error, '');
    req.throwOn(403, GlobalErrorResponseSchema1Error, '');
    req.throwOn(404, GlobalErrorResponseSchema1Error, '');
    req.throwOn(500, V3MailSend500Error1Error, '');
    return req.callAsJson(aPIKeyNameIDandScopesSchema, requestOptions);
  }

  /**
   * **This endpoint allows you to revoke an existing API Key using an `api_key_id`**
   *
   * Authentications using a revoked API Key will fail after after some small propogation delay. If the
   * API Key ID does not exist, a `404` status will be returned.
   *
   * @param apiKeyId
   * @param onBehalfOf   Example: The subuser's username. This header generates the API call as if the
   *                               subuser account was making the call.
   * @return Response from the API call
   */
  async dELETEApiKeysApiKeyId(
    apiKeyId: string,
    onBehalfOf?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({
      apiKeyId: [apiKeyId, string()],
      onBehalfOf: [onBehalfOf, optional(string())],
    });
    req.header('on-behalf-of', mapped.onBehalfOf);
    req.appendTemplatePath`/v3/api_keys/${mapped.apiKeyId}`;
    req.throwOn(400, GlobalErrorResponseSchema1Error, '');
    req.throwOn(401, GlobalErrorResponseSchema1Error, '');
    req.throwOn(403, GlobalErrorResponseSchema1Error, '');
    req.throwOn(404, GlobalErrorResponseSchema1Error, '');
    req.throwOn(500, V3MailSend500Error1Error, '');
    return req.call(requestOptions);
  }
}
