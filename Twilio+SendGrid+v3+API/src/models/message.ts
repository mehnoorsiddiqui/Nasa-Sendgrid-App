/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, number, object, Schema, string } from '../schema';
import { Event, eventSchema } from './event';
import {
  OutboundIpTypeEnum,
  outboundIpTypeEnumSchema,
} from './outboundIpTypeEnum';
import { Status11Enum, status11EnumSchema } from './status11Enum';

export interface Message {
  fromEmail: string;
  msgId: string;
  subject: string;
  toEmail: string;
  status: Status11Enum;
  templateId: string;
  asmGroupId: number;
  /** Teammate's username */
  teammate: string;
  apiKeyId: string;
  /** List of events related to email message */
  events: Event[];
  /** This is the IP of the user who sent the message. */
  originatingIp: string;
  /** Categories users associated to the message */
  categories: string[];
  /** JSON hash of arbitrary key-value pairs */
  uniqueArgs: string;
  /** IP used to send to the remote MTA. Used by UI to display IP in detailed view */
  outboundIp: string;
  outboundIpType: OutboundIpTypeEnum;
}

export const messageSchema: Schema<Message> = object({
  fromEmail: ['from_email', string()],
  msgId: ['msg_id', string()],
  subject: ['subject', string()],
  toEmail: ['to_email', string()],
  status: ['status', status11EnumSchema],
  templateId: ['template_id', string()],
  asmGroupId: ['asm_group_id', number()],
  teammate: ['teammate', string()],
  apiKeyId: ['api_key_id', string()],
  events: ['events', array(lazy(() => eventSchema))],
  originatingIp: ['originating_ip', string()],
  categories: ['categories', array(string())],
  uniqueArgs: ['unique_args', string()],
  outboundIp: ['outbound_ip', string()],
  outboundIpType: ['outbound_ip_type', outboundIpTypeEnumSchema],
});
