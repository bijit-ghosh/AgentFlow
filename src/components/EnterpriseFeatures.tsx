
import React from 'react';
import { Shield, Eye, Lock, Database, CheckCircle2 } from 'lucide-react';

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

        {/* Transparency Demo with enhanced visual design */}
        <div className="mb-20 rounded-xl overflow-hidden border border-border shadow-xl transform hover:scale-[1.01] transition-all duration-500">
          <div className="bg-card p-8">
            <h3 className="text-2xl font-semibold mb-3 flex items-center">
              <Eye className="mr-3 text-flow h-6 w-6" />
              Total Transparency
            </h3>
            <p className="text-muted-foreground mb-6">See the work — trace every action that AI takes in real-time with our comprehensive audit logs</p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80 pointer-events-none"></div>
            <img 
              src="/lovable-uploads/49392914-8a53-434a-bb59-db3e9851998c.png" 
              alt="Agent activity log" 
              className="w-full"
            />
          </div>
          
          <div className="bg-card p-6 border-t border-border">
            <div className="flex flex-wrap gap-4">
              {trustPoints.map((point, index) => (
                <div key={index} className="flex items-center text-sm px-3 py-1.5 bg-background rounded-full">
                  <CheckCircle2 className="h-4 w-4 text-agent mr-2" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
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
