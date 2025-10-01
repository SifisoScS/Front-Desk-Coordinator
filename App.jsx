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
  Bell, 
  Phone, 
  Users, 
  Calendar, 
  Mail, 
  MessageSquare, 
  ClipboardList, 
  UserPlus, 
  IdCard, 
  Truck, 
  BarChart3,
  Bot,
  PhoneCall,
  Clock,
  CheckCircle,
  AlertTriangle,
  ArrowLeft,
  Mic,
  MicOff,
  Volume2,
  VolumeX,
  TrendingUp,
  Heart,
  Brain,
  Search,
  MapPin,
  Smile,
  Frown,
  Meh,
  Zap,
  Shield,
  Database,
  Camera,
  QrCode,
  Navigation
} from 'lucide-react'
import './App.css'

function App() {
  const [activeCard, setActiveCard] = useState(null)
  const [aiAssistantActive, setAiAssistantActive] = useState(false)
  const [notifications, setNotifications] = useState([
    { id: 1, type: 'reminder', message: 'International Delegation arriving in 15 minutes', priority: 'high', time: '09:15' },
    { id: 2, type: 'call', message: 'Incoming call from HVAC contractor', priority: 'medium', time: '09:12', sentiment: 'frustrated' },
    { id: 3, type: 'task', message: 'Follow-up required for WO-2025-142', priority: 'low', time: '09:10' },
    { id: 4, type: 'prediction', message: 'High visitor traffic predicted for 2:00-4:00 PM', priority: 'medium', time: '09:08' }
  ])
  const [callStatus, setCallStatus] = useState('idle') // idle, ringing, active, ai-handling
  const [aiSuggestions, setAiSuggestions] = useState([])
  const [sentimentAnalysis, setSentimentAnalysis] = useState({ score: 0.7, emotion: 'neutral' })
  const [predictiveInsights, setPredictiveInsights] = useState([
    { type: 'maintenance', message: 'HVAC system in Conference Room A may need attention within 48 hours', confidence: 85 },
    { type: 'traffic', message: 'Expect 40% increase in visitor volume tomorrow afternoon', confidence: 92 },
    { type: 'resource', message: 'Meeting Room B likely to be in high demand next week', confidence: 78 }
  ])
  const [knowledgeBase, setKnowledgeBase] = useState([
    { id: 1, title: 'Visitor Badge Printing Procedure', category: 'Reception', relevance: 95 },
    { id: 2, title: 'HVAC Troubleshooting Guide', category: 'Maintenance', relevance: 88 },
    { id: 3, title: 'Emergency Contact Directory', category: 'General', relevance: 82 }
  ])

  // Simulate AI assistant functionality
  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate new AI suggestions
      const suggestions = [
        'Schedule follow-up for HVAC repair in Conference Room A',
        'Prepare visitor badges for 2:30 PM meeting',
        'Contact facilities team about elevator maintenance',
        'Update knowledge base with new contractor contact info',
        'Review sentiment analysis for recent calls'
      ]
      setAiSuggestions(suggestions.slice(0, Math.floor(Math.random() * 3) + 1))
      
      // Simulate sentiment changes
      const emotions = ['happy', 'neutral', 'frustrated', 'satisfied']
      setSentimentAnalysis({
        score: Math.random(),
        emotion: emotions[Math.floor(Math.random() * emotions.length)]
      })
    }, 15000)

    return () => clearInterval(interval)
  }, [])

  const coordinators = [
    {
      id: 'nichelle',
      name: 'Nichelle Naidoo',
      title: 'Reception Coordinator',
      location: '🏢 Front Desk • Durban Office',
      avatar: '👩‍💼',
      status: 'online',
      stats: {
        visitors: 32,
        deliveries: 12,
        calls: 45
      },
      activeVisitors: [
        { name: 'International Delegation', location: 'Meeting Room A', time: '09:30-12:30', sentiment: 'satisfied' },
        { name: 'Contractor Team - HVAC', location: 'Floor 3', time: 'All day', sentiment: 'neutral' }
      ]
    },
    {
      id: 'ntobeko',
      name: 'Ntobeko Ngcobo',
      title: 'Helpdesk Coordinator',
      location: '🛠️ Helpdesk Station • Durban Office',
      avatar: '👨‍💻',
      status: 'online',
      stats: {
        activeCalls: 18,
        workOrders: 12,
        responseRate: '98%'
      },
      workOrders: [
        { id: 'WO-2025-142', title: 'HVAC Failure', location: 'Conference Room A', status: 'In Progress', predictedCompletion: '2 hours' },
        { id: 'WO-2025-143', title: 'Electrical Issue', location: 'Server Room', status: 'Scheduled', predictedCompletion: '4 hours' }
      ]
    }
  ]

  const handleCallAction = (action) => {
    switch (action) {
      case 'answer':
        setCallStatus('active')
        break
      case 'ai-handle':
        setCallStatus('ai-handling')
        setTimeout(() => setCallStatus('idle'), 3000)
        break
      case 'end':
        setCallStatus('idle')
        break
      default:
        break
    }
  }

  const dismissNotification = (id) => {
    setNotifications(notifications.filter(n => n.id !== id))
  }

  const getSentimentIcon = (sentiment) => {
    switch (sentiment) {
      case 'happy':
      case 'satisfied':
        return <Smile className="h-4 w-4 text-green-500" />
      case 'frustrated':
      case 'angry':
        return <Frown className="h-4 w-4 text-red-500" />
      default:
        return <Meh className="h-4 w-4 text-yellow-500" />
    }
  }

  const getSentimentColor = (sentiment) => {
    switch (sentiment) {
      case 'happy':
      case 'satisfied':
        return 'text-green-600 bg-green-50 border-green-200'
      case 'frustrated':
      case 'angry':
        return 'text-red-600 bg-red-50 border-red-200'
      default:
        return 'text-yellow-600 bg-yellow-50 border-yellow-200'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Button 
            variant="ghost" 
            className="text-white hover:bg-white/20 mb-4"
            onClick={() => setActiveCard(null)}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Main System
          </Button>
          
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-2 flex items-center justify-center">
              🏢 AI-Enhanced Reception & Helpdesk Services
            </h1>
            <p className="text-xl opacity-90">
              First Point of Contact & Technical Support - Derivco Durban
            </p>
            <p className="text-lg opacity-80 mt-2">
              Visitor management, contractor coordination & building support services
            </p>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* AI Assistant Panel */}
        <Card className="mb-6 border-2 border-purple-200 bg-gradient-to-r from-purple-50 to-pink-50">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Bot className="mr-2 h-5 w-5 text-purple-600" />
              AI Assistant
              <Badge variant={aiAssistantActive ? "default" : "secondary"} className="ml-2">
                {aiAssistantActive ? "Active" : "Standby"}
              </Badge>
            </CardTitle>
            <CardDescription>
              Your intelligent assistant for reminders, call handling, task scheduling, and predictive insights
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-4">
              <Button 
                onClick={() => setAiAssistantActive(!aiAssistantActive)}
                variant={aiAssistantActive ? "destructive" : "default"}
                className="flex items-center"
              >
                {aiAssistantActive ? (
                  <>
                    <VolumeX className="mr-2 h-4 w-4" />
                    Deactivate AI
                  </>
                ) : (
                  <>
                    <Volume2 className="mr-2 h-4 w-4" />
                    Activate AI
                  </>
                )}
              </Button>
              
              {callStatus === 'ringing' && (
                <div className="flex gap-2">
                  <Button onClick={() => handleCallAction('answer')} size="sm">
                    <Phone className="mr-2 h-4 w-4" />
                    Answer
                  </Button>
                  <Button 
                    onClick={() => handleCallAction('ai-handle')} 
                    variant="outline" 
                    size="sm"
                  >
                    <Bot className="mr-2 h-4 w-4" />
                    Let AI Handle
                  </Button>
                </div>
              )}
            </div>

            {/* Real-time Sentiment Analysis */}
            {callStatus === 'active' && (
              <div className={`mb-4 p-3 rounded-lg border ${getSentimentColor(sentimentAnalysis.emotion)}`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Heart className="mr-2 h-4 w-4" />
                    <span className="font-medium">Live Sentiment Analysis</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {getSentimentIcon(sentimentAnalysis.emotion)}
                    <span className="text-sm font-medium capitalize">{sentimentAnalysis.emotion}</span>
                  </div>
                </div>
                <Progress value={sentimentAnalysis.score * 100} className="mt-2" />
              </div>
            )}

            {/* AI Notifications */}
            {notifications.length > 0 && (
              <div className="space-y-2 mb-4">
                {notifications.map((notification) => (
                  <Alert key={notification.id} className={`
                    ${notification.priority === 'high' ? 'border-red-200 bg-red-50' : 
                      notification.priority === 'medium' ? 'border-yellow-200 bg-yellow-50' : 
                      'border-blue-200 bg-blue-50'}
                  `}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        {notification.type === 'reminder' && <Clock className="h-4 w-4 mr-2" />}
                        {notification.type === 'call' && <PhoneCall className="h-4 w-4 mr-2" />}
                        {notification.type === 'task' && <ClipboardList className="h-4 w-4 mr-2" />}
                        {notification.type === 'prediction' && <TrendingUp className="h-4 w-4 mr-2" />}
                        <AlertDescription className="mb-0">
                          {notification.message}
                          {notification.sentiment && (
                            <span className="ml-2">
                              {getSentimentIcon(notification.sentiment)}
                            </span>
                          )}
                        </AlertDescription>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground">{notification.time}</span>
                        <Button 
                          size="sm" 
                          variant="ghost" 
                          onClick={() => dismissNotification(notification.id)}
                        >
                          ×
                        </Button>
                      </div>
                    </div>
                  </Alert>
                ))}
              </div>
            )}

            {/* Predictive Insights */}
            {predictiveInsights.length > 0 && (
              <div className="bg-white/50 rounded-lg p-3 mb-4">
                <h4 className="font-medium mb-2 flex items-center">
                  <Brain className="mr-2 h-4 w-4" />
                  Predictive Insights
                </h4>
                <div className="space-y-2">
                  {predictiveInsights.map((insight, index) => (
                    <div key={index} className="flex items-center justify-between text-sm">
                      <div className="flex items-center">
                        <TrendingUp className="mr-2 h-3 w-3 text-blue-500" />
                        <span>{insight.message}</span>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {insight.confidence}% confidence
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* AI Suggestions */}
            {aiSuggestions.length > 0 && (
              <div className="bg-white/50 rounded-lg p-3 mb-4">
                <h4 className="font-medium mb-2 flex items-center">
                  <Bot className="mr-2 h-4 w-4" />
                  AI Suggestions
                </h4>
                <ul className="space-y-1">
                  {aiSuggestions.map((suggestion, index) => (
                    <li key={index} className="text-sm text-muted-foreground flex items-center">
                      <CheckCircle className="mr-2 h-3 w-3 text-green-500" />
                      {suggestion}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Smart Knowledge Base */}
            <div className="bg-white/50 rounded-lg p-3">
              <h4 className="font-medium mb-2 flex items-center">
                <Database className="mr-2 h-4 w-4" />
                Smart Knowledge Base
              </h4>
              <div className="space-y-2">
                {knowledgeBase.map((article) => (
                  <div key={article.id} className="flex items-center justify-between text-sm">
                    <div className="flex items-center">
                      <Search className="mr-2 h-3 w-3 text-purple-500" />
                      <span>{article.title}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">{article.category}</Badge>
                      <span className="text-xs text-muted-foreground">{article.relevance}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Enhanced Features Panel */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card className="border-green-200 bg-green-50">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm flex items-center">
                <Camera className="mr-2 h-4 w-4 text-green-600" />
                Smart Check-in
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground mb-2">
                Facial recognition and QR code scanning for instant visitor processing
              </p>
              <Button size="sm" variant="outline" className="w-full">
                <QrCode className="mr-2 h-3 w-3" />
                Activate Scanner
              </Button>
            </CardContent>
          </Card>

          <Card className="border-orange-200 bg-orange-50">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm flex items-center">
                <Navigation className="mr-2 h-4 w-4 text-orange-600" />
                Wayfinding AI
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground mb-2">
                Interactive maps and directions for visitor guidance
              </p>
              <Button size="sm" variant="outline" className="w-full">
                <MapPin className="mr-2 h-3 w-3" />
                Send Directions
              </Button>
            </CardContent>
          </Card>

          <Card className="border-purple-200 bg-purple-50">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm flex items-center">
                <Shield className="mr-2 h-4 w-4 text-purple-600" />
                Security Integration
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground mb-2">
                Automated security alerts and access control management
              </p>
              <Button size="sm" variant="outline" className="w-full">
                <Zap className="mr-2 h-3 w-3" />
                Security Status
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Coordinator Cards */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <IdCard className="mr-2 h-6 w-6 text-blue-600" />
            Helpdesk Coordinator Workspaces
          </h2>
          <p className="text-muted-foreground mb-6">
            Click on a card to expand and access the full workspace with AI-enhanced features
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {coordinators.map((coordinator) => (
            <Card 
              key={coordinator.id}
              className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                activeCard === coordinator.id ? 'ring-2 ring-blue-500' : ''
              }`}
              onClick={() => setActiveCard(activeCard === coordinator.id ? null : coordinator.id)}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white text-xl mr-4">
                      {coordinator.avatar}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{coordinator.name}</CardTitle>
                      <CardDescription>{coordinator.title}</CardDescription>
                      <p className="text-sm text-muted-foreground">{coordinator.location}</p>
                    </div>
                  </div>
                  <Badge variant={coordinator.status === 'online' ? 'default' : 'secondary'}>
                    {coordinator.status}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  {Object.entries(coordinator.stats).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-2xl font-bold text-blue-600">{value}</div>
                      <div className="text-xs text-muted-foreground capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Expanded Content */}
                {activeCard === coordinator.id && (
                  <div className="mt-6 border-t pt-6">
                    <Tabs defaultValue="dashboard" className="w-full">
                      <TabsList className="grid w-full grid-cols-4">
                        <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
                        <TabsTrigger value="management">
                          {coordinator.id === 'nichelle' ? 'Visitors' : 'Remedy'}
                        </TabsTrigger>
                        <TabsTrigger value="ai-insights">AI Insights</TabsTrigger>
                        <TabsTrigger value="tools">Tools</TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="dashboard" className="space-y-4">
                        {coordinator.id === 'nichelle' ? (
                          <div>
                            <h4 className="font-semibold mb-3">Active Visitors</h4>
                            <div className="space-y-2">
                              {coordinator.activeVisitors.map((visitor, index) => (
                                <div key={index} className="bg-muted/50 rounded-lg p-3">
                                  <div className="flex items-center justify-between">
                                    <div className="font-medium">{visitor.name}</div>
                                    {getSentimentIcon(visitor.sentiment)}
                                  </div>
                                  <div className="text-sm text-muted-foreground flex justify-between">
                                    <span>{visitor.location}</span>
                                    <span>{visitor.time}</span>
                                  </div>
                                </div>
                              ))}
                            </div>
                            <div className="flex gap-2 mt-4">
                              <Button size="sm" className="flex-1">
                                <UserPlus className="mr-2 h-4 w-4" />
                                Check-in
                              </Button>
                              <Button size="sm" variant="outline" className="flex-1">
                                <IdCard className="mr-2 h-4 w-4" />
                                Issue Card
                              </Button>
                            </div>
                          </div>
                        ) : (
                          <div>
                            <h4 className="font-semibold mb-3">Priority Work Orders</h4>
                            <div className="space-y-2">
                              {coordinator.workOrders.map((wo, index) => (
                                <div key={index} className="bg-muted/50 rounded-lg p-3 border-l-4 border-blue-500">
                                  <div className="font-medium">{wo.id} - {wo.title}</div>
                                  <div className="text-sm text-muted-foreground flex justify-between">
                                    <span>{wo.location}</span>
                                    <Badge variant={wo.status === 'In Progress' ? 'default' : 'secondary'}>
                                      {wo.status}
                                    </Badge>
                                  </div>
                                  <div className="text-xs text-muted-foreground mt-1">
                                    Predicted completion: {wo.predictedCompletion}
                                  </div>
                                </div>
                              ))}
                            </div>
                            <div className="flex gap-2 mt-4">
                              <Button size="sm" className="flex-1">
                                <ClipboardList className="mr-2 h-4 w-4" />
                                New WO
                              </Button>
                              <Button size="sm" variant="outline" className="flex-1">
                                <CheckCircle className="mr-2 h-4 w-4" />
                                Follow-up
                              </Button>
                            </div>
                          </div>
                        )}
                      </TabsContent>
                      
                      <TabsContent value="management" className="space-y-4">
                        {coordinator.id === 'nichelle' ? (
                          <div className="space-y-4">
                            <h4 className="font-semibold">New Visitor Registration</h4>
                            <div className="space-y-3">
                              <div>
                                <Label htmlFor="visitor-name">Full Name</Label>
                                <Input id="visitor-name" placeholder="Visitor name" />
                              </div>
                              <div>
                                <Label htmlFor="company">Company</Label>
                                <Input id="company" placeholder="Company name" />
                              </div>
                              <div>
                                <Label htmlFor="purpose">Visit Purpose</Label>
                                <Select>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select purpose" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="meeting">Meeting</SelectItem>
                                    <SelectItem value="interview">Interview</SelectItem>
                                    <SelectItem value="delivery">Delivery</SelectItem>
                                    <SelectItem value="contractor">Contractor</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                              <div className="flex gap-2">
                                <Button className="flex-1">Save</Button>
                                <Button variant="outline" className="flex-1">Print Badge</Button>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="space-y-4">
                            <h4 className="font-semibold">Add Progress Note</h4>
                            <div className="space-y-3">
                              <div>
                                <Label htmlFor="call-ref">Call Reference</Label>
                                <Select>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select call reference" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="req-001">REQ-2025-001 - AC not cooling</SelectItem>
                                    <SelectItem value="req-002">REQ-2025-002 - Leaking tap</SelectItem>
                                    <SelectItem value="req-003">REQ-2025-003 - Flickering lights</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                              <div>
                                <Label htmlFor="progress">Progress Update</Label>
                                <Textarea id="progress" placeholder="Enter progress details..." />
                              </div>
                              <div>
                                <Label htmlFor="status">Status</Label>
                                <Select>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select status" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="in-progress">In Progress</SelectItem>
                                    <SelectItem value="awaiting-parts">Awaiting Parts</SelectItem>
                                    <SelectItem value="completed">Completed</SelectItem>
                                    <SelectItem value="on-hold">On Hold</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                              <Button className="w-full">Update</Button>
                            </div>
                          </div>
                        )}
                      </TabsContent>

                      <TabsContent value="ai-insights" className="space-y-4">
                        <div className="space-y-4">
                          <h4 className="font-semibold flex items-center">
                            <Brain className="mr-2 h-4 w-4" />
                            AI-Powered Insights
                          </h4>
                          
                          {/* Sentiment Trends */}
                          <div className="bg-muted/50 rounded-lg p-3">
                            <h5 className="font-medium mb-2 flex items-center">
                              <Heart className="mr-2 h-3 w-3" />
                              Recent Interaction Sentiment
                            </h5>
                            <div className="grid grid-cols-3 gap-2 text-center">
                              <div className="text-green-600">
                                <Smile className="h-4 w-4 mx-auto mb-1" />
                                <div className="text-xs">Positive: 65%</div>
                              </div>
                              <div className="text-yellow-600">
                                <Meh className="h-4 w-4 mx-auto mb-1" />
                                <div className="text-xs">Neutral: 25%</div>
                              </div>
                              <div className="text-red-600">
                                <Frown className="h-4 w-4 mx-auto mb-1" />
                                <div className="text-xs">Negative: 10%</div>
                              </div>
                            </div>
                          </div>

                          {/* Predictive Analytics */}
                          <div className="bg-muted/50 rounded-lg p-3">
                            <h5 className="font-medium mb-2 flex items-center">
                              <TrendingUp className="mr-2 h-3 w-3" />
                              Predictive Analytics
                            </h5>
                            <div className="space-y-2 text-sm">
                              <div className="flex justify-between">
                                <span>Peak hours today:</span>
                                <span className="font-medium">2:00-4:00 PM</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Expected call volume:</span>
                                <span className="font-medium">+15% above average</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Resource optimization:</span>
                                <span className="font-medium text-green-600">Optimal</span>
                              </div>
                            </div>
                          </div>

                          {/* Knowledge Recommendations */}
                          <div className="bg-muted/50 rounded-lg p-3">
                            <h5 className="font-medium mb-2 flex items-center">
                              <Database className="mr-2 h-3 w-3" />
                              Recommended Knowledge Articles
                            </h5>
                            <div className="space-y-1 text-sm">
                              <div className="flex items-center">
                                <Search className="mr-2 h-3 w-3 text-blue-500" />
                                <span>HVAC Emergency Procedures</span>
                              </div>
                              <div className="flex items-center">
                                <Search className="mr-2 h-3 w-3 text-blue-500" />
                                <span>Visitor Badge Troubleshooting</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="tools" className="space-y-4">
                        <div className="grid grid-cols-3 gap-3">
                          {[
                            { name: 'Outlook', icon: Mail },
                            { name: 'Teams', icon: MessageSquare },
                            { name: coordinator.id === 'nichelle' ? 'Visitors' : 'Remedy', icon: Users },
                            { name: coordinator.id === 'nichelle' ? 'Cards' : 'Work Orders', icon: IdCard },
                            { name: coordinator.id === 'nichelle' ? 'Courier' : 'Contacts', icon: Truck },
                            { name: coordinator.id === 'nichelle' ? 'Calendar' : 'Power BI', icon: coordinator.id === 'nichelle' ? Calendar : BarChart3 }
                          ].map((tool, index) => (
                            <Button key={index} variant="outline" className="h-20 flex flex-col">
                              <tool.icon className="h-6 w-6 mb-1" />
                              <span className="text-xs">{tool.name}</span>
                            </Button>
                          ))}
                        </div>
                        
                        {/* Phone Dialer */}
                        <div className="mt-6">
                          <h4 className="font-semibold mb-3">Phone Dialer</h4>
                          <div className="grid grid-cols-3 gap-2">
                            {['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#'].map((digit) => (
                              <Button key={digit} variant="outline" className="aspect-square">
                                {digit}
                              </Button>
                            ))}
                            <Button className="col-span-3 mt-2">
                              <Phone className="mr-2 h-4 w-4" />
                              Call
                            </Button>
                          </div>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
