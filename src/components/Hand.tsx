import React from 'react'

const Hand = ({ className, value } : any) => (
    <div
      className={`hand ${className}`}
      style={{ transform: `translateX(-50%) rotate(${value}deg)` }}
    />
  )

export default Hand