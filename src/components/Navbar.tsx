
import React from 'react';
import { Shield } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="border-b border-border px-4 py-3 mb-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Shield className="h-6 w-6 text-primary" />
          <span className="font-semibold text-lg">WebCheck</span>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <a href="#features" className="text-foreground/80 hover:text-primary transition-colors">Features</a>
          <a href="#about" className="text-foreground/80 hover:text-primary transition-colors">About</a>
          <a href="https://github.com/lissy93/web-check" target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-primary transition-colors">GitHub</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
