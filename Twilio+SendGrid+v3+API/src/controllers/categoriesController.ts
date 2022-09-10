/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import { V3Categories400Error } from '../errors/v3Categories400Error';
import {
  AggregatedBy2Enum,
  aggregatedBy2EnumSchema,
} from '../models/aggregatedBy2Enum';
import {
  SortByDirection1Enum,
  sortByDirection1EnumSchema,
} from '../models/sortByDirection1Enum';
import {
  StatsCategoryStats,
  statsCategoryStatsSchema,
} from '../models/statsCategoryStats';
import {
  V3CategoriesResponse,
  v3CategoriesResponseSchema,
} from '../models/v3CategoriesResponse';
import { array, number, optional, string } from '../schema';
import { BaseController } from './baseController';

export class CategoriesController extends BaseController {
  /**
   * **This endpoint allows you to retrieve a list of all of your categories.**
   *
   * @param limit        The number of categories to display per page.
   * @param category     Allows you to perform a prefix search on this particular category.
   * @param offset       The point in the list that you would like to begin displaying results.
   * @param onBehalfOf   Example: The subuser's username. This header generates the API call as if the
   *                               subuser account was making the call.
   * @return Response from the API call
   */
  async gETCategories(
    limit?: number,
    category?: string,
    offset?: number,
    onBehalfOf?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<V3CategoriesResponse[]>> {
    const req = this.createRequest('GET', '/v3/categories');
    const mapped = req.prepareArgs({
      limit: [limit, optional(number())],
      category: [category, optional(string())],
      offset: [offset, optional(number())],
      onBehalfOf: [onBehalfOf, optional(string())],
    });
    req.header('on-behalf-of', mapped.onBehalfOf);
    req.query('limit', mapped.limit);
    req.query('category', mapped.category);
    req.query('offset', mapped.offset);
    req.throwOn(400, V3Categories400Error, '');
    return req.callAsJson(array(v3CategoriesResponseSchema), requestOptions);
  }

  /**
   * **This endpoint allows you to retrieve the total sum of each email statistic for every category over
   * the given date range.**
   *
   * If you do not define any query parameters, this endpoint will return a sum for each category in
   * groups of 10.
   *
   * @param startDate         The starting date of the statistics to retrieve. Must follow
   *                                                  format YYYY-MM-DD.
   * @param sortByMetric      The metric that you want to sort by.  Must be a single metric.
   * @param sortByDirection   The direction you want to sort.
   * @param endDate           The end date of the statistics to retrieve. Defaults to today.
   *                                                  Must follow format YYYY-MM-DD.
   * @param limit             Limits the number of results returned.
   * @param offset            The point in the list to begin retrieving results.
   * @param aggregatedBy      How to group the statistics. Must be either "day", "week", or
   *                                                  "month".
   * @param onBehalfOf        Example: The subuser's username. This header generates the API
   *                                                  call as if the subuser account was making the call.
   * @return Response from the API call
   */
  async gETCategoriesStatsSums(
    startDate: string,
    sortByMetric?: string,
    sortByDirection?: SortByDirection1Enum,
    endDate?: string,
    limit?: number,
    offset?: number,
    aggregatedBy?: AggregatedBy2Enum,
    onBehalfOf?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<StatsCategoryStats>> {
    const req = this.createRequest('GET', '/v3/categories/stats/sums');
    const mapped = req.prepareArgs({
      startDate: [startDate, string()],
      sortByMetric: [sortByMetric, optional(string())],
      sortByDirection: [sortByDirection, optional(sortByDirection1EnumSchema)],
      endDate: [endDate, optional(string())],
      limit: [limit, optional(number())],
      offset: [offset, optional(number())],
      aggregatedBy: [aggregatedBy, optional(aggregatedBy2EnumSchema)],
      onBehalfOf: [onBehalfOf, optional(string())],
    });
    req.header('on-behalf-of', mapped.onBehalfOf);
    req.query('start_date', mapped.startDate);
    req.query('sort_by_metric', mapped.sortByMetric);
    req.query('sort_by_direction', mapped.sortByDirection);
    req.query('end_date', mapped.endDate);
    req.query('limit', mapped.limit);
    req.query('offset', mapped.offset);
    req.query('aggregated_by', mapped.aggregatedBy);
    return req.callAsJson(statsCategoryStatsSchema, requestOptions);
  }

  /**
   * **This endpoint allows you to retrieve all of your email statistics for each of your categories.**
   *
   * If you do not define any query parameters, this endpoint will return a sum for each category in
   * groups of 10.
   *
   * @param startDate     The starting date of the statistics to retrieve. Must follow format
   *                                           YYYY-MM-DD
   * @param categories    The individual categories that you want to retrieve statistics for. You
   *                                           may include up to 10 different categories.
   * @param endDate       The end date of the statistics to retrieve. Defaults to today. Must
   *                                           follow format YYYY-MM-DD.
   * @param aggregatedBy  How to group the statistics. Must be either "day", "week", or "month".
   * @param onBehalfOf    Example: The subuser's username. This header generates the API call as
   *                                           if the subuser account was making the call.
   * @return Response from the API call
   */
  async gETCategoriesStats(
    startDate: string,
    categories: string,
    endDate?: string,
    aggregatedBy?: AggregatedBy2Enum,
    onBehalfOf?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<StatsCategoryStats[]>> {
    const req = this.createRequest('GET', '/v3/categories/stats');
    const mapped = req.prepareArgs({
      startDate: [startDate, string()],
      categories: [categories, string()],
      endDate: [endDate, optional(string())],
      aggregatedBy: [aggregatedBy, optional(aggregatedBy2EnumSchema)],
      onBehalfOf: [onBehalfOf, optional(string())],
    });
    req.header('on-behalf-of', mapped.onBehalfOf);
    req.query('start_date', mapped.startDate);
    req.query('categories', mapped.categories);
    req.query('end_date', mapped.endDate);
    req.query('aggregated_by', mapped.aggregatedBy);
    return req.callAsJson(array(statsCategoryStatsSchema), requestOptions);
  }
}
