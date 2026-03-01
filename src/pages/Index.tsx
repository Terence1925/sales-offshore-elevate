import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SocialProofLogos from "@/components/SocialProofLogos";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowWeWork from "@/components/HowWeWork";
import NumberProof from "@/components/NumberProof";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navbar removed */}
      <HeroSection />
      <SocialProofLogos />
      <ServicesSection />
      <WhyChooseUs />
      <HowWeWork />
      <NumberProof />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
