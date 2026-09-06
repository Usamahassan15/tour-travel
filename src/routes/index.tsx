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
import { Partners } from "@/components/site/partners";
import { Newsletter } from "@/components/site/newsletter";
import { ScrollTop } from "@/components/site/scroll-top";

const TITLE = "Vantaggio | Luxury Travel Agency & Bespoke Tour Packages";
const DESCRIPTION =
  "Private, tailor-made holidays to 150+ destinations. Curated luxury tours, hotels, flights, visa assistance and 24/7 concierge care — plan your journey today.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
  }),
});

function Index() {
  return (
    <div id="home" className="min-h-screen bg-canvas text-midnight">
      <SiteNav />
      <main>
        <Hero />
        <StatsStrip />
        <Partners />
        <Destinations />
        <Packages />
        <Deals />
        <WhyChoose />
        <Services />
        <Gallery />
        <Testimonials />
        <Blog />
        <FAQ />
        <Newsletter />
        <EnquiryForm />
      </main>
      <Footer />
      <WhatsAppBubble />
      <ScrollTop />
    </div>
  );
}
