
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current || !imageRef.current) return;
      
      const { clientX, clientY } = e;
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;
      
      imageRef.current.style.transform = `translate(${x * 20}px, ${y * 20}px) rotate(${x * 2}deg)`;
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
    }
    
    return () => {
      if (heroElement) {
        heroElement.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <div 
      ref={heroRef}
      className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary opacity-50 z-0"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-flow/10 rounded-full filter blur-3xl animate-pulse-subtle"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-agent/10 rounded-full filter blur-3xl animate-pulse-subtle"></div>
      
      <div className="section-container relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="max-w-xl space-y-6">
            <div className="inline-block">
              <span className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-secondary text-secondary-foreground">
                Introducing AgentFlow <span className="ml-1 opacity-60">✨</span>
              </span>
            </div>
            
            <h1 className="font-bold tracking-tight">
              Orchestrate AI Agents with 
              <span className="text-gradient"> Effortless Precision</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground">
              Build, manage, and scale intelligent agent workflows across your entire business. Automate complex tasks and integrate seamlessly with your existing systems.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="/signup" className="button-primary inline-flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a href="#demo" className="button-secondary inline-flex items-center">
                Watch Demo
              </a>
            </div>
            
            <div className="pt-8">
              <p className="text-sm text-muted-foreground">Trusted by innovative teams worldwide</p>
              <div className="mt-4 flex flex-wrap items-center gap-8 opacity-70">
                <img src="https://placehold.co/100x30/F3F4F6/78716C?text=Company" alt="Company logo" className="h-8" />
                <img src="https://placehold.co/100x30/F3F4F6/78716C?text=Company" alt="Company logo" className="h-8" />
                <img src="https://placehold.co/100x30/F3F4F6/78716C?text=Company" alt="Company logo" className="h-8" />
                <img src="https://placehold.co/100x30/F3F4F6/78716C?text=Company" alt="Company logo" className="h-8" />
              </div>
            </div>
          </div>
          
          <div ref={imageRef} className="relative transition-transform duration-300 ease-out animate-float">
            <div className="relative z-10 rounded-xl overflow-hidden border border-border shadow-xl">
              <img
                src="https://placehold.co/800x500/3b82f6/FFFFFF?text=AgentFlow+Demo"
                alt="AgentFlow interface preview"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
            
            {/* Decorative elements for the image */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-flow/20 rounded-full filter blur-md"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-agent/20 rounded-full filter blur-md"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
