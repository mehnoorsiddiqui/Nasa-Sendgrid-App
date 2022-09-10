/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';
import { DispositionEnum, dispositionEnumSchema } from './dispositionEnum';

export interface Attachment {
  /** The Base64 encoded content of the attachment. */
  content: string;
  /** The MIME type of the content you are attaching (e.g., `“text/plain”` or `“text/html”`). */
  type?: string;
  /** The attachment's filename. */
  filename: string;
  disposition?: DispositionEnum;
  /** The attachment's content ID. This is used when the disposition is set to `“inline”` and the attachment is an image, allowing the file to be displayed within the body of your email. */
  contentId?: string;
}

export const attachmentSchema: Schema<Attachment> = object({
  content: ['content', string()],
  type: ['type', optional(string())],
  filename: ['filename', string()],
  disposition: ['disposition', optional(dispositionEnumSchema)],
  contentId: ['content_id', optional(string())],
});
