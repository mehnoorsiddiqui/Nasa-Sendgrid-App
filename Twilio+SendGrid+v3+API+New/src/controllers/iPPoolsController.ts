/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import { V3IpsPools404Error } from '../errors/v3IpsPools404Error';
import { V3IpsPools404Error3Error } from '../errors/v3IpsPools404Error3Error';
import { V3IpsPools404Error4Error } from '../errors/v3IpsPools404Error4Error';
import { V3IpsPoolsIps404Error } from '../errors/v3IpsPoolsIps404Error';
import {
  V3IpsPoolsIps404Error3Error,
} from '../errors/v3IpsPoolsIps404Error3Error';
import {
  IPPoolsPoolResp,
  iPPoolsPoolRespSchema,
} from '../models/iPPoolsPoolResp';
import {
  V3IpsPoolsIpsRequest,
  v3IpsPoolsIpsRequestSchema,
} from '../models/v3IpsPoolsIpsRequest';
import {
  V3IpsPoolsIpsResponse,
  v3IpsPoolsIpsResponseSchema,
} from '../models/v3IpsPoolsIpsResponse';
import {
  V3IpsPoolsRequest,
  v3IpsPoolsRequestSchema,
} from '../models/v3IpsPoolsRequest';
import {
  V3IpsPoolsRequest1,
  v3IpsPoolsRequest1Schema,
} from '../models/v3IpsPoolsRequest1';
import {
  V3IpsPoolsResponse,
  v3IpsPoolsResponseSchema,
} from '../models/v3IpsPoolsResponse';
import { array, optional, string, unknown } from '../schema';
import { BaseController } from './baseController';

export class IPPoolsController extends BaseController {
  /**
   * **This endpoint allows you to create an IP pool.**
   *
   * Before you can create an IP pool, you need to activate the IP in your SendGrid account:
   *
   * 1. Log into your SendGrid account.
   * 1. Navigate to **Settings** and then select **IP Addresses**.
   * 1. Find the IP address you want to activate and then click **Edit**.
   * 1. Check **Allow my account to send mail using this IP address**.
   * 1. Click **Save**.
   *
   * @param body
   * @return Response from the API call
   */
  async pOSTIpsPools(
    body?: V3IpsPoolsRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<IPPoolsPoolResp>> {
    const req = this.createRequest('POST', '/v3/ips/pools');
    const mapped = req.prepareArgs({
      body: [body, optional(v3IpsPoolsRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    return req.callAsJson(iPPoolsPoolRespSchema, requestOptions);
  }

  /**
   * **This endpoint allows you to get all of your IP pools.**
   *
   * @return Response from the API call
   */
  async gETIpsPools(
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<IPPoolsPoolResp[]>> {
    const req = this.createRequest('GET', '/v3/ips/pools');
    return req.callAsJson(array(iPPoolsPoolRespSchema), requestOptions);
  }

  /**
   * **This endpoint allows you to add an IP address to an IP pool.**
   *
   * You can add the same IP address to multiple pools. It may take up to 60 seconds for your IP address
   * to be added to a pool after your request is made.
   *
   * Before you can add an IP to a pool, you need to activate it in your SendGrid account:
   *
   * 1. Log into your SendGrid account.
   * 1. Navigate to **Settings** and then select **IP Addresses**.
   * 1. Find the IP address you want to activate and then click **Edit**.
   * 1. Check **Allow my account to send mail using this IP address**.
   * 1. Click **Save**.
   *
   * You can retrieve all of your available IP addresses from the "Retrieve all IP addresses" endpoint.
   *
   * @param poolName     The name of the IP pool you want to add the address to. If the
   *                                                    name contains spaces, they must be URL encoded (e.g., "Test
   *                                                    Pool" becomes "Test%20Pool").
   * @param body
   * @return Response from the API call
   */
  async pOSTIpsPoolsPoolNameIps(
    poolName: string,
    body?: V3IpsPoolsIpsRequest,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<V3IpsPoolsIpsResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      poolName: [poolName, string()],
      body: [body, optional(v3IpsPoolsIpsRequestSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/v3/ips/pools/${mapped.poolName}/ips`;
    req.throwOn(404, V3IpsPoolsIps404Error, '');
    return req.callAsJson(v3IpsPoolsIpsResponseSchema, requestOptions);
  }

  /**
   * **This endpoint allows you to get all of the IP addresses that are in a specific IP pool.**
   *
   * @param poolName  The name of the IP pool that you want to retrieve the IP addresses for.
   * @return Response from the API call
   */
  async gETIpsPoolsPoolName(
    poolName: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<V3IpsPoolsResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ poolName: [poolName, string()] });
    req.appendTemplatePath`/v3/ips/pools/${mapped.poolName}`;
    req.throwOn(404, V3IpsPools404Error, '');
    return req.callAsJson(v3IpsPoolsResponseSchema, requestOptions);
  }

  /**
   * **This endpoint allows you to update the name of an IP pool.**
   *
   * @param poolName     The name of the IP pool that you want to retrieve the IP
   *                                                  addresses for.
   * @param body
   * @return Response from the API call
   */
  async pUTIpsPoolsPoolName(
    poolName: string,
    body?: V3IpsPoolsRequest1,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<IPPoolsPoolResp>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      poolName: [poolName, string()],
      body: [body, optional(v3IpsPoolsRequest1Schema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/v3/ips/pools/${mapped.poolName}`;
    req.throwOn(404, V3IpsPools404Error3Error, '');
    return req.callAsJson(iPPoolsPoolRespSchema, requestOptions);
  }

  /**
   * **This endpoint allows you to delete an IP pool.**
   *
   * @param poolName  The name of the IP pool that you want to retrieve the IP addresses for.
   * @return Response from the API call
   */
  async dELETEIpsPoolsPoolName(
    poolName: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<unknown>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({ poolName: [poolName, string()] });
    req.appendTemplatePath`/v3/ips/pools/${mapped.poolName}`;
    req.throwOn(404, V3IpsPools404Error4Error, '');
    return req.callAsJson(unknown(), requestOptions);
  }

  /**
   * **This endpoint allows you to remove an IP address from an IP pool.**
   *
   * @param poolName  The name of the IP pool that you are removing the IP address from.
   * @param ip        The IP address that you wish to remove.
   * @return Response from the API call
   */
  async dELETEIpsPoolsPoolNameIpsIp(
    poolName: string,
    ip: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<unknown>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({
      poolName: [poolName, string()],
      ip: [ip, string()],
    });
    req.appendTemplatePath`/v3/ips/pools/${mapped.poolName}/ips/${mapped.ip}`;
    req.throwOn(404, V3IpsPoolsIps404Error3Error, '');
    return req.callAsJson(unknown(), requestOptions);
  }
}
