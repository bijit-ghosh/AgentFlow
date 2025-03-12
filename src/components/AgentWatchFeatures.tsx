
import React from 'react';
import { 
  Eye, 
  FileSearch, 
  ScrollText, 
  Bug, 
  LifeBuoy, 
  Network, 
  Cable, 
  Target, 
  Wrench, 
  RefreshCw 
} from 'lucide-react';

const agentWatchFeatures = [
  {
    icon: <Eye className="h-8 w-8 text-flow" />,
    title: "Comprehensive Scope",
    description: "Oversees the entire lifecycle of AI agents, including decision-making, reasoning, and execution in dynamic environments."
  },
  {
    icon: <FileSearch className="h-8 w-8 text-agent" />,
    title: "Real-Time Monitoring",
    description: "Monitors agent behavior, thought processes, external interactions, and task execution in real-time."
  },
  {
    icon: <ScrollText className="h-8 w-8 text-primary" />,
    title: "Extensive Documentation",
    description: "Extends documentation to record agent workflows, reasoning paths, and decisions, ensuring traceability and compliance."
  },
  {
    icon: <Bug className="h-8 w-8 text-flow" />,
    title: "Advanced Debugging",
    description: "Debugs multi-stage decision-making, tracking agent action chains, context switching, and unexpected behavior."
  },
  {
    icon: <LifeBuoy className="h-8 w-8 text-agent" />,
    title: "Lifecycle Management",
    description: "Manages agent design, orchestration, continuous learning, performance evaluation, and retirement/decommissioning."
  },
  {
    icon: <Network className="h-8 w-8 text-primary" />,
    title: "Interaction Management",
    description: "Handles multi-agent coordination, complex reasoning, adaptive task execution, and real-world interactions."
  },
  {
    icon: <Cable className="h-8 w-8 text-flow" />,
    title: "Seamless Dependencies",
    description: "Integrates with external systems, APIs, real-time data sources, robotic interfaces, and IoT devices."
  },
  {
    icon: <Target className="h-8 w-8 text-agent" />,
    title: "Goal-Oriented Design",
    description: "Ensures that AI agents are reliable, predictable, and auditable across diverse operational scenarios."
  },
  {
    icon: <Wrench className="h-8 w-8 text-primary" />,
    title: "Comprehensive Tooling",
    description: "Incorporates real-time agent monitoring, decision-tracking tools, security auditing frameworks, and orchestration systems."
  },
  {
    icon: <RefreshCw className="h-8 w-8 text-flow" />,
    title: "Continuous Feedback",
    description: "Includes human-in-the-loop validation, continuous self-improvement, and behavioral refinement mechanisms."
  }
];

const AgentWatchFeatures = () => {
  return (
    <section className="py-24 bg-background">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-bold mb-4">
            Introducing
            <span className="text-gradient"> AgentWatch</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Complete monitoring and management solution for your AI agents
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {agentWatchFeatures.map((feature, index) => (
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

export default AgentWatchFeatures;
