/**
 * Twilio SendGrid v3 APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, optional, Schema } from '../schema';

export interface StatsAdvancedGlobalStats {
  /** The number of links that were clicked in your emails. */
  clicks?: number;
  /** The number of unique recipients who clicked links in your emails. */
  uniqueClicks?: number;
  /** The total number of times your emails were opened by recipients. */
  opens?: number;
  /** The number of unique recipients who opened your emails. */
  uniqueOpens?: number;
  /** The number of emails that were not allowed to be delivered by ISPs. */
  blocks?: number;
  /** The number of emails that were dropped because of a bounce. */
  bounceDrops?: number;
  /** The number of emails that bounced instead of being delivered. */
  bounces?: number;
  /** The number of emails that temporarily could not be delivered. */
  deferred?: number;
  /** The number of emails SendGrid was able to confirm were actually delivered to a recipient. */
  delivered?: number;
  /** The number of recipients who had malformed email addresses or whose mail provider reported the address as invalid. */
  invalidEmails?: number;
  /** Requests from your website, application, or mail client via SMTP Relay or the API that SendGrid processed. */
  processed?: number;
  /** The number of emails that were requested to be delivered. */
  requests?: number;
  /** The number of emails that were dropped due to a recipient previously marking your emails as spam. */
  spamReportDrops?: number;
  /** The number of recipients who marked your email as spam. */
  spamReports?: number;
  /** The number of emails dropped due to a recipient unsubscribing from your emails. */
  unsubscribeDrops?: number;
  /** The number of recipients who unsubscribed from your emails. */
  unsubscribes?: number;
}

export const statsAdvancedGlobalStatsSchema: Schema<StatsAdvancedGlobalStats> = object(
  {
    clicks: ['clicks', optional(number())],
    uniqueClicks: ['unique_clicks', optional(number())],
    opens: ['opens', optional(number())],
    uniqueOpens: ['unique_opens', optional(number())],
    blocks: ['blocks', optional(number())],
    bounceDrops: ['bounce_drops', optional(number())],
    bounces: ['bounces', optional(number())],
    deferred: ['deferred', optional(number())],
    delivered: ['delivered', optional(number())],
    invalidEmails: ['invalid_emails', optional(number())],
    processed: ['processed', optional(number())],
    requests: ['requests', optional(number())],
    spamReportDrops: ['spam_report_drops', optional(number())],
    spamReports: ['spam_reports', optional(number())],
    unsubscribeDrops: ['unsubscribe_drops', optional(number())],
    unsubscribes: ['unsubscribes', optional(number())],
  }
);
