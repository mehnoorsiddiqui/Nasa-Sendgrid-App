/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import {
  V3ValidationsEmailRequest,
  v3ValidationsEmailRequestSchema,
} from '../models/v3ValidationsEmailRequest';
import {
  V3ValidationsEmailResponse,
  v3ValidationsEmailResponseSchema,
} from '../models/v3ValidationsEmailResponse';
import { optional } from '../schema';
import { BaseController } from './baseController';

export class EmailAddressValidationController extends BaseController {
  /**
   * **This endpoint allows you to validate an email address.**
   *
   * @param body
   * @return Response from the API call
   */
  async pOSTValidationsEmail(
    body?: V3ValidationsEmailRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<V3ValidationsEmailResponse>> {
    const req = this.createRequest('POST', '/v3/validations/email');
    const mapped = req.prepareArgs({
      body: [body, optional(v3ValidationsEmailRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    return req.callAsJson(v3ValidationsEmailResponseSchema, requestOptions);
  }
}
