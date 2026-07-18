import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/nav";
import { Hero } from "@/components/site/hero";
import { StatsStrip } from "@/components/site/stats-strip";
import { Destinations } from "@/components/site/destinations";
import { Packages } from "@/components/site/packages";
import { Deals } from "@/components/site/deals";
import { WhyChoose } from "@/components/site/why-choose";
import { Services } from "@/components/site/services";
import { Gallery } from "@/components/site/gallery";
import { Testimonials } from "@/components/site/testimonials";
import { Blog } from "@/components/site/blog";
import { FAQ } from "@/components/site/faq";
import { EnquiryForm } from "@/components/site/enquiry-form";
import { Footer } from "@/components/site/footer";
import { WhatsAppBubble } from "@/components/site/whatsapp-bubble";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div id="home" className="min-h-screen bg-canvas text-midnight">
      <SiteNav />
      <main>
        <Hero />
        <StatsStrip />
        <Destinations />
        <Packages />
        <Deals />
        <WhyChoose />
        <Services />
        <Gallery />
        <Testimonials />
        <Blog />
        <FAQ />
        <EnquiryForm />
      </main>
      <Footer />
      <WhatsAppBubble />
    </div>
  );
}
