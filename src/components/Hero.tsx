
import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Sparkles, Bot, Zap, Shield, TrendingUp, Gauge } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current || !imageRef.current) return;
      
      const { clientX, clientY } = e;
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;
      
      setMousePosition({ x, y });
      imageRef.current.style.transform = `translate(${x * 20}px, ${y * 20}px) rotate(${x * 2}deg)`;
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
    }
    
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);
    
    return () => {
      if (heroElement) {
        heroElement.removeEventListener('mousemove', handleMouseMove);
      }
      clearTimeout(timer);
    };
  }, []);

  return (
    <div 
      ref={heroRef}
      className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20"
    >
      <div 
        className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary opacity-50 z-0"
        style={{
          backgroundPosition: `${50 + mousePosition.x * 10}% ${50 + mousePosition.y * 10}%`,
        }}
      ></div>
      
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-flow/10 rounded-full filter blur-3xl animate-pulse-subtle"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-agent/10 rounded-full filter blur-3xl animate-pulse-subtle"></div>
      <div className="absolute top-1/3 right-1/3 w-32 h-32 bg-primary/10 rounded-full filter blur-2xl animate-float"></div>
      
      <div className="section-container relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="max-w-xl space-y-6 animate-fade-in">
            <div className="inline-block">
              <span className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-secondary text-secondary-foreground">
                Introducing AgentFlow <Sparkles className="ml-1 h-4 w-4 text-yellow-400" />
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
              <a 
                href="/signup" 
                className="button-primary inline-flex items-center transform hover:scale-105 transition-transform duration-300"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a 
                href="#demo" 
                className="button-secondary inline-flex items-center hover:bg-secondary/80 transition-colors duration-300"
              >
                Watch Demo
              </a>
            </div>
            
            <div className="pt-8">
              <div className="inline-block relative">
                <h3 className="text-lg font-bold tracking-wide bg-gradient-to-r from-primary via-flow to-agent bg-clip-text text-transparent animate-pulse-subtle transition-all duration-500 mb-4">
                  <span className="relative z-10">Powering Next-Gen AI Solutions</span>
                  <span className="block animate-fade-in-up mt-1">
                    <span className="inline-flex px-6 py-4 bg-gradient-to-r from-flow/40 to-agent/40 rounded-lg border-3 border-flow/40 shadow-xl font-extrabold text-xl">
                      <span className="bg-gradient-to-r from-primary to-flow bg-clip-text text-transparent">
                        Transform your business operations with AI that delivers 
                        <span className="mx-2 font-black text-flow uppercase">REAL RESULTS</span>
                        with
                        <span className="relative ml-2 font-black text-2xl">
                          <span className="absolute -inset-1 bg-gradient-to-r from-flow/40 to-agent/40 blur-sm rounded-lg animate-pulse-subtle"></span>
                          <span className="relative z-10 uppercase bg-gradient-to-r from-flow to-agent bg-clip-text text-transparent underline decoration-flow decoration-4 underline-offset-4">MEASURABLE IMPACT</span>
                        </span>
                      </span>
                    </span>
                  </span>
                </h3>
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 via-flow/10 to-agent/10 rounded-lg blur-sm -z-10"></div>
              </div>
              <div className="flex flex-col gap-4 mt-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-primary/10">
                    <Bot className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-sm">Advanced AI Agent Orchestration <span className="font-medium text-primary">• 87% faster task completion</span></span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-flow/10">
                    <Zap className="h-5 w-5 text-flow" />
                  </div>
                  <span className="text-sm">Real-time Processing & Automation <span className="font-medium text-flow">• 63% cost reduction</span></span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-agent/10">
                    <Shield className="h-5 w-5 text-agent" />
                  </div>
                  <span className="text-sm">Enterprise-grade Security & Control <span className="font-medium text-agent">• 99.9% uptime</span></span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-primary/10">
                    <TrendingUp className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-sm">ROI & Performance Tracking <span className="font-medium text-primary">• 4.2x average ROI</span></span>
                </div>
              </div>
            </div>
          </div>
          
          <div 
            ref={imageRef} 
            className="relative transition-transform duration-300 ease-out animate-float"
          >
            <div className="relative z-10 rounded-xl overflow-hidden border border-border shadow-xl">
              <div className={`relative transition-opacity duration-700 ease-in-out ${isLoaded ? 'opacity-100' : 'opacity-0 animate-pulse bg-secondary'}`}>
                <img
                  src="https://placehold.co/800x500/3b82f6/FFFFFF?text=AgentFlow+Demo"
                  alt="AgentFlow interface preview"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  onLoad={() => setIsLoaded(true)}
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-flow/20 to-transparent opacity-60"></div>
              </div>
            </div>
            
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-flow/20 rounded-full filter blur-md animate-pulse-subtle"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-agent/20 rounded-full filter blur-md animate-pulse-subtle"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-primary/10 rounded-full filter blur-3xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
