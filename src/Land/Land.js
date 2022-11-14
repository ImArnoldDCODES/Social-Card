import React from 'react'
import './styles.css'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Land() {

  const birds = useSelector(state => state.birds)


  return (
    <div className='content'>
      <div className='text'>
        <h1>Hello, make social cards for your business within 2 mins</h1>
        <NavLink to='/create'>
          Get Started
        </NavLink>
        {birds.map(bird => (
          <li key={bird.name}>
            <h3>{bird.name}</h3>
            <div>
              Views: {bird.views}
            </div>
          </li>
        ))}
      </div>
      <div className='icon'>
        <h1>/</h1>
      </div>
    </div>
  )
}
