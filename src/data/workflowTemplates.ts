
import { Activity, TrendingUp, FileText, Server, Database, Network, BookText, Search } from 'lucide-react';

export type WorkflowTemplate = {
  id: string;
  title: string;
  description: string;
  icon: typeof Activity;
  nodes: Array<{
    id: string;
    type: 'agent' | 'processing' | 'workflow';
    label: string;
    x: number;
    y: number;
  }>;
  connections: Array<{
    from: string;
    to: string;
    active: boolean;
  }>;
};

export const workflowTemplates: WorkflowTemplate[] = [
  {
    id: 'trading',
    title: 'Financial Trading Workflow',
    description: 'Automated trading strategy with market analysis and risk management',
    icon: TrendingUp,
    nodes: [
      { id: 'market', type: 'agent', label: 'Market Analysis Agent', x: 100, y: 150 },
      { id: 'risk', type: 'processing', label: 'Risk Assessment', x: 320, y: 80 },
      { id: 'trading', type: 'workflow', label: 'Trading Strategy', x: 320, y: 220 },
      { id: 'execution', type: 'agent', label: 'Trade Execution', x: 540, y: 150 }
    ],
    connections: [
      { from: 'market', to: 'risk', active: true },
      { from: 'market', to: 'trading', active: true },
      { from: 'risk', to: 'execution', active: false },
      { from: 'trading', to: 'execution', active: true }
    ]
  },
  {
    id: 'post-trading',
    title: 'Post-Trade Processing',
    description: 'Settlement, clearing, and reporting automation',
    icon: FileText,
    nodes: [
      { id: 'trade', type: 'agent', label: 'Trade Capture', x: 100, y: 150 },
      { id: 'settlement', type: 'processing', label: 'Settlement Processing', x: 320, y: 80 },
      { id: 'clearing', type: 'workflow', label: 'Clearing System', x: 320, y: 220 },
      { id: 'reporting', type: 'agent', label: 'Regulatory Reporting', x: 540, y: 150 }
    ],
    connections: [
      { from: 'trade', to: 'settlement', active: true },
      { from: 'trade', to: 'clearing', active: true },
      { from: 'settlement', to: 'reporting', active: true },
      { from: 'clearing', to: 'reporting', active: false }
    ]
  },
  {
    id: 'data-processing',
    title: 'Data Processing Pipeline',
    description: 'Automated data extraction and analysis workflow',
    icon: Server,
    nodes: [
      { id: 'extract', type: 'agent', label: 'Data Extraction Agent', x: 100, y: 150 },
      { id: 'transform', type: 'processing', label: 'Data Transformation', x: 320, y: 80 },
      { id: 'analyze', type: 'workflow', label: 'Analysis Pipeline', x: 320, y: 220 },
      { id: 'report', type: 'agent', label: 'Reporting Agent', x: 540, y: 150 }
    ],
    connections: [
      { from: 'extract', to: 'transform', active: true },
      { from: 'transform', to: 'analyze', active: true },
      { from: 'analyze', to: 'report', active: true }
    ]
  },
  {
    id: 'research',
    title: 'Research Assistant',
    description: 'Autonomous research and analysis workflow',
    icon: Search,
    nodes: [
      { id: 'search', type: 'agent', label: 'Search Agent', x: 100, y: 150 },
      { id: 'analyze', type: 'processing', label: 'Content Analysis', x: 320, y: 80 },
      { id: 'validate', type: 'workflow', label: 'Fact Validation', x: 320, y: 220 },
      { id: 'summarize', type: 'agent', label: 'Summary Agent', x: 540, y: 150 }
    ],
    connections: [
      { from: 'search', to: 'analyze', active: true },
      { from: 'analyze', to: 'validate', active: true },
      { from: 'validate', to: 'summarize', active: true }
    ]
  },
  {
    id: 'customer-service',
    title: 'Customer Service Automation',
    description: 'Intelligent customer support workflow',
    icon: Network,
    nodes: [
      { id: 'intake', type: 'agent', label: 'Inquiry Handler', x: 100, y: 150 },
      { id: 'classify', type: 'processing', label: 'Request Classification', x: 320, y: 80 },
      { id: 'resolve', type: 'workflow', label: 'Resolution Flow', x: 320, y: 220 },
      { id: 'follow', type: 'agent', label: 'Follow-up Agent', x: 540, y: 150 }
    ],
    connections: [
      { from: 'intake', to: 'classify', active: true },
      { from: 'classify', to: 'resolve', active: true },
      { from: 'resolve', to: 'follow', active: true }
    ]
  },
  {
    id: 'content',
    title: 'Content Generation',
    description: 'Multi-agent content creation pipeline',
    icon: BookText,
    nodes: [
      { id: 'research', type: 'agent', label: 'Research Agent', x: 100, y: 150 },
      { id: 'write', type: 'processing', label: 'Content Writing', x: 320, y: 80 },
      { id: 'edit', type: 'workflow', label: 'Editorial Review', x: 320, y: 220 },
      { id: 'publish', type: 'agent', label: 'Publishing Agent', x: 540, y: 150 }
    ],
    connections: [
      { from: 'research', to: 'write', active: true },
      { from: 'write', to: 'edit', active: true },
      { from: 'edit', to: 'publish', active: true }
    ]
  },
  {
    id: 'compliance',
    title: 'Compliance Monitoring',
    description: 'Automated regulatory compliance checking',
    icon: Database,
    nodes: [
      { id: 'monitor', type: 'agent', label: 'Monitoring Agent', x: 100, y: 150 },
      { id: 'analyze', type: 'processing', label: 'Risk Analysis', x: 320, y: 80 },
      { id: 'review', type: 'workflow', label: 'Compliance Review', x: 320, y: 220 },
      { id: 'report', type: 'agent', label: 'Reporting Agent', x: 540, y: 150 }
    ],
    connections: [
      { from: 'monitor', to: 'analyze', active: true },
      { from: 'analyze', to: 'review', active: true },
      { from: 'review', to: 'report', active: true }
    ]
  },
  {
    id: 'security',
    title: 'Security Operations',
    description: 'Automated threat detection and response',
    icon: Activity,
    nodes: [
      { id: 'detect', type: 'agent', label: 'Detection Agent', x: 100, y: 150 },
      { id: 'analyze', type: 'processing', label: 'Threat Analysis', x: 320, y: 80 },
      { id: 'respond', type: 'workflow', label: 'Response Planning', x: 320, y: 220 },
      { id: 'mitigate', type: 'agent', label: 'Mitigation Agent', x: 540, y: 150 }
    ],
    connections: [
      { from: 'detect', to: 'analyze', active: true },
      { from: 'analyze', to: 'respond', active: true },
      { from: 'respond', to: 'mitigate', active: true }
    ]
  }
];
