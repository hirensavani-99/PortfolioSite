import React, { useRef } from 'react'
import './About.css'
import ME from '../../assests/picAbout.png'
import { FaAward } from "react-icons/fa"
import { VscFolderLibrary } from "react-icons/vsc"



export default function About() {

    return (
        <section id="about">
            <h5>Get to know</h5>
            <h2>About Me</h2>

            <div className='container about__container' >
                <div className='about__me'>
                    <div className='about__me-image'>
                        <img src={ME} alt="" />
                    </div>
                </div>

                <div className='about__content'>
                    <div className='about__cards'>
                        <article className='about__card'>
                            <FaAward className='about__icon' />
                            <h5>Experience</h5>
                            <small>3 monthes working</small>
                        </article>

                        <article className='about__card'>
                            <VscFolderLibrary className='about__icon' />
                            <h5>Projects</h5>
                            <small>18+</small>
                        </article>

                        <article className='about__card'>
                            <FaAward className='about__icon' />
                            <h5>Experience</h5>
                            <small>3 monthes working</small>
                        </article>
                    </div>

                    <p>I am self taught computer passionate. I started learning
                        programming about 2.5 years ago from Python & JavaScript.
                        Meanwhile I was learning web development and loose myself into
                        it.
                        I want to see myself as a Web 3 develpoer so, recently i've started
                        to learn about Blockchain development and Web 3.0.
                    </p>

                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    )
}
