import FloatingHearts from "@/components/FloatingHearts";
import HeroSection from "@/components/HeroSection";
import LoveLetterSection from "@/components/LoveLetterSection";
import SideQuestsSection from "@/components/SideQuestsSection";
import ReasonsSection from "@/components/ReasonsSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <FloatingHearts />
      <HeroSection />
      <LoveLetterSection />
      <SideQuestsSection />
      <ReasonsSection />
      <FooterSection />
    </div>
  );
};

export default Index;
