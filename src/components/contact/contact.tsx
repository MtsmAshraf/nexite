import React from 'react'
import "./contact.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
const Contact = () => {
  return (
    <section className="contact parallax" id="contact">
        <div className="overlay" />
        <div className="container">
        <h2>Send me a message!</h2>
        <p>Got a question or proposal, or just want to say hello? Go ahead.</p>
        <form method="post">
            <div className="in">
            <label htmlFor="">Your Name</label>
            <input type="text" id="name" placeholder="Enter Your Name" />
            </div>
            <div className="in">
            <label htmlFor="">Your Email</label>
            <input type="email" id="mail" placeholder="Enter Your Email" />
            </div>
            <div>
            <label htmlFor="">Your Message</label>
            <textarea
                placeholder="Hi, I think we need to design system for our products at Company X, How soon can you hop on to discuss this?"
                defaultValue={""}
            />
            </div>
            <button className='main-button'>
              <span>Send</span>
              <FontAwesomeIcon icon={faArrowRight}/>
            </button>
        </form>
        </div>
    </section>
  )
}

export default Contact