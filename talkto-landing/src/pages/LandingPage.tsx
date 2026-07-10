import Header from "../components/Header";
import HeroSection from "../sections/HeroSection";
import MemorySection from "../sections/MemorySection";
import VoicePersonaSection from "../sections/VoicePersonaSection";
import PersonaFlowSection from "../sections/PersonaFlowSection";
import MemoriesSection from "../sections/MemoriesSection";
import ServicePreviewSection from "../sections/ServicePreviewSection";
import FAQSection from "../sections/FAQSection";
import FinalCTASection from "../sections/FinalCTASection";

function LandingPage() {
  return (
    <>
      <Header />

      <main>
        <HeroSection />
        <MemorySection />
        <VoicePersonaSection />
        <PersonaFlowSection />
        <MemoriesSection />
        <ServicePreviewSection />
        <FAQSection />
        <FinalCTASection />
      </main>
    </>
  );
}

export default LandingPage;