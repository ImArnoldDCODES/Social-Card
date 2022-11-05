import React, {useState} from 'react'

export default function Create() {

    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState('')

    console.log(firstName)

  return (
    <div>
        <h3>Create joor</h3>

        <form>
            <div>
            <label>FirstName</label>
            <input placeholder='FirstName' onChange={text => setFirstName(text)}/>
            </div>

            <div>
            <label>LastName</label>
            <input placeholder='LastName' onChange={(text) => {setLastName(text)}}/>
            </div>
{/* 
            <div>
            <label>LastName</label>
            <input placeholder='LastName'/>
            </div> */}
        </form>
    </div>
  )
}
