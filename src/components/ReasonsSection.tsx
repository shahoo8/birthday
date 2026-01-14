import { Heart } from "lucide-react";

const reasons = [
  "Your smile that makes everything better",
  "The way you laugh at my terrible jokes",
  "How your eyes light up when you're happy",
  "Your kindness that touches everyone around you",
  "The comfort I find in your presence",
  "How you make ordinary moments magical",
  "Your strength that inspires me daily",
  "The way you understand me without words",
  "Your beautiful heart that loves so deeply",
  "Every little thing that makes you, YOU",
  "The future we're building together",
  "Simply because you're you",
];

const ReasonsSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            21 + ∞ Reasons
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Why you're the most amazing person in my world
          </p>
        </div>

        {/* Reasons grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group flex items-center gap-3 md:gap-4 p-4 md:p-5 rounded-xl bg-card hover:bg-primary/5 transition-all duration-300 border border-border/50 hover:border-primary/30 hover:shadow-soft"
            >
              <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Heart className="w-4 h-4 md:w-5 md:h-5 text-primary fill-primary group-hover:animate-heartbeat" />
              </div>
              <p className="text-sm md:text-base text-foreground leading-relaxed">
                {reason}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom message */}
        <div className="mt-10 md:mt-12 text-center">
          <p className="text-lg md:text-xl text-muted-foreground italic font-body">
            "And a million more reasons that words could never capture..."
          </p>
        </div>
      </div>
    </section>
  );
};

export default ReasonsSection;
