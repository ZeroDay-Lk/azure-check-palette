
import React from 'react';
import { GitHub, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-border py-6 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-foreground/70">
              Inspired by <a href="https://github.com/lissy93/web-check" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Lissy93/web-check</a>
            </p>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/lissy93/web-check" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-primary transition-colors"
              title="View on GitHub"
            >
              <GitHub size={18} />
              <span className="sr-only">GitHub</span>
            </a>
            <span className="text-sm text-foreground/70 flex items-center gap-1">
              Made with <Heart size={14} className="text-primary fill-primary" /> by Lovable
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
