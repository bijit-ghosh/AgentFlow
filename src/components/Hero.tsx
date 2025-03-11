
import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Sparkles, Bot, Zap, Shield, TrendingUp, Gauge, Workflow, ArrowUpRight } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeNode, setActiveNode] = useState<number | null>(null);

  // Workflow nodes definition for dynamic visualization
  const workflowNodes = [
    { id: 'node1', label: 'Data Input', x: 20, y: 30, type: 'input' },
    { id: 'node2', label: 'Agent Processing', x: 45, y: 15, type: 'agent' },
    { id: 'node3', label: 'Analysis', x: 70, y: 35, type: 'workflow' },
    { id: 'node4', label: 'Decision', x: 80, y: 65, type: 'processing' },
    { id: 'node5', label: 'Output', x: 35, y: 70, type: 'output' },
  ];

  // Connections between nodes
  const connections = [
    { from: 'node1', to: 'node2', active: false },
    { from: 'node2', to: 'node3', active: false },
    { from: 'node3', to: 'node4', active: false },
    { from: 'node4', to: 'node5', active: false },
    { from: 'node5', to: 'node1', active: false },
  ];

  const drawConnections = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Clear previous connections
    const existingLines = canvas.querySelectorAll('.connection-line');
    existingLines.forEach(line => line.remove());

    // Draw new connections
    connections.forEach((connection, index) => {
      const fromNode = document.getElementById(connection.from);
      const toNode = document.getElementById(connection.to);
      
      if (fromNode && toNode) {
        const fromRect = fromNode.getBoundingClientRect();
        const toRect = toNode.getBoundingClientRect();
        const canvasRect = canvas.getBoundingClientRect();
        
        // Calculate center points
        const fromX = (fromRect.left + fromRect.width / 2 - canvasRect.left) / canvasRect.width * 100;
        const fromY = (fromRect.top + fromRect.height / 2 - canvasRect.top) / canvasRect.height * 100;
        const toX = (toRect.left + toRect.width / 2 - canvasRect.left) / canvasRect.width * 100;
        const toY = (toRect.top + toRect.height / 2 - canvasRect.top) / canvasRect.height * 100;
        
        // Create SVG path
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        const controlPointX = (fromX + toX) / 2;
        const controlPointY = (fromY + toY) / 2 - 15;
        
        // Define path
        path.setAttribute('d', `M ${fromX}% ${fromY}% Q ${controlPointX}% ${controlPointY}%, ${toX}% ${toY}%`);
        path.setAttribute('fill', 'none');
        path.setAttribute('class', `connection-line ${connection.active ? 'connection-active' : ''}`);
        
        // Create animation if connection is active
        if (connection.active) {
          const animateCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
          animateCircle.setAttribute('r', '3');
          animateCircle.setAttribute('fill', 'hsl(var(--primary))');
          animateCircle.setAttribute('filter', 'drop-shadow(0 0 2px hsl(var(--primary)))');
          
          const animateMotion = document.createElementNS('http://www.w3.org/2000/svg', 'animateMotion');
          animateMotion.setAttribute('dur', `${1.5 + index * 0.2}s`);
          animateMotion.setAttribute('repeatCount', 'indefinite');
          animateMotion.setAttribute('path', `M ${fromX}% ${fromY}% Q ${controlPointX}% ${controlPointY}%, ${toX}% ${toY}%`);
          
          animateCircle.appendChild(animateMotion);
          
          // Create SVG element to hold the path and animation
          const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
          svg.setAttribute('class', 'connection-line absolute inset-0 z-0 pointer-events-none');
          svg.setAttribute('width', '100%');
          svg.setAttribute('height', '100%');
          
          svg.appendChild(path);
          svg.appendChild(animateCircle);
          canvas.appendChild(svg);
        } else {
          // Just add the path for inactive connections
          const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
          svg.setAttribute('class', 'connection-line absolute inset-0 z-0 pointer-events-none');
          svg.setAttribute('width', '100%');
          svg.setAttribute('height', '100%');
          
          svg.appendChild(path);
          canvas.appendChild(svg);
        }
      }
    });
  };

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
    
    // Initialize workflow animation
    drawConnections();
    
    // Set up animation for workflow connections
    let currentActiveConnection = -1;
    const workflowInterval = setInterval(() => {
      // Reset previous connection
      if (currentActiveConnection >= 0) {
        connections[currentActiveConnection].active = false;
      }
      
      // Move to next connection
      currentActiveConnection = (currentActiveConnection + 1) % connections.length;
      connections[currentActiveConnection].active = true;
      
      // Update the active node
      setActiveNode(currentActiveConnection);
      
      // Redraw connections
      drawConnections();
    }, 2000);
    
    return () => {
      if (heroElement) {
        heroElement.removeEventListener('mousemove', handleMouseMove);
      }
      clearTimeout(timer);
      clearInterval(workflowInterval);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      drawConnections();
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div 
      ref={heroRef}
      className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20"
    >
      {/* Enhanced background gradient with more vibrant colors */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/70 opacity-70 z-0"
        style={{
          backgroundPosition: `${50 + mousePosition.x * 15}% ${50 + mousePosition.y * 15}%`,
        }}
      ></div>
      
      {/* Enhanced background blobs with more vibrant colors and animations */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-flow/20 rounded-full filter blur-3xl animate-pulse-subtle"></div>
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-agent/20 rounded-full filter blur-3xl animate-pulse-subtle"></div>
      <div className="absolute top-1/3 right-1/3 w-40 h-40 bg-primary/20 rounded-full filter blur-2xl animate-float"></div>
      <div className="absolute bottom-1/3 left-1/3 w-40 h-40 bg-primary/10 rounded-full filter blur-2xl animate-float delay-700"></div>
      
      <div className="section-container relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl space-y-8 animate-fade-in">
            <div className="inline-flex rounded-full px-3 py-1 bg-secondary/80 backdrop-blur-sm border border-border shadow-sm">
              <span className="inline-flex items-center text-sm font-medium bg-gradient-to-r from-primary to-flow bg-clip-text text-transparent">
                Introducing AgentFlow <Sparkles className="ml-1 h-4 w-4 text-yellow-400" />
              </span>
            </div>
            
            <h1 className="font-bold tracking-tight text-5xl md:text-6xl lg:text-7xl">
              Orchestrate AI Agents with 
              <span className="bg-gradient-to-r from-primary via-flow to-agent bg-clip-text text-transparent"> Effortless Precision</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Build, manage, and scale intelligent agent workflows across your entire business. Automate complex tasks and integrate seamlessly with your existing systems.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-6">
              <a 
                href="/signup" 
                className="button-primary inline-flex items-center transform hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-primary/20"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a 
                href="#demo" 
                className="button-secondary inline-flex items-center hover:bg-secondary/80 transition-colors duration-300 border border-border/30 backdrop-blur-sm"
              >
                Watch Demo
              </a>
            </div>
            
            <div className="pt-10">
              <div className="relative">
                <div className="flex flex-col items-center md:items-start space-y-6">
                  <span className="inline-block px-6 py-4 bg-gradient-to-r from-primary/10 to-flow/10 rounded-xl border border-flow/20 shadow-lg backdrop-blur-sm">
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight bg-gradient-to-r from-primary via-flow to-agent bg-clip-text text-transparent">
                      Powering Next-Gen AI Solutions
                    </h3>
                  </span>
                  
                  <div className="relative group transform transition-all duration-300 hover:scale-[1.01]">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 via-flow/30 to-agent/30 rounded-xl blur-md group-hover:blur-lg transition-all duration-300"></div>
                    <div className="relative px-8 py-5 bg-gradient-to-r from-background/90 to-background/80 rounded-xl border border-white/10 shadow-2xl backdrop-blur-md">
                      <span className="block text-2xl md:text-3xl font-extrabold">
                        <span className="bg-gradient-to-r from-primary to-flow bg-clip-text text-transparent">
                          Transform your business with 
                          <span className="mx-2 font-black text-flow uppercase tracking-wide">REAL RESULTS</span>
                          and
                          <span className="relative ml-2 font-black text-3xl">
                            <span className="absolute -inset-1 bg-gradient-to-r from-flow/50 to-agent/50 blur-md rounded-lg animate-pulse-subtle"></span>
                            <span className="relative z-10 uppercase bg-gradient-to-r from-flow to-agent bg-clip-text text-transparent underline decoration-flow decoration-4 underline-offset-4">MEASURABLE IMPACT</span>
                          </span>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col gap-5 mt-8">
                  <div className="flex items-center gap-4 group hover:translate-x-1 transition-transform duration-300">
                    <div className="p-3 rounded-full bg-primary/15 group-hover:bg-primary/20 transition-colors duration-300 shadow-sm">
                      <Bot className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-sm font-medium">Advanced AI Agent Orchestration <span className="font-medium text-primary ml-1">• 87% faster task completion</span></span>
                  </div>
                  <div className="flex items-center gap-4 group hover:translate-x-1 transition-transform duration-300">
                    <div className="p-3 rounded-full bg-flow/15 group-hover:bg-flow/20 transition-colors duration-300 shadow-sm">
                      <Zap className="h-5 w-5 text-flow" />
                    </div>
                    <span className="text-sm font-medium">Real-time Processing & Automation <span className="font-medium text-flow ml-1">• 63% cost reduction</span></span>
                  </div>
                  <div className="flex items-center gap-4 group hover:translate-x-1 transition-transform duration-300">
                    <div className="p-3 rounded-full bg-agent/15 group-hover:bg-agent/20 transition-colors duration-300 shadow-sm">
                      <Shield className="h-5 w-5 text-agent" />
                    </div>
                    <span className="text-sm font-medium">Enterprise-grade Security & Control <span className="font-medium text-agent ml-1">• 99.9% uptime</span></span>
                  </div>
                  <div className="flex items-center gap-4 group hover:translate-x-1 transition-transform duration-300">
                    <div className="p-3 rounded-full bg-primary/15 group-hover:bg-primary/20 transition-colors duration-300 shadow-sm">
                      <TrendingUp className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-sm font-medium">ROI & Performance Tracking <span className="font-medium text-primary ml-1">• 4.2x average ROI</span></span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Dynamic workflow visualization - Small floating box */}
            <div className="hidden md:block mt-8 relative">
              <div className="absolute -bottom-20 right-0 p-4 bg-background/80 backdrop-blur-md border border-border/20 rounded-xl shadow-xl animate-float max-w-[200px]">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium">Live Activity</span>
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                </div>
                <div className="text-2xl font-bold text-gradient">+127%</div>
                <div className="text-xs text-muted-foreground">Workflow efficiency</div>
                <ArrowUpRight className="absolute bottom-3 right-3 h-4 w-4 text-primary/60" />
              </div>
            </div>
          </div>
          
          <div className="relative">
            {/* Dynamic workflow visualization */}
            <div 
              ref={canvasRef}
              className="w-full h-[350px] md:h-[450px] relative rounded-2xl border border-border/50 shadow-xl backdrop-blur-sm bg-gradient-to-tr from-background/50 via-secondary/20 to-secondary/30 overflow-hidden animate-fade-in"
            >
              {/* Workflow nodes */}
              {workflowNodes.map((node, index) => (
                <div
                  id={node.id}
                  key={node.id}
                  className={`absolute p-3 rounded-lg border shadow-md transition-all duration-300 ease-in-out
                    ${node.type === 'agent' ? 'bg-agent/10 border-agent/30' : ''}
                    ${node.type === 'workflow' ? 'bg-flow/10 border-flow/30' : ''}
                    ${node.type === 'processing' ? 'bg-primary/10 border-primary/30' : ''}
                    ${node.type === 'input' ? 'bg-purple-500/10 border-purple-500/30' : ''}
                    ${node.type === 'output' ? 'bg-amber-500/10 border-amber-500/30' : ''}
                    ${activeNode === index ? 'scale-110 ring-2 ring-offset-2 ring-offset-background/10 z-10' : 'scale-100'}
                  `}
                  style={{ 
                    left: `${node.x}%`, 
                    top: `${node.y}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  <div className="text-xs md:text-sm whitespace-nowrap">{node.label}</div>
                </div>
              ))}
            </div>
            
            {/* Image placeholder underneath workflow visualization */}
            <div 
              ref={imageRef} 
              className="absolute -bottom-20 -right-20 w-60 h-60 md:w-72 md:h-72 transition-transform duration-300 ease-out animate-float opacity-50"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-flow/20 to-agent/20 rounded-full filter blur-3xl"></div>
            </div>
            
            {/* Floating badges */}
            <div className="absolute top-6 right-6 px-3 py-1 rounded-full text-xs bg-primary/10 border border-primary/20 animate-float backdrop-blur-sm shadow-sm">
              <span className="text-primary">Advanced Analytics</span>
            </div>
            <div className="absolute bottom-12 left-6 px-3 py-1 rounded-full text-xs bg-agent/10 border border-agent/20 animate-float delay-700 backdrop-blur-sm shadow-sm">
              <span className="text-agent">AI Integration</span>
            </div>
            
            {/* Enhanced decorative elements */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-flow/30 rounded-full filter blur-xl animate-pulse-subtle"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-agent/30 rounded-full filter blur-xl animate-pulse-subtle"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/15 rounded-full filter blur-3xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
