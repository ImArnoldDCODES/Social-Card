import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/AddName';
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

export default function Card() {

  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  const details = useSelector(selectUser)
  console.log(details)

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
                  <div className='logo'>
                    <span>{details?.firstname.charAt(0)}</span>
                  </div>
                  <div className='details'>
                    <span className='names'>
                      <h2>{details?.firstname}</h2>
                      <h2>{details?.lastname}</h2>
                    </span>
                    <span className='socials'>
                      <a href={details?.facebook}>
                      <img src={facebook} alt='facebook'></img>
                      </a>
                      <img src={github} alt='github'></img>
                      <img src={instagram} alt='instagram'></img>
                      <img src={link} alt='linkedin'></img>
                      <img src={pink} alt='pinkterest'></img>
                      <img src={reddit} alt='reddit'></img>
                      <img src={snapchat} alt='snapchat'></img>
                      <img src={twitter} alt='twitter'></img>
                      <img src={youtube} alt='youtube'></img>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="temp-wrapper2 temp-wrapper--wide">
        <div className='card'>
          <div className='logo'>
            <span>{details?.firstname.charAt(0)}</span>
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
