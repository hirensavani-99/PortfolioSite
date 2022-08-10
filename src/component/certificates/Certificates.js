import React, { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import images from './images';
import './Certificates.css'

export default function Certificates() {

    const [width, setWidth] = useState(0)
    const carousel = useRef()

    useEffect(() => {
        //console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }, [])

    return (
        <section id="certificates" className='Certificates'>

            <h5>awarded</h5>
            <h2>Certificates</h2>

            <motion.div ref={carousel} className="carousel" whileTap={{ cursor: "grabbing" }}>
                <motion.div
                    drag="x"
                    dragConstraints={{ right: 0, left: -width }} className='inner-carousel'>
                    {images.map(image => {
                        return (
                            <motion.div className='item' key={image} >
                                <img src={image} alt=""></img>
                            </motion.div>
                        )
                    })
                    }
                </motion.div>
            </motion.div>
        </section >
    )
}
