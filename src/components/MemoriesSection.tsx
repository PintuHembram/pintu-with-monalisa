import { Heart, MapPin, Clock, Star } from 'lucide-react';

interface Memory {
  icon: React.ElementType;
  title: string;
  description: string;
}

const memories: Memory[] = [
  {
    icon: Heart,
    title: "When We First Met",
    description: "From the very first moment our paths crossed, I knew something magical was about to begin. Your smile lit up my world in ways I never thought possible. That day changed everything, and I'm forever grateful the universe brought us together."
  },
  {
    icon: MapPin,
    title: "Distance Made Us Stronger",
    description: "Miles apart, yet never truly separated. Every video call, every message, every 'I miss you' text strengthened our bond. We proved that true love knows no distance, and our hearts remained intertwined across any space between us."
  },
  {
    icon: Clock,
    title: "Moments That Matter",
    description: "Whether it's our late-night conversations about dreams and fears, or the simple joy of doing nothing together – every moment with you is a treasure. You've taught me that happiness isn't about grand gestures, but about sharing life's little moments with someone special."
  },
  {
    icon: Star,
    title: "Our Endless Trust",
    description: "In you, I found not just a partner, but my confidant, my safe haven, my home. Through every challenge and every triumph, our trust in each other never wavered. You are my constant in this ever-changing world, and I trust you with every piece of my heart."
  }
];

const MemoriesSection = () => {
  return (
    <section className="py-24 bg-romantic-gradient relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Whispers of Our Heart
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-primary/50" />
            <Heart className="w-5 h-5 text-primary fill-primary/50" />
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-primary/50" />
          </div>
          <p className="font-body text-lg md:text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
            The chapters of our love story, written in the language of two hearts beating as one
          </p>
        </div>

        {/* Memories grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {memories.map((memory, index) => (
            <div
              key={memory.title}
              className="group bg-card/50 backdrop-blur-sm rounded-2xl p-8 shadow-romantic border border-border/50 hover:shadow-glow-rose transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <memory.icon className="w-7 h-7 text-primary" />
                </div>
              </div>

              {/* Content */}
              <h3 className="font-display text-2xl text-foreground mb-4">
                {memory.title}
              </h3>
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                {memory.description}
              </p>

              {/* Decorative corner */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <Heart className="w-4 h-4 text-primary/30 fill-primary/30" />
              </div>
            </div>
          ))}
        </div>

        {/* Love quote */}
        <div className="mt-20 text-center">
          <blockquote className="font-display text-2xl md:text-3xl lg:text-4xl text-foreground italic max-w-4xl mx-auto leading-relaxed">
            "I fell in love the way you fall asleep: slowly, then all at once."
          </blockquote>
          <p className="font-body text-muted-foreground mt-4">— Our Story</p>
        </div>
      </div>
    </section>
  );
};

export default MemoriesSection;
