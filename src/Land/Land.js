import React from 'react'
import './styles.css'
import { NavLink } from 'react-router-dom'
import { GrFormCheckmark } from 'react-icons/gr'
import Man from '../Man.png'

export default function Land() {
  const style = { color: "white", fontSize: "1.5em" }

  return (
    <div className='content'>
      <div className='body'>
        <div className='text'>
          <h1>Create Social Cards with <span> Ease In 3 Min</span></h1>
          <h3>Free Social Card Generator</h3>
          <div className='border'>
            <h4><GrFormCheckmark size={25} className='check' color='#EFEEE040' /> <span> Free,</span> completely free </h4>
            <h4><GrFormCheckmark size={25} className='check' /> <span>All </span> Socials</h4>
            <h4><GrFormCheckmark size={25} className='check' /> <span>Share </span> with others</h4>
          </div>
          <div className='box'></div>
          <NavLink to='/create'>
            <button className='button'>
              Get Started
            </button>
          </NavLink>
        </div>
        <div className='svg'>
          <img src={Man} alt='' />
        </div>
      </div>
    </div>
  )
}
