import React from 'react'
import './styles.css'
import { NavLink } from 'react-router-dom'

export default function Land() {

  return (
    <div className='content'>
      <div className='text'>
        <h1>Create Social Cards with Ease <span>In 3 Min</span></h1>
        <h3>Free Social Card Generator</h3>
        <div className='border'>
          <h4>Free, completely free </h4>
          <h4>All Socials</h4>
          <h4>Share with others</h4>
        </div>
        <NavLink to='/create'>
          <button>
          Get Started
          </button>
        </NavLink>
      </div>

    </div>
  )
}
