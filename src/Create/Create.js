import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux/es/exports'
import { createName } from '../features/AddName'

export default function Create() {
    const dispatch = useDispatch()

    // const [firstName, setFirstName] = useState('')
    // const [lastName, setLastName] = useState('')
    // const [ig, setIg] = useState('')

    const { register, handleSubmit } = useForm()

    const [info, setInfo] = useState({
        firstname: '',
        lastname: ''
    })

    const {firstname,lastname} = info

    const handleAdd = (e) => {
        e.preventDefault()
        dispatch(createName(info.firstname))
        dispatch(createName(info.lastname))
    }

    const handleChange = (name, value) => {
        setInfo({
            ...info,
            [name]: value,
        })
        console.log(info)
    }

    console.log(firstname, lastname)


    return (
        <div>
            <h3>Create joor</h3>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>FirstName</label>
                    <input placeholder='FirstName' onChange={text => handleChange("firstname", text.target.value)}
                    />
                </div>

                <div>
                    <label>LastName</label>
                    <input placeholder='LastName' onChange={(text) => handleChange("lastname", text.target.value)} />
                </div>

                <button onClick={handleAdd}>Add to card</button>
                {/* <div>
                    <label>Instagram</label>
                    <input placeholder='Instagram Link' onChange={(text) => setIg(text.target.value)}></input>
                </div> */}

                <NavLink to="/card">Get Card</NavLink>
            </form>
        </div>
    )
}
