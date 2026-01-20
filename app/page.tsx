import { FeaturesSection } from "@/components/features-section"
import { Hero } from "@/components/hero"
import { LogoCloud } from "@/components/logo-cloud"
import { ProcessSection } from "@/components/process-section"
import dynamic from "next/dynamic"

// Lazy load heavy components with animations and forms
const AboutAuctions = dynamic(() => import("@/components/about-auctions").then(mod => ({ default: mod.AboutAuctions })), {
  loading: () => <div className="py-16 md:py-32 min-h-[600px]" />,
})

const RequestSection = dynamic(() => import("@/components/request-section").then(mod => ({ default: mod.RequestSection })), {
  loading: () => <div className="py-16 md:py-24 min-h-[500px]" />,
})

const TestimonialsSection = dynamic(() => import("@/components/testimonials-section").then(mod => ({ default: mod.TestimonialsSection })), {
  loading: () => <div className="py-16 md:py-24 min-h-[400px]" />,
})

const FaqSection = dynamic(() => import("@/components/faq-section").then(mod => ({ default: mod.FaqSection })), {
  loading: () => <div className="py-16 md:py-24 min-h-[400px]" />,
})

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
    </div>
  )
}
