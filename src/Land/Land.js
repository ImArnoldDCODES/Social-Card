import React, {useState} from 'react'
import './styles.css'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { incrementBird, addBird } from '../store/storeData/storeData'

export default function Land() {

  const [birdName, setBirdName] = useState('')

  const birds = [...useSelector(state => state.birds)].sort((a, b) => {
    return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1;
  });
  const dispatch = useDispatch()

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(addBird(birdName))
    setBirdName('')
  }
  return (
    <div className='content'>
      <div className='text'>
        <h1>Hello, make social cards for your business within 2 mins</h1>
        <NavLink to='/create'>
          Get Started
        </NavLink>
        <h1>Playing with redux</h1>
        <form onSubmit={handleSubmit}>
        <label>
          <p>
            Add Bird
          </p>
          <input type="text" onChange={e => setBirdName(e.target.value)} value={birdName}/>
        </label>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
        {birds.map(bird => (
          <li key={bird.name}>
            <h3>{bird.name}</h3>
            <div>
              Views: {bird.views}
            </div>
            <button onClick={() => dispatch(incrementBird(bird.name))}>+</button>
          </li>
        ))}
      </div>
      <div className='icon'>
        <h1>/</h1>
      </div>
    </div>
  )
}
