import React from 'react'
import './Footer.css'
import { BsTwitter, BsInstagram, BsLinkedin } from 'react-icons/bs'
import { AiFillFacebook } from 'react-icons/ai'

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
        <a href='https://www.facebook.com/hiren.savani.5836'><AiFillFacebook /></a>
        <a href='https://www.instagram.com/hiren6161/'><BsInstagram /></a>
        <a href='https://twitter.com/hiren50511343'><BsTwitter /></a>
        <a href='https://www.linkedin.com/in/hiren-savani-259952180'><BsLinkedin /></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; HIREN SAVANI. All rights reserved.</small>
      </div>
    </footer>
  )
}
