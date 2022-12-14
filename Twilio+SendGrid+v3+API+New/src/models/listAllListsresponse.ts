/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, Schema } from '../schema';
import { ContactDBlists, contactDBlistsSchema } from './contactDBlists';

export interface ListAllListsresponse {
  lists: ContactDBlists[];
}

export const listAllListsresponseSchema: Schema<ListAllListsresponse> = object({
  lists: ['lists', array(lazy(() => contactDBlistsSchema))],
});
