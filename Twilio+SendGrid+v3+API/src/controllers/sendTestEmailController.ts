/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import {
  GlobalErrorResponseSchema1Error,
} from '../errors/globalErrorResponseSchema1Error';
import {
  V3MarketingTestSendEmailRequest,
  v3MarketingTestSendEmailRequestSchema,
} from '../models/v3MarketingTestSendEmailRequest';
import { optional, unknown } from '../schema';
import { BaseController } from './baseController';

export class SendTestEmailController extends BaseController {
  /**
   * **This endpoint allows you to send a test marketing email to a list of email addresses**.
   *
   * Before sending a marketing message, you can test it using this endpoint. You may specify up to **10
   * contacts** in the `emails` request body field. You must also specify a `template_id` and include
   * either a `from_address` or `sender_id`. You can manage your templates with the [Twilio SendGrid
   * App](https://mc.sendgrid.com/dynamic-templates) or the [Transactional Templates API](https:
   * //sendgrid.api-docs.io/v3.0/transactional-templates).
   *
   * > Please note that this endpoint works with Dynamic Transactional Templates only. Legacy
   * Transactional Templates will not be delivered.
   *
   * For more information about managing Dynamic Transactional Templates, see [How to Send Email with
   * Dynamic Transactional Templates](https://sendgrid.com/docs/ui/sending-email/how-to-send-an-email-
   * with-dynamic-transactional-templates/).
   *
   * You can also test your Single Sends in the [Twilio SendGrid Marketing Campaigns UI](https://mc.
   * sendgrid.com/single-sends).
   *
   * @param body
   * @return Response from the API call
   */
  async pOSTMarketingTestSendEmail(
    body?: V3MarketingTestSendEmailRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<unknown>> {
    const req = this.createRequest('POST', '/v3/marketing/test/send_email');
    const mapped = req.prepareArgs({
      body: [body, optional(v3MarketingTestSendEmailRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.throwOn(400, GlobalErrorResponseSchema1Error, '');
    return req.callAsJson(unknown(), requestOptions);
  }
}
