import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import './styles.css'

export default function Card() {

  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  const names = useSelector((state) => state.names)
  console.log(names)
  return (
    <div className='container'>
      <div className='card'>
        {names.map((details, index) => (
          <div key={index}>
            {/* <h3>{details.firstname}</h3>*/}
            {/* <h2>{details[0].lastname}</h2>  */}
            <h1>{details[0].firstname}</h1>

          </div>
        ))}
        {/* <h2>Add Image:</h2>
        <input type="file" onChange={handleChange} />
        <img src={file} alt='' /> */}

      </div>
    </div>
  )
}
