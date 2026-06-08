import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { Features } from "@/components/sections/Features";
import { Workflow } from "@/components/sections/Workflow";
import { DashboardShowcase } from "@/components/sections/DashboardShowcase";
import { WhyAuditOS } from "@/components/sections/WhyAuditOS";
import { Pricing } from "@/components/sections/Pricing";
import { Testimonials } from "@/components/sections/Testimonials";
import { Security } from "@/components/sections/Security";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <div className="relative isolate flex min-h-screen flex-col overflow-x-hidden bg-background">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ClientLogos />
        <Features />
        <Workflow />
        <DashboardShowcase />
        <WhyAuditOS />
        <Pricing />
        <Testimonials />
        <Security />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
