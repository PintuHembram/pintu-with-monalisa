import { useEffect } from 'react';
import FloatingHearts from '@/components/FloatingHearts';
import HeroSection from '@/components/HeroSection';
import GallerySection from '@/components/GallerySection';
import MemoriesSection from '@/components/MemoriesSection';
import FinaleSection from '@/components/FinaleSection';
import MusicToggle from '@/components/MusicToggle';

const Index = () => {
  useEffect(() => {
    // Update page title
    document.title = "Our Memories – A Picture Book of Us";
  }, []);

  return (
    <main className="relative">
      {/* Floating hearts background */}
      <FloatingHearts />

      {/* Music toggle button */}
      <MusicToggle />

      {/* Hero Section */}
      <HeroSection />

      {/* Gallery Section */}
      <GallerySection />

      {/* Memories Section */}
      <MemoriesSection />

      {/* Finale Section */}
      <FinaleSection />
    </main>
  );
};

export default Index;
