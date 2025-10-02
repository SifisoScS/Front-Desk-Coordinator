import { Button } from '@/components/ui/button'
import { Building, Rocket, Sparkles, Brain, Bot, Zap } from 'lucide-react'

const CoordinatorCard = ({ coord, onSelect }) => (
  <div 
    className="cursor-pointer transition-all duration-500 hover:scale-105 bg-white/5 backdrop-blur-xl border border-white/10 hover:border-cyan-400/30 hover:bg-white/10 group rounded-2xl p-6"
    onClick={() => onSelect(coord.id)}
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
)

const CoordinatorSelector = ({ coordinators, onSelect }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-900 to-slate-900"></div>
      
      <header className="relative bg-gradient-to-r from-blue-600/90 to-cyan-500/90 backdrop-blur-xl border-b border-blue-400/20 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-2xl flex items-center justify-center text-white text-3xl shadow-lg">
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
            <CoordinatorCard key={coord.id} coord={coord} onSelect={onSelect} />
          ))}
        </div>

        <AIAssistantPreview />
      </div>
    </div>
  )
}

const AIAssistantPreview = () => (
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
)

export default CoordinatorSelector