
import React from 'react';
import { Activity, GitBranch, History, Search, FileInput, BarChart3, Code, Network, Lock, Lightbulb } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const tracingFeatures = [
  {
    title: "End-to-End Tracing",
    description: "Capture the complete AI application lifecycle with distributed tracing",
    icon: <Activity className="h-12 w-12 text-primary mb-4" />
  },
  {
    title: "Chain Visualization",
    description: "Visualize complex LLM chains and understand dependencies",
    icon: <GitBranch className="h-12 w-12 text-primary mb-4" />
  },
  {
    title: "Observability",
    description: "Monitor latency, token usage, and performance metrics",
    icon: <BarChart3 className="h-12 w-12 text-primary mb-4" />
  },
  {
    title: "Query & Search",
    description: "Find specific traces with powerful semantic search capabilities",
    icon: <Search className="h-12 w-12 text-primary mb-4" />
  }
];

const useCases = [
  {
    title: "Debugging",
    description: "Identify and fix issues in complex AI workflows with detailed traces",
    icon: <Code className="h-10 w-10 text-primary" />
  },
  {
    title: "Performance Optimization",
    description: "Analyze latency and resource usage to optimize your AI applications",
    icon: <History className="h-10 w-10 text-primary" />
  },
  {
    title: "Compliance & Audit",
    description: "Maintain comprehensive records for regulatory requirements and audits",
    icon: <FileInput className="h-10 w-10 text-primary" />
  },
  {
    title: "Model Evaluation",
    description: "Compare models and versions with detailed performance metrics",
    icon: <Lightbulb className="h-10 w-10 text-primary" />
  }
];

const codeExamples = {
  python: `
# OpenInference tracing with Python
from openinference.instrumentation.openai import OpenAIInstrumentor
from opentelemetry.sdk.trace import TracerProvider

# Set up the tracer provider
tracer_provider = TracerProvider()
trace.set_tracer_provider(tracer_provider)

# Instrument OpenAI client
OpenAIInstrumentor().instrument()

# Use OpenAI as normal - all calls are now traced!
client = OpenAI()
response = client.chat.completions.create(
    model="gpt-4",
    messages=[{"role": "user", "content": "Hello!"}]
)`,
  typescript: `
// OpenInference tracing with TypeScript
import { OpenAIInstrumentor } from '@openinference/instrumentation-openai';
import { NodeTracerProvider } from '@opentelemetry/sdk-trace-node';

// Set up the tracer provider
const provider = new NodeTracerProvider();
provider.register();

// Instrument OpenAI client
const instrumentor = new OpenAIInstrumentor();
instrumentor.instrument();

// Use OpenAI as normal - all calls are now traced!
const openai = new OpenAI();
const response = await openai.chat.completions.create({
  model: "gpt-4",
  messages: [{ role: "user", content: "Hello!" }]
});`
};

