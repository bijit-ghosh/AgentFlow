
import React from 'react';
import { GitBranch, Network, Code, Workflow, Share, Puzzle, Component, Zap } from 'lucide-react';

// Define the integrations data
const integrations = [
  {
    name: "CrewAI",
    description: "Structured workflows for multi-agent collaboration",
    icon: <Network className="h-8 w-8 text-flow" />,
    link: "https://github.com/crewAIInc/crewAI"
  },
  {
    name: "LangGraph",
    description: "Event-driven execution with LangChain's framework",
    icon: <GitBranch className="h-8 w-8 text-agent" />,
    link: "https://github.com/langchain-ai/langgraph"
  },
  {
    name: "ReAct",
    description: "Dynamic reasoning and acting for adaptive AI agents",
    icon: <Code className="h-8 w-8 text-primary" />,
    link: "https://react-lm.github.io/"
  },
  {
    name: "AutoGen",
    description: "Conversational framework for building multi-agent systems",
    icon: <Workflow className="h-8 w-8 text-flow" />,
    link: "https://github.com/microsoft/autogen"
  },
  {
    name: "LangChain",
    description: "Framework for developing applications powered by language models",
    icon: <Share className="h-8 w-8 text-agent" />,
    link: "https://github.com/langchain-ai/langchain"
  },
  {
    name: "DSPy",
    description: "Programming framework for LLM-powered systems",
    icon: <Puzzle className="h-8 w-8 text-primary" />,
    link: "https://github.com/stanfordnlp/dspy"
  },
  {
    name: "LCEL",
    description: "LangChain Expression Language for composable applications",
    icon: <Component className="h-8 w-8 text-flow" />,
    link: "https://python.langchain.com/docs/expression_language/"
  },
  {
    name: "LLAMA Index",
    description: "Data framework for LLM-based applications",
    icon: <Zap className="h-8 w-8 text-agent" />,
    link: "https://github.com/jerryjliu/llama_index"
  }
];

const Integrations = () => {
  return (
    <section id="integrations" className="py-24 bg-background">
      <div className="section-container">
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
              className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 ease-in-out hover:translate-y-[-4px] group"
            >
              <div className="mb-4 p-2 rounded-lg inline-block bg-secondary">
                {integration.icon}
              </div>
              <h3 className="text-xl font-medium mb-2 group-hover:text-primary transition-colors">
                {integration.name}
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
