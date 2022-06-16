import React from 'react'

const ColorOption = ({ color = '#000' }) => {
  return (
    <div style={{
        backgroundColor: color, 
        border: '2px solid rgba(0,0,0,.3)', 
        borderRadius: '10%', 
        height: '40px', 
        width: '40px' 
    }} />
  )
}

export default ColorOption