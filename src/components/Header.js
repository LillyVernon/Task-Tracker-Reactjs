import React from 'react'
import { Button } from './Button'
import { ReactPropTypes } from 'react'

const Header = (props) => {
   
  return (
    <header className='header'>
      <h1> {props.title} </h1>
     <Button color={props.showAdd? 'red': 'green'} text={props.showAdd ? 'Close' : 'Create New Task'}  onClick={props.onAdd} />
    </header>
  )
}

export default Header
