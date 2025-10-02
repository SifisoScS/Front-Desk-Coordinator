import MetricsGrid from '../dashboard/MetricsGrid'
import ActiveItemsPanel from '../dashboard/ActiveItemsPanel'
import NotificationsPanel from '../dashboard/NotificationsPanel'
import QuickActionsPanel from '../dashboard/QuickActionsPanel'

const DashboardTab = ({ coordinator, notifications, darkMode, onMarkNotificationAsRead }) => {
  return (
    <div className="space-y-6">
      <MetricsGrid metrics={coordinator.metrics} darkMode={darkMode} />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ActiveItemsPanel coordinator={coordinator} darkMode={darkMode} />
        
        <div className="space-y-6">
          <NotificationsPanel 
            notifications={notifications}
            darkMode={darkMode}
            onMarkAsRead={onMarkNotificationAsRead}
          />
          <QuickActionsPanel coordinator={coordinator} darkMode={darkMode} />
        </div>
      </div>
    </div>
  )
}

export default DashboardTab