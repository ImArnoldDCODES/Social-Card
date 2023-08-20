/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState, useEffect } from 'react'
import { collection, getDocs } from "firebase/firestore";
import { useSelector } from 'react-redux'
import { selectUser } from '../features/AddName';
import db from '../firebase/config';
import './styles.css'
import facebook from '../images/facebook.svg'
import snapchat from '../images/snapchat.svg'
import github from '../images/github.svg'
import instagram from '../images/instagram.svg'
import link from '../images/link.svg'
import pink from '../images/pink.svg'
import reddit from '../images/redit.svg'
import twitter from '../images/twitter.svg'
import youtube from '../images/youtube.svg'
import tiktok from '../images/tiktok.png'
import medium from '../images/medium.png'
import twitch from '../images/twitch.png'
import telegram from '../images/telegram.png'
import discord from '../images/discord.png'
import dribble from '../images/dribble.png'
import behance from '../images/behance.png'

export default function Card() {
  const details = useSelector(selectUser)
  // console.log(details)

  const [copied, setCopied] = useState(false);

  const handleCopyClick = () => {
    const url = window.location.href;
    const textArea = document.createElement('textarea');
    textArea.value = url;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 3000)
  };

  // const [todos, setTodos] = useState([]);

  // const fetchPost = async () => {

  //   await getDocs(collection(db, "links"))
  //     .then((querySnapshot) => {
  //       const newData = querySnapshot.docs
  //         .map((doc) => ({ ...doc.data(), id: doc.id }));
  //       setTodos(newData);
  //       console.log(todos, newData);
  //     })

  // }

  // useEffect(() => {
  //   fetchPost();
  // }, [])

  return (
    <div className='container'>

      <div className="temp-wrapper">
        <div className="px">
          <div className="px__body">
            <div className="px__body__cut"></div>
            <div className="px__body__speaker"></div>
            <div className="px__body__sensor"></div>

            <div className="px__body__mute"></div>
            <div className="px__body__up"></div>
            <div className="px__body__down"></div>
            <div className="px__body__right"></div>
          </div>

          <div className="px__screen">
            <div className="px__screen__">
              <div className="px__screen__frame" style={{ backgroundImage: ('https://thestraightshooterband.com/image/8989-full_oboi-oboi-macbook-oboi-iphone-4k-5k-macbook-pro-iphone.jpg') }}>
                <i className="fa fa-apple"></i>
                <div className='card'>
                  <div className={details?.firstname ? 'logo' : ''}>
                    <span>{details?.firstname?.charAt(0)}</span>
                    <span>{details?.lastname?.charAt(0)}</span>
                  </div>
                  <div className='details'>
                    <span className='names'>
                      <h2>{details?.firstname}</h2>
                      <h2>{details?.lastname}</h2>
                    </span>
                    <span className='socials'>
                      {details.facebook ? <a href={details?.facebook}>
                        <img src={facebook} alt='facebook'></img>
                      </a> : null}
                      {details.github ? <a href={details?.github}>
                        <img src={github} alt='github' />
                      </a> : null}
                      {details.instagram ? <a href={details?.instagram}>
                        <img src={instagram} alt='instagram' />
                      </a> : null}
                      {details.linkedin ? <a href={details?.linkedin}>
                        <img src={link} alt='linkedin' />
                      </a> : null}
                      {details.pinkterest ? <a href={details?.pinkterest}>
                        <img src={pink} alt='pinkterest' />
                      </a> : null}
                      {details.reddit ? <a href={details?.reddit}>
                        <img src={reddit} alt='reddit' />
                      </a> : null}
                      {details.snapchat ? <a href={details?.snapchat}>
                        <img src={snapchat} alt='snapchat' />
                      </a> : null}
                      {details / twitter ? <a href={details?.twitter}>
                        <img src={twitter} alt='twitter' />
                      </a> : null}
                      {details.youtube ? <a href={details?.youtube}>
                        <img src={youtube} alt='youtube' />
                      </a> : null}
                      {details.tiktok ? <a href={details?.tiktok}>
                        <img src={tiktok} alt='tiktok' height={26} width={27} />
                      </a> : null}
                      {details.medium ? <a href={details?.medium}>
                        <img src={medium} alt='medium' height={26} width={27} />
                      </a> : null}
                      {details.twitch ? <a href={details?.twitch}>
                        <img src={twitch} alt='twitch' height={26} width={27} />
                      </a> : null}
                      {details.telegram ? <a href={details?.telegram}>
                        <img src={telegram} alt='telegram' height={26} width={27} />
                      </a> : null}
                      {details.discord ? <a href={details?.discord}>
                        <img src={discord} alt='discord' height={26} width={27} />
                      </a> : null}
                      {details.behance ? <a href={details?.behance}>
                        <img src={behance} alt='behance' height={26} width={27} />
                      </a> : null}
                      {details.dribble ? <a href={details?.dribble}>
                        <img src={dribble} alt='dribble' height={26} width={27} />
                      </a> : null}
                    </span>
                  </div>
                  <div className='circle'></div>
                  <div className='circle2'></div>
                  <button className='oop' onClick={handleCopyClick}>{copied ? 'Copied' : 'Copy'}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="temp-wrapper2 temp-wrapper--wide">
        <div className='card'>
          <div className='logo'>
            <span>{details?.firstname?.charAt(0)}</span>
          </div>
          <div className='details'>
            <span className='names'>
              <h2>{details?.firstname}</h2>
              <h2>{details?.lastname}</h2>
            </span>
          </div>
        </div>
      </div>

    </div>
  )
}
