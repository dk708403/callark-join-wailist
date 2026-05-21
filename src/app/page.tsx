import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import AudioDemoSection from "@/components/AudioDemoSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import UseCasesSection from "@/components/UseCasesSection";
import WaitlistSection from "@/components/WaitlistSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <AudioDemoSection />
      <HowItWorksSection />
      <UseCasesSection />
      <WaitlistSection />
    </div>
  );
}
