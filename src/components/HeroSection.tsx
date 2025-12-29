import { ChevronDown, Heart } from 'lucide-react';

const HeroSection = () => {
  const scrollToGallery = () => {
    document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-hero-gradient overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary/10 blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-lavender/20 blur-3xl animate-float-delayed" />
      <div className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-champagne/20 blur-2xl animate-pulse-soft" />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="space-y-8 animate-fade-in">
          {/* Decorative heart */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Heart className="w-16 h-16 text-primary fill-primary/20 animate-pulse-soft" />
              <div className="absolute inset-0 w-16 h-16 bg-primary/20 rounded-full blur-xl animate-glow" />
            </div>
          </div>

          {/* Title */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-medium text-foreground leading-tight">
            Every Picture Tells
            <span className="block text-gradient-gold italic mt-2">Our Story</span>
          </h1>

          {/* Subtitle */}
          <p className="font-body text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A journey of love, moments, and memories
          </p>

          {/* Decorative line */}
          <div className="flex items-center justify-center gap-4 pt-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/50" />
            <Heart className="w-4 h-4 text-primary fill-primary" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/50" />
          </div>

          {/* Date counter placeholder */}
          <div className="pt-8">
            <p className="font-body text-lg text-muted-foreground">
              Together since <span className="text-primary font-medium">365+ days</span>
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToGallery}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer group"
        >
          <span className="font-body text-sm tracking-wider uppercase">Explore Our Memories</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
