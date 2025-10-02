import { Button } from '@/components/ui/button'
import { ArrowLeft, Bot, Mic, MicOff } from 'lucide-react'

const HeaderToolbar = ({ 
  coordinator, 
  darkMode, 
  onToggleDark, 
  aiActive, 
  onToggleAi, 
  voiceActive, 
  onToggleVoice, 
  onBack 
}) => {
  return (
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
              onClick={onBack}
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
              variant={aiActive ? "default" : "outline"}
              size="sm"
              className={aiActive ? 
                "bg-gradient-to-r from-purple-600 to-cyan-600 border-0 text-white" : 
                darkMode ? "border-slate-600 text-slate-300" : "border-slate-300"
              }
              onClick={onToggleAi}
            >
              <Bot className="mr-2 h-4 w-4" />
              AI {aiActive ? 'On' : 'Off'}
            </Button>

            <Button
              variant={voiceActive ? "default" : "outline"}
              size="sm"
              className={voiceActive ? 
                "bg-gradient-to-r from-green-600 to-blue-600 border-0 text-white" : 
                darkMode ? "border-slate-600 text-slate-300" : "border-slate-300"
              }
              onClick={onToggleVoice}
            >
              {voiceActive ? <Mic className="mr-2 h-4 w-4" /> : <MicOff className="mr-2 h-4 w-4" />}
              Voice
            </Button>

            <Button
              variant="outline"
              size="sm"
              className={darkMode ? "border-slate-600 text-slate-300" : "border-slate-300"}
              onClick={onToggleDark}
            >
              {darkMode ? '🌙' : '☀️'}
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default HeaderToolbar