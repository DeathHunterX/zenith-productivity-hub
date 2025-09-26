import CTASection from "./_components/cta-section";
import FAQsSection from "./_components/faqs-section";
import FeatureSection from "./_components/features-section";
import Footer from "./_components/footer";
import HeroSection from "./_components/hero-section";
import IntegrationSection from "./_components/integration-section";
import PublicNavbar from "./_components/navbar";
import PricingSection from "./_components/pricing-section";
import SecuritySection from "./_components/security-section";
import TestimonialsSection from "./_components/testimonials-section";
import UseCasesSection from "./_components/use-cases-section";
import WhyDifferenceSection from "./_components/why-difference-section";

const LandingPage = () => {
  return (
    <div>
      <PublicNavbar />
      <main>
        <HeroSection />
        <WhyDifferenceSection />
        <FeatureSection />
        <UseCasesSection />
        <IntegrationSection />
        <PricingSection />
        <FAQsSection />
        <TestimonialsSection />

        <SecuritySection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
