import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { UserPlus, CreditCard, Phone, MapPin, ClipboardList, Monitor, Database, FileText } from 'lucide-react'

const QuickActionsPanel = ({ coordinator, darkMode }) => {
  return (
    <Card className={darkMode ? 'bg-slate-800 border-slate-700' : ''}>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3">
          {coordinator.id === 'nichelle' ? (
            <>
              <Button variant="outline" className="h-14 justify-start">
                <UserPlus className="mr-2 h-4 w-4" />
                New Visitor
              </Button>
              <Button variant="outline" className="h-14 justify-start">
                <CreditCard className="mr-2 h-4 w-4" />
                Print Badge
              </Button>
              <Button variant="outline" className="h-14 justify-start">
                <Phone className="mr-2 h-4 w-4" />
                Make Call
              </Button>
              <Button variant="outline" className="h-14 justify-start">
                <MapPin className="mr-2 h-4 w-4" />
                Directions
              </Button>
            </>
          ) : (
            <>
              <Button variant="outline" className="h-14 justify-start">
                <ClipboardList className="mr-2 h-4 w-4" />
                New Ticket
              </Button>
              <Button variant="outline" className="h-14 justify-start">
                <Monitor className="mr-2 h-4 w-4" />
                Remote Support
              </Button>
              <Button variant="outline" className="h-14 justify-start">
                <Database className="mr-2 h-4 w-4" />
                Asset Lookup
              </Button>
              <Button variant="outline" className="h-14 justify-start">
                <FileText className="mr-2 h-4 w-4" />
                Knowledge Base
              </Button>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

export default QuickActionsPanel