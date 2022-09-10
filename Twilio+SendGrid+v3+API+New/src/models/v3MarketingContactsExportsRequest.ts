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
} from '../schema';
import { FileTypeEnum, fileTypeEnumSchema } from './fileTypeEnum';
import { Notifications, notificationsSchema } from './notifications';

export interface V3MarketingContactsExportsRequest {
  /** IDs of the contact lists you want to export. */
  listIds?: string[];
  /** IDs of the contact segments you want to export. */
  segmentIds?: string[];
  notifications?: Notifications;
  fileType?: FileTypeEnum;
  /** The maximum size of an export file in MB. Note that when this option is specified, multiple output files may be returned from the export. */
  maxFileSize?: number;
}

export const v3MarketingContactsExportsRequestSchema: Schema<V3MarketingContactsExportsRequest> = object(
  {
    listIds: ['list_ids', optional(array(string()))],
    segmentIds: ['segment_ids', optional(array(string()))],
    notifications: ['notifications', optional(lazy(() => notificationsSchema))],
    fileType: ['file_type', optional(fileTypeEnumSchema)],
    maxFileSize: ['max_file_size', optional(number())],
  }
);
