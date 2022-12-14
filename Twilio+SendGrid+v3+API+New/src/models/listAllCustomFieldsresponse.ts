/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, Schema } from '../schema';
import {
  ContactDBCustomfieldschemawithID,
  contactDBCustomfieldschemawithIDSchema,
} from './contactDBCustomfieldschemawithID';

export interface ListAllCustomFieldsresponse {
  customFields: ContactDBCustomfieldschemawithID[];
}

export const listAllCustomFieldsresponseSchema: Schema<ListAllCustomFieldsresponse> = object(
  {
    customFields: [
      'custom_fields',
      array(lazy(() => contactDBCustomfieldschemawithIDSchema)),
    ],
  }
);
