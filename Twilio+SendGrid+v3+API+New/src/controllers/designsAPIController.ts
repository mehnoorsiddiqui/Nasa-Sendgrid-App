/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import { Error9Error } from '../errors/error9Error';
import { Errors281Error } from '../errors/errors281Error';
import {
  DesignDuplicateDesignInput,
  designDuplicateDesignInputSchema,
} from '../models/designDuplicateDesignInput';
import { DesignInput, designInputSchema } from '../models/designInput';
import { DesignOutput, designOutputSchema } from '../models/designOutput';
import {
  V3DesignsPreBuiltsResponse,
  v3DesignsPreBuiltsResponseSchema,
} from '../models/v3DesignsPreBuiltsResponse';
import {
  V3DesignsRequest,
  v3DesignsRequestSchema,
} from '../models/v3DesignsRequest';
import {
  V3DesignsResponse,
  v3DesignsResponseSchema,
} from '../models/v3DesignsResponse';
import { boolean, number, optional, string, unknown } from '../schema';
import { BaseController } from './baseController';

export class DesignsAPIController extends BaseController {
  /**
   * **This endpoint allows you to create a new design**.
   *
   * You can add a new design by passing data, including a string of HTML email content, to `/designs`.
   * When creating designs from scratch, be aware of the styling constraints inherent to many email
   * clients. For a list of best practices, see our guide to [Cross-Platform Email Design](https:
   * //sendgrid.com/docs/ui/sending-email/cross-platform-html-design/).
   *
   * The Design Library can also convert your design’s HTML elements into drag and drop modules that are
   * editable in the Designs Library user interface. For more, visit the [Design and Code Editor
   * documentation](https://sendgrid.com/docs/ui/sending-email/editor/#drag--drop-markup).
   *
   * Because the `/designs` endpoint makes it easy to add designs, you can create a design with your
   * preferred tooling or migrate designs you already own without relying on the Design Library UI.
   *
   * @param body
   * @return Response from the API call
   */
  async pOSTDesign(
    body?: DesignInput,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<DesignOutput>> {
    const req = this.createRequest('POST', '/v3/designs');
    const mapped = req.prepareArgs({
      body: [body, optional(designInputSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.throwOn(400, Errors281Error, '');
    return req.callAsJson(designOutputSchema, requestOptions);
  }

  /**
   * **This endpoint allows you to retrieve a list of designs already stored in your Design Library**.
   *
   * A GET request to `/designs` will return a list of your existing designs. This endpoint will not
   * return the pre-built Twilio SendGrid designs. Pre-built designs can be retrieved using the
   * `/designs/pre-builts` endpoint, which is detailed below.
   *
   * By default, you will receive 100 results per request; however, you can modify the number of results
   * returned by passing an integer to the `page_size` query parameter.
   *
   * @param pageSize   number of results to return
   * @param pageToken  token corresponding to a specific page of results, as provided by metadata
   * @param summary    set to false to return all fields
   * @return Response from the API call
   */
  async lISTDesigns(
    pageSize?: number,
    pageToken?: string,
    summary?: boolean,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<V3DesignsResponse>> {
    const req = this.createRequest('GET', '/v3/designs');
    const mapped = req.prepareArgs({
      pageSize: [pageSize, optional(number())],
      pageToken: [pageToken, optional(string())],
      summary: [summary, optional(boolean())],
    });
    req.query('page_size', mapped.pageSize);
    req.query('page_token', mapped.pageToken);
    req.query('summary', mapped.summary);
    return req.callAsJson(v3DesignsResponseSchema, requestOptions);
  }

  /**
   * **This endpoint allows you to duplicate one of your existing designs**.
   *
   * Modifying an existing design is often the easiest way to create something new.
   *
   * You are not required to pass any data in the body of a request to this endpoint. If you choose to
   * leave the `name` field blank, your duplicate will be assigned the name of the design it was copied
   * from with the text "Duplicate: " prepended to it. This name change is only a convenience, as the
   * duplicate will be assigned a unique ID that differentiates it from your other designs.
   *
   * You can modify your duplicate’s name at the time of creation by passing an updated value to the
   * `name` field when making the initial request.
   * More on retrieving design IDs can be found below.
   *
   * @param id           The ID of the Design you want to duplicate.
   * @param body
   * @return Response from the API call
   */
  async pOSTDesignDup(
    id: string,
    body?: DesignDuplicateDesignInput,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<DesignOutput>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      id: [id, string()],
      body: [body, optional(designDuplicateDesignInputSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/v3/designs/${mapped.id}`;
    req.throwOn(400, Error9Error, '');
    req.throwOn(404, Errors281Error, '');
    return req.callAsJson(designOutputSchema, requestOptions);
  }

  /**
   * **This endpoint allows you to retrieve a single design**.
   *
   * A GET request to `/designs/{id}` will retrieve details about a specific design in your Design
   * Library.
   *
   * This endpoint is valuable when retrieving information stored in a field that you wish to update
   * using a PATCH request.
   *
   * @param id The ID of the Design you want to duplicate.
   * @return Response from the API call
   */
  async gETDesign(
    id: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<DesignOutput>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ id: [id, string()] });
    req.appendTemplatePath`/v3/designs/${mapped.id}`;
    req.throwOn(400, Errors281Error, '');
    req.throwOn(404, Errors281Error, '');
    return req.callAsJson(designOutputSchema, requestOptions);
  }

  /**
   * **This endpoint allows you to edit a design**.
   *
   * The Design API supports PATCH requests, which allow you to make partial updates to a single design.
   * Passing data to a specific field will update only the data stored in that field; all other fields
   * will be unaltered.
   *
   * For example, updating a design's name requires that you make a PATCH request to this endpoint with
   * data specified for the `name` field only.
   *
   * ```
   * {
   * "name": "<Updated Name>"
   * }
   * ```
   *
   * @param id           The ID of the Design you want to duplicate.
   * @param body
   * @return Response from the API call
   */
  async pUTDesign(
    id: string,
    body?: V3DesignsRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<DesignOutput>> {
    const req = this.createRequest('PATCH');
    const mapped = req.prepareArgs({
      id: [id, string()],
      body: [body, optional(v3DesignsRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/v3/designs/${mapped.id}`;
    req.throwOn(400, Errors281Error, '');
    req.throwOn(404, Errors281Error, '');
    return req.callAsJson(designOutputSchema, requestOptions);
  }

  /**
   * **This endpoint allows you to delete a single design**.
   *
   * Be sure to check the ID of the design you intend to delete before making this request; deleting a
   * design is a permanent action.
   *
   * @param id The ID of the Design you want to duplicate.
   * @return Response from the API call
   */
  async dELETEDesign(
    id: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<unknown>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({ id: [id, string()] });
    req.appendTemplatePath`/v3/designs/${mapped.id}`;
    req.throwOn(400, Errors281Error, '');
    req.throwOn(404, Errors281Error, '');
    return req.callAsJson(unknown(), requestOptions);
  }

  /**
   * **This endpoint allows you to retrieve a list of pre-built designs provided by Twilio SendGrid**.
   *
   * Unlike the `/designs` endpoint where *your* designs are stored, a GET request made to `designs/pre-
   * builts` will retrieve a list of the pre-built Twilio SendGrid designs. This endpoint will not return
   * the designs stored in your Design Library.
   *
   * By default, you will receive 100 results per request; however, you can modify the number of results
   * returned by passing an integer to the `page_size` query parameter.
   *
   * This endpoint is useful for retrieving the IDs of Twilio SendGrid designs that you want to duplicate
   * and modify.
   *
   * @param pageSize   number of results to return
   * @param pageToken  token corresponding to a specific page of results, as provided by metadata
   * @param summary    set to false to return all fields
   * @return Response from the API call
   */
  async lISTSendgridPreBuiltDesigns(
    pageSize?: number,
    pageToken?: string,
    summary?: boolean,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<V3DesignsPreBuiltsResponse>> {
    const req = this.createRequest('GET', '/v3/designs/pre-builts');
    const mapped = req.prepareArgs({
      pageSize: [pageSize, optional(number())],
      pageToken: [pageToken, optional(string())],
      summary: [summary, optional(boolean())],
    });
    req.query('page_size', mapped.pageSize);
    req.query('page_token', mapped.pageToken);
    req.query('summary', mapped.summary);
    return req.callAsJson(v3DesignsPreBuiltsResponseSchema, requestOptions);
  }

  /**
   * **This endpoint allows you to duplicate one of the pre-built Twilio SendGrid designs**.
   *
   * Like duplicating one of your existing designs, you are not required to pass any data in the body of
   * a request to this endpoint. If you choose to leave the `name` field blank, your duplicate will be
   * assigned the name of the design it was copied from with the text "Duplicate: " prepended to it. This
   * name change is only a convenience, as the duplicate design will be assigned a unique ID that
   * differentiates it from your other designs. You can retrieve the IDs for Twilio SendGrid pre-built
   * designs using the "List SendGrid Pre-built Designs" endpoint.
   *
   * You can modify your duplicate’s name at the time of creation by passing an updated value to the
   * `name` field when making the initial request.
   * More on retrieving design IDs can be found above.
   *
   * @param id           The ID of the pre-built Design you want to duplicate.
   * @param body
   * @return Response from the API call
   */
  async pOSTSendgridPreBuiltDesign(
    id: string,
    body?: DesignDuplicateDesignInput,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<DesignOutput>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      id: [id, string()],
      body: [body, optional(designDuplicateDesignInputSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/v3/designs/pre-builts/${mapped.id}`;
    req.throwOn(400, Errors281Error, '');
    req.throwOn(404, Errors281Error, '');
    return req.callAsJson(designOutputSchema, requestOptions);
  }

  /**
   * **This endpoint allows you to retrieve a single pre-built design**.
   *
   * A GET request to `/designs/pre-builts/{id}` will retrieve details about a specific pre-built design.
   *
   * This endpoint is valuable when retrieving details about a pre-built design that you wish to
   * duplicate and modify.
   *
   * @param id The ID of the pre-built Design you want to duplicate.
   * @return Response from the API call
   */
  async gETSendgridPreBuiltDesign(
    id: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<DesignOutput>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ id: [id, string()] });
    req.appendTemplatePath`/v3/designs/pre-builts/${mapped.id}`;
    req.throwOn(400, Errors281Error, '');
    req.throwOn(404, Errors281Error, '');
    return req.callAsJson(designOutputSchema, requestOptions);
  }
}
