import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Label } from '@/components/ui/label.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.jsx'
import { Alert, AlertDescription } from '@/components/ui/alert.jsx'
import { Progress } from '@/components/ui/progress.jsx'
import { 
  Bell, Phone, Users, Calendar, Mail, MessageSquare, ClipboardList, UserPlus, 
  CreditCard, Truck, BarChart3, Bot, PhoneCall, Clock, CheckCircle, AlertTriangle,
  ArrowLeft, Volume2, VolumeX, TrendingUp, Heart, Brain, Search, MapPin, 
  Smile, Frown, Meh, Zap, Shield, Database, Camera, QrCode, Navigation,
  Grid, FileText, Settings, Headphones, Video, Monitor, Package, ClipboardCheck,
  UserCheck, LogOut, Home, Briefcase, Coffee, Building, Wifi, VideoIcon,
  Mic, MicOff, Map, Star, Crown, Rocket, Sparkles,
  Lightbulb, Cpu, Network, Globe, ShieldCheck, Activity, PieChart,
  BarChart4, Workflow, BatteryCharging
} from 'lucide-react'
import './index.css'

function App() {
  const [activeCoordinator, setActiveCoordinator] = useState(null)
  const [aiAssistantActive, setAiAssistantActive] = useState(true)
  const [voiceAssistantActive, setVoiceAssistantActive] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [notifications, setNotifications] = useState([
    { id: 1, type: 'reminder', message: 'International Delegation arriving in 15 minutes', priority: 'high', time: '09:15', read: false },
    { id: 2, type: 'call', message: 'Incoming call from HVAC contractor', priority: 'medium', time: '09:12', sentiment: 'frustrated', read: false },
    { id: 3, type: 'task', message: 'Follow-up required for WO-2025-142', priority: 'low', time: '09:10', read: true },
  ])

  // Add dark mode class to document
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const coordinators = [
    {
      id: 'nichelle',
      name: 'Nichelle Naidoo',
      title: 'Reception Coordinator',
      location: '🏢 Front Desk • Durban Office',
      avatar: '👩‍💼',
      status: 'online',
      stats: { visitors: 32, deliveries: 12, calls: 45 },
      metrics: [
        { label: 'Visitor Satisfaction', value: '94%', trend: '+2%', icon: Smile, color: 'text-green-500' },
        { label: 'Check-in Speed', value: '1.2min', trend: '-0.3min', icon: Zap, color: 'text-blue-500' },
        { label: 'AI Predictions', value: '87%', trend: 'Accurate', icon: Brain, color: 'text-purple-500' }
      ],
      tools: [
        { name: 'Outlook', icon: Mail, url: 'https://outlook.office.com', category: 'Communication', featured: true },
        { name: 'Teams', icon: MessageSquare, url: 'https://teams.microsoft.com', category: 'Communication', featured: true },
        { name: 'Office 365', icon: Grid, url: 'https://office.com', category: 'Productivity', featured: false },
        { name: 'Cisco Phone', icon: Phone, url: '#', category: 'Communication', featured: true },
        { name: 'Power BI', icon: BarChart3, url: '#', category: 'Analytics', featured: false },
        { name: 'Hive Apps', icon: Briefcase, url: '#', category: 'Company Tools', featured: true },
        { name: 'Visitor System', icon: Users, url: '#', category: 'Reception', featured: true },
        { name: 'Badge Printer', icon: CreditCard, url: '#', category: 'Reception', featured: false },
        { name: 'Calendar', icon: Calendar, url: '#', category: 'Scheduling', featured: true },
        { name: 'Courier System', icon: Truck, url: '#', category: 'Logistics', featured: false },
        { name: 'Building Map', icon: MapPin, url: '#', category: 'Navigation', featured: true },
        { name: 'Meeting Rooms', icon: Video, url: '#', category: 'Facilities', featured: false },
        { name: 'Digital Signage', icon: Monitor, url: '#', category: 'Reception', featured: false },
        { name: 'Access Control', icon: ShieldCheck, url: '#', category: 'Security', featured: true }
      ],
      visitors: [
        { name: 'International Delegation', company: 'TechCorp', location: 'Meeting Room A', time: '09:30-12:30', status: 'checked-in', sentiment: 'satisfied', avatar: '🌍' },
        { name: 'John Smith', company: 'HVAC Contractors', location: 'Floor 3', time: 'All day', status: 'on-site', sentiment: 'neutral', avatar: '👨‍🔧' },
        { name: 'Sarah Johnson', company: 'Global Partners', location: 'Executive Suite', time: '10:00-11:00', status: 'expected', sentiment: 'happy', avatar: '👩‍💼' }
      ]
    },
    {
      id: 'ntobeko',
      name: 'Ntobeko Ngcobo',
      title: 'Helpdesk Coordinator',
      location: '🛠️ Helpdesk Station • Durban Office',
      avatar: '👨‍💻',
      status: 'online',
      stats: { activeCalls: 18, workOrders: 12, responseRate: '98%' },
      metrics: [
        { label: 'First Contact Resolution', value: '89%', trend: '+5%', icon: CheckCircle, color: 'text-green-500' },
        { label: 'Avg. Resolution Time', value: '2.3h', trend: '-0.7h', icon: Clock, color: 'text-blue-500' },
        { label: 'AI Accuracy', value: '92%', trend: 'Improving', icon: Cpu, color: 'text-purple-500' }
      ],
      tools: [
        { name: 'Outlook', icon: Mail, url: 'https://outlook.office.com', category: 'Communication', featured: true },
        { name: 'Teams', icon: MessageSquare, url: 'https://teams.microsoft.com', category: 'Communication', featured: true },
        { name: 'Office 365', icon: Grid, url: 'https://office.com', category: 'Productivity', featured: false },
        { name: 'Cisco Phone', icon: Phone, url: '#', category: 'Communication', featured: true },
        { name: 'Power BI', icon: BarChart3, url: '#', category: 'Analytics', featured: false },
        { name: 'Hive Apps', icon: Briefcase, url: '#', category: 'Company Tools', featured: true },
        { name: 'Remedy System', icon: ClipboardList, url: '#', category: 'Ticketing', featured: true },
        { name: 'Work Orders', icon: ClipboardCheck, url: '#', category: 'Maintenance', featured: true },
        { name: 'Asset Database', icon: Database, url: '#', category: 'Inventory', featured: false },
        { name: 'Contractor Portal', icon: UserCheck, url: '#', category: 'Vendors', featured: false },
        { name: 'Knowledge Base', icon: FileText, url: '#', category: 'Documentation', featured: true },
        { name: 'Remote Support', icon: Monitor, url: '#', category: 'IT Support', featured: true },
        { name: 'Network Monitor', icon: Network, url: '#', category: 'Infrastructure', featured: true },
        { name: 'Smart Building', icon: Wifi, url: '#', category: 'Facilities', featured: false }
      ],
      workOrders: [
        { id: 'WO-2025-142', title: 'HVAC Failure', location: 'Conference Room A', status: 'In Progress', priority: 'high', predictedCompletion: '2 hours', technician: 'John D.', progress: 65 },
        { id: 'WO-2025-143', title: 'Electrical Issue', location: 'Server Room', status: 'Scheduled', priority: 'medium', predictedCompletion: '4 hours', technician: 'Sarah M.', progress: 20 },
        { id: 'WO-2025-144', title: 'Network Outage', location: 'Floor 2', status: 'Critical', priority: 'critical', predictedCompletion: '1 hour', technician: 'Mike T.', progress: 40 }
      ]
    }
  ]

  const getSentimentIcon = (sentiment) => {
    switch (sentiment) {
      case 'happy':
      case 'satisfied': return <Smile className="h-4 w-4 text-green-500" />
      case 'frustrated':
      case 'angry': return <Frown className="h-4 w-4 text-red-500" />
      default: return <Meh className="h-4 w-4 text-yellow-500" />
    }
  }

  const markNotificationAsRead = (id) => {
    setNotifications(notifications.map(notif => 
      notif.id === id ? { ...notif, read: true } : notif
    ))
  }

  const coordinator = coordinators.find(c => c.id === activeCoordinator)

  if (!activeCoordinator) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-900 to-slate-900"></div>
        
        <header className="relative bg-gradient-to-r from-blue-600/90 to-cyan-500/90 backdrop-blur-xl border-b border-blue-400/20 shadow-2xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-2xl flex items-center justify-center shadow-lg">
                  <Building className="h-8 w-8 text-white" />
                </div>
              </div>
              <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
                DerivCo Nexus Portal
              </h1>
              <p className="text-xl text-blue-100/80 mb-2">Intelligent Front Desk & Helpdesk Platform</p>
              <p className="text-blue-200/60">Durban Headquarters • AI-Powered Operations</p>
            </div>
          </div>
        </header>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Select Your Digital Workspace</h2>
            <p className="text-blue-200/70 max-w-2xl mx-auto">
              Access your personalized AI-powered dashboard with intelligent tools and real-time insights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {coordinators.map((coord) => (
              <div 
                key={coord.id}
                className="cursor-pointer transition-all duration-500 hover:scale-105 bg-white/5 backdrop-blur-xl border border-white/10 hover:border-cyan-400/30 hover:bg-white/10 group rounded-2xl p-6"
                onClick={() => setActiveCoordinator(coord.id)}
              >
                <div className="relative">
                  <div className="absolute -top-3 -right-3">
                    <div className="bg-green-500/20 text-green-300 border border-green-500/30 rounded-full px-3 py-1 text-sm flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                      Live
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {coord.avatar}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl text-white group-hover:text-cyan-200 transition-colors font-bold">
                        {coord.name}
                      </h3>
                      <p className="text-lg text-blue-200/80">
                        {coord.title}
                      </p>
                      <p className="text-sm text-blue-300/60 mt-1">{coord.location}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {Object.entries(coord.stats).map(([key, value]) => (
                      <div key={key} className="text-center p-3 bg-white/5 rounded-xl border border-white/10">
                        <div className="text-2xl font-bold text-cyan-400">{value}</div>
                        <div className="text-xs text-blue-300/70 capitalize mt-1 font-medium">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 border-0 text-white shadow-lg group-hover:shadow-cyan-500/25 transition-all duration-300" size="lg">
                    <Rocket className="mr-2 h-5 w-5" />
                    Launch Dashboard
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-2xl mx-auto mt-16">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
              <div className="text-center">
                <h3 className="text-white text-center flex items-center justify-center text-xl font-bold mb-2">
                  <Sparkles className="mr-3 h-6 w-6 text-cyan-400" />
                  AI Assistant Ready to Help
                </h3>
                <p className="text-blue-200/70 text-center">
                  Your intelligent companion for daily operations
                </p>
              </div>
              <div className="grid grid-cols-3 gap-4 text-center mt-4">
                <div className="p-4">
                  <Brain className="h-8 w-8 text-cyan-400 mx-auto mb-2" />
                  <div className="text-white font-medium">Predictive Insights</div>
                </div>
                <div className="p-4">
                  <Bot className="h-8 w-8 text-cyan-400 mx-auto mb-2" />
                  <div className="text-white font-medium">Smart Automation</div>
                </div>
                <div className="p-4">
                  <Zap className="h-8 w-8 text-cyan-400 mx-auto mb-2" />
                  <div className="text-white font-medium">Real-time Analytics</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-slate-900 text-white' : 'bg-gradient-to-br from-slate-50 to-blue-50'}`}>
      <header className={`sticky top-0 z-50 backdrop-blur-xl border-b transition-colors duration-300 ${
        darkMode 
          ? 'bg-slate-800/90 border-slate-700' 
          : 'bg-white/90 border-blue-200/50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                className={`transition-colors ${
                  darkMode ? 'text-white hover:bg-slate-700' : 'text-slate-700 hover:bg-blue-50'
                }`}
                onClick={() => setActiveCoordinator(null)}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Portal
              </Button>
              
              <div className={`w-px h-6 ${
                darkMode ? 'bg-slate-600' : 'bg-blue-200'
              }`}></div>
              
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white shadow-lg`}>
                  {coordinator.avatar}
                </div>
                <div>
                  <div className={`font-bold text-lg ${
                    darkMode ? 'text-white' : 'text-slate-800'
                  }`}>
                    {coordinator.name}
                  </div>
                  <div className={`text-sm ${
                    darkMode ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    {coordinator.title}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Button
                variant={aiAssistantActive ? "default" : "outline"}
                size="sm"
                className={aiAssistantActive ? 
                  "bg-gradient-to-r from-purple-600 to-cyan-600 border-0 text-white" : 
                  darkMode ? "border-slate-600 text-slate-300" : "border-slate-300"
                }
                onClick={() => setAiAssistantActive(!aiAssistantActive)}
              >
                <Bot className="mr-2 h-4 w-4" />
                AI {aiAssistantActive ? 'On' : 'Off'}
              </Button>

              <Button
                variant={voiceAssistantActive ? "default" : "outline"}
                size="sm"
                className={voiceAssistantActive ? 
                  "bg-gradient-to-r from-green-600 to-blue-600 border-0 text-white" : 
                  darkMode ? "border-slate-600 text-slate-300" : "border-slate-300"
                }
                onClick={() => setVoiceAssistantActive(!voiceAssistantActive)}
              >
                {voiceAssistantActive ? <Mic className="mr-2 h-4 w-4" /> : <MicOff className="mr-2 h-4 w-4" />}
                Voice
              </Button>

              <Button
                variant="outline"
                size="sm"
                className={darkMode ? "border-slate-600 text-slate-300" : "border-slate-300"}
                onClick={() => setDarkMode(!darkMode)}
              >
                {darkMode ? '🌙' : '☀️'}
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {aiAssistantActive && (
          <div className={`mb-6 border-l-4 border-l-purple-500 rounded-lg ${
            darkMode ? 'bg-slate-800 border-slate-700' : 'bg-purple-50 border-purple-200'
          } p-4`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center">
                  <Sparkles className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className={`font-semibold ${
                    darkMode ? 'text-white' : 'text-slate-800'
                  }`}>
                    AI Assistant Active
                  </div>
                  <div className={`text-sm ${
                    darkMode ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    {coordinator.id === 'nichelle' 
                      ? 'Monitoring visitor patterns and optimizing reception flow' 
                      : 'Analyzing work order trends and predicting maintenance needs'
                    }
                  </div>
                </div>
              </div>
              <div className="bg-green-500/20 text-green-700 border border-green-500/30 rounded-full px-3 py-1 text-sm flex items-center">
                <Zap className="h-3 w-3 mr-1" />
                Live Insights
              </div>
            </div>
          </div>
        )}

        <Tabs defaultValue="dashboard" className="w-full">
          <div className={`grid w-full grid-cols-4 mb-8 ${
            darkMode ? 'bg-slate-800' : 'bg-white'
          } p-1 rounded-2xl border ${darkMode ? 'border-slate-700' : 'border-slate-200'}`}>
            <TabsTrigger value="dashboard" className="text-lg rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-cyan-600 data-[state=active]:text-white">
              <Home className="mr-2 h-5 w-5" />
              Dashboard
            </TabsTrigger>
            <TabsTrigger value="visitors" className="text-lg rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-cyan-600 data-[state=active]:text-white">
              {coordinator.id === 'nichelle' ? <Users className="mr-2 h-5 w-5" /> : <ClipboardList className="mr-2 h-5 w-5" />}
              {coordinator.id === 'nichelle' ? 'Visitors' : 'Work Orders'}
            </TabsTrigger>
            <TabsTrigger value="tools" className="text-lg rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-cyan-600 data-[state=active]:text-white">
              <Grid className="mr-2 h-5 w-5" />
              Tools & Apps
            </TabsTrigger>
            <TabsTrigger value="ai-insights" className="text-lg rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-cyan-600 data-[state=active]:text-white">
              <Brain className="mr-2 h-5 w-5" />
              AI Insights
            </TabsTrigger>
          </div>

          {/* DASHBOARD TAB */}
          <TabsContent value="dashboard" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {coordinator.metrics.map((metric, index) => (
                <div key={index} className={`rounded-2xl border ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'} p-6`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className={`text-2xl font-bold ${
                        darkMode ? 'text-white' : 'text-slate-800'
                      }`}>
                        {metric.value}
                      </div>
                      <div className={`text-sm ${
                        darkMode ? 'text-slate-300' : 'text-slate-600'
                      } mt-1`}>
                        {metric.label}
                      </div>
                      <div className={`text-xs ${
                        metric.trend.includes('+') || metric.trend.includes('Improving') 
                          ? 'text-green-500' 
                          : 'text-red-500'
                      } mt-1`}>
                        {metric.trend}
                      </div>
                    </div>
                    <div className={`p-3 rounded-xl ${
                      darkMode ? 'bg-slate-700' : 'bg-blue-50'
                    }`}>
                      <metric.icon className={`h-6 w-6 ${metric.color}`} />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Active Items */}
              <div className={`rounded-2xl border ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'} p-6`}>
                <div className="flex items-center mb-4">
                  {coordinator.id === 'nichelle' ? <Users className="mr-2 h-5 w-5" /> : <ClipboardList className="mr-2 h-5 w-5" />}
                  <h3 className={`text-lg font-semibold ${
                    darkMode ? 'text-white' : 'text-slate-800'
                  }`}>
                    {coordinator.id === 'nichelle' ? 'Active Visitors' : 'Priority Work Orders'}
                  </h3>
                </div>
                <div className="space-y-4">
                  {coordinator.id === 'nichelle' ? (
                    coordinator.visitors.map((visitor, index) => (
                      <div key={index} className={`flex items-center justify-between p-4 rounded-xl ${
                        darkMode ? 'bg-slate-700/50' : 'bg-slate-50'
                      }`}>
                        <div className="flex items-center space-x-3">
                          <div className="text-2xl">{visitor.avatar}</div>
                          <div className="flex-1">
                            <div className={`font-semibold ${
                              darkMode ? 'text-white' : 'text-slate-800'
                            }`}>
                              {visitor.name}
                            </div>
                            <div className={`text-sm ${
                              darkMode ? 'text-slate-300' : 'text-slate-600'
                            }`}>
                              {visitor.company}
                            </div>
                            <div className={`text-xs ${
                              darkMode ? 'text-slate-400' : 'text-slate-500'
                            } mt-1`}>
                              {visitor.location} • {visitor.time}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                            visitor.status === 'checked-in' ? 'bg-green-100 text-green-800' : 
                            visitor.status === 'on-site' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'
                          }`}>
                            {visitor.status}
                          </div>
                          {getSentimentIcon(visitor.sentiment)}
                        </div>
                      </div>
                    ))
                  ) : (
                    coordinator.workOrders.map((wo, index) => (
                      <div key={index} className={`p-4 rounded-xl border-l-4 ${
                        wo.priority === 'critical' ? 'border-red-500' :
                        wo.priority === 'high' ? 'border-orange-500' : 'border-blue-500'
                      } ${darkMode ? 'bg-slate-700/50' : 'bg-slate-50'}`}>
                        <div className="flex items-center justify-between mb-3">
                          <div>
                            <div className={`font-semibold ${
                              darkMode ? 'text-white' : 'text-slate-800'
                            }`}>
                              {wo.id} - {wo.title}
                            </div>
                            <div className={`text-sm ${
                              darkMode ? 'text-slate-300' : 'text-slate-600'
                            }`}>
                              {wo.location} • {wo.technician}
                            </div>
                          </div>
                          <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                            wo.status === 'In Progress' ? 'bg-blue-100 text-blue-800' : 
                            wo.status === 'Critical' ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-800'
                          }`}>
                            {wo.status}
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-xs text-slate-500">
                            <span>Progress</span>
                            <span>{wo.progress}%</span>
                          </div>
                          <Progress value={wo.progress} className="h-2" />
                          <div className={`text-xs ${
                            darkMode ? 'text-slate-400' : 'text-slate-500'
                          }`}>
                            ETA: {wo.predictedCompletion}
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>

              {/* Notifications & Quick Actions */}
              <div className="space-y-6">
                <div className={`rounded-2xl border ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'} p-6`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Bell className="mr-2 h-5 w-5" />
                      <h3 className={`text-lg font-semibold ${
                        darkMode ? 'text-white' : 'text-slate-800'
                      }`}>
                        Recent Notifications
                      </h3>
                    </div>
                    <div className="bg-blue-500/10 text-blue-600 border border-blue-500/20 rounded-full px-3 py-1 text-sm">
                      {notifications.filter(n => !n.read).length} New
                    </div>
                  </div>
                  <div className="space-y-3">
                    {notifications.map((notif) => (
                      <div 
                        key={notif.id} 
                        className={`p-3 rounded-lg border cursor-pointer transition-all ${
                          notif.read 
                            ? (darkMode ? 'border-slate-600 bg-slate-700/30' : 'border-slate-200 bg-slate-50') 
                            : (darkMode ? 'border-blue-500/30 bg-blue-500/10' : 'border-blue-200 bg-blue-50')
                        } ${notif.read ? '' : 'ring-2 ring-blue-500/20'}`}
                        onClick={() => markNotificationAsRead(notif.id)}
                      >
                        <div className="flex items-center justify-between">
                          <span className={`text-sm ${
                            darkMode ? 'text-slate-200' : 'text-slate-700'
                          }`}>
                            {notif.message}
                          </span>
                          <div className="flex items-center space-x-2">
                            {!notif.read && (
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            )}
                            <span className={`text-xs ${
                              darkMode ? 'text-slate-400' : 'text-slate-500'
                            }`}>
                              {notif.time}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Actions */}
                <div className={`rounded-2xl border ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'} p-6`}>
                  <h3 className={`text-lg font-semibold mb-4 ${
                    darkMode ? 'text-white' : 'text-slate-800'
                  }`}>
                    Quick Actions
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {coordinator.id === 'nichelle' ? (
                      <>
                        <Button variant="outline" className="h-14 justify-start">
                          <UserPlus className="mr-2 h-4 w-4" />
                          New Visitor
                        </Button>
                        <Button variant="outline" className="h-14 justify-start">
                          <CreditCard className="mr-2 h-4 w-4" />
                          Print Badge
                        </Button>
                        <Button variant="outline" className="h-14 justify-start">
                          <Phone className="mr-2 h-4 w-4" />
                          Make Call
                        </Button>
                        <Button variant="outline" className="h-14 justify-start">
                          <MapPin className="mr-2 h-4 w-4" />
                          Directions
                        </Button>
                      </>
                    ) : (
                      <>
                        <Button variant="outline" className="h-14 justify-start">
                          <ClipboardList className="mr-2 h-4 w-4" />
                          New Ticket
                        </Button>
                        <Button variant="outline" className="h-14 justify-start">
                          <Monitor className="mr-2 h-4 w-4" />
                          Remote Support
                        </Button>
                        <Button variant="outline" className="h-14 justify-start">
                          <Database className="mr-2 h-4 w-4" />
                          Asset Lookup
                        </Button>
                        <Button variant="outline" className="h-14 justify-start">
                          <FileText className="mr-2 h-4 w-4" />
                          Knowledge Base
                        </Button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* VISITORS/WORK ORDERS TAB */}
          <TabsContent value="visitors" className="space-y-6">
            {coordinator.id === 'nichelle' ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className={`rounded-2xl border ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'} p-6`}>
                  <div className="flex items-center mb-4">
                    <UserPlus className="mr-2 h-5 w-5" />
                    <h3 className={`text-lg font-semibold ${
                      darkMode ? 'text-white' : 'text-slate-800'
                    }`}>
                      New Visitor Registration
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="visitor-name">Full Name *</Label>
                      <Input id="visitor-name" placeholder="Enter visitor name" className={darkMode ? 'bg-slate-700 border-slate-600' : ''} />
                    </div>
                    <div>
                      <Label htmlFor="company">Company *</Label>
                      <Input id="company" placeholder="Company name" className={darkMode ? 'bg-slate-700 border-slate-600' : ''} />
                    </div>
                    <div>
                      <Label htmlFor="host">Meeting With</Label>
                      <Input id="host" placeholder="Employee name" className={darkMode ? 'bg-slate-700 border-slate-600' : ''} />
                    </div>
                    <div>
                      <Label htmlFor="purpose">Visit Purpose *</Label>
                      <Select>
                        <SelectTrigger className={darkMode ? 'bg-slate-700 border-slate-600' : ''}>
                          <SelectValue placeholder="Select purpose" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="meeting">Business Meeting</SelectItem>
                          <SelectItem value="interview">Interview</SelectItem>
                          <SelectItem value="delivery">Delivery</SelectItem>
                          <SelectItem value="contractor">Contractor Work</SelectItem>
                          <SelectItem value="tour">Office Tour</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="md:col-span-2">
                      <Label htmlFor="notes">Notes</Label>
                      <Textarea 
                        id="notes" 
                        placeholder="Additional information..." 
                        className={darkMode ? 'bg-slate-700 border-slate-600' : ''}
                      />
                    </div>
                  </div>
                  <div className="flex gap-3 mt-6">
                    <Button className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600">
                      <UserCheck className="mr-2 h-4 w-4" />
                      Register & Check-in
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <CreditCard className="mr-2 h-4 w-4" />
                      Print Badge
                    </Button>
                  </div>
                </div>

                {/* QR Code Check-in */}
                <div className={`rounded-2xl border ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'} p-6`}>
                  <div className="flex items-center mb-4">
                    <QrCode className="mr-2 h-5 w-5" />
                    <h3 className={`text-lg font-semibold ${
                      darkMode ? 'text-white' : 'text-slate-800'
                    }`}>
                      Quick Check-in Portal
                    </h3>
                  </div>
                  <div className="text-center p-6">
                    <div className={`w-48 h-48 mx-auto border-2 border-dashed ${
                      darkMode ? 'border-slate-600' : 'border-slate-300'
                    } rounded-xl flex items-center justify-center mb-4`}>
                      <QrCode className="h-16 w-16 text-slate-400" />
                    </div>
                    <p className={`text-sm ${
                      darkMode ? 'text-slate-300' : 'text-slate-600'
                    } mb-4`}>
                      Scan QR code for self check-in
                    </p>
                    <Button variant="outline" className="w-full">
                      <Camera className="mr-2 h-4 w-4" />
                      Generate New QR Code
                    </Button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className={`rounded-2xl border ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'} p-6`}>
                  <div className="flex items-center mb-4">
                    <ClipboardList className="mr-2 h-5 w-5" />
                    <h3 className={`text-lg font-semibold ${
                      darkMode ? 'text-white' : 'text-slate-800'
                    }`}>
                      Create New Work Order
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <Label htmlFor="wo-title">Issue Title *</Label>
                      <Input 
                        id="wo-title" 
                        placeholder="Brief description of the issue" 
                        className={darkMode ? 'bg-slate-700 border-slate-600' : ''}
                      />
                    </div>
                    <div>
                      <Label htmlFor="wo-location">Location *</Label>
                      <Input 
                        id="wo-location" 
                        placeholder="Building/Floor/Room" 
                        className={darkMode ? 'bg-slate-700 border-slate-600' : ''}
                      />
                    </div>
                    <div>
                      <Label htmlFor="wo-priority">Priority *</Label>
                      <Select>
                        <SelectTrigger className={darkMode ? 'bg-slate-700 border-slate-600' : ''}>
                          <SelectValue placeholder="Select priority" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="critical">Critical</SelectItem>
                          <SelectItem value="high">High</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="low">Low</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="wo-category">Category *</Label>
                      <Select>
                        <SelectTrigger className={darkMode ? 'bg-slate-700 border-slate-600' : ''}>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="hvac">HVAC</SelectItem>
                          <SelectItem value="electrical">Electrical</SelectItem>
                          <SelectItem value="plumbing">Plumbing</SelectItem>
                          <SelectItem value="it">IT Support</SelectItem>
                          <SelectItem value="general">General Maintenance</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="wo-assignee">Assign To</Label>
                      <Select>
                        <SelectTrigger className={darkMode ? 'bg-slate-700 border-slate-600' : ''}>
                          <SelectValue placeholder="Select technician" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="auto">Auto-assign</SelectItem>
                          <SelectItem value="tech1">John - HVAC</SelectItem>
                          <SelectItem value="tech2">Sarah - Electrical</SelectItem>
                          <SelectItem value="tech3">Mike - Plumbing</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="md:col-span-2">
                      <Label htmlFor="wo-description">Detailed Description *</Label>
                      <Textarea 
                        id="wo-description" 
                        placeholder="Provide detailed information about the issue..." 
                        rows="4"
                        className={darkMode ? 'bg-slate-700 border-slate-600' : ''}
                      />
                    </div>
                  </div>
                  <Button className="w-full mt-6 bg-gradient-to-r from-blue-600 to-cyan-600">
                    <CheckCircle className="mr-2 h-4 w-4" />
                    Create Work Order
                  </Button>
                </div>

                {/* Quick Template Buttons */}
                <div className={`rounded-2xl border ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'} p-6`}>
                  <h3 className={`text-lg font-semibold mb-4 ${
                    darkMode ? 'text-white' : 'text-slate-800'
                  }`}>
                    Quick Templates
                  </h3>
                  <div className="grid grid-cols-1 gap-3">
                    {['Network Issue', 'Power Outage', 'AC Not Working', 'Printer Problem', 'Access Issue'].map((template) => (
                      <Button key={template} variant="outline" className="justify-start h-12">
                        <Zap className="mr-2 h-4 w-4" />
                        {template}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </TabsContent>

          {/* TOOLS & APPS TAB */}
          <TabsContent value="tools" className="space-y-6">
            <div className={`rounded-2xl border ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'} p-6`}>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <Grid className="mr-2 h-5 w-5" />
                  <h3 className={`text-lg font-semibold ${
                    darkMode ? 'text-white' : 'text-slate-800'
                  }`}>
                    Your Digital Workspace
                  </h3>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <Input 
                      placeholder="Search tools..." 
                      className={`w-64 pl-10 ${darkMode ? 'bg-slate-700 border-slate-600' : ''}`}
                    />
                  </div>
                  <Select defaultValue="all">
                    <SelectTrigger className={`w-32 ${darkMode ? 'bg-slate-700 border-slate-600' : ''}`}>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All</SelectItem>
                      <SelectItem value="featured">Featured</SelectItem>
                      <SelectItem value="recent">Recent</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              {/* Featured Tools */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold mb-4 flex items-center">
                  <Star className="mr-2 h-5 w-5 text-yellow-500" />
                  Featured Tools
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {coordinator.tools.filter(tool => tool.featured).map((tool, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className={`h-24 flex flex-col items-center justify-center transition-all group relative overflow-hidden ${
                        darkMode 
                          ? 'border-slate-600 bg-slate-700/50 hover:border-cyan-400 hover:bg-slate-700' 
                          : 'border-slate-200 bg-white hover:border-blue-300 hover:bg-blue-50'
                      }`}
                      onClick={() => tool.url !== '#' && window.open(tool.url, '_blank')}
                    >
                      <div className={`p-2 rounded-lg mb-2 group-hover:scale-110 transition-transform ${
                        darkMode ? 'bg-slate-600' : 'bg-blue-50'
                      }`}>
                        <tool.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <span className="text-sm font-medium text-center">{tool.name}</span>
                      {tool.featured && (
                        <div className="absolute top-1 right-1">
                          <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                        </div>
                      )}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Group tools by category */}
              {['Communication', 'Productivity', 'Company Tools', coordinator.id === 'nichelle' ? 'Reception' : 'Ticketing', 'Analytics', 'Infrastructure', 'Security'].map((category) => {
                const categoryTools = coordinator.tools.filter(tool => tool.category === category)
                if (categoryTools.length === 0) {
                  return null
                }
                
                return (
                  <div key={category} className="mb-8">
                    <h4 className="text-lg font-semibold mb-4 flex items-center text-blue-600">
                      {category === 'Communication' && <MessageSquare className="mr-2 h-5 w-5" />}
                      {category === 'Productivity' && <Grid className="mr-2 h-5 w-5" />}
                      {category === 'Company Tools' && <Briefcase className="mr-2 h-5 w-5" />}
                      {category === 'Reception' && <Users className="mr-2 h-5 w-5" />}
                      {category === 'Ticketing' && <ClipboardList className="mr-2 h-5 w-5" />}
                      {category === 'Analytics' && <BarChart3 className="mr-2 h-5 w-5" />}
                      {category === 'Infrastructure' && <Network className="mr-2 h-5 w-5" />}
                      {category === 'Security' && <Shield className="mr-2 h-5 w-5" />}
                      {category}
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                      {categoryTools.map((tool, index) => (
                        <Button
                          key={index}
                          variant="outline"
                          className={`h-20 flex flex-col items-center justify-center transition-all group ${
                            darkMode 
                              ? 'border-slate-600 bg-slate-700/30 hover:border-blue-400 hover:bg-slate-700' 
                              : 'border-slate-200 bg-white hover:border-blue-300 hover:bg-blue-50'
                          }`}
                          onClick={() => tool.url !== '#' && window.open(tool.url, '_blank')}
                        >
                          <tool.icon className="h-5 w-5 mb-1 text-blue-600 group-hover:scale-110 transition-transform" />
                          <span className="text-xs font-medium text-center">{tool.name}</span>
                        </Button>
                      ))}
                    </div>
                  </div>
                )
              })}

              {/* Enhanced Phone Dialer */}
              <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700">
                <h4 className="text-lg font-semibold mb-4 flex items-center">
                  <Phone className="mr-2 h-5 w-5" />
                  Smart Dial Pad
                </h4>
                <div className="max-w-md mx-auto">
                  <div className={`rounded-xl p-4 mb-4 ${
                    darkMode ? 'bg-slate-700' : 'bg-blue-50'
                  }`}>
                    <Input 
                      placeholder="Enter name or number..." 
                      className={`text-center text-lg mb-2 ${darkMode ? 'bg-slate-600 border-slate-500' : ''}`}
                    />
                    <div className="flex justify-between text-sm text-slate-500">
                      <span>Last call: John - 2 min ago</span>
                      <span className="text-green-500">● Available</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#'].map((digit) => (
                      <Button 
                        key={digit} 
                        variant="outline" 
                        className="h-14 text-xl font-semibold hover:bg-blue-50 hover:border-blue-300"
                      >
                        {digit}
                      </Button>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <Button className="h-12 bg-gradient-to-r from-green-600 to-blue-600">
                      <Phone className="mr-2 h-5 w-5" />
                      Call
                    </Button>
                    <Button variant="outline" className="h-12">
                      <Headphones className="mr-2 h-5 w-5" />
                      Voicemail
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* AI INSIGHTS TAB */}
          <TabsContent value="ai-insights" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* AI Predictions */}
              <div className={`rounded-2xl border-l-4 border-l-purple-500 ${
                darkMode ? 'bg-slate-800 border-slate-700' : 'bg-purple-50 border-purple-200'
              } p-6`}>
                <div className="flex items-center mb-4">
                  <Brain className="mr-2 h-5 w-5 text-purple-600" />
                  <h3 className={`text-lg font-semibold ${
                    darkMode ? 'text-white' : 'text-slate-800'
                  }`}>
                    AI Predictions & Forecasts
                  </h3>
                </div>
                <div className="space-y-4">
                  {coordinator.id === 'nichelle' ? (
                    <>
                      <div className={`p-4 rounded-lg ${
                        darkMode ? 'bg-slate-700/50' : 'bg-white'
                      }`}>
                        <h5 className="font-medium mb-3 flex items-center">
                          <TrendingUp className="mr-2 h-4 w-4" />
                          Visitor Flow Predictions
                        </h5>
                        <div className="space-y-3 text-sm">
                          <div className="flex justify-between items-center">
                            <span>Expected visitors today:</span>
                            <div className="bg-blue-500/20 text-blue-700 rounded-full px-3 py-1 text-sm">
                              45-50
                            </div>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>Peak arrival time:</span>
                            <div className="bg-orange-500/20 text-orange-700 rounded-full px-3 py-1 text-sm">
                              2:00-3:30 PM
                            </div>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>VIP visitors expected:</span>
                            <div className="bg-purple-500/20 text-purple-700 rounded-full px-3 py-1 text-sm">
                              3
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={`border border-blue-200 bg-blue-50 dark:border-blue-500/30 dark:bg-blue-500/10 rounded-lg p-4`}>
                        <div className="flex items-start">
                          <Zap className="h-4 w-4 text-blue-600 mt-0.5 mr-2" />
                          <div>
                            <strong>Pro Tip:</strong> Prepare extra badges for the TechCorp delegation arriving at 2:00 PM
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className={`p-4 rounded-lg ${
                        darkMode ? 'bg-slate-700/50' : 'bg-white'
                      }`}>
                        <h5 className="font-medium mb-3 flex items-center">
                          <Activity className="mr-2 h-4 w-4" />
                          Maintenance Predictions
                        </h5>
                        <div className="space-y-3 text-sm">
                          <div className={`border border-orange-200 bg-orange-50 dark:border-orange-500/30 dark:bg-orange-500/10 rounded-lg p-3`}>
                            <strong>HVAC System - Conference Room B:</strong> May require attention within 48 hours (85% confidence)
                          </div>
                          <div className={`border border-yellow-200 bg-yellow-50 dark:border-yellow-500/30 dark:bg-yellow-500/10 rounded-lg p-3`}>
                            <strong>Elevator #2:</strong> Scheduled maintenance due in 5 days
                          </div>
                        </div>
                      </div>
                      <div className={`border border-green-200 bg-green-50 dark:border-green-500/30 dark:bg-green-500/10 rounded-lg p-4`}>
                        <div className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 mr-2" />
                          <div>
                            <strong>System Health:</strong> All critical systems operating normally
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Performance Analytics */}
              <div className={`rounded-2xl border ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'} p-6`}>
                <div className="flex items-center mb-4">
                  <BarChart4 className="mr-2 h-5 w-5" />
                  <h3 className={`text-lg font-semibold ${
                    darkMode ? 'text-white' : 'text-slate-800'
                  }`}>
                    Performance Analytics
                  </h3>
                </div>
                <div className="space-y-4">
                  {coordinator.id === 'nichelle' ? (
                    <>
                      <div className={`p-4 rounded-lg ${
                        darkMode ? 'bg-slate-700/50' : 'bg-slate-50'
                      }`}>
                        <h5 className="font-medium mb-2 flex items-center">
                          <Heart className="mr-2 h-4 w-4" />
                          Visitor Sentiment Analysis
                        </h5>
                        <div className="grid grid-cols-3 gap-2 text-center text-sm mb-3">
                          <div className="text-green-600">
                            <Smile className="h-6 w-6 mx-auto mb-1" />
                            <div className="font-semibold">75%</div>
                            <div className="text-xs">Positive</div>
                          </div>
                          <div className="text-yellow-600">
                            <Meh className="h-6 w-6 mx-auto mb-1" />
                            <div className="font-semibold">20%</div>
                            <div className="text-xs">Neutral</div>
                          </div>
                          <div className="text-red-600">
                            <Frown className="h-6 w-6 mx-auto mb-1" />
                            <div className="font-semibold">5%</div>
                            <div className="text-xs">Negative</div>
                          </div>
                        </div>
                        <Progress value={75} className="h-2" />
                      </div>
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div className={`p-3 rounded-lg text-center ${
                          darkMode ? 'bg-slate-700/50' : 'bg-slate-50'
                        }`}>
                          <div className="font-semibold text-green-600">94%</div>
                          <div className="text-xs">Satisfaction Rate</div>
                        </div>
                        <div className={`p-3 rounded-lg text-center ${
                          darkMode ? 'bg-slate-700/50' : 'bg-slate-50'
                        }`}>
                          <div className="font-semibold text-blue-600">1.2min</div>
                          <div className="text-xs">Avg. Check-in Time</div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className={`p-4 rounded-lg ${
                        darkMode ? 'bg-slate-700/50' : 'bg-slate-50'
                      }`}>
                        <h5 className="font-medium mb-3">Performance Metrics</h5>
                        <div className="space-y-3 text-sm">
                          <div className="flex justify-between">
                            <span>First Contact Resolution:</span>
                            <span className="font-semibold text-green-600">89%</span>
                          </div>
                          <Progress value={89} className="h-2" />
                          <div className="flex justify-between">
                            <span>Avg. Resolution Time:</span>
                            <span className="font-semibold text-blue-600">2.3 hours</span>
                          </div>
                          <Progress value={65} className="h-2" />
                          <div className="flex justify-between">
                            <span>Customer Satisfaction:</span>
                            <span className="font-semibold text-purple-600">92%</span>
                          </div>
                          <Progress value={92} className="h-2" />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div className={`p-3 rounded-lg text-center ${
                          darkMode ? 'bg-slate-700/50' : 'bg-slate-50'
                        }`}>
                          <div className="font-semibold text-green-600">98%</div>
                          <div className="text-xs">Uptime</div>
                        </div>
                        <div className={`p-3 rounded-lg text-center ${
                          darkMode ? 'bg-slate-700/50' : 'bg-slate-50'
                        }`}>
                          <div className="font-semibold text-blue-600">12</div>
                          <div className="text-xs">Active Tickets</div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* AI Recommendations */}
            <div className={`rounded-2xl border-l-4 border-l-cyan-500 ${
              darkMode ? 'bg-slate-800 border-slate-700' : 'bg-cyan-50 border-cyan-200'
            } p-6`}>
              <div className="flex items-center mb-4">
                <Sparkles className="mr-2 h-5 w-5 text-cyan-600" />
                <h3 className={`text-lg font-semibold ${
                  darkMode ? 'text-white' : 'text-slate-800'
                }`}>
                  AI Recommendations
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {coordinator.id === 'nichelle' ? (
                  <>
                    <div className={`p-4 rounded-lg ${
                      darkMode ? 'bg-slate-700/50' : 'bg-white'
                    }`}>
                      <h5 className="font-medium mb-2 flex items-center">
                        <Coffee className="mr-2 h-4 w-4" />
                        Visitor Experience
                      </h5>
                      <ul className="text-sm space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                          Restock refreshment station before 2 PM peak
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                          Prepare welcome packets for international delegates
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                          Verify meeting room setups for afternoon sessions
                        </li>
                      </ul>
                    </div>
                    <div className={`p-4 rounded-lg ${
                      darkMode ? 'bg-slate-700/50' : 'bg-white'
                    }`}>
                      <h5 className="font-medium mb-2 flex items-center">
                        <Zap className="mr-2 h-4 w-4" />
                        Efficiency Tips
                      </h5>
                      <ul className="text-sm space-y-2">
                        <li className="flex items-start">
                          <Zap className="h-4 w-4 text-blue-500 mr-2 mt-0.5" />
                          Use QR codes for faster group check-ins
                        </li>
                        <li className="flex items-start">
                          <Zap className="h-4 w-4 text-blue-500 mr-2 mt-0.5" />
                          Pre-print badges for scheduled visitors
                        </li>
                        <li className="flex items-start">
                          <Zap className="h-4 w-4 text-blue-500 mr-2 mt-0.5" />
                          Enable auto-notifications for host alerts
                        </li>
                      </ul>
                    </div>
                  </>
                ) : (
                  <>
                    <div className={`p-4 rounded-lg ${
                      darkMode ? 'bg-slate-700/50' : 'bg-white'
                    }`}>
                      <h5 className="font-medium mb-2 flex items-center">
                        <Workflow className="mr-2 h-4 w-4" />
                        Workflow Optimization
                      </h5>
                      <ul className="text-sm space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                          Automate ticket routing for network issues
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                          Schedule preventive maintenance for server room
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                          Update knowledge base with HVAC solutions
                        </li>
                      </ul>
                    </div>
                    <div className={`p-4 rounded-lg ${
                      darkMode ? 'bg-slate-700/50' : 'bg-white'
                    }`}>
                      <h5 className="font-medium mb-2 flex items-center">
                        <BatteryCharging className="mr-2 h-4 w-4" />
                        Resource Allocation
                      </h5>
                      <ul className="text-sm space-y-2">
                        <li className="flex items-start">
                          <Zap className="h-4 w-4 text-blue-500 mr-2 mt-0.5" />
                          Assign senior tech to critical network issues
                        </li>
                        <li className="flex items-start">
                          <Zap className="h-4 w-4 text-blue-500 mr-2 mt-0.5" />
                          Prepare emergency kit for electrical work
                        </li>
                        <li className="flex items-start">
                          <Zap className="h-4 w-4 text-blue-500 mr-2 mt-0.5" />
                          Coordinate with facilities for HVAC maintenance
                        </li>
                      </ul>
                    </div>
                  </>
                )}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default App