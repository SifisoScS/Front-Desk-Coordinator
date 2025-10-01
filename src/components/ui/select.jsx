import React, { useState } from 'react'

const SelectContext = React.createContext()

const Select = ({ children, value, onValueChange, ...props }) => {
  const [open, setOpen] = useState(false)
  
  return (
    <SelectContext.Provider value={{ value, onValueChange, open, setOpen }}>
      <div className="relative" {...props}>
        {children}
      </div>
    </SelectContext.Provider>
  )
}

const SelectTrigger = ({ children, className = '', ...props }) => {
  const { open, setOpen } = React.useContext(SelectContext)
  
  return (
    <button
      type="button"
      className={`flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      onClick={() => setOpen(!open)}
      {...props}
    >
      {children}
      <svg className="h-4 w-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </button>
  )
}

const SelectValue = ({ placeholder, ...props }) => {
  const { value } = React.useContext(SelectContext)
  
  return (
    <span {...props}>
      {value || placeholder}
    </span>
  )
}

const SelectContent = ({ children, className = '', ...props }) => {
  const { open } = React.useContext(SelectContext)
  
  if (!open) return null
  
  return (
    <div className={`absolute top-full z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md ${className}`} {...props}>
      {children}
    </div>
  )
}

const SelectItem = ({ children, value, className = '', ...props }) => {
  const { onValueChange, setOpen } = React.useContext(SelectContext)
  
  return (
    <div
      className={`relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground hover:bg-accent hover:text-accent-foreground ${className}`}
      onClick={() => {
        onValueChange(value)
        setOpen(false)
      }}
      {...props}
    >
      {children}
    </div>
  )
}

export { Select, SelectTrigger, SelectValue, SelectContent, SelectItem }
