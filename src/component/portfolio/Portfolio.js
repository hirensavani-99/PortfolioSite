import React from 'react'
import './Portfolio.css'
import Image1 from '../../assests/readersclub.PNG'
export default function Portfolio() {
    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className='container portfolio__container'>
                <article className='portfolio__items'>
                    <div className='portfolio__item-image'>
                        <img src={Image1} alt="" />
                    </div>
                    <h3>portfolio item title</h3>
                    <div className='portfolio__item-cta'>
                        <a href="github link" className='btn' traget="_blank">Github</a>
                        <a href="live demo" className='btn btn-primary' traget="_blank">Live demo</a>
                    </div>

                </article>
                <article className='portfolio__items'>
                    <div className='portfolio__item-image'>
                        <img src={Image1} alt="" />
                    </div>
                    <h3>portfolio item title</h3>
                    <div className='portfolio__item-cta'>
                        <a href="github link" className='btn' traget="_blank">Github</a>
                        <a href="live demo" className='btn btn-primary' traget="_blank">Live demo</a>
                    </div>
                </article>
                <article className='portfolio__items'>
                    <div className='portfolio__item-image'>
                        <img src={Image1} alt="" />
                    </div>
                    <h3>portfolio item title</h3>
                    <div className='portfolio__item-cta'>
                        <a href="github link" className='btn' traget="_blank">Github</a>
                        <a href="live demo" className='btn btn-primary' traget="_blank">Live demo</a>
                    </div>

                </article>
                <article className='portfolio__items'>
                    <div className='portfolio__item-image'>
                        <img src={Image1} alt="" />
                    </div>
                    <h3>portfolio item title</h3>
                    <div className='portfolio__item-cta'>
                        <a href="github link" className='btn' traget="_blank">Github</a>
                        <a href="live demo" className='btn btn-primary' traget="_blank">Live demo</a>
                    </div>
                </article>
                <article className='portfolio__items'>
                    <div className='portfolio__item-image'>
                        <img src={Image1} alt="" />
                    </div>
                    <h3>portfolio item title</h3>
                    <div className='portfolio__item-cta'>
                        <a href="github link" className='btn' traget="_blank">Github</a>
                        <a href="live demo" className='btn btn-primary' traget="_blank">Live demo</a>
                    </div>

                </article>
                <article className='portfolio__items'>
                    <div className='portfolio__item-image'>
                        <img src={Image1} alt="" />
                    </div>
                    <h3>portfolio item title</h3>
                    <div className='portfolio__item-cta'>
                        <a href="github link" className='btn' traget="_blank">Github</a>
                        <a href="live demo" className='btn btn-primary' traget="_blank">Live demo</a>
                    </div>
                </article>
            </div>

        </section>
    )
}
