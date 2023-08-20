import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux/es/exports'
import { selectUser, setUser } from '../features/AddName'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import './styles.css'
import db from '../firebase/config'
import { collection, addDoc, updateDoc } from "firebase/firestore";

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
        facebook: null,
        github: null,
        instagram: null,
        linkedin: null,
        pinkterest: null,
        reddit: null,
        snapchat: null,
        twitter: null,
        youtube: null,
        tiktok: null,
        medium: null,
        twitch: null,
        telegram: null,
        discord: null,
        behance: null,
        dribble: null,
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

        // const docRef = addDoc(collection(db, "links"), {
        //    info
        //   });
        //   console.log("Document written with ID: ", docRef.id);

        // const q = query(collection(database, "links"))
        // const unsub = onSnapshot(q, (querySnapshot) => {
        //     console.log("Data", querySnapshot.docs.map(d => doc.data()));
        // });

        // database.ref("user").set({
        //   name : 'Arnold',
        //   age : 17,
        // }).catch(alert);
    }

    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/card');
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
                        <input placeholder='Instagram' name='instagram' onChange={handleChange} />
                    </div>

                    <div>
                        <label>Facebook</label>
                        <input placeholder='Facebook' name='facebook' onChange={handleChange} />
                    </div>


                    <div>
                        <label>Twitter</label>
                        <input placeholder='Twitter' name='twitter' onChange={handleChange} />
                    </div>

                    <div>
                        <label>Linkedin</label>
                        <input placeholder='Linkedin' name='linkedin' onChange={handleChange} />
                    </div>

                    <div>
                        <label>Pinterest</label>
                        <input placeholder='Pinterest' name='pinkterest' onChange={handleChange} />
                    </div>

                    <div>
                        <label>Youtube</label>
                        <input placeholder='Youtube' name='youtube' onChange={handleChange} />
                    </div>

                    <div>
                        <label>Snapchat</label>
                        <input placeholder='Snapchat' name='snapchat' onChange={handleChange} />
                    </div>

                    <div>
                        <label>Reddit</label>
                        <input placeholder='Reddit' name='reddit' onChange={handleChange} />
                    </div>

                    <div>
                        <label>TikTok</label>
                        <input placeholder='TikTok' name='tiktok' onChange={handleChange} />
                    </div>

                    <div>
                        <label>Github</label>
                        <input placeholder='Github' name='github' onChange={handleChange} />
                    </div>


                    <div>
                        <label>Medium</label>
                        <input placeholder='Medium' name='medium' onChange={handleChange} />
                    </div>


                    <div>
                        <label>Mix</label>
                        <input placeholder='Mix' name='mix' onChange={handleChange} />
                    </div>


                    <div>
                        <label>Twitch</label>
                        <input placeholder='Twitch' name='twitch' onChange={handleChange} />
                    </div>


                    <div>
                        <label>Telegram</label>
                        <input placeholder='Telegram' name='telegram' onChange={handleChange} />
                    </div>

                    <div>
                        <label>Discord</label>
                        <input placeholder='Discord' name='discord' onChange={handleChange} />
                    </div>

                    <div>
                        <label>Behance</label>
                        <input placeholder='Behance' name='behance' onChange={handleChange} />
                    </div>


                    <div>
                        <label>Dribble</label>
                        <input placeholder='Dribble' name='dribble' onChange={handleChange} />
                    </div>

                    <div>
                        <label>Instagram</label>
                        <input placeholder='Instagram' name='instagram' onChange={handleChange} />
                    </div>
                </div>
            </form>

            <button className='btn' onClick={handleSubmit} onClickCapture={handlebtn}>
                <NavLink to="/card" className='navlink'>
                    Add Card
                </NavLink>
            </button>
        </div>
    )
}
