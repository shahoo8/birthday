import { Heart, Quote } from "lucide-react";

const LoveLetterSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-background relative">
      <div className="max-w-3xl mx-auto">
        {/* Section title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            A Letter From My Heart
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
        </div>

        {/* Letter card */}
        <div className="glass-card rounded-2xl md:rounded-3xl p-6 md:p-10 lg:p-12 shadow-romantic relative">
          {/* Quote decoration */}
          <Quote className="absolute top-4 left-4 md:top-6 md:left-6 w-8 h-8 md:w-12 md:h-12 text-primary/20" />
          
          <div className="space-y-4 md:space-y-6 text-base md:text-lg text-foreground/90 leading-relaxed font-body">
            <p className="text-center italic text-muted-foreground">
              My Dearest Love,
            </p>
            
            <p>
              Twenty-one years ago, the world became a brighter place because you came into it. 
              And somehow, fate led you to me. Every moment with you feels like the universe 
              conspired just to bring us together.
            </p>
            
            <p>
              You are my first thought in the morning and my last wish at night. Your smile 
              lights up even my darkest days, and your laughter is the melody I never want 
              to stop hearing.
            </p>
            
            <p>
              On your 21st birthday, I want you to know that you are <span className="text-primary font-semibold">loved beyond measure</span>, 
              cherished beyond words, and appreciated more than you'll ever know.
            </p>
            
            <p>
              Here's to 21 years of you making this world beautiful, and to forever more 
              of us writing our love story together.
            </p>

            <p className="text-center pt-4">
              <span className="text-primary font-display text-xl md:text-2xl">Forever & Always Yours</span>
            </p>
          </div>

          {/* Heart decoration */}
          <div className="flex justify-center mt-6 md:mt-8 gap-2">
            <Heart className="w-5 h-5 md:w-6 md:h-6 text-primary fill-primary animate-heartbeat" />
            <Heart className="w-5 h-5 md:w-6 md:h-6 text-primary fill-primary animate-heartbeat" style={{ animationDelay: "0.2s" }} />
            <Heart className="w-5 h-5 md:w-6 md:h-6 text-primary fill-primary animate-heartbeat" style={{ animationDelay: "0.4s" }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoveLetterSection;
