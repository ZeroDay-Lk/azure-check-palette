
import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { Shield } from 'lucide-react';

const Navbar = () => {
  return (
    <div className="border-b border-border">
      <div className="container flex items-center justify-between py-3 mx-auto">
        <Link to="/" className="flex items-center space-x-2">
          <div className="bg-primary p-1.5 rounded text-primary-foreground">
            <Shield className="h-5 w-5" />
          </div>
          <span className="font-semibold text-lg">Cyber Crew Web Anylacer</span>
        </Link>
        
        <div className="flex items-center space-x-4">
          <nav className="hidden md:flex items-center space-x-4">
            <Link to="/" className="text-sm font-medium transition hover:text-primary">
              Home
            </Link>
            <Link to="#features" className="text-sm font-medium transition hover:text-primary">
              Features
            </Link>
            <Link to="#about" className="text-sm font-medium transition hover:text-primary">
              About
            </Link>
          </nav>
          
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
