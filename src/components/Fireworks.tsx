import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  alpha: number;
  color: string;
  size: number;
}

interface Firework {
  x: number;
  y: number;
  targetY: number;
  speed: number;
  exploded: boolean;
  particles: Particle[];
  color: string;
}

const Fireworks = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const colors = [
      'hsl(340, 60%, 65%)', // Rose
      'hsl(38, 70%, 70%)',  // Champagne
      'hsl(280, 30%, 75%)', // Lavender
      'hsl(350, 40%, 85%)', // Blush
      'hsl(45, 90%, 70%)',  // Gold
    ];

    const fireworks: Firework[] = [];

    const createFirework = () => {
      const x = Math.random() * canvas.width;
      const targetY = Math.random() * canvas.height * 0.4 + canvas.height * 0.1;
      
      fireworks.push({
        x,
        y: canvas.height,
        targetY,
        speed: 4 + Math.random() * 3,
        exploded: false,
        particles: [],
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    };

    const explode = (firework: Firework) => {
      const particleCount = 60 + Math.floor(Math.random() * 40);
      
      for (let i = 0; i < particleCount; i++) {
        const angle = (Math.PI * 2 / particleCount) * i;
        const speed = 2 + Math.random() * 4;
        
        firework.particles.push({
          x: firework.x,
          y: firework.y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          alpha: 1,
          color: firework.color,
          size: 2 + Math.random() * 2,
        });
      }
      
      firework.exploded = true;
    };

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Random firework creation
      if (Math.random() < 0.03) {
        createFirework();
      }

      for (let i = fireworks.length - 1; i >= 0; i--) {
        const fw = fireworks[i];

        if (!fw.exploded) {
          // Draw trail
          ctx.beginPath();
          ctx.arc(fw.x, fw.y, 3, 0, Math.PI * 2);
          ctx.fillStyle = fw.color;
          ctx.fill();

          // Move upward
          fw.y -= fw.speed;

          // Explode when reaching target
          if (fw.y <= fw.targetY) {
            explode(fw);
          }
        } else {
          // Update and draw particles
          let allDead = true;

          for (let j = fw.particles.length - 1; j >= 0; j--) {
            const p = fw.particles[j];

            p.x += p.vx;
            p.y += p.vy;
            p.vy += 0.05; // Gravity
            p.alpha -= 0.015;

            if (p.alpha > 0) {
              allDead = false;
              ctx.beginPath();
              ctx.arc(p.x, p.y, p.size * p.alpha, 0, Math.PI * 2);
              ctx.fillStyle = p.color.replace(')', `, ${p.alpha})`).replace('hsl', 'hsla');
              ctx.fill();
            }
          }

          if (allDead) {
            fireworks.splice(i, 1);
          }
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
    />
  );
};

export default Fireworks;
