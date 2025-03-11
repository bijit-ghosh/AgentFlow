
import React from 'react';
import { 
  Network, 
  Workflow, 
  Zap, 
  BarChart, 
  Sliders, 
  ShieldCheck, 
  MessagesSquare, 
  Layers
} from 'lucide-react';

const features = [
  {
    icon: <Network className="h-8 w-8 text-flow" />,
    title: "Multi-Agent Orchestration",
    description: "Coordinate complex interactions between multiple AI agents to solve sophisticated business problems."
  },
  {
    icon: <Workflow className="h-8 w-8 text-agent" />,
    title: "Drag-and-Drop Workflows",
    description: "Build custom agent workflows with our intuitive visual editor—no coding required."
  },
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: "Seamless Integrations",
    description: "Connect to your existing tools and services with pre-built connectors and API endpoints."
  },
  {
    icon: <BarChart className="h-8 w-8 text-flow" />,
    title: "Real-Time Analytics",
    description: "Monitor performance, costs, and outcomes with comprehensive dashboards and reports."
  },
  {
    icon: <Sliders className="h-8 w-8 text-agent" />,
    title: "Cost Controls",
    description: "Set budgets, monitor usage, and optimize your agent operations for maximum efficiency."
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: "Enterprise Security",
    description: "Keep your data and operations secure with SOC 2 compliance and end-to-end encryption."
  },
  {
    icon: <MessagesSquare className="h-8 w-8 text-flow" />,
    title: "Natural Language Interface",
    description: "Describe what you need in plain language and let AgentFlow build it for you."
  },
  {
    icon: <Layers className="h-8 w-8 text-agent" />,
    title: "Versioning & Rollbacks",
    description: "Track changes, test variations, and roll back to previous versions with confidence."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-secondary/30">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-bold mb-4">
            Powerful Features for 
            <span className="text-gradient"> AI Orchestration</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to build, deploy, and manage intelligent agent workflows at scale.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 ease-in-out"
            >
              <div className="mb-4 p-2 rounded-lg inline-block bg-secondary">
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

export default Features;
