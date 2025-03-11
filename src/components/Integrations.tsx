
import React, { useState } from 'react';
import { GitBranch, Network, Code, Workflow, Share, Puzzle, Component, Zap, ExternalLink } from 'lucide-react';

// Define the integrations data
const integrations = [
  {
    name: "CrewAI",
    description: "Structured workflows for multi-agent collaboration",
    icon: <Network className="h-8 w-8 text-flow" />,
    link: "https://github.com/crewAIInc/crewAI",
    bgGradient: "bg-gradient-to-br from-flow/10 to-flow/5"
  },
  {
    name: "LangGraph",
    description: "Event-driven execution with LangChain's framework",
    icon: <GitBranch className="h-8 w-8 text-agent" />,
    link: "https://github.com/langchain-ai/langgraph",
    bgGradient: "bg-gradient-to-br from-agent/10 to-agent/5"
  },
  {
    name: "ReAct",
    description: "Dynamic reasoning and acting for adaptive AI agents",
    icon: <Code className="h-8 w-8 text-primary" />,
    link: "https://react-lm.github.io/",
    bgGradient: "bg-gradient-to-br from-primary/10 to-primary/5"
  },
  {
    name: "AutoGen",
    description: "Conversational framework for building multi-agent systems",
    icon: <Workflow className="h-8 w-8 text-flow" />,
    link: "https://github.com/microsoft/autogen",
    bgGradient: "bg-gradient-to-br from-flow/10 to-flow/5"
  },
  {
    name: "LangChain",
    description: "Framework for developing applications powered by language models",
    icon: <Share className="h-8 w-8 text-agent" />,
    link: "https://github.com/langchain-ai/langchain",
    bgGradient: "bg-gradient-to-br from-agent/10 to-agent/5"
  },
  {
    name: "DSPy",
    description: "Programming framework for LLM-powered systems",
    icon: <Puzzle className="h-8 w-8 text-primary" />,
    link: "https://github.com/stanfordnlp/dspy",
    bgGradient: "bg-gradient-to-br from-primary/10 to-primary/5"
  },
  {
    name: "LCEL",
    description: "LangChain Expression Language for composable applications",
    icon: <Component className="h-8 w-8 text-flow" />,
    link: "https://python.langchain.com/docs/expression_language/",
    bgGradient: "bg-gradient-to-br from-flow/10 to-flow/5"
  },
  {
    name: "LLAMA Index",
    description: "Data framework for LLM-based applications",
    icon: <Zap className="h-8 w-8 text-agent" />,
    link: "https://github.com/jerryjliu/llama_index",
    bgGradient: "bg-gradient-to-br from-agent/10 to-agent/5"
  }
];

const Integrations = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section id="integrations" className="py-24 bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-24 w-96 h-96 bg-flow/5 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-agent/5 rounded-full filter blur-[100px]"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-bold mb-4">
            Seamless <span className="text-gradient">Integrations</span> with Top Agentic Frameworks
          </h2>
          <p className="text-lg text-muted-foreground">
            AgentFlow works with all major AI agent frameworks, allowing you to leverage your preferred tools and libraries without switching platforms.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {integrations.map((integration, index) => (
            <a 
              key={index} 
              href={integration.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`${integration.bgGradient} border border-border rounded-xl p-6 shadow-sm transition-all duration-300 ease-in-out hover:shadow-lg hover:translate-y-[-4px] group`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="mb-4 p-3 rounded-xl inline-block bg-card shadow-sm">
                <div className={`transform transition-transform duration-300 ${hoveredCard === index ? 'scale-110 rotate-3' : ''}`}>
                  {integration.icon}
                </div>
              </div>
              <h3 className="text-xl font-medium mb-2 group-hover:text-primary transition-colors flex items-center">
                {integration.name}
                <ExternalLink className={`ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              </h3>
              <p className="text-muted-foreground">{integration.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Integrations;
