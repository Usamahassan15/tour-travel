// Business WhatsApp number (Pakistan). Local 03175817400 → E.164 +923175817400.
export const WHATSAPP_NUMBER = "923175817400";
export const WHATSAPP_DISPLAY = "+92 317 5817400";

export function whatsappHref(message?: string): string {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export interface EnquiryPayload {
  fullName: string;
  phone: string;
  email: string;
  country?: string;
  destination: string;
  travelDate: string;
  adults: string | number;
  children: string | number;
  budget: string;
  message?: string;
}

export function formatEnquiryMessage(p: EnquiryPayload): string {
  return [
    "*New Travel Enquiry — Vantaggio*",
    "",
    `• Name: ${p.fullName}`,
    `• Phone: ${p.phone}`,
    `• Email: ${p.email}`,
    p.country ? `• Country: ${p.country}` : null,
    `• Destination: ${p.destination}`,
    `• Travel Date: ${p.travelDate}`,
    `• Adults: ${p.adults}`,
    `• Children: ${p.children}`,
    `• Budget: ${p.budget}`,
    p.message ? `• Message: ${p.message}` : null,
  ]
    .filter(Boolean)
    .join("\n");
}