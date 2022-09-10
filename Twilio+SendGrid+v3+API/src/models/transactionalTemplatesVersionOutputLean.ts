/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, object, optional, Schema, string } from '../schema';
import { ActiveEnum, activeEnumSchema } from './activeEnum';
import { EditorEnum, editorEnumSchema } from './editorEnum';

export interface TransactionalTemplatesVersionOutputLean {
  /** ID of the transactional template version. */
  id?: string;
  /** ID of the transactional template. */
  templateId?: string;
  active?: ActiveEnum;
  /** Name of the transactional template version. */
  name?: string;
  /** Subject of the new transactional template version. */
  subject?: string;
  /** The date and time that this transactional template version was updated. */
  updatedAt?: string;
  /** If true, plain_content is always generated from html_content. If false, plain_content is not altered. */
  generatePlainContent?: boolean;
  editor?: EditorEnum;
  /** A Thumbnail preview of the template's html content. */
  thumbnailUrl?: string;
}

export const transactionalTemplatesVersionOutputLeanSchema: Schema<TransactionalTemplatesVersionOutputLean> = object(
  {
    id: ['id', optional(string())],
    templateId: ['template_id', optional(string())],
    active: ['active', optional(activeEnumSchema)],
    name: ['name', optional(string())],
    subject: ['subject', optional(string())],
    updatedAt: ['updated_at', optional(string())],
    generatePlainContent: ['generate_plain_content', optional(boolean())],
    editor: ['editor', optional(editorEnumSchema)],
    thumbnailUrl: ['thumbnail_url', optional(string())],
  }
);
