import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function Create() {

    const [firstName, setFirstName] = useState({})
    const [lastName, setLastName] = useState({})
    const [ig, setIg] = useState({})

    const { register, handleSubmit } = useForm()

    const onSubmit = (f) => {
        alert(JSON.stringify(f))
    }

    console.log(lastName)
    

    return (
        <div>
            <h3>Create joor</h3>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>FirstName</label>
                    <input placeholder='FirstName' onChange={text => setFirstName(text.target.value)} />
                </div>

                <div>
                    <label>LastName</label>
                    <input placeholder='LastName' onChange={(text) => { setLastName(text.target.value) }} />
                </div>

                <div>
                    <label>Instagram</label>
                    <input placeholder='Instagram Link' onChange={(text) => setIg(text.target.value)}></input>
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
