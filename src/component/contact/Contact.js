import React from 'react'
import './Contact.css'
import { MdOutlineMailOutline } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { AiOutlineWhatsApp } from 'react-icons/ai'

export default function Contact() {
    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Conatct Me</h2>

            <div className='container contact__container'>
                <div className='contact__options'>
                    <article className='contact__option'>
                        <MdOutlineMailOutline />
                        <h4>Email</h4>
                        <h5>hiren99savani@gmail.com</h5>
                        <a href="mailto:hiren99savani@gmail.com">Send an email</a>
                    </article>
                    <article className='contact__option'>
                        <RiMessengerLine />
                        <h4>Messanger</h4>
                        <h5>hiren savani</h5>
                        <a href="https://m.me/hiren.savani.5836" target="_blank">Send message on messanger</a>
                    </article>
                    <article className='contact__option'>
                        <AiOutlineWhatsApp />
                        <h4>WhatsApp</h4>
                        <h5>hiren99savani@gmail.com</h5>
                        <a href="https://api.whatsapp.com/send?phone+48729319157"  target="_blank">Send an whatsapp message</a>
                    </article>
                </div>

                <form action=""></form>
            </div>
        </section>
    )
}
