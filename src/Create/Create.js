import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { NavLink } from 'react-router-dom'
import Card from '../Card/Card'

export const DataContext = React.createContext()
export default function Create() {

    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [ig, setIg] = useState()

    const { register, handleSubmit } = useForm()

    const onSubmit = (f) => {
        alert(JSON.stringify(f))
    }

    console.log(firstName)

    

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

                <NavLink to="/card">Get Card</NavLink>
                {/* 
            <div>
            <label>LastName</label>
            <input placeholder='LastName'/>
            </div> */}
            </form>
            <DataContext.Provider value={firstName}>
            <Card />
            </DataContext.Provider>
        </div>
    )
}
