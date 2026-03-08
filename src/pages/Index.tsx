import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SocialProofLogos from "@/components/SocialProofLogos";
import WhyChooseUs from "@/components/WhyChooseUs";
import ServicesSection from "@/components/ServicesSection";
import HowWeWork from "@/components/HowWeWork";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import PhotoGridSection from "@/components/PhotoGridSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <SocialProofLogos />
      <WhyChooseUs />
      <ServicesSection />
      <HowWeWork />
      <TestimonialsSection />
      <FAQSection />
      <PhotoGridSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
