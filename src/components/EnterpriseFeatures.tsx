
import React from 'react';
import { Shield, Eye, Lock, Database, CheckCircle2, Building2, Globe, BarChart, FileCheck } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const securityFeatures = [
  {
    title: "SOC2 I",
    description: "Certified security controls and processes",
    icon: <Shield className="h-12 w-12 text-primary mb-4" />
  },
  {
    title: "SOC2 II",
    description: "Advanced security compliance standards",
    icon: <Eye className="h-12 w-12 text-primary mb-4" />
  },
  {
    title: "Encrypted in transit and at rest",
    description: "Enterprise-grade encryption for all data",
    icon: <Lock className="h-12 w-12 text-primary mb-4" />
  },
  {
    title: "No training on user data",
    description: "Your data remains private and secure",
    icon: <Database className="h-12 w-12 text-primary mb-4" />
  }
];

const trustPoints = [
  "ISO 27001 certified",
  "GDPR compliant",
  "24/7 security monitoring",
  "Regular security audits"
];

const testimonials = [
  {
    quote: "AgentFlow's enterprise security features have been instrumental in our AI transformation journey, giving us confidence to deploy at scale.",
    author: "Sarah Chen",
    title: "CTO, Global Financial Services",
    logo: <Building2 className="h-10 w-10 text-primary" />
  },
  {
    quote: "The transparency and audit capabilities have helped us meet regulatory requirements while accelerating our AI adoption.",
    author: "Michael Rodriguez",
    title: "VP of Technology, Healthcare Systems",
    logo: <Globe className="h-10 w-10 text-primary" />
  },
  {
    quote: "We've reduced our compliance overhead by 60% while improving our security posture with AgentFlow's enterprise platform.",
    author: "David Patel",
    title: "CISO, Retail Technologies",
    logo: <BarChart className="h-10 w-10 text-primary" />
  },
  {
    quote: "The detailed audit logs and compliance features have made our security team's job significantly easier during regulatory reviews.",
    author: "Emily Thompson",
    title: "Head of Compliance, Insurance Group",
    logo: <FileCheck className="h-10 w-10 text-primary" />
  }
];

const EnterpriseFeatures = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-background to-secondary/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-50">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-flow/5 rounded-full filter blur-[100px]"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-agent/5 rounded-full filter blur-[100px]"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Shield className="h-4 w-4 text-primary mr-2" />
            <span className="text-sm font-medium text-primary">Enterprise-Grade Security</span>
          </div>
          
          <h2 className="font-bold mb-4 text-4xl">
            Enterprise Security and 
            <span className="text-gradient"> Transparency</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Trusted by the largest and most regulated global institutions
          </p>
        </div>

        {/* Enterprise Testimonials Carousel - replacing the old demo section */}
        <div className="mb-20">
          <div className="mb-10 text-center">
            <h3 className="text-2xl font-semibold mb-4">Trusted by Industry Leaders</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See why enterprises across industries rely on our secure and transparent AI agent platform
            </p>
          </div>
          
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="mx-auto max-w-5xl"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2 pl-4">
                  <Card className="border border-border bg-card/60 backdrop-blur-sm hover:shadow-xl transition-all duration-500 h-full">
                    <CardContent className="p-8 flex flex-col h-full">
                      <div className="bg-primary/10 p-4 rounded-full w-fit mb-6">
                        {testimonial.logo}
                      </div>
                      <blockquote className="text-lg italic mb-6 flex-grow">
                        "{testimonial.quote}"
                      </blockquote>
                      <div className="mt-auto">
                        <div className="font-semibold">{testimonial.author}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:flex justify-end gap-2 mt-6">
              <CarouselPrevious className="relative inset-auto -left-0 top-0 translate-y-0 bg-background/80 backdrop-blur-sm" />
              <CarouselNext className="relative inset-auto -right-0 top-0 translate-y-0 bg-background/80 backdrop-blur-sm" />
            </div>
          </Carousel>
          
          <div className="flex flex-wrap gap-4 justify-center mt-10">
            {trustPoints.map((point, index) => (
              <div key={index} className="flex items-center text-sm px-3 py-1.5 bg-background/80 backdrop-blur-sm rounded-full border border-border">
                <CheckCircle2 className="h-4 w-4 text-agent mr-2" />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Security Features Grid with enhanced card design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {securityFeatures.map((feature, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-xl p-8 text-center hover:shadow-xl transition-all duration-500 transform hover:translate-y-[-4px] group"
            >
              <div className="flex justify-center">
                <div className="p-4 bg-primary/10 rounded-full mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-medium mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnterpriseFeatures;
