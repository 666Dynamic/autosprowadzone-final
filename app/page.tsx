import { FeaturesSection } from "@/components/features-section"
import { Hero } from "@/components/hero"
import { LogoCloud } from "@/components/logo-cloud"
import { ProcessSection } from "@/components/process-section"
import { AboutAuctions } from "@/components/about-auctions"
import { FeaturedArticles } from "@/components/featured-articles"
import { RequestSection } from "@/components/request-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FaqSection } from "@/components/faq-section"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <LogoCloud />
      <AboutAuctions />
      <FeaturesSection />
      <ProcessSection />
      <TestimonialsSection />
      <FeaturedArticles limit={3} />
      <RequestSection />
      <FaqSection limit={5} />
    </div>
  )
}
