
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        isScrolled ? "glassmorphism shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <span className="sr-only">AgentFlow</span>
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-flow to-agent flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-white"></div>
              </div>
              <span className="text-xl font-semibold">AgentFlow</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">Features</a>
            <a href="#workflow" className="text-sm font-medium hover:text-primary transition-colors">Workflow</a>
            <a href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">Pricing</a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</a>
            <a href="/login" className="button-secondary">Login</a>
            <a href="/signup" className="button-primary">Sign Up</a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden focus:outline-none"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden absolute top-full left-0 right-0 glassmorphism shadow-lg animate-fade-in-down">
          <div className="flex flex-col space-y-4 p-4">
            <a href="#features" className="text-sm font-medium hover:text-primary transition-colors p-2" onClick={toggleMenu}>Features</a>
            <a href="#workflow" className="text-sm font-medium hover:text-primary transition-colors p-2" onClick={toggleMenu}>Workflow</a>
            <a href="#pricing" className="text-sm font-medium hover:text-primary transition-colors p-2" onClick={toggleMenu}>Pricing</a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors p-2" onClick={toggleMenu}>Contact</a>
            <div className="flex flex-col space-y-2 pt-2">
              <a href="/login" className="button-secondary text-center">Login</a>
              <a href="/signup" className="button-primary text-center">Sign Up</a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
