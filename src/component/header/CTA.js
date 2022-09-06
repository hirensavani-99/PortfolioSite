import React from 'react'
import CV from '../../assests/CV-HIREN SAVANI.pdf'


export default function CTA() {
    return (
        <div className='cta'>
            <a href={CV} className="btn" download>Download CV</a>
            <a href='#contact' className='btn btn-primary'>Lets Interact</a>


        </div>
    )
}
