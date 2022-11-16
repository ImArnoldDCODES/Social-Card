import React from 'react'
import { useSelector } from 'react-redux'
import './styles.css'

export default function Card() {

  const name = useSelector((state) => state.name)
  
  return (
    <div>
        <h1>Hola</h1>
        {name.map((first) => (
          <div key={first.id}>
            <h3>{first.text}</h3>
          </div>
        ))}
    </div>  
  )
}
