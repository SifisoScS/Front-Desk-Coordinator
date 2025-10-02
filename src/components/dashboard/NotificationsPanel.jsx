import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Bell } from 'lucide-react'

const NotificationsPanel = ({ notifications, darkMode, onMarkAsRead }) => {
  return (
    <Card className={darkMode ? 'bg-slate-800 border-slate-700' : ''}>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center">
            <Bell className="mr-2 h-5 w-5" />
            Recent Notifications
          </div>
          <Badge variant="outline" className="bg-blue-500/10 text-blue-600 border-blue-500/20">
            {notifications.filter(n => !n.read).length} New
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {notifications.map((notif) => (
            <div 
              key={notif.id} 
              className={`p-3 rounded-lg border cursor-pointer transition-all ${
                notif.read 
                  ? (darkMode ? 'border-slate-600 bg-slate-700/30' : 'border-slate-200 bg-slate-50') 
                  : (darkMode ? 'border-blue-500/30 bg-blue-500/10' : 'border-blue-200 bg-blue-50')
              } ${notif.read ? '' : 'ring-2 ring-blue-500/20'}`}
              onClick={() => onMarkAsRead(notif.id)}
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
      </CardContent>
    </Card>
  )
}

export default NotificationsPanel