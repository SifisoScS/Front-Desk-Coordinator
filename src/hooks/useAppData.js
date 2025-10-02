import { useState } from 'react'

export const useCoordinators = () => {
  const [coordinators] = useState([
    {
      id: 'nichelle',
      name: 'Nichelle Naidoo',
      title: 'Reception Coordinator',
      location: '🏢 Front Desk • Durban Office',
      avatar: '👩‍💼',
      status: 'online',
      stats: { visitors: 32, deliveries: 12, calls: 45 },
      metrics: [
        { label: 'Visitor Satisfaction', value: '94%', trend: '+2%', icon: 'Smile', color: 'text-green-500' },
        { label: 'Check-in Speed', value: '1.2min', trend: '-0.3min', icon: 'Zap', color: 'text-blue-500' },
        { label: 'AI Predictions', value: '87%', trend: 'Accurate', icon: 'Brain', color: 'text-purple-500' }
      ],
      tools: [
        { name: 'Outlook', icon: 'Mail', url: 'https://outlook.office.com', category: 'Communication', featured: true },
        { name: 'Teams', icon: 'MessageSquare', url: 'https://teams.microsoft.com', category: 'Communication', featured: true },
        // ... other tools
      ],
      visitors: [
        { name: 'International Delegation', company: 'TechCorp', location: 'Meeting Room A', time: '09:30-12:30', status: 'checked-in', sentiment: 'satisfied', avatar: '🌍' },
        // ... other visitors
      ]
    },
    {
      id: 'ntobeko',
      name: 'Ntobeko Ngcobo',
      title: 'Helpdesk Coordinator',
      location: '🛠️ Helpdesk Station • Durban Office',
      avatar: '👨‍💻',
      status: 'online',
      stats: { activeCalls: 18, workOrders: 12, responseRate: '98%' },
      metrics: [
        { label: 'First Contact Resolution', value: '89%', trend: '+5%', icon: 'CheckCircle', color: 'text-green-500' },
        { label: 'Avg. Resolution Time', value: '2.3h', trend: '-0.7h', icon: 'Clock', color: 'text-blue-500' },
        { label: 'AI Accuracy', value: '92%', trend: 'Improving', icon: 'Cpu', color: 'text-purple-500' }
      ],
      tools: [
        { name: 'Outlook', icon: 'Mail', url: 'https://outlook.office.com', category: 'Communication', featured: true },
        { name: 'Teams', icon: 'MessageSquare', url: 'https://teams.microsoft.com', category: 'Communication', featured: true },
        // ... other tools
      ],
      workOrders: [
        { id: 'WO-2025-142', title: 'HVAC Failure', location: 'Conference Room A', status: 'In Progress', priority: 'high', predictedCompletion: '2 hours', technician: 'John D.', progress: 65 },
        // ... other work orders
      ]
    }
  ])

  return { coordinators }
}

export const useNotifications = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, type: 'reminder', message: 'International Delegation arriving in 15 minutes', priority: 'high', time: '09:15', read: false },
    { id: 2, type: 'call', message: 'Incoming call from HVAC contractor', priority: 'medium', time: '09:12', sentiment: 'frustrated', read: false },
    { id: 3, type: 'task', message: 'Follow-up required for WO-2025-142', priority: 'low', time: '09:10', read: true },
  ])

  const markAsRead = (id) => {
    setNotifications(notifications.map(notif => 
      notif.id === id ? { ...notif, read: true } : notif
    ))
  }

  return { notifications, markAsRead }
}