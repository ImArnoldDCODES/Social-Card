import React from 'react'
import './styles.css'
import { NavLink } from 'react-router-dom'
import { GrFormCheckmark } from 'react-icons/gr'
import Rectangle from '../Rectangle.svg'

export default function Land() {
  return (
    <div className='content'>
      <div className='body'>
        <div className='text'>
          <h1>Create Social Cards with <span> Ease </span></h1>
          <h3>Free Social Card Generator</h3>
          <div className='border'>
            <h4><GrFormCheckmark size={25} className='check' color='#EFEEE040' /> <span> Free,</span> completely free </h4>
            {/* <h4><GrFormCheckmark size={25} className='check' /> <span>All </span> Socials</h4> */}
            <h4><GrFormCheckmark size={25} className='check' /> <span>Share </span> with others</h4>
          </div>
          <button className='button'>
            <NavLink to='/create' className='nav'>
              Get Started
            </NavLink>
          </button>
        </div>
        <div className='svg'>
          <img src={Rectangle} alt='' />
        </div>
      </div>
    </div>
  )
}
