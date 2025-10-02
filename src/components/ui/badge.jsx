import React from 'react'

// Simplified version without cn dependency
const Badge = React.forwardRef(({ className = '', variant = 'default', ...props }, ref) => {
  const baseClasses = 'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors'
  
  const variantClasses = {
    default: 'border-transparent bg-gray-100 text-gray-800',
    secondary: 'border-transparent bg-blue-100 text-blue-800', 
    destructive: 'border-transparent bg-red-100 text-red-800',
    outline: 'border-gray-300 text-gray-700',
    success: 'border-transparent bg-green-100 text-green-800 border-green-300'
  }

  const combinedClass = `${baseClasses} ${variantClasses[variant] || variantClasses.default} ${className}`

  return (
    <span
      ref={ref}
      className={combinedClass}
      {...props}
    />
  )
})

Badge.displayName = 'Badge'

export { Badge }