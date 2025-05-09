
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

    // Digital rain parameters - increased density and speed
    const fontSize = 18; // Even larger font size for better visibility
    const columns = canvas.width / fontSize;
    const drops: number[] = Array(Math.floor(columns)).fill(1);
    
    // Enhanced character set for more cyber feel
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン<>{}[]=/\\!@#$%^&*()_+ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    // Animation function with enhanced effects
    function draw() {
      // Background fade effect (decreased opacity for more visible trails)
      ctx.fillStyle = theme === 'dark' 
        ? 'rgba(5, 10, 15, 0.03)' // More transparent for longer trails
        : 'rgba(0, 0, 0, 0.02)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw each drop with enhanced matrix effect
      drops.forEach((y, i) => {
        // Random character
        const char = chars[Math.floor(Math.random() * chars.length)];
        
        // Vary the character opacity for depth effect
        ctx.globalAlpha = y > 5 ? 0.9 - Math.random() * 0.2 : 1; // Increased opacity
        
        // Random brightness for some characters (flashing effect)
        if (Math.random() > 0.95) {
          ctx.fillStyle = '#FFFFFF'; // Bright white for emphasis
        } else {
          // Gradient colors for more cyber feel with brighter colors
          const colors = theme === 'dark' 
            ? ['#00FF9F', '#0FFFBF', '#00FFFF', '#33FF66'] 
            : ['#0ABAB5', '#0DADA8', '#0F9F9C', '#0C8C8A'];
          ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
        }
        
        // Draw the character
        const x = i * fontSize;
        ctx.fillText(char, x, y * fontSize);
        
        // Reset drop or move it down with varied speed
        if (y * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        
        // Occasionally make some streams faster for dynamic effect
        const speedFactor = Math.random() > 0.95 ? 3 : (Math.random() > 0.5 ? 2 : 1);
        drops[i] += speedFactor;
      });
      
      // Reset global alpha
      ctx.globalAlpha = 1;
    }

    // Run animation with higher framerate for smoother effect
    const interval = setInterval(draw, 30);

    // Add more frequent and pronounced glitch effects
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.6) { // Increased frequency of glitches
        // Horizontal line glitch
        ctx.fillStyle = 'rgba(255, 255, 255, 0.25)'; // More visible glitches
        ctx.fillRect(
          0,
          Math.random() * canvas.height,
          canvas.width,
          Math.random() * 5 + 2 // Thicker lines
        );
        
        // Block glitch
        if (Math.random() > 0.8) {
          ctx.fillStyle = theme === 'dark' ? 'rgba(0, 255, 159, 0.2)' : 'rgba(10, 186, 181, 0.15)';
          ctx.fillRect(
            Math.random() * canvas.width,
            Math.random() * canvas.height,
            Math.random() * 100 + 50,
            Math.random() * 100 + 20
          );
        }
      }
    }, 800); // More frequent glitches

    // Add scanning line effect
    const scanLineInterval = setInterval(() => {
      ctx.fillStyle = theme === 'dark' ? 'rgba(0, 255, 159, 0.2)' : 'rgba(10, 186, 181, 0.2)';
      let scanPosition = 0;
      
      const scanLine = () => {
        ctx.fillRect(0, scanPosition, canvas.width, 3); // Thicker scan line
        scanPosition += 5;
        
        if (scanPosition < canvas.height) {
          requestAnimationFrame(scanLine);
        }
      };
      
      scanLine();
    }, 3000); // More frequent scan lines

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      clearInterval(interval);
      clearInterval(glitchInterval);
      clearInterval(scanLineInterval);
    };
  }, [theme]);

  return (
    <>
      <canvas
        ref={canvasRef}
        className={`fixed top-0 left-0 w-full h-full -z-10 ${theme === 'dark' ? 'opacity-80' : 'opacity-60'}`}
        style={{ 
          filter: 'blur(0px)', // Removed blur for sharper characters
          WebkitFilter: 'blur(0px)', 
        }}
      />
      <div className="digital-background-container fixed inset-0 -z-20" />
    </>
  );
};

export default DigitalBackground;
