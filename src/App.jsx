import { useState } from 'react'
import CoordinatorSelector from './components/CoordinatorSelector'
import HeaderToolbar from './components/HeaderToolbar'
import MainTabs from './components/MainTabs'
import { useCoordinators, useNotifications } from './hooks/useAppData'
import { useDarkMode } from './hooks/useDarkMode'
import './index.css'

function App() {
  const [activeCoordinator, setActiveCoordinator] = useState(null)
  const [aiAssistantActive, setAiAssistantActive] = useState(true)
  const [voiceAssistantActive, setVoiceAssistantActive] = useState(false)
  
  const { darkMode, toggleDarkMode } = useDarkMode()
  const { coordinators } = useCoordinators()
  const { notifications, markAsRead } = useNotifications()

  if (!activeCoordinator) {
    return (
      <CoordinatorSelector
        coordinators={coordinators}
        onSelect={setActiveCoordinator}
      />
    )
  }

  const coordinator = coordinators.find(c => c.id === activeCoordinator)

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'bg-slate-900 text-white' : 'bg-gradient-to-br from-slate-50 to-blue-50'
    }`}>
      <HeaderToolbar
        coordinator={coordinator}
        darkMode={darkMode}
        onToggleDark={toggleDarkMode}
        aiActive={aiAssistantActive}
        onToggleAi={() => setAiAssistantActive(!aiAssistantActive)}
        voiceActive={voiceAssistantActive}
        onToggleVoice={() => setVoiceAssistantActive(!voiceAssistantActive)}
        onBack={() => setActiveCoordinator(null)}
      />
      
      <MainTabs
        coordinator={coordinator}
        notifications={notifications}
        darkMode={darkMode}
        aiActive={aiAssistantActive}
        onMarkNotificationAsRead={markAsRead}
      />
    </div>
  )
}

export default App