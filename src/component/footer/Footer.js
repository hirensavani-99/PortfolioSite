import React from 'react'
import './Footer.css'
import { BsTwitter, BsInstagram } from 'react-icons/bs'
import { AiFillFacebook } from 'react-icons/ai'
import { icons } from 'react-icons'
export default function Footer() {
  return (
    <footer>
      <a href="#" className='footer__logo'>Hiren Savani</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#certificates">Certificates</a></li>
      </ul>

      <div className='footer__socials'>
        <a><AiFillFacebook /></a>
        <a><BsInstagram /></a>
        <a><BsTwitter /></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; HIREN SAVANI. All rights reserved.</small>
      </div>
    </footer>
  )
}
