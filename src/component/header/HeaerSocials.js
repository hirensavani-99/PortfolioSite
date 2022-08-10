import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { FaTwitterSquare } from 'react-icons/fa'

export default function HeaerSocials() {
    return (
        <div className='header_socials'>
            <a href='https://www.linkedin.com/in/hiren-savani-259952180' target="_blank"><BsLinkedin /></a>
            <a href='https://github.com/hirensavani-99' target="_blank"><FaGithub /></a>
            <a href='https://twitter.com/hiren50511343' target="_blank"><FaTwitterSquare /></a>
        </div>
    )
}
