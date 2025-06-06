
import { 
  Building,
  TrendingUp,
  TrendingDown,
  Headphones,
  Users,
  MessageSquare,
  Video,
  Mail,
  BarChart,
  LineChart,
  PieChart,
  Activity,
  Target,
  Zap,
  Settings,
  Workflow,
  Calendar,
  CheckCircle,
  Layers,
  FileText,
  Cloud,
  Upload,
  Database,
  Globe,
  DollarSign,
  Camera
} from 'lucide-react';

export const integrationTools = [
  // CRM & Sales
  { name: 'Salesforce', icon: Building, category: 'CRM', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg', color: 'from-blue-500 to-blue-600' },
  { name: 'HubSpot', icon: TrendingUp, category: 'CRM', logo: 'https://www.hubspot.com/hubfs/HubSpot_Logos/HubSpot-Inversed-Favicon.png', color: 'from-orange-500 to-orange-600' },
  { name: 'Pipedrive', icon: TrendingDown, category: 'CRM', logo: 'https://cdn.worldvectorlogo.com/logos/pipedrive.svg', color: 'from-green-500 to-green-600' },
  { name: 'Zendesk', icon: Headphones, category: 'Support', logo: '🌱', color: 'from-green-600 to-teal-600' },
  { name: 'Freshworks', icon: Users, category: 'CRM', logo: '🍃', color: 'from-green-400 to-emerald-500' },
  
  // Communication
  { name: 'Slack', icon: MessageSquare, category: 'Communication', logo: '#', color: 'from-purple-500 to-pink-500' },
  { name: 'Microsoft Teams', icon: Video, category: 'Communication', logo: '⊞', color: 'from-blue-600 to-indigo-600' },
  { name: 'WhatsApp Business', icon: MessageSquare, category: 'Communication', logo: '📱', color: 'from-green-500 to-green-600' },
  { name: 'Monday.com', icon: Calendar, category: 'Communication', logo: '◉', color: 'from-blue-500 to-purple-500' },
  
  // Email & Marketing
  { name: 'Gmail', icon: Mail, category: 'Email', logo: 'G', color: 'from-red-500 to-pink-500' },
  { name: 'Outlook', icon: Mail, category: 'Email', logo: 'O', color: 'from-blue-600 to-indigo-600' },
  { name: 'Mailchimp', icon: Mail, category: 'Marketing', logo: '🐒', color: 'from-yellow-500 to-orange-500' },
  { name: 'SendGrid', icon: Mail, category: 'Email', logo: '📮', color: 'from-blue-500 to-blue-600' },
  
  // Analytics & BI
  { name: 'Power BI', icon: BarChart, category: 'Analytics', logo: 'ᴾ', color: 'from-yellow-500 to-orange-500' },
  { name: 'Tableau', icon: LineChart, category: 'Analytics', logo: '📊', color: 'from-blue-500 to-indigo-600' },
  { name: 'Google Analytics', icon: PieChart, category: 'Analytics', logo: 'GA', color: 'from-orange-500 to-red-500' },
  { name: 'Mixpanel', icon: Activity, category: 'Analytics', logo: 'M', color: 'from-purple-500 to-pink-500' },
  { name: 'Amplitude', icon: Activity, category: 'Analytics', logo: 'A', color: 'from-blue-500 to-purple-500' },
  { name: 'Segment', icon: Target, category: 'Analytics', logo: 'S', color: 'from-green-500 to-teal-500' },
  
  // Automation & Integration
  { name: 'Zapier', icon: Zap, category: 'Automation', logo: '⚡', color: 'from-orange-500 to-red-500' },
  { name: 'Make (Integromat)', icon: Settings, category: 'Automation', logo: 'M', color: 'from-purple-500 to-indigo-500' },
  { name: 'n8n', icon: Workflow, category: 'Automation', logo: 'n8n', color: 'from-pink-500 to-purple-500' },
  
  // Project Management
  { name: 'Asana', icon: CheckCircle, category: 'Project Management', logo: '◌', color: 'from-pink-500 to-red-500' },
  { name: 'Trello', icon: Layers, category: 'Project Management', logo: '⬜', color: 'from-blue-500 to-teal-500' },
  { name: 'Notion', icon: FileText, category: 'Productivity', logo: 'N', color: 'from-gray-600 to-gray-700' },
  
  // Cloud & Storage
  { name: 'AWS', icon: Cloud, category: 'Cloud', logo: 'AWS', color: 'from-orange-500 to-yellow-500' },
  { name: 'Google Cloud', icon: Cloud, category: 'Cloud', logo: 'GCP', color: 'from-blue-500 to-green-500' },
  { name: 'Microsoft Azure', icon: Cloud, category: 'Cloud', logo: '⊞', color: 'from-blue-600 to-indigo-600' },
  { name: 'Dropbox', icon: Upload, category: 'Storage', logo: '📦', color: 'from-blue-500 to-cyan-500' },
  
  // Enterprise
  { name: 'SAP', icon: Building, category: 'ERP', logo: 'SAP', color: 'from-blue-600 to-indigo-700' },
  { name: 'Oracle', icon: Database, category: 'Database', logo: '🔴', color: 'from-red-600 to-red-700' },
  { name: 'Salesforce Service Cloud', icon: Headphones, category: 'Support', logo: '☁️', color: 'from-blue-500 to-cyan-500' },
  { name: 'ServiceNow', icon: Settings, category: 'ITSM', logo: 'SN', color: 'from-green-600 to-teal-600' },
  
  // Payment & Finance
  { name: 'Stripe', icon: Globe, category: 'Payment', logo: 'S', color: 'from-purple-600 to-indigo-600' },
  { name: 'PayPal', icon: DollarSign, category: 'Payment', logo: 'P', color: 'from-blue-500 to-cyan-500' },
  { name: 'QuickBooks', icon: FileText, category: 'Finance', logo: 'QB', color: 'from-green-500 to-blue-500' },
  
  // Social Media
  { name: 'LinkedIn', icon: Users, category: 'Social', logo: 'in', color: 'from-blue-600 to-blue-700' },
  { name: 'Facebook', icon: MessageSquare, category: 'Social', logo: 'f', color: 'from-blue-500 to-indigo-600' },
  { name: 'Twitter/X', icon: MessageSquare, category: 'Social', logo: '𝕏', color: 'from-gray-700 to-black' },
  { name: 'Instagram', icon: Camera, category: 'Social', logo: '📷', color: 'from-pink-500 to-purple-600' }
];

export const categoriesIntegrations = [
  { name: 'Todos', value: 'all', count: integrationTools.length },
  { name: 'CRM', value: 'CRM', count: integrationTools.filter(t => t.category === 'CRM').length },
  { name: 'Communication', value: 'Communication', count: integrationTools.filter(t => t.category === 'Communication').length },
  { name: 'Analytics', value: 'Analytics', count: integrationTools.filter(t => t.category === 'Analytics').length },
  { name: 'Automation', value: 'Automation', count: integrationTools.filter(t => t.category === 'Automation').length },
  { name: 'Email', value: 'Email', count: integrationTools.filter(t => t.category === 'Email').length },
  { name: 'Cloud', value: 'Cloud', count: integrationTools.filter(t => t.category === 'Cloud').length }
];
