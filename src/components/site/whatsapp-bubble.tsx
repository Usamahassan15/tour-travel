import { MessageCircle } from "lucide-react";
import { whatsappHref } from "@/lib/whatsapp";

export function WhatsAppBubble() {
  return (
    <a
      href={whatsappHref("Hello Vantaggio, I'd like help planning a trip.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-luxe transition hover:scale-105 hover:bg-[#1ebe5a]"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/40" aria-hidden />
      <MessageCircle className="size-5" />
      <span className="hidden sm:inline">Chat with us</span>
    </a>
  );
}