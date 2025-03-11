
import React, { useEffect, useRef } from 'react';
import { Play, PauseCircle, RotateCw, Settings, Database, Bot, Zap, Workflow, ArrowRight } from 'lucide-react';

const nodes = [
  { id: 'node1', type: 'agent', label: 'Data Retrieval Agent', x: 100, y: 150 },
  { id: 'node2', type: 'processing', label: 'Data Processing', x: 320, y: 80 },
  { id: 'node3', type: 'workflow', label: 'Analysis Workflow', x: 320, y: 220 },
  { id: 'node4', type: 'agent', label: 'Reporting Agent', x: 540, y: 150 }
];

const connections = [
  { from: 'node1', to: 'node2', active: true },
  { from: 'node1', to: 'node3', active: false },
  { from: 'node2', to: 'node4', active: true },
  { from: 'node3', to: 'node4', active: true }
];

const WorkflowDemo = () => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = React.useState(true);

  // Function to draw the connections between nodes
  const drawConnections = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Clear previous connections
    const existingLines = canvas.querySelectorAll('.connection');
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
        const newConnections = [...connections];
        const randomIndex = Math.floor(Math.random() * connections.length);
        newConnections[randomIndex].active = !newConnections[randomIndex].active;
        
        // Update node appearances based on connections
        nodes.forEach(node => {
          const nodeElement = document.getElementById(node.id);
          if (nodeElement) {
            const isActive = connections.some(
              c => (c.from === node.id || c.to === node.id) && c.active
            );
            
            if (isActive) {
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
  }, [isPlaying]);
  
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
        
        <div className="relative max-w-4xl mx-auto">
          <div className="rounded-2xl border border-border p-8 bg-card shadow-xl overflow-hidden">
            <div className="flex items-center justify-between mb-6 pb-4 border-b">
              <div className="flex items-center space-x-2">
                <h3 className="font-medium text-lg">Customer Support Workflow</h3>
                <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">Active</span>
              </div>
              <div className="flex items-center space-x-3">
                <button 
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-2 rounded-lg hover:bg-secondary transition-colors"
                >
                  {isPlaying ? <PauseCircle size={20} /> : <Play size={20} />}
                </button>
                <button className="p-2 rounded-lg hover:bg-secondary transition-colors">
                  <RotateCw size={20} />
                </button>
                <button className="p-2 rounded-lg hover:bg-secondary transition-colors">
                  <Settings size={20} />
                </button>
              </div>
            </div>
            
            <div 
              ref={canvasRef} 
              className="relative h-[400px] bg-secondary/30 rounded-xl p-4"
            >
              {nodes.map((node) => (
                <div
                  id={node.id}
                  key={node.id}
                  className={`node node-${node.type} absolute transition-all duration-300 ease-in-out`}
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
              <div className="flex items-center space-x-1">
                <Database size={14} />
                <span>Last updated: Today at 2:30 PM</span>
              </div>
              <span>Processing time: 1.2s</span>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 w-64 h-64 bg-flow/10 rounded-full filter blur-3xl"></div>
          <div className="absolute -bottom-4 -left-4 w-64 h-64 bg-agent/10 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="mt-12 text-center">
          <a href="/demo" className="button-flow inline-flex items-center">
            Explore More Workflow Templates <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default WorkflowDemo;
