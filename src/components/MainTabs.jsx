import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import DashboardTab from './tabs/DashboardTab'
import VisitorsTab from './tabs/VisitorsTab'
import ToolsTab from './tabs/ToolsTab'
import AiInsightsTab from './tabs/AiInsightsTab'
import { Home, Users, ClipboardList, Grid, Brain } from 'lucide-react'

const MainTabs = ({ coordinator, notifications, darkMode, aiActive, onMarkNotificationAsRead }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <Tabs defaultValue="dashboard" className="w-full">
        <TabsList className={`grid w-full grid-cols-4 mb-8 ${
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
        </TabsList>

        <TabsContent value="dashboard">
          <DashboardTab 
            coordinator={coordinator}
            notifications={notifications}
            darkMode={darkMode}
            onMarkNotificationAsRead={onMarkNotificationAsRead}
          />
        </TabsContent>

        <TabsContent value="visitors">
          <VisitorsTab coordinator={coordinator} darkMode={darkMode} />
        </TabsContent>

        <TabsContent value="tools">
          <ToolsTab coordinator={coordinator} darkMode={darkMode} />
        </TabsContent>

        <TabsContent value="ai-insights">
          <AiInsightsTab coordinator={coordinator} darkMode={darkMode} />
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default MainTabs