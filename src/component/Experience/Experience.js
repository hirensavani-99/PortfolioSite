import React from 'react'
import './Experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'
import { frontendDevelopment, backendDevelopment, Journey, OtherSkills } from './experiences'
export default function Experience() {
    return (
        <section id="experience">
            <h5>What skills I have</h5>
            <h2>My Experience</h2>

            <div className='container experience__container'>

                <div className='experience__frontend'>
                    <h3>
                        Experience
                    </h3>
                    <div className='experience__content-line'>

                        {
                            Journey.map(skill => {
                                return (
                                    <>
                                        <article className='experience__details'>

                                            <div className='experience__details-inside'>
                                                {skill.logo}
                                                <h4>{skill.name}</h4>
                                                <h5 className='experience__role'>{skill.role}</h5>
                                                <small className="text-light">{skill.skillrate}</small>
                                                <h6 className="text-light">attended at : {skill.from}</h6>
                                            </div>



                                        </article>
                                        {skill?.hr}
                                    </>
                                )
                            })
                        }

                    </div>
                </div>

                <div className='experience__frontend'>
                    <h3>
                        Backend Development
                    </h3>
                    <div className='experience__content'>
                        {
                            backendDevelopment.map(skill => {
                                return (
                                    <article className='experience__details'>
                                        <BsPatchCheckFill className='experience__details-icon' />
                                        <div>
                                            <h4>{skill.name}</h4>
                                            <small className="text-light">{skill.skillrate}</small>
                                            <h6 className="text-light">attended at : {skill.from}</h6>
                                        </div>
                                    </article>
                                )
                            })
                        }
                    </div>
                </div>

                <div className='experience__frontend'>
                    <h3>
                        Frontend Development
                    </h3>
                    <div className='experience__content'>
                        {
                            frontendDevelopment.map(skill => {
                                return (
                                    <article className='experience__details'>
                                        <BsPatchCheckFill className='experience__details-icon' />
                                        <div>
                                            <h4>{skill.name}</h4>
                                            <small className="text-light">{skill.skillrate}</small>
                                            <h6 className="text-light">attended at : {skill.from}</h6>
                                        </div>
                                    </article>
                                )
                            })
                        }
                    </div>
                </div>

                <div className='experience__frontend'>
                    <h3>
                        Other Skills
                    </h3>
                    <div className='experience__content'>
                        {
                            OtherSkills.map(skill => {
                                return (
                                    <article className='experience__details'>
                                        <BsPatchCheckFill className='experience__details-icon' />
                                        <div>
                                            <h4>{skill.name}</h4>
                                            <small className="text-light">{skill.skillrate}</small>
                                        </div>
                                    </article>
                                )
                            })
                        }
                    </div>
                </div>

            </div>
        </section >
    )
}
