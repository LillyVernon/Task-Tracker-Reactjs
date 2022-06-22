import React from 'react'
import { ReactPropTypes } from 'react'

export const Button = ({color,text, onClick}) => {
    
  return (
    <button  onClick={onClick} style={{backgroundColor: color}} className="btn"> {text} </button>
  )
}

export default Button