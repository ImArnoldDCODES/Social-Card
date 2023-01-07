import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux/es/exports'
import { selectUser, setUser } from '../features/AddName'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import './styles.css'

export default function Create() {
    const dispatch = useDispatch()
    const [add, setAdd] = useState(false)

    const handlebtn = () => {
        setAdd(true)
    }

    const details = useSelector(selectUser)
    console.log("details", details)


    const [info, setInfo] = useState({
        firstname: null,
        lastname: null,
        facebook: null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInfo({ ...info, [name]: value });
        console.log(info)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // set data to store on submit
        dispatch(setUser(info));
    };

    return (
        <div className='content'>
            <h3>Create</h3>

            <form onSubmit={handleSubmit}>
                <div className='form-content'>
                    <div>
                        <label>FirstName*</label>
                        <input placeholder='FirstName' name='firstname' onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label>LastName*</label>
                        <input placeholder='LastName' name='lastname' onChange={handleChange} />
                    </div>

                    <div>
                        <label>Instagram</label>
                        <input placeholder='Instagram' onChange={handleChange} />
                    </div>

                    <div>
                        <label>Facebook</label>
                        <input placeholder='Facebook' name='facebook' onChange={handleChange} />
                    </div>


                    <div>
                        <label>Twitter</label>
                        <input placeholder='Twitter' onChange={handleChange} />
                    </div>

                    <div>
                        <label>Linkedin</label>
                        <input placeholder='Linkedin' onChange={handleChange} />
                    </div>

                    <div>
                        <label>Pinterest</label>
                        <input placeholder='Pinterest'onChange={handleChange} />
                    </div>

                    <div>
                        <label>Youtube</label>
                        <input placeholder='Youtube' onChange={handleChange} />
                    </div>

                    <div>
                        <label>Snapchat</label>
                        <input placeholder='Snapchat'onChange={handleChange} />
                    </div>

                    <div>
                        <label>Reddit</label>
                        <input placeholder='Reddit'onChange={handleChange} />
                    </div>

                    <div>
                        <label>TikTok</label>
                        <input placeholder='TikTok' onChange={handleChange} />
                    </div>

                    <div>
                        <label>Github</label>
                        <input placeholder='Github' onChange={handleChange} />
                    </div>


                    <div>
                        <label>Medium</label>
                        <input placeholder='Medium'onChange={handleChange} />
                    </div>


                    <div>
                        <label>Mix</label>
                        <input placeholder='Mix' onChange={handleChange} />
                    </div>


                    <div>
                        <label>Twitch</label>
                        <input placeholder='Twitch'onChange={handleChange} />
                    </div>


                    <div>
                        <label>Telegram</label>
                        <input placeholder='Telegram' onChange={handleChange} />
                    </div>

                    <div>
                        <label>Discord</label>
                        <input placeholder='Discord' onChange={handleChange} />
                    </div>

                    <div>
                        <label>Behance</label>
                        <input placeholder='Behance' onChange={handleChange} />
                    </div>


                    <div>
                        <label>Dribble</label>
                        <input placeholder='Dribble' onChange={handleChange} />
                    </div>

                    <div>
                    <label>Instagram</label>
                    <input placeholder='Instagram'onChange={handleChange} /> 
                </div>
                </div>
            </form>

            <button className='btn' onClick={handleSubmit} onClickCapture={handlebtn}>Add Card</button>
            {add ? <button className='btn'>
                <NavLink to="/card" className='navlink'>
                    Get Card
                </NavLink>
            </button> : null}

        </div>
    )
}
