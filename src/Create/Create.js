import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux/es/exports'
import { createName } from '../features/AddName'

export default function Create() {
    // const name = useSelector(state => state.seeName)

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState()
    const [ig, setIg] = useState()

    const { register, handleSubmit } = useForm()

    const dispatch = useDispatch()

    const onSubmit = (f) => {
        alert(JSON.stringify(f))
    }

    // console.log(firstName)

    const handleAdd = (e) => {
        e.preventDefault()
        dispatch(createName(firstName))
        setFirstName('')
        console.log(firstName)
    }



    return (
        <div>
            <h3>Create joor</h3>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>FirstName</label>
                    <input placeholder='FirstName' onChange={text => setFirstName(text.target.value)} 
                    value={firstName}
                    />
                </div>
                <button onClick={handleAdd}>Add to card</button>

                <div>
                    <label>LastName</label>
                    <input placeholder='LastName' onChange={(text) => { setLastName(text.target.value) }} />
                </div>

                <div>
                    <label>Instagram</label>
                    <input placeholder='Instagram Link' onChange={(text) => setIg(text.target.value)}></input>
                </div>

                <NavLink to="/card">Get Card</NavLink>
            </form>
        </div>
    )
}
