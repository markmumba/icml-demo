import TestimonialsSection from "@/components/homepage/customertestimonial";
import FeaturesSection from "@/components/homepage/feature";
import HeroSection from "@/components/homepage/herosection";
import TrustSection from "@/components/homepage/trustsection";
import FAQSection from "@/components/homepage/faq";
import CTASection from "@/components/homepage/cta";
import Footer from "@/components/homepage/footer";

export default function Home() {
  return (
    <>
    <HeroSection />
    <TrustSection />
    <FeaturesSection />
    <TestimonialsSection />
    <FAQSection />
    <CTASection />
    <Footer />
    </>
  );
}
