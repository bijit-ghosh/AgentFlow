
import React, { useEffect, useRef, useState } from 'react';
import { Play, PauseCircle, RotateCw, Settings, Maximize2, Minimize2, Bot, Zap, Workflow } from 'lucide-react';
import { workflowTemplates } from '@/data/workflowTemplates';

const WorkflowDemo = () => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const [activePulse, setActivePulse] = useState<number | null>(null);
  const [selectedTemplate, setSelectedTemplate] = useState(workflowTemplates[0]);

  // Function to draw the connections between nodes
  const drawConnections = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Clear previous connections
    const existingLines = canvas.querySelectorAll('.connection');
    existingLines.forEach(line => line.remove());

    // Draw new connections
    selectedTemplate.connections.forEach((connection, index) => {
      const fromNode = document.getElementById(connection.from);
      const toNode = document.getElementById(connection.to);
      
      if (fromNode && toNode) {
        const fromRect = fromNode.getBoundingClientRect();
        const toRect = toNode.getBoundingClientRect();
        const canvasRect = canvas.getBoundingClientRect();
        
        // Calculate center points
        const fromX = fromRect.left + fromRect.width / 2 - canvasRect.left;
        const fromY = fromRect.top + fromRect.height / 2 - canvasRect.top;
        const toX = toRect.left + toRect.width / 2 - canvasRect.left;
        const toY = toRect.top + toRect.height / 2 - canvasRect.top;
        
        // Create SVG path
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        const controlPointX = (fromX + toX) / 2;
        const controlPointY = (fromY + toY) / 2 - 30;
        
        // Define path
        path.setAttribute('d', `M ${fromX} ${fromY} Q ${controlPointX} ${controlPointY}, ${toX} ${toY}`);
        path.setAttribute('fill', 'none');
        path.setAttribute('class', `connection ${connection.active ? 'connection-active' : 'connection-line'}`);
        
        // Create animation if connection is active
        if (connection.active) {
          const animateCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
          animateCircle.setAttribute('r', '4');
          animateCircle.setAttribute('fill', 'hsl(var(--primary))');
          
          const animateMotion = document.createElementNS('http://www.w3.org/2000/svg', 'animateMotion');
          animateMotion.setAttribute('dur', `${1.5 + index * 0.5}s`);
          animateMotion.setAttribute('repeatCount', 'indefinite');
          animateMotion.setAttribute('path', `M ${fromX} ${fromY} Q ${controlPointX} ${controlPointY}, ${toX} ${toY}`);
          
          animateCircle.appendChild(animateMotion);
          
          // Create SVG element to hold the path and animation
          const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
          svg.setAttribute('class', 'connection absolute inset-0 z-0 pointer-events-none');
          svg.setAttribute('width', '100%');
          svg.setAttribute('height', '100%');
          
          svg.appendChild(path);
          svg.appendChild(animateCircle);
          canvas.appendChild(svg);
        } else {
          // Just add the path for inactive connections
          const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
          svg.setAttribute('class', 'connection absolute inset-0 z-0 pointer-events-none');
          svg.setAttribute('width', '100%');
          svg.setAttribute('height', '100%');
          
          svg.appendChild(path);
          canvas.appendChild(svg);
        }
      }
    });
  };

  useEffect(() => {
    // Initial draw
    drawConnections();
    
    // Redraw on resize
    const handleResize = () => {
      drawConnections();
    };
    
    window.addEventListener('resize', handleResize);
    
    // Set up animation for connection pulses
    const interval = setInterval(() => {
      if (isPlaying) {
        // Randomly toggle some connections
        const newConnections = [...selectedTemplate.connections];
        const randomIndex = Math.floor(Math.random() * selectedTemplate.connections.length);
        newConnections[randomIndex].active = !newConnections[randomIndex].active;
        
        // Pulse effect for nodes
        const randomNodeIndex = Math.floor(Math.random() * selectedTemplate.nodes.length);
        setActivePulse(randomNodeIndex);
        setTimeout(() => setActivePulse(null), 1000);
        
        // Update node appearances based on connections
        selectedTemplate.nodes.forEach((node, idx) => {
          const nodeElement = document.getElementById(node.id);
          if (nodeElement) {
            const isActive = selectedTemplate.connections.some(
              c => (c.from === node.id || c.to === node.id) && c.active
            );
            
            if (isActive || idx === randomNodeIndex) {
              nodeElement.classList.add('scale-105', 'shadow-md');
              nodeElement.classList.remove('scale-100', 'shadow');
            } else {
              nodeElement.classList.add('scale-100', 'shadow');
              nodeElement.classList.remove('scale-105', 'shadow-md');
            }
          }
        });
        
        drawConnections();
      }
    }, 2000);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval(interval);
    };
  }, [isPlaying, selectedTemplate]);
  
  return (
    <section id="workflow" className="py-24">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-bold mb-4">
            Visualize Your 
            <span className="text-gradient"> Agent Workflows</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Build complex multi-agent systems with our intuitive visual workflow editor.
          </p>
        </div>
        
        {/* Template Selection */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {workflowTemplates.map((template) => {
            const Icon = template.icon;
            return (
              <button
                key={template.id}
                onClick={() => setSelectedTemplate(template)}
                className={`p-4 rounded-xl border transition-all duration-300 hover:border-primary/50 hover:bg-primary/5 flex flex-col items-center gap-2 ${
                  selectedTemplate.id === template.id ? 'border-primary bg-primary/10' : 'border-border'
                }`}
              >
                <Icon className={`h-6 w-6 ${selectedTemplate.id === template.id ? 'text-primary' : 'text-muted-foreground'}`} />
                <span className="text-sm font-medium">{template.title}</span>
              </button>
            );
          })}
        </div>
        
        <div className={`relative mx-auto transition-all duration-500 ease-in-out ${isExpanded ? 'max-w-6xl' : 'max-w-4xl'}`}>
          <div className="rounded-2xl border border-border p-8 bg-card shadow-xl overflow-hidden">
            <div className="flex items-center justify-between mb-6 pb-4 border-b">
              <div className="flex items-center space-x-2">
                <h3 className="font-medium text-lg">{selectedTemplate.title}</h3>
                <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800 animate-pulse-subtle">Active</span>
              </div>
              <div className="flex items-center space-x-3">
                <button 
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-2 rounded-lg hover:bg-secondary transition-colors"
                  aria-label={isPlaying ? "Pause workflow" : "Play workflow"}
                >
                  {isPlaying ? <PauseCircle size={20} /> : <Play size={20} />}
                </button>
                <button 
                  className="p-2 rounded-lg hover:bg-secondary transition-colors"
                  aria-label="Reset workflow"
                >
                  <RotateCw size={20} />
                </button>
                <button 
                  className="p-2 rounded-lg hover:bg-secondary transition-colors"
                  aria-label="Settings"
                >
                  <Settings size={20} />
                </button>
                <button 
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="p-2 rounded-lg hover:bg-secondary transition-colors"
                  aria-label={isExpanded ? "Minimize" : "Maximize"}
                >
                  {isExpanded ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
                </button>
              </div>
            </div>
            
            <div 
              ref={canvasRef} 
              className={`relative bg-secondary/30 rounded-xl p-4 transition-all duration-500 ease-in-out ${isExpanded ? 'h-[500px]' : 'h-[400px]'}`}
            >
              {selectedTemplate.nodes.map((node, index) => (
                <div
                  id={node.id}
                  key={node.id}
                  className={`node node-${node.type} absolute transition-all duration-300 ease-in-out ${activePulse === index ? 'animate-pulse-subtle ring-2 ring-offset-2 ring-offset-background' : ''}`}
                  style={{ 
                    left: `${node.x}px`, 
                    top: `${node.y}px`,
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  <div className="flex items-center space-x-2">
                    {node.type === 'agent' && <Bot size={18} className="text-agent" />}
                    {node.type === 'processing' && <Zap size={18} className="text-primary" />}
                    {node.type === 'workflow' && <Workflow size={18} className="text-flow" />}
                    <span>{node.label}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 flex items-center justify-between text-sm text-muted-foreground">
              <p className="text-base text-muted-foreground">{selectedTemplate.description}</p>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 w-64 h-64 bg-flow/10 rounded-full filter blur-3xl"></div>
          <div className="absolute -bottom-4 -left-4 w-64 h-64 bg-agent/10 rounded-full filter blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowDemo;
