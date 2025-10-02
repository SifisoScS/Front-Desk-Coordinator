import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { UserPlus, CreditCard, UserCheck, Camera, QrCode } from 'lucide-react'

const VisitorsTab = ({ coordinator, darkMode }) => {
  if (coordinator.id !== 'nichelle') {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className={darkMode ? 'bg-slate-800 border-slate-700' : ''}>
          <CardHeader>
            <CardTitle className="flex items-center">
              <UserPlus className="mr-2 h-5 w-5" />
              Create New Work Order
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <Label htmlFor="wo-title">Issue Title *</Label>
                <Input id="wo-title" placeholder="Brief description of the issue" className={darkMode ? 'bg-slate-700 border-slate-600' : ''} />
              </div>
              <div>
                <Label htmlFor="wo-location">Location *</Label>
                <Input id="wo-location" placeholder="Building/Floor/Room" className={darkMode ? 'bg-slate-700 border-slate-600' : ''} />
              </div>
              <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600">
                Create Work Order
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className={darkMode ? 'bg-slate-800 border-slate-700' : ''}>
        <CardHeader>
          <CardTitle className="flex items-center">
            <UserPlus className="mr-2 h-5 w-5" />
            New Visitor Registration
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="visitor-name">Full Name *</Label>
              <Input id="visitor-name" placeholder="Enter visitor name" className={darkMode ? 'bg-slate-700 border-slate-600' : ''} />
            </div>
            <div>
              <Label htmlFor="company">Company *</Label>
              <Input id="company" placeholder="Company name" className={darkMode ? 'bg-slate-700 border-slate-600' : ''} />
            </div>
            <div>
              <Label htmlFor="host">Meeting With</Label>
              <Input id="host" placeholder="Employee name" className={darkMode ? 'bg-slate-700 border-slate-600' : ''} />
            </div>
            <div>
              <Label htmlFor="purpose">Visit Purpose *</Label>
              <Select>
                <SelectTrigger className={darkMode ? 'bg-slate-700 border-slate-600' : ''}>
                  <SelectValue placeholder="Select purpose" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="meeting">Business Meeting</SelectItem>
                  <SelectItem value="interview">Interview</SelectItem>
                  <SelectItem value="delivery">Delivery</SelectItem>
                  <SelectItem value="contractor">Contractor Work</SelectItem>
                  <SelectItem value="tour">Office Tour</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="md:col-span-2">
              <Label htmlFor="notes">Notes</Label>
              <Textarea 
                id="notes" 
                placeholder="Additional information..." 
                className={darkMode ? 'bg-slate-700 border-slate-600' : ''}
              />
            </div>
          </div>
          <div className="flex gap-3 mt-6">
            <Button className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600">
              <UserCheck className="mr-2 h-4 w-4" />
              Register & Check-in
            </Button>
            <Button variant="outline" className="flex-1">
              <CreditCard className="mr-2 h-4 w-4" />
              Print Badge
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className={darkMode ? 'bg-slate-800 border-slate-700' : ''}>
        <CardHeader>
          <CardTitle className="flex items-center">
            <QrCode className="mr-2 h-5 w-5" />
            Quick Check-in Portal
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center p-6">
            <div className={`w-48 h-48 mx-auto border-2 border-dashed ${
              darkMode ? 'border-slate-600' : 'border-slate-300'
            } rounded-xl flex items-center justify-center mb-4`}>
              <QrCode className="h-16 w-16 text-slate-400" />
            </div>
            <p className={`text-sm ${
              darkMode ? 'text-slate-300' : 'text-slate-600'
            } mb-4`}>
              Scan QR code for self check-in
            </p>
            <Button variant="outline" className="w-full">
              <Camera className="mr-2 h-4 w-4" />
              Generate New QR Code
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default VisitorsTab