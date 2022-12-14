/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  lazy,
  number,
  object,
  optional,
  Schema,
  string,
  unknown,
} from '../schema';
import { ContactResponse, contactResponseSchema } from './contactResponse';

export interface FullSegment {
  id: string;
  contactsCount: number;
  /** ISO8601 of created timestamp */
  createdAt: string;
  /** Name of the segment. */
  name: string;
  /** The id of the list if this segment is a child of a list.  This implies the query `AND CONTAINS(list_ids, ${parent_list_id})` */
  parentListId?: string;
  /** ISO8601 timestamp the sample was last updated */
  sampleUpdatedAt: string;
  /** ISO8601 timestamp the object was last updated */
  updatedAt: string;
  /** ISO8601 string that is equal to `sample_updated_at` plus an internally calculated offset that depends on how often contacts enter or exit segments as the scheduled pipeline updates the samples. */
  nextSampleUpdate?: string;
  contactsSample: ContactResponse[];
  /** AST representation of the query DSL */
  queryJson?: unknown;
  /** The array of list ids to filter contacts on when building this segment. It allows only one such list id for now. We will support more in future */
  parentListIds?: string[];
  /** SQL query which will filter contacts based on the conditions provided */
  queryDsl: string;
}

export const fullSegmentSchema: Schema<FullSegment> = object({
  id: ['id', string()],
  contactsCount: ['contacts_count', number()],
  createdAt: ['created_at', string()],
  name: ['name', string()],
  parentListId: ['parent_list_id', optional(string())],
  sampleUpdatedAt: ['sample_updated_at', string()],
  updatedAt: ['updated_at', string()],
  nextSampleUpdate: ['next_sample_update', optional(string())],
  contactsSample: ['contacts_sample', array(lazy(() => contactResponseSchema))],
  queryJson: ['query_json', optional(unknown())],
  parentListIds: ['parent_list_ids', optional(array(string()))],
  queryDsl: ['query_dsl', string()],
});
