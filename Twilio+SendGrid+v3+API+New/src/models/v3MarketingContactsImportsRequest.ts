/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, object, optional, Schema, string, unknown } from '../schema';

export interface V3MarketingContactsImportsRequest {
  /** All contacts will be added to each of the specified lists. */
  listIds?: string[];
  /** Upload file type. */
  fileType: string;
  /** Import file header to reserved/custom field mapping. */
  fieldMappings: unknown[];
}

export const v3MarketingContactsImportsRequestSchema: Schema<V3MarketingContactsImportsRequest> = object(
  {
    listIds: ['list_ids', optional(array(string()))],
    fileType: ['file_type', string()],
    fieldMappings: ['field_mappings', array(unknown())],
  }
);
