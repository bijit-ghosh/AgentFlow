
import React from 'react';
import { Shield, Eye, Lock, Database } from 'lucide-react';

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

const EnterpriseFeatures = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-background to-secondary/20">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-bold mb-4">
            Enterprise Security and 
            <span className="text-gradient"> Transparency</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Trusted by the largest and most regulated global institutions
          </p>
        </div>

        {/* Transparency Demo */}
        <div className="mb-20 p-6 bg-card rounded-xl border border-border shadow-lg">
          <h3 className="text-xl font-medium mb-4">Total Transparency</h3>
          <p className="text-muted-foreground mb-6">See the work — trace every action that AI takes</p>
          <div className="bg-background rounded-lg border border-border p-4">
            <img 
              src="/lovable-uploads/49392914-8a53-434a-bb59-db3e9851998c.png" 
              alt="Agent activity log" 
              className="w-full rounded-lg"
            />
          </div>
        </div>

        {/* Security Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {securityFeatures.map((feature, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300"
            >
              <div className="flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnterpriseFeatures;
