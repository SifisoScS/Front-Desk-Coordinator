import { Card, CardContent } from '@/components/ui/card'
import { Sparkles, Lightning } from 'lucide-react'

const AIAssistantBanner = ({ coordinator, darkMode }) => {
  return (
    <div className={`mb-6 p-4 rounded-lg border-l-4 border-l-purple-500 ${
      darkMode ? 'bg-slate-800 border-slate-700' : 'bg-purple-50 border-purple-200'
    }`}>
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
                ? 'Monitoring visitor patterns' 
                : 'Analyzing work order trends'
              }
            </div>
          </div>
        </div>
        <span className="inline-flex items-center rounded-full bg-green-500/20 text-green-700 border border-green-500/30 px-2.5 py-0.5 text-xs font-semibold">
          <Lightning className="h-3 w-3 mr-1" />
          Live
        </span>
      </div>
    </div>
  )
}

export default AIAssistantBanner