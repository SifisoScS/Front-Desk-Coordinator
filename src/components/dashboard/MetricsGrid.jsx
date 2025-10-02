import { Card, CardContent } from '@/components/ui/card'

const MetricsGrid = ({ metrics, darkMode }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {metrics.map((metric, index) => (
        <Card key={index} className={darkMode ? 'bg-slate-800 border-slate-700' : ''}>
          <CardContent className="p-6">
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
                {/* Icon would be rendered here based on metric.icon */}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default MetricsGrid