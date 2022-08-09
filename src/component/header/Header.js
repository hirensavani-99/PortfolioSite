import React from 'react'
import CTA from './CTA.js'
import './Header.css'
import ME from '../../assests/mypic11.png'
import HeaerSocials from './HeaerSocials.js'

export default function Header() {
    return (
        <header>
            <div className='container header__container'>
                <h5>Hello I'm</h5>
                <h2>Hiren</h2>
                <h5 className='text-light'>Fullstack Developer</h5>
                <CTA />
                <HeaerSocials />


                <div className='me'>
                    <img src={ME} alt="" />
                </div>

                <a className='scroll__down' href="#contact">Scroll Down</a>
            </div>

        </header>
    )
}
