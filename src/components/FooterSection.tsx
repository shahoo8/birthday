import { Heart, Sparkles } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="py-12 md:py-16 px-4 bg-hero relative overflow-hidden">
      {/* Decorative sparkles */}
      <div className="absolute top-6 left-1/4 opacity-40">
        <Sparkles className="w-6 h-6 text-gold animate-sparkle" />
      </div>
      <div className="absolute bottom-6 right-1/4 opacity-40">
        <Sparkles className="w-5 h-5 text-gold animate-sparkle" style={{ animationDelay: "1s" }} />
      </div>

      <div className="max-w-2xl mx-auto text-center relative z-10">
        {/* Hearts animation */}
        <div className="flex justify-center gap-3 mb-6">
          <Heart className="w-6 h-6 text-primary/60 fill-primary/60 animate-float" />
          <Heart className="w-8 h-8 text-primary fill-primary animate-heartbeat" />
          <Heart className="w-6 h-6 text-primary/60 fill-primary/60 animate-float-delayed" />
        </div>

        {/* Main message */}
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">
          Happy 21st Birthday
        </h3>
        
        <p className="text-base md:text-lg text-muted-foreground mb-6 font-body italic">
          "Here's to celebrating you today and loving you forever"
        </p>

        {/* Signature */}
        <div className="inline-flex items-center gap-2 text-primary">
          <span className="text-lg md:text-xl font-display">With All My Love</span>
          <Heart className="w-5 h-5 fill-primary animate-heartbeat" />
        </div>

        {/* Year */}
        <p className="mt-8 text-sm text-muted-foreground">
          Made with 💕 for the most special person
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
