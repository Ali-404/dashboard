import React from 'react'

export default function Container({children, className = ""}) {
  return (
    <div className={`md:px-12 lg:px-24 min-h-screen bg-gradient-to-tl  from-light_cyan-600  to-light_cyan-900 ${className}`}>
      {children}
    </div>
  )
}
