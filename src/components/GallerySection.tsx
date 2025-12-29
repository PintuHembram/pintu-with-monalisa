import { useState } from 'react';
import { X, Heart } from 'lucide-react';

interface GalleryImage {
  id: number;
  src: string;
  caption: string;
  date: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600&h=400&fit=crop",
    caption: "The moment our eyes first met, and everything changed forever",
    date: "Our Beginning"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1529634597503-139d3726fed5?w=600&h=400&fit=crop",
    caption: "This moment still makes my heart smile every time I remember",
    date: "First Date"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&h=400&fit=crop",
    caption: "Dancing in the rain, not caring about the world around us",
    date: "Rainy Day"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=600&h=400&fit=crop",
    caption: "Your laughter is my favorite sound in the entire universe",
    date: "Summer Days"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1474552226712-ac0f0961a954?w=600&h=400&fit=crop",
    caption: "Adventures are better when shared with your best friend",
    date: "Our Adventure"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=600&h=400&fit=crop",
    caption: "In your arms, I found my forever home and endless peace",
    date: "Cozy Moments"
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1522163723043-478ef79a5bb4?w=600&h=400&fit=crop",
    caption: "Every sunset reminds me that beautiful things end beautifully",
    date: "Golden Hour"
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=600&h=400&fit=crop",
    caption: "Building dreams together, one moment at a time",
    date: "Our Future"
  },
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <section id="gallery" className="py-24 bg-background relative">
      {/* Section header */}
      <div className="container mx-auto px-6 mb-16 text-center">
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
          Our Photo Album
        </h2>
        <div className="flex items-center justify-center gap-4">
          <div className="h-px w-24 bg-gradient-to-r from-transparent to-primary/50" />
          <Heart className="w-5 h-5 text-primary fill-primary/50" />
          <div className="h-px w-24 bg-gradient-to-l from-transparent to-primary/50" />
        </div>
        <p className="font-body text-lg md:text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
          Each photograph holds a piece of our heart, a frozen moment in time that tells our beautiful love story
        </p>
      </div>

      {/* Gallery grid */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative overflow-hidden rounded-lg shadow-romantic bg-card aspect-[4/3]">
                {/* Image */}
                <img
                  src={image.src}
                  alt={image.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Caption overlay */}
                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="font-body text-sm text-primary-foreground leading-relaxed">
                    {image.caption}
                  </p>
                  <p className="font-display text-xs text-primary-foreground/70 mt-2 italic">
                    {image.date}
                  </p>
                </div>

                {/* Corner decoration */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Heart className="w-5 h-5 text-primary-foreground fill-primary-foreground/50" />
                </div>
              </div>

              {/* Photo album style corners */}
              <div className="absolute -top-1 -left-1 w-6 h-6 border-l-2 border-t-2 border-primary/30 rounded-tl-sm" />
              <div className="absolute -top-1 -right-1 w-6 h-6 border-r-2 border-t-2 border-primary/30 rounded-tr-sm" />
              <div className="absolute -bottom-1 -left-1 w-6 h-6 border-l-2 border-b-2 border-primary/30 rounded-bl-sm" />
              <div className="absolute -bottom-1 -right-1 w-6 h-6 border-r-2 border-b-2 border-primary/30 rounded-br-sm" />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/90 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-primary-foreground hover:text-primary transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>

          <div
            className="max-w-4xl mx-6 animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.caption}
              className="w-full rounded-lg shadow-2xl"
            />
            <div className="text-center mt-6 space-y-2">
              <p className="font-body text-lg md:text-xl text-primary-foreground leading-relaxed">
                "{selectedImage.caption}"
              </p>
              <p className="font-display text-sm text-primary-foreground/70 italic">
                — {selectedImage.date}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
