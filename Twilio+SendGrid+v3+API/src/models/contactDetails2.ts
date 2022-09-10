/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  lazy,
  nullable,
  object,
  optional,
  Schema,
  string,
  unknown,
} from '../schema';
import { SelfMetadata, selfMetadataSchema } from './selfMetadata';

export interface ContactDetails2 {
  id: string;
  firstName?: string;
  lastName?: string;
  uniqueName?: string;
  email?: string;
  alternateEmails?: string[] | null;
  addressLine1?: string;
  addressLine2?: string;
  city?: string;
  stateProvinceRegion?: string;
  country?: string;
  postalCode?: string;
  phoneNumber?: string;
  whatsapp?: string;
  line?: string;
  facebook?: string;
  listIds: string[];
  segmentIds?: string[];
  customFields?: unknown;
  createdAt: string;
  updatedAt: string;
  metadata?: SelfMetadata;
}

export const contactDetails2Schema: Schema<ContactDetails2> = object({
  id: ['id', string()],
  firstName: ['first_name', optional(string())],
  lastName: ['last_name', optional(string())],
  uniqueName: ['unique_name', optional(string())],
  email: ['email', optional(string())],
  alternateEmails: ['alternate_emails', optional(nullable(array(string())))],
  addressLine1: ['address_line_1', optional(string())],
  addressLine2: ['address_line_2', optional(string())],
  city: ['city', optional(string())],
  stateProvinceRegion: ['state_province_region', optional(string())],
  country: ['country', optional(string())],
  postalCode: ['postal_code', optional(string())],
  phoneNumber: ['phone_number', optional(string())],
  whatsapp: ['whatsapp', optional(string())],
  line: ['line', optional(string())],
  facebook: ['facebook', optional(string())],
  listIds: ['list_ids', array(string())],
  segmentIds: ['segment_ids', optional(array(string()))],
  customFields: ['custom_fields', optional(unknown())],
  createdAt: ['created_at', string()],
  updatedAt: ['updated_at', string()],
  metadata: ['_metadata', optional(lazy(() => selfMetadataSchema))],
});
