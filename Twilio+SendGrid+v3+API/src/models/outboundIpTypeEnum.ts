/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for OutboundIpTypeEnum
 */
export enum OutboundIpTypeEnum {
  Dedicated = 'dedicated',
  Shared = 'shared',
}

/**
 * Schema for OutboundIpTypeEnum
 */
export const outboundIpTypeEnumSchema: Schema<OutboundIpTypeEnum> = stringEnum(OutboundIpTypeEnum);
