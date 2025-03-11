
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import WorkflowDemo from '@/components/WorkflowDemo';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  // Add smooth scroll effect for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (!anchor) return;
      
      const href = anchor.getAttribute('href');
      if (!href || !href.startsWith('#')) return;
      
      e.preventDefault();
      
      const element = document.querySelector(href);
      if (!element) return;
      
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.scrollY - 100, // Offset for header
        behavior: 'smooth'
      });
    };
    
    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <Features />
        <WorkflowDemo />
        
        {/* CTA Section */}
        <section id="cta" className="py-24 bg-gradient-to-r from-primary/5 to-flow/5">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-bold mb-6">
                Ready to Transform Your 
                <span className="text-gradient"> AI Operations?</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Start building your first agent workflow in minutes. No credit card required.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="/signup" className="button-primary inline-flex items-center justify-center">
                  Get Started for Free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <a href="/demo" className="button-secondary inline-flex items-center justify-center">
                  Request Demo
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
