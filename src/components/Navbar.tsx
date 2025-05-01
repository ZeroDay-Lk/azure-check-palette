
import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { Shield } from 'lucide-react';

const Navbar = () => {
  return (
    <div className="border-b border-border">
      <div className="container flex items-center justify-between py-3 mx-auto">
        <Link to="/" className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/53a58401-d16e-45e5-8b7e-2255a2b084a6.png" 
            alt="Cyber Crew Logo" 
            className="h-10" 
          />
          <span className="font-bold text-xl">サイバークルー</span>
        </Link>
        
        <div className="flex items-center space-x-4">
          <nav className="hidden md:flex items-center space-x-4">
            <Link to="/" className="text-sm font-medium transition hover:text-primary">
              ホーム
            </Link>
            <Link to="#features" className="text-sm font-medium transition hover:text-primary">
              機能
            </Link>
            <Link to="#about" className="text-sm font-medium transition hover:text-primary">
              概要
            </Link>
          </nav>
          
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
