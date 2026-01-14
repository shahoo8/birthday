import { Heart, Star, Map, Coffee, Moon, Camera, Music, Gift } from "lucide-react";

const quests = [
  {
    icon: Coffee,
    title: "Morning Coffee Date",
    description: "Start the day with her favorite coffee and watch the sunrise together",
    reward: "☕ ♾️ Cozy Points",
  },
  {
    icon: Camera,
    title: "Photo Adventure",
    description: "Explore a new place and capture 21 beautiful moments together",
    reward: "📸 0 Memory Points",
  },
  {
    icon: Music,
    title: "Dance Under Stars",
    description: "Create a playlist of 'our songs' and dance in the moonlight",
    reward: "💃 0 Romance Points",
  },
  {
    icon: Map,
    title: "Mystery Destination",
    description: "Plan a surprise trip to somewhere she's always wanted to go",
    reward: "🗺️ 0 Adventure Points",
  },
  {
    icon: Gift,
    title: "21 Little Surprises",
    description: "Hide 21 small gifts or love notes for her to find throughout the day",
    reward: "🎁 ♾️ Love Points",
  },
  {
    icon: Moon,
    title: "Stargazing Night",
    description: "Find the perfect spot, bring blankets, and count shooting stars",
    reward: "✨ 0 Magic Points",
  },
];

const SideQuestsSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-romantic">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-background/50 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
            <Star className="w-4 h-4 text-gold fill-gold" />
            <span className="text-sm font-medium text-foreground">Adventure Awaits</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Side Quests of Love
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto">
            Complete these romantic missions together and collect all the love points!
          </p>
        </div>

        {/* Quest cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {quests.map((quest, index) => (
            <div
              key={index}
              className="group glass-card rounded-xl md:rounded-2xl p-5 md:p-6 hover:shadow-romantic transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              {/* Quest icon */}
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <quest.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
              </div>

              {/* Quest content */}
              <h3 className="text-lg md:text-xl font-display font-semibold text-foreground mb-2">
                {quest.title}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground mb-4 leading-relaxed">
                {quest.description}
              </p>

              {/* Reward badge */}
              <div className="flex items-center gap-2 text-sm">
                <Heart className="w-4 h-4 text-primary fill-primary" />
                <span className="text-foreground font-medium">{quest.reward}</span>
              </div>

              {/* Progress indicator */}
              <div className="mt-4 h-2 bg-secondary rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-500 group-hover:w-full"
                  style={{ width: "0%" }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Total progress */}
        <div className="mt-10 md:mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-background/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-soft">
            <Heart className="w-5 h-5 text-primary fill-primary animate-heartbeat" />
            <span className="text-foreground font-medium">
              Total Love Points: <span className="text-primary font-bold">∞</span>
            </span>
            <Heart className="w-5 h-5 text-primary fill-primary animate-heartbeat" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SideQuestsSection;
