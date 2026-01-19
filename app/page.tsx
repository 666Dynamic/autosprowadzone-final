"use client"

import { FeaturesSection } from "@/components/features-section"
import { Hero } from "@/components/hero"
import { LogoCloud } from "@/components/logo-cloud"
import { AboutAuctions } from "@/components/about-auctions"
import { RequestSection } from "@/components/request-section"
import { ProcessSection } from "@/components/process-section"
import { FaqSection } from "@/components/faq-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { SeoFooter } from "@/components/seo-footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <LogoCloud />
      <AboutAuctions />
      <FeaturesSection />
      <ProcessSection />
      <TestimonialsSection />
      <RequestSection />
      <FaqSection limit={5} />
      <SeoFooter />
    </div>
  )
}
