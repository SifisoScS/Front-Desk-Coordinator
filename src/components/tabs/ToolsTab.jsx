import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Grid, Search, Star, Phone, Headphones, MessageSquare, Briefcase, Users, ClipboardList, BarChart3, Network, Shield } from 'lucide-react'

const ToolsTab = ({ coordinator, darkMode }) => {
  return (
    <Card className={darkMode ? 'bg-slate-800 border-slate-700' : ''}>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center">
            <Grid className="mr-2 h-5 w-5" />
            Your Digital Workspace
          </div>
        </CardTitle>
        <CardDescription>
          All applications and systems optimized for your daily workflow
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <Star className="mr-2 h-5 w-5 text-yellow-500" />
            Featured Tools
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {coordinator.tools.filter(tool => tool.featured).slice(0, 6).map((tool, index) => (
              <Button
                key={index}
                variant="outline"
                className={`h-24 flex flex-col items-center justify-center transition-all group relative overflow-hidden ${
                  darkMode 
                    ? 'border-slate-600 bg-slate-700/50 hover:border-cyan-400 hover:bg-slate-700' 
                    : 'border-slate-200 bg-white hover:border-blue-300 hover:bg-blue-50'
                }`}
              >
                <div className={`p-2 rounded-lg mb-2 group-hover:scale-110 transition-transform ${
                  darkMode ? 'bg-slate-600' : 'bg-blue-50'
                }`}>
                  {/* Icon would go here */}
                </div>
                <span className="text-sm font-medium text-center">{tool.name}</span>
              </Button>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <Phone className="mr-2 h-5 w-5" />
            Smart Dial Pad
          </h3>
          <div className="max-w-md mx-auto">
            <div className={`rounded-xl p-4 mb-4 ${
              darkMode ? 'bg-slate-700' : 'bg-blue-50'
            }`}>
              <Input 
                placeholder="Enter name or number..." 
                className={`text-center text-lg mb-2 ${darkMode ? 'bg-slate-600 border-slate-500' : ''}`}
              />
            </div>
            <div className="grid grid-cols-3 gap-3 mb-4">
              {['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#'].map((digit) => (
                <Button 
                  key={digit} 
                  variant="outline" 
                  className="h-14 text-xl font-semibold"
                >
                  {digit}
                </Button>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Button className="h-12 bg-gradient-to-r from-green-600 to-blue-600">
                <Phone className="mr-2 h-5 w-5" />
                Call
              </Button>
              <Button variant="outline" className="h-12">
                <Headphones className="mr-2 h-5 w-5" />
                Voicemail
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default ToolsTab