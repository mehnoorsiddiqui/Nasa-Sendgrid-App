/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import { DomainCname2, domainCname2Schema } from './domainCname2';
import { OwnerCname2, ownerCname2Schema } from './ownerCname2';

export interface ValidationResults4 {
  domainCname: DomainCname2;
  ownerCname?: OwnerCname2;
}

export const validationResults4Schema: Schema<ValidationResults4> = object({
  domainCname: ['domain_cname', lazy(() => domainCname2Schema)],
  ownerCname: ['owner_cname', optional(lazy(() => ownerCname2Schema))],
});
