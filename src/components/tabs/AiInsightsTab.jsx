import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Progress } from '@/components/ui/progress'
import { Brain, TrendingUp, Activity, BarChart4, Sparkles, CheckCircle, Zap, Coffee, BatteryCharging, Workflow, Smile, Meh, Frown, Heart } from 'lucide-react'

const AiInsightsTab = ({ coordinator, darkMode }) => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className={`border-l-4 border-l-purple-500 ${
          darkMode ? 'bg-slate-800 border-slate-700' : 'bg-purple-50 border-purple-200'
        }`}>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Brain className="mr-2 h-5 w-5 text-purple-600" />
              AI Predictions & Forecasts
            </CardTitle>
          </CardHeader>
          <CardContent>
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
                        <span className="font-medium">45-50</span>
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
                      <Alert className="border-orange-200 bg-orange-50 dark:border-orange-500/30 dark:bg-orange-500/10">
                        <AlertDescription>
                          <strong>HVAC System:</strong> May require attention within 48 hours
                        </AlertDescription>
                      </Alert>
                    </div>
                  </div>
                </>
              )}
            </div>
          </CardContent>
        </Card>

        <Card className={darkMode ? 'bg-slate-800 border-slate-700' : ''}>
          <CardHeader>
            <CardTitle className="flex items-center">
              <BarChart4 className="mr-2 h-5 w-5" />
              Performance Analytics
            </CardTitle>
          </CardHeader>
          <CardContent>
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
                    </div>
                  </div>
                </>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className={`border-l-4 border-l-cyan-500 ${
        darkMode ? 'bg-slate-800 border-slate-700' : 'bg-cyan-50 border-cyan-200'
      }`}>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Sparkles className="mr-2 h-5 w-5 text-cyan-600" />
            AI Recommendations
          </CardTitle>
        </CardHeader>
        <CardContent>
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
                  </ul>
                </div>
              </>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default AiInsightsTab