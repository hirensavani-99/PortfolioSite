import React, { useRef } from 'react'
import './Contact.css'
import { MdOutlineMailOutline } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import emailjs from 'emailjs-com'

export default function Contact() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_tvrr18g', "template_vxelfwv", form.current, 'eAnS1TA6Zwc90M07r')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset()
    }

    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Conatct Me</h2>

            <div className='container contact__container'>
                <div className='contact__options'>
                    <article className='contact__option'>
                        <MdOutlineMailOutline className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>hiren99savani@gmail.com</h5>
                        <a href="mailto:hiren99savani@gmail.com">Send an email</a>
                    </article>
                    <article className='contact__option'>
                        <RiMessengerLine contact__option-icon />
                        <h4>Messanger</h4>
                        <h5>hiren Savani</h5>
                        <a href="https://m.me/hiren.savani.5836" target="_blank">Send message on messanger</a>
                    </article>
                    <article className='contact__option'>
                        <AiOutlineWhatsApp contact__option-icon />
                        <h4>WhatsApp</h4>
                        <h5>Hiren Savani</h5>
                        <a href="https://api.whatsapp.com/send?phone+48729319157" target="_blank">Send an whatsapp message</a>
                    </article>
                </div>

                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder='Your Full Name' required />
                    <input type="email" name="email" placeholder='Your Email' require />
                    <textarea name="message" rows="7" placeholder='Your Message' require></textarea>
                    <button type="submit" className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    )
}
