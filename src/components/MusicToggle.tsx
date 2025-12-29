import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const MusicToggle = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element with a romantic instrumental track
    audioRef.current = new Audio(
      'https://cdn.pixabay.com/audio/2024/02/07/audio_7b1930dbe8.mp3'
    );
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;
    
    audioRef.current.addEventListener('canplaythrough', () => {
      setIsLoaded(true);
    });

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {
        // Autoplay might be blocked
      });
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <button
      onClick={toggleMusic}
      disabled={!isLoaded}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-card/80 backdrop-blur-sm border border-border shadow-romantic hover:shadow-glow-rose transition-all duration-300 disabled:opacity-50 group"
      aria-label={isPlaying ? 'Mute music' : 'Play music'}
    >
      {isPlaying ? (
        <Volume2 className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
      ) : (
        <VolumeX className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:scale-110 transition-all" />
      )}
    </button>
  );
};

export default MusicToggle;
