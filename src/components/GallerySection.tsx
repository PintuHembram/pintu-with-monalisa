import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import { useState } from 'react';
import img001 from '../assets/001.jpg';
import img002 from '../assets/002.jpg';
import img003 from '../assets/003.jpg';
import img004 from '../assets/004.jpg';
import img0003 from '../assets/0003.jpg';
import img005 from '../assets/005.jpg';
import img006 from '../assets/006.jpg';
import img007 from '../assets/007.jpeg';
import img008 from '../assets/008.jpeg';
import img009 from '../assets/009.jpeg';
import img010 from '../assets/010.jpeg';


interface GalleryImage {
  id: number;
  src: string;
  caption: string;
  date: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: img001,
    caption: "The moment our eyes first met, and everything changed forever",
    date: "Our Beginning"
  },
  {
    id: 2,
    src: img002,
    caption: "This moment still makes my heart smile every time I remember",
    date: "First Date"
  },
  {
    id: 3,
    src: img003,
    caption: "Dancing in the rain, not caring about the world around us",
    date: "Rainy Day"
  },
  {
    id: 4,
    src: img0003,
    caption: "Your laughter is my favorite sound in the entire universe",
    date: "Summer Days"
  },
  {
    id: 5,
    src: img004,
    caption: "Adventures are better when shared with your best friend",
    date: "Our Adventure"
  },
  {
    id: 6,
    src: img005,
    caption: "In your arms, I found my forever home and endless peace",
    date: "Cozy Moments"
  },
  {
    id: 7,
    src: img006,
    caption: "Every sunset reminds me that beautiful things end beautifully",
    date: "Golden Hour"
  },
  {
    id: 8,
    src: img007,
    caption: "Building dreams together, one moment at a time",
    date: "Our Future"
  },
    {
    id: 9,
    src: img008,
    caption: "Building dreams together, one moment at a time",
    date: "Our Future"
  },
    {
    id: 10,
    src: img009,
    caption: "Building dreams together, one moment at a time",
    date: "Our Future"
  },
      {
    id: 11,
    src: img010,
    caption: "Building dreams together, one moment at a time",
    date: "Our Future"
  },
];

const GallerySection = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState<'next' | 'prev'>('next');

  const totalPages = galleryImages.length;

  const goToNext = () => {
    if (currentPage < totalPages - 1 && !isFlipping) {
      setFlipDirection('next');
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(prev => prev + 1);
        setIsFlipping(false);
      }, 600);
    }
  };

  const goToPrev = () => {
    if (currentPage > 0 && !isFlipping) {
      setFlipDirection('prev');
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(prev => prev - 1);
        setIsFlipping(false);
      }, 600);
    }
  };

  const currentImage = galleryImages[currentPage];

  return (
    <section id="gallery" className="py-24 bg-background relative overflow-hidden">
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
          Flip through our precious memories together
        </p>
      </div>

      {/* Flip Book */}
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center gap-4 md:gap-8">
          {/* Previous button */}
          <button
            onClick={goToPrev}
            disabled={currentPage === 0 || isFlipping}
            className="p-3 md:p-4 rounded-full bg-card border border-border shadow-romantic hover:bg-accent disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 text-foreground" />
          </button>

          {/* Book container */}
          <div className="relative w-full max-w-2xl" style={{ perspective: '2000px' }}>
            {/* Book binding shadow */}
            <div className="absolute left-1/2 top-0 bottom-0 w-8 -translate-x-1/2 bg-gradient-to-r from-foreground/20 via-foreground/5 to-foreground/20 z-10 pointer-events-none" />
            
            {/* Book pages container */}
            <div className="relative aspect-[4/3] md:aspect-[3/2]">
              {/* Static background page (next page preview) */}
              {currentPage < totalPages - 1 && (
                <div className="absolute inset-0 rounded-r-lg overflow-hidden shadow-xl bg-card">
                  <img
                    src={galleryImages[currentPage + 1].src}
                    alt="Next page"
                    className="w-full h-full object-cover opacity-50"
                  />
                </div>
              )}

              {/* Flipping page */}
              <div
                className={`absolute inset-0 rounded-lg overflow-hidden shadow-2xl bg-card
                  ${isFlipping ? (flipDirection === 'next' ? 'animate-page-flip-next' : 'animate-page-flip-prev') : ''}`}
                style={{ 
                  transformOrigin: flipDirection === 'next' ? 'left center' : 'right center',
                  transformStyle: 'preserve-3d',
                  backfaceVisibility: 'hidden'
                }}
              >
                {/* Image */}
                <img
                  src={currentImage.src}
                  alt={currentImage.caption}
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent" />
                
                {/* Caption */}
                <div className="absolute inset-x-0 bottom-0 p-4 md:p-6">
                  <p className="font-body text-sm md:text-lg text-primary-foreground leading-relaxed">
                    "{currentImage.caption}"
                  </p>
                  <p className="font-display text-xs md:text-sm text-primary-foreground/70 mt-2 italic">
                    — {currentImage.date}
                  </p>
                </div>

                {/* Page corner curl effect */}
                <div className="absolute bottom-0 right-0 w-16 h-16 md:w-24 md:h-24">
                  <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-card via-card/80 to-transparent" 
                       style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }} />
                </div>

                {/* Heart decoration */}
                <div className="absolute top-4 right-4">
                  <Heart className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground/80 fill-primary/50" />
                </div>
              </div>

              {/* Photo album corners */}
              <div className="absolute -top-2 -left-2 w-8 h-8 border-l-3 border-t-3 border-primary/40 rounded-tl pointer-events-none" />
              <div className="absolute -top-2 -right-2 w-8 h-8 border-r-3 border-t-3 border-primary/40 rounded-tr pointer-events-none" />
              <div className="absolute -bottom-2 -left-2 w-8 h-8 border-l-3 border-b-3 border-primary/40 rounded-bl pointer-events-none" />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-r-3 border-b-3 border-primary/40 rounded-br pointer-events-none" />
            </div>
          </div>

          {/* Next button */}
          <button
            onClick={goToNext}
            disabled={currentPage === totalPages - 1 || isFlipping}
            className="p-3 md:p-4 rounded-full bg-card border border-border shadow-romantic hover:bg-accent disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 md:w-8 md:h-8 text-foreground" />
          </button>
        </div>

        {/* Page indicators */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {galleryImages.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isFlipping && index !== currentPage) {
                  setFlipDirection(index > currentPage ? 'next' : 'prev');
                  setIsFlipping(true);
                  setTimeout(() => {
                    setCurrentPage(index);
                    setIsFlipping(false);
                  }, 600);
                }
              }}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                index === currentPage 
                  ? 'bg-primary scale-125' 
                  : 'bg-primary/30 hover:bg-primary/50'
              }`}
            />
          ))}
        </div>

        {/* Page number */}
        <p className="text-center mt-4 font-display text-sm text-muted-foreground">
          Page {currentPage + 1} of {totalPages}
        </p>
      </div>
    </section>
  );
};

export default GallerySection;
