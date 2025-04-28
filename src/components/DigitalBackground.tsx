
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
    
    // Characters to use in the animation
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';

    // Animation function
    function draw() {
      // Background fade effect (lighter for dark theme, darker for light theme)
      ctx.fillStyle = theme === 'dark' 
        ? 'rgba(10, 10, 15, 0.1)' 
        : 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Character color (brighter for dark theme)
      ctx.fillStyle = theme === 'dark' ? '#0EDED5' : '#0ABAB5';
      ctx.font = `${fontSize}px monospace`;

      // Draw each drop
      drops.forEach((y, i) => {
        // Random character
        const char = chars[Math.floor(Math.random() * chars.length)];
        
        // Vary the character opacity for matrix effect
        ctx.globalAlpha = y > 5 ? 0.8 - Math.random() * 0.3 : 1;
        
        // Draw the character
        const x = i * fontSize;
        ctx.fillText(char, x, y * fontSize);
        
        // Reset drop or move it down
        if (y * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      });
      
      // Reset global alpha
      ctx.globalAlpha = 1;
    }

    // Run animation
    const interval = setInterval(draw, 33);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      clearInterval(interval);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed top-0 left-0 w-full h-full -z-10 ${theme === 'dark' ? 'opacity-25' : 'opacity-15'}`}
    />
  );
};

export default DigitalBackground;
