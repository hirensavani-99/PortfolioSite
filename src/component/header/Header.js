import React from 'react'
import CTA from './CTA.js'
import './Header.css'
import ME from '../../assests/mypic11.png'
import HeaerSocials from './HeaerSocials.js'
import { motion, useScroll } from "framer-motion"

export default function Header() {
    const { scrollYProgress } = useScroll();
    return (
        <header>
            <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }} />
            <div className='container header__container'>
                <motion.h5 initial={{ x: '-100VW' }} animate={{ x: 0 }} transition={{ type: 'spring', duration: 1, bounce: 0.3 }}>Hello I'm</motion.h5>
                <motion.h2 initial={{ x: '100VW' }} animate={{ x: 0 }} transition={{ type: 'spring', duration: 1, bounce: 0.3 }}>Hiren</motion.h2>
                <motion.h5 className='text-light' initial={{ y: '-100VW' }} animate={{ y: 0 }} transition={{ type: 'spring', duration: 1, bounce: 0.3 }}>Fullstack Developer</motion.h5>
                <CTA />
                <HeaerSocials />


                <motion.div className='me' transition={{ ease: "easeOut", duration: 2 }}
                    animate={{ y: [null, 100, 0] }}
                    initial={{ opacity: 0.6 }}
                    whileHover={{
                        scale: 1.2,
                        transition: { duration: 1 },
                    }}
                    whileTap={{ scale: 0.9 }}
                    whileInView={{ opacity: 1 }}
                >
                    <img src={ME} alt="" />
                </motion.div>

                <a className='scroll__down' href="#contact">Scroll Down</a>
            </div>

        </header >
    )
}
