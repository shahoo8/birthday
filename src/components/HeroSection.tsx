import { Heart, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-hero relative overflow-hidden px-4">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 md:top-20 md:left-20 opacity-30">
        <Sparkles className="w-8 h-8 md:w-12 md:h-12 text-gold animate-sparkle" />
      </div>
      <div className="absolute bottom-20 right-10 md:bottom-32 md:right-20 opacity-30">
        <Sparkles className="w-6 h-6 md:w-10 md:h-10 text-gold animate-sparkle" style={{ animationDelay: "1s" }} />
      </div>
      
      <div className="text-center max-w-4xl mx-auto relative z-10">
        {/* Age badge */}
        <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 md:px-6 md:py-3 mb-6 md:mb-8 animate-fade-in">
          <Heart className="w-4 h-4 md:w-5 md:h-5 text-primary fill-primary animate-heartbeat" />
          <span className="text-sm md:text-base text-primary font-medium">Happy 21st Birthday</span>
          <Heart className="w-4 h-4 md:w-5 md:h-5 text-primary fill-primary animate-heartbeat" />
        </div>

        {/* Main heading */}
        <h1 
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-4 md:mb-6 animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          <span className="text-foreground">To My</span>
          <br />
          <span className="text-gradient">Beautiful Love</span>
        </h1>

        {/* Subtitle */}
        <p 
          className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-body italic mb-8 md:mb-12 max-w-2xl mx-auto animate-fade-in px-4"
          style={{ animationDelay: "0.4s" }}
        >
          "In a world full of temporary things, you are a perpetual feeling"
        </p>

        {/* Heart decoration */}
        <div 
          className="animate-fade-in"
          style={{ animationDelay: "0.6s" }}
        >
          <Heart className="w-12 h-12 md:w-16 md:h-16 text-primary fill-primary mx-auto animate-pulse-soft" />
        </div>

        {/* Scroll indicator */}
        <div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-fade-in"
          style={{ animationDelay: "1s" }}
        >
          <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-primary/50 rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
