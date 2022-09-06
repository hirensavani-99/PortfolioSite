import React from 'react'
import './Portfolio.css'
import Image1 from '../../assests/readersclub.PNG'
import { VanillaJavscriptProjects, ReactJsProjects, NodeJsProjects, NextJsProjects, MernProjects } from './projects'
import JsImage from '../../assests/download.png'
import ReactJsImage from '../../assests/reactjs.png'
import Node from '../../assests/nodejs.webp'
import NextJsLogo from '../../assests/nextjs.png'
import MERN from '../../assests/MERN.png'
export default function Portfolio() {
    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>


            <div className='title__container'>
                <h2>MERN stack</h2>
                <img className='title__img' src={MERN} alt="" />
            </div>

            <div className='container portfolio__container'>

                {

                    MernProjects.map(project => {
                        return (
                            <article className='portfolio__items'>
                                <div className='portfolio__item-image'>
                                    <img src={project.picture} alt="" />
                                </div>
                                <h3>{project.name}</h3>
                                <ul className='ul__style'>
                                {project.descriotion.map(desc=>(
                                    <li key={desc}>{desc}</li>
                                ))}
                                
                                </ul>
                                <div className='portfolio__item-cta'>
                                    <a href={project.github} className='btn' target="_blank">Github</a>
                                    {project?.live && <a href={project?.live} className='btn btn-primary' target="_blank">Live demo</a>}
                                    {project?.thesis && <a href={project.thesis} className="btn" download>Download Thesis</a>}
                                </div>
                               

                            </article>
                        )
                    })
                }


            </div>


            <div className='title__container'>
                <h2>Next JS</h2>
                <img className='title__img' src={NextJsLogo} alt="" />
            </div>

            <div className='container portfolio__container'>

                {

                    NextJsProjects.map(project => {
                        return (
                            <article className='portfolio__items'>
                                <div className='portfolio__item-image'>
                                    <img src={project.picture} alt="" />
                                </div>
                                <h3>{project.name}</h3>
                                <ul className='ul__style'>
                                {project.descriotion.map(desc=>(
                                    <li key={desc}>{desc}</li>
                                ))}
                                
                                </ul>
                                <div className='portfolio__item-cta'>
                                    <a href={project.github} className='btn' target="_blank">Github</a>
                                    {project?.live && <a href={project?.live} className='btn btn-primary' target="_blank">Live demo</a>}
                                    
                                </div>

                            </article>
                        )
                    })
                }


            </div>
            <div className='title__container'>
                <h2>Node JS</h2>
                <img className='title__img' src={Node} alt="" />
            </div>

            <div className='container portfolio__container'>

                {

                    NodeJsProjects.map(project => {
                        return (
                            <article className='portfolio__items'>
                                <div className='portfolio__item-image'>
                                    <img src={project.picture} alt="" />
                                </div>
                                <h3>{project.name}</h3>
                                <ul className='ul__style'>
                                {project.descriotion.map(desc=>(
                                    <li key={desc}>{desc}</li>
                                ))}
                                
                                </ul>
                                <div className='portfolio__item-cta'>
                                    <a href={project.github} className='btn' target="_blank">Github</a>
                                    {project?.live && <a href={project?.live} className='btn btn-primary' target="_blank">Live demo</a>}
                                </div>

                            </article>
                        )
                    })
                }


            </div>


            <div className='title__container'>
                <h2>React JS</h2>
                <img className='title__img' src={ReactJsImage} alt="" />
            </div>

            <div className='container portfolio__container'>

                {

                    ReactJsProjects.map(project => {
                        return (
                            <article className='portfolio__items'>
                                <div className='portfolio__item-image'>
                                    <img src={project.picture} alt="" />
                                </div>
                                <h3>{project.name}</h3>
                                <ul className='ul__style'>             
                                </ul>
                                <div className='portfolio__item-cta'>
                                    <a href={project.github} className='btn' target="_blank">Github</a>
                                    {project?.live && <a href={project?.live} className='btn btn-primary' target="_blank">Live demo</a>}
                                </div>

                            </article>
                        )
                    })
                }


            </div>

            <div className='title__container'>
                <h2>Vanilla JS</h2>
                <img className='title__img' src={JsImage} alt="" />
            </div>

            <div className='container portfolio__container'>

                {

                    VanillaJavscriptProjects.map(project => {
                        return (
                            <article className='portfolio__items'>
                                <div className='portfolio__item-image'>
                                    <img src={project.picture} alt="" />
                                </div>
                                <h3>{project.name}</h3>
                                <div className='portfolio__item-cta'>
                                    <a href={project.github} className='btn' target="_blank">Github</a>
                                    <a href={project.live} className='btn btn-primary' target="_blank">Live demo</a>
                                </div>

                            </article>
                        )
                    })
                }
            </div>

        </section>
    )
}
