import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/AddName';
import './styles.css'

export default function Card() {

  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  const details = useSelector(selectUser)
  console.log(details)

  return (
    <div className='container'>
      <div className='card'>
        <h2>{details?.firstname}</h2>
        <h2>{details?.lastname}</h2>
      </div>
    </div>
  )
}
