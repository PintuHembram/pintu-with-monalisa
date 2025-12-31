import { Heart, Sparkles } from 'lucide-react';
import Fireworks from './Fireworks';

const FinaleSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-foreground">
      {/* Fireworks canvas */}
      <Fireworks />

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/20 blur-[100px] animate-pulse-soft" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-champagne/20 blur-[100px] animate-pulse-soft" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-lavender/10 blur-[120px] animate-pulse-soft" style={{ animationDelay: '2s' }} />

      {/* Content */}
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="space-y-8 animate-fade-in">
          {/* Decorative sparkles */}
          <div className="flex justify-center gap-4 mb-8">
            <Sparkles className="w-8 h-8 text-champagne animate-pulse-soft" />
            <Heart className="w-10 h-10 text-primary fill-primary animate-pulse-soft" style={{ animationDelay: '0.5s' }} />
            <Sparkles className="w-8 h-8 text-champagne animate-pulse-soft" style={{ animationDelay: '1s' }} />
          </div>

          {/* Main message */}
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl text-primary-foreground leading-tight">
            Happy New Year
            <span className="block text-gradient-gold mt-2">2026</span>
          </h2>

          <div className="flex justify-center py-4">
            <Heart className="w-12 h-12 text-primary fill-primary animate-glow" />
          </div>

          <h3 className="font-display text-3xl md:text-4xl text-primary-foreground/90 italic">
            My Love ❤️
          </h3>

          {/* Message */}
          <div className="max-w-3xl mx-auto pt-8">
            <p className="font-body text-xl md:text-2xl text-primary-foreground/80 leading-relaxed">
              No matter how many years pass, my love for you will always grow stronger. 
              Every moment with you is a blessing, and I'm grateful for every second we share together.
            </p>
            <p className="font-display text-2xl md:text-3xl text-primary-foreground/90 mt-8 italic">
              Here's to us, forever.
            </p>
          </div>

          {/* Decorative line */}
          <div className="flex items-center justify-center gap-4 pt-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/50" />
            <Heart className="w-4 h-4 text-primary fill-primary" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/50" />
          </div>

          {/* Button */}
          <div className="pt-12">
            <button className="group relative inline-flex items-center gap-3 px-10 py-4 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full font-display text-lg text-primary-foreground hover:bg-primary/30 hover:border-primary/50 transition-all duration-300 shadow-glow-rose">
              <Heart className="w-5 h-5 fill-primary-foreground/50 group-hover:fill-primary-foreground transition-colors" />
              <span>With Love, Always</span>
              <Heart className="w-5 h-5 fill-primary-foreground/50 group-hover:fill-primary-foreground transition-colors" />
            </button>
          </div>

          {/* Footer signature */}
          <div className="pt-16">
            <p className="font-body text-sm text-primary-foreground/50">
              Pintu ❤️ Monalisa
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinaleSection;
