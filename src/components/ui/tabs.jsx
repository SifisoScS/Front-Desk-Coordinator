import React, { useState } from 'react'

const TabsContext = React.createContext()

const Tabs = ({ children, defaultValue, className = '', ...props }) => {
  const [value, setValue] = useState(defaultValue)
  
  return (
    <TabsContext.Provider value={{ value, setValue }}>
      <div className={className} {...props}>
        {children}
      </div>
    </TabsContext.Provider>
  )
}

const TabsList = ({ children, className = '', ...props }) => {
  return (
    <div className={`inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground ${className}`} {...props}>
      {children}
    </div>
  )
}

const TabsTrigger = ({ children, value, className = '', ...props }) => {
  const { value: selectedValue, setValue } = React.useContext(TabsContext)
  
  return (
    <button
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${
        selectedValue === value
          ? 'bg-background text-foreground shadow-sm'
          : 'hover:bg-muted hover:text-foreground'
      } ${className}`}
      onClick={() => setValue(value)}
      {...props}
    >
      {children}
    </button>
  )
}

const TabsContent = ({ children, value, className = '', ...props }) => {
  const { value: selectedValue } = React.useContext(TabsContext)
  
  if (selectedValue !== value) return null
  
  return (
    <div className={`mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${className}`} {...props}>
      {children}
    </div>
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent }
