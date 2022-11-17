import React from 'react'
import { useSelector } from 'react-redux'
import './styles.css'

export default function Card() {

  const names = useSelector((state) => state.names)
  
  return (
    <div>
        <h1>Hola</h1>
        {names.map((details, index) => (
          <div key={index}>
            {/* <h3>{details.firstname}</h3>
            <h2>{details.lastname}</h2> */}
           <h1>{details[0].firstname}</h1>
          </div>
        ))}
    </div>  
  )
}