const OpenInferenceFeatures = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-background to-secondary/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-50">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full filter blur-[100px]"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-agent/5 rounded-full filter blur-[100px]"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Network className="h-4 w-4 text-primary mr-2" />
            <span className="text-sm font-medium text-primary">OpenInference Integration</span>
          </div>
          
          <h2 className="font-bold mb-4 text-4xl">
            Trace and Debug Your
            <span className="text-gradient"> AI Applications</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            End-to-end observability for LLMs and AI chains with OpenInference
          </p>
        </div>

        {/* Feature highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {tracingFeatures.map((feature, index) => (
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
        
        {/* Trace Visualization */}
        <div className="mb-20 bg-card border border-border rounded-xl p-8 shadow-lg overflow-hidden">
          <h3 className="text-2xl font-medium mb-6 text-center">Trace Visualization Demo</h3>
          <div className="relative rounded-lg overflow-hidden bg-muted p-4 border border-border">
            <div className="flex items-start space-x-4 mb-4">
              <div className="min-w-40 bg-background p-3 rounded-lg border border-border">
                <p className="font-medium">User Query</p>
                <p className="text-sm text-muted-foreground mt-2">Summarize the quarterly financial report</p>
              </div>
              <div className="flex-1 h-20 border-l-2 border-dashed border-primary/30 relative">
                <div className="absolute left-0 top-0 w-3 h-3 bg-primary rounded-full -ml-[7px]"></div>
                <div className="absolute left-0 bottom-0 w-3 h-3 bg-primary rounded-full -ml-[7px]"></div>
                <div className="pl-6 pt-1">
                  <div className="bg-primary/10 p-2 rounded-lg inline-block mb-1">
                    <code className="text-xs">duration: 345ms</code>
                  </div>
                  <div className="text-xs text-muted-foreground">trace_id: 98fa6cd2ff3d...</div>
                </div>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 pl-12 mb-4">
              <div className="min-w-40 bg-background p-3 rounded-lg border border-border">
                <p className="font-medium">Document Retrieval</p>
                <p className="text-xs text-muted-foreground mt-2">Retrieved 4 documents (Q3_report.pdf, financial_summary.xlsx...)</p>
              </div>
              <div className="flex-1 h-16 border-l-2 border-dashed border-agent/50 relative">
                <div className="absolute left-0 top-0 w-3 h-3 bg-agent rounded-full -ml-[7px]"></div>
                <div className="absolute left-0 bottom-0 w-3 h-3 bg-agent rounded-full -ml-[7px]"></div>
                <div className="pl-6 pt-1">
                  <div className="bg-agent/10 p-2 rounded-lg inline-block mb-1">
                    <code className="text-xs">duration: 78ms</code>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 pl-12 mb-4">
              <div className="min-w-40 bg-background p-3 rounded-lg border border-border">
                <p className="font-medium">LLM Completion</p>
                <p className="text-xs text-muted-foreground mt-2">model: gpt-4, tokens: 2456</p>
              </div>
              <div className="flex-1 h-16 border-l-2 border-dashed border-flow/50 relative">
                <div className="absolute left-0 top-0 w-3 h-3 bg-flow rounded-full -ml-[7px]"></div>
                <div className="absolute left-0 bottom-0 w-3 h-3 bg-flow rounded-full -ml-[7px]"></div>
                <div className="pl-6 pt-1">
                  <div className="bg-flow/10 p-2 rounded-lg inline-block mb-1">
                    <code className="text-xs">duration: 245ms</code>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 pl-12">
              <div className="min-w-40 bg-background p-3 rounded-lg border border-border">
                <p className="font-medium">Response Formatting</p>
                <p className="text-xs text-muted-foreground mt-2">markdown format, sections: 3</p>
              </div>
              <div className="flex-1 h-16 border-l-2 border-dashed border-primary/30 relative">
                <div className="absolute left-0 top-0 w-3 h-3 bg-primary rounded-full -ml-[7px]"></div>
                <div className="absolute left-0 bottom-0 w-3 h-3 bg-primary rounded-full -ml-[7px]"></div>
                <div className="pl-6 pt-1">
                  <div className="bg-primary/10 p-2 rounded-lg inline-block mb-1">
                    <code className="text-xs">duration: 22ms</code>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Use Cases Carousel */}
        <div className="mb-20">
          <h3 className="text-2xl font-medium mb-6 text-center">Common Use Cases</h3>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="mx-auto max-w-5xl"
          >
            <CarouselContent>
              {useCases.map((useCase, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2 pl-4">
                  <Card className="border border-border bg-card/60 backdrop-blur-sm hover:shadow-xl transition-all duration-500 h-full">
                    <CardContent className="p-8 flex flex-col h-full">
                      <div className="bg-primary/10 p-4 rounded-full w-fit mb-6">
                        {useCase.icon}
                      </div>
                      <h4 className="text-xl font-medium mb-3">{useCase.title}</h4>
                      <p className="text-muted-foreground">{useCase.description}</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-6">
              <CarouselPrevious className="relative inset-auto -left-0 top-0 translate-y-0 bg-background/80 backdrop-blur-sm" />
              <CarouselNext className="relative inset-auto -right-0 top-0 translate-y-0 bg-background/80 backdrop-blur-sm" />
            </div>
          </Carousel>
        </div>
        
        {/* Code Examples */}
        <div className="bg-card border border-border rounded-xl overflow-hidden shadow-lg">
          <h3 className="text-2xl font-medium p-6 text-center border-b border-border">Get Started in Minutes</h3>
          <Tabs defaultValue="python" className="p-6">
            <TabsList className="mb-4 w-full sm:w-auto">
              <TabsTrigger value="python">Python</TabsTrigger>
              <TabsTrigger value="typescript">TypeScript</TabsTrigger>
            </TabsList>
            <TabsContent value="python" className="rounded-lg bg-muted/50 p-4 overflow-auto">
              <pre className="text-sm">
                <code>{codeExamples.python}</code>
              </pre>
            </TabsContent>
            <TabsContent value="typescript" className="rounded-lg bg-muted/50 p-4 overflow-auto">
              <pre className="text-sm">
                <code>{codeExamples.typescript}</code>
              </pre>
            </TabsContent>
          </Tabs>
          <div className="p-6 border-t border-border bg-muted/30">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <p className="text-sm text-muted-foreground">
                OpenInference is an open standard for AI observability based on OpenTelemetry
              </p>
              <a 
                href="https://arize-ai.github.io/openinference/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                <Lock className="mr-2 h-4 w-4" />
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpenInferenceFeatures;
