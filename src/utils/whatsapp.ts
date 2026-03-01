import { formatWhatsAppMessage as formatMessage, getWhatsAppLink as generateLink, business } from '../data/business';

/**
 * Formats a WhatsApp message for requesting a quote
 * @param productName - The name of the product
 * @param quantity - Optional quantity needed
 * @param city - Optional delivery city
 * @returns Encoded message string
 */
export function formatWhatsAppMessage(productName: string, quantity?: string, city?: string): string {
  return formatMessage(productName, quantity, city);
}

/**
 * Generates a WhatsApp link for contacting the business
 * @param productName - The name of the product
 * @param quantity - Optional quantity needed
 * @param city - Optional delivery city
 * @returns Full WhatsApp link with pre-filled message
 */
export function getWhatsAppLink(productName: string, quantity?: string, city?: string): string {
  return generateLink(productName, quantity, city);
}

/**
 * Gets the business WhatsApp number
 * @returns WhatsApp number string
 */
export function getWhatsAppNumber(): string {
  return business.whatsappNumber;
}
