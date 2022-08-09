import React, { useState } from 'react'
import './Nav.css'
import { AiOutlineHome, AiOutlineUser, AiOutlineMessage, AiFillProject } from 'react-icons/ai'
import { BiBookBookmark } from 'react-icons/bi'


export default function Nav() {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" className={activeNav == "#" ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav == "#about" ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#experience" onClick={() => setActiveNav("#experience")} className={activeNav == "#experience" ? 'active' : ''}><BiBookBookmark /></a>
      <a href="#portfolio" onClick={() => setActiveNav("#portfolio")} className={activeNav == "#portfolio" ? 'active' : ''}><AiFillProject /></a>
      <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav == "#contact" ? 'active' : ''}><AiOutlineMessage /></a>
    </nav>
  )
}
