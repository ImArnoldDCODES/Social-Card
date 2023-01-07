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
        lastname: null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInfo({ ...info, [name]: value });
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
                        <input placeholder='Instagram' onChange={(text) => handleChange("instagram", text.target.value)} />
                    </div>

                    <div>
                        <label>Facebook</label>
                        <input placeholder='Facebook' onChange={(text) => handleChange("facebook", text.target.value)} />
                    </div>


                    <div>
                        <label>Twitter</label>
                        <input placeholder='Twitter' onChange={(text) => handleChange("twitter", text.target.value)} />
                    </div>

                    <div>
                        <label>Linkedin</label>
                        <input placeholder='Linkedin' onChange={(text) => handleChange("linkedin", text.target.value)} />
                    </div>

                    <div>
                        <label>Pinterest</label>
                        <input placeholder='Pinterest' onChange={(text) => handleChange("pinterest", text.target.value)} />
                    </div>

                    <div>
                        <label>Youtube</label>
                        <input placeholder='Youtube' onChange={(text) => handleChange("youtube", text.target.value)} />
                    </div>

                    <div>
                        <label>Snapchat</label>
                        <input placeholder='Snapchat' onChange={(text) => handleChange("snapchat", text.target.value)} />
                    </div>

                    <div>
                        <label>Reddit</label>
                        <input placeholder='Reddit' onChange={(text) => handleChange("reddit", text.target.value)} />
                    </div>

                    <div>
                        <label>TikTok</label>
                        <input placeholder='TikTok' onChange={(text) => handleChange("tiktok", text.target.value)} />
                    </div>

                    <div>
                        <label>Github</label>
                        <input placeholder='Github' onChange={(text) => handleChange("github", text.target.value)} />
                    </div>


                    <div>
                        <label>Medium</label>
                        <input placeholder='Medium' onChange={(text) => handleChange("medium", text.target.value)} />
                    </div>


                    <div>
                        <label>Mix</label>
                        <input placeholder='Mix' onChange={(text) => handleChange("mix", text.target.value)} />
                    </div>


                    <div>
                        <label>Twitch</label>
                        <input placeholder='Twitch' onChange={(text) => handleChange("twitch", text.target.value)} />
                    </div>


                    <div>
                        <label>Telegram</label>
                        <input placeholder='Telegram' onChange={(text) => handleChange("telegram", text.target.value)} />
                    </div>

                    <div>
                        <label>Discord</label>
                        <input placeholder='Discord' onChange={(text) => handleChange("discord", text.target.value)} />
                    </div>

                    <div>
                        <label>Behance</label>
                        <input placeholder='Behance' onChange={(text) => handleChange("behance", text.target.value)} />
                    </div>


                    <div>
                        <label>Dribble</label>
                        <input placeholder='Dribble' onChange={(text) => handleChange("dribble", text.target.value)} />
                    </div>

                    {/* <button onClick={handleAdd}>Add to card</button> */}
                    {/* <div>
                    <label>Instagram</label>
                    <input placeholder='Instagram Link' onChange={(text) => setIg(text.target.value)}></input>
                </div> */}
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
