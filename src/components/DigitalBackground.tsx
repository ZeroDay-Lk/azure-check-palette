
import React, { useEffect, useRef } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

const DigitalBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size to match window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Digital rain parameters
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops: number[] = Array(Math.floor(columns)).fill(1);
    
    // Characters to use in the animation (more cyber-looking)
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン<>{}[]=/\\!@#$%^&*()_+';

    // Animation function
    function draw() {
      // Background fade effect (darker for matrix feel)
      ctx.fillStyle = theme === 'dark' 
        ? 'rgba(5, 10, 15, 0.1)' 
        : 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Character color (brighter neon green for matrix feel)
      ctx.fillStyle = theme === 'dark' ? '#0FFFBF' : '#0ABAB5';
      ctx.font = `${fontSize}px monospace`;

      // Draw each drop with enhanced matrix effect
      drops.forEach((y, i) => {
        // Random character
        const char = chars[Math.floor(Math.random() * chars.length)];
        
        // Vary the character opacity for matrix effect
        ctx.globalAlpha = y > 5 ? 0.8 - Math.random() * 0.3 : 1;
        
        // Random brightness for some characters (flashing effect)
        if (Math.random() > 0.97) {
          ctx.fillStyle = '#FFFFFF';
        } else {
          ctx.fillStyle = theme === 'dark' ? '#0FFFBF' : '#0ABAB5';
        }
        
        // Draw the character
        const x = i * fontSize;
        ctx.fillText(char, x, y * fontSize);
        
        // Reset drop or move it down with varied speed
        if (y * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        // Occasionally make some streams faster
        drops[i] += Math.random() > 0.95 ? 2 : 1;
      });
      
      // Reset global alpha
      ctx.globalAlpha = 1;
    }

    // Run animation with higher framerate for smoother effect
    const interval = setInterval(draw, 30);

    // Add occasional glitch effect
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.7) {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
        ctx.fillRect(
          Math.random() * canvas.width,
          Math.random() * canvas.height,
          Math.random() * 100 + 50,
          2
        );
      }
    }, 2000);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      clearInterval(interval);
      clearInterval(glitchInterval);
    };
  }, [theme]);

  return (
    <>
      <canvas
        ref={canvasRef}
        className={`fixed top-0 left-0 w-full h-full -z-10 ${theme === 'dark' ? 'opacity-30' : 'opacity-20'}`}
      />
      <div className="digital-background-container fixed inset-0 -z-20" />
    </>
  );
};

export default DigitalBackground;
