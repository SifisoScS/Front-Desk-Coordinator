import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Users, ClipboardList, Smile, Frown, Meh } from 'lucide-react'

const ActiveItemsPanel = ({ coordinator, darkMode }) => {
  const getSentimentIcon = (sentiment) => {
    switch (sentiment) {
      case 'happy': case 'satisfied': return <Smile className="h-4 w-4 text-green-500" />
      case 'frustrated': case 'angry': return <Frown className="h-4 w-4 text-red-500" />
      default: return <Meh className="h-4 w-4 text-yellow-500" />
    }
  }

  return (
    <Card className={darkMode ? 'bg-slate-800 border-slate-700' : ''}>
      <CardHeader>
        <CardTitle className="flex items-center">
          {coordinator.id === 'nichelle' ? <Users className="mr-2 h-5 w-5" /> : <ClipboardList className="mr-2 h-5 w-5" />}
          {coordinator.id === 'nichelle' ? 'Active Visitors' : 'Priority Work Orders'}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {coordinator.id === 'nichelle' ? (
          <div className="space-y-4">
            {coordinator.visitors?.map((visitor, index) => (
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
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {coordinator.workOrders?.map((wo, index) => (
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
                      {wo.location}
                    </div>
                  </div>
                  <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                    wo.status === 'In Progress' ? 'bg-blue-100 text-blue-800' : 
                    wo.status === 'Critical' ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-800'
                  }`}>
                    {wo.status}
                  </div>
                </div>
                <Progress value={wo.progress} className="h-2" />
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export default ActiveItemsPanel