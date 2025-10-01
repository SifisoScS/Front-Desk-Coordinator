import React, { useState, useRef, useEffect } from 'react'

const Select = ({ children, className = '', ...props }) => {
  const [open, setOpen] = useState(false)
  const [selectedValue, setSelectedValue] = useState(null)
  const ref = useRef(null)

  const toggleOpen = () => setOpen(!open)

  const handleSelect = (value) => {
    setSelectedValue(value)
    setOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className={`relative inline-block w-full ${className}`} ref={ref} {...props}>
      {React.Children.map(children, (child) => {
        if (child.type.displayName === 'SelectTrigger') {
          return React.cloneElement(child, { onClick: toggleOpen, selectedValue })
        }
        if (child.type.displayName === 'SelectContent' && open) {
          return React.cloneElement(child, { onSelect: handleSelect })
        }
        return child
      })}
    </div>
  )
}

const SelectTrigger = React.forwardRef(({ className = '', onClick, selectedValue, ...props }, ref) => {
  return (
    <button
      type="button"
      ref={ref}
      onClick={onClick}
      className={`flex w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      {...props}
    >
      <span>{selectedValue || props.placeholder}</span>
      <svg
        className="ml-2 h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </button>
  )
})
SelectTrigger.displayName = 'SelectTrigger'

const SelectContent = React.forwardRef(({ children, className = '', onSelect, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md border border-input bg-background py-1 text-sm shadow-lg focus:outline-none ${className}`}
      {...props}
    >
      {React.Children.map(children, (child) => {
        if (child.type.displayName === 'SelectItem') {
          return React.cloneElement(child, { onSelect })
        }
        return child
      })}
    </div>
  )
})
SelectContent.displayName = 'SelectContent'

const SelectItem = React.forwardRef(({ children, value, className = '', onSelect, ...props }, ref) => {
  const handleClick = () => {
    if (onSelect) onSelect(value)
  }

  return (
    <div
      ref={ref}
      role="option"
      tabIndex={-1}
      className={`cursor-pointer select-none rounded-sm py-1.5 px-3 text-sm hover:bg-accent hover:text-accent-foreground ${className}`}
      onClick={handleClick}
      {...props}
    >
      {children}
    </div>
  )
})
SelectItem.displayName = 'SelectItem'

export { Select, SelectTrigger, SelectContent, SelectItem }
