import React from 'react'

const Alert = React.forwardRef(({ className = '', ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={`rounded-md border p-4 text-sm font-medium ${className}`}
    {...props}
  />
))
Alert.displayName = 'Alert'

const AlertDescription = React.forwardRef(({ className = '', ...props }, ref) => (
  <p ref={ref} className={`text-sm font-normal ${className}`} {...props} />
))
AlertDescription.displayName = 'AlertDescription'

export { Alert, AlertDescription }
