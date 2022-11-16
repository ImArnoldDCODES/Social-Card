import React from 'react'
import './styles.css'
import { NavLink } from 'react-router-dom'

export default function Land() {

  return (
    <div className='content'>
      <div className='text'>
        <h1>Hello, make social cards for your business within 2 mins</h1>
        <NavLink to='/create'>
          Get Started
        </NavLink>
        <h1>Playing with redux</h1>
     </div>
    </div>
  )
}
