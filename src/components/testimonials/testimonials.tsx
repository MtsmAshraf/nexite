import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React from 'react'
import image24 from "../../../public/assets/images/profileIcon.png"
import image25 from "../../../public/assets/images/profileIcon.png"
import image26 from "../../../public/assets/images/profileIcon.png"

import "./testimonials.css"
const Testimonials = () => {
  return (
    <section className="testimonials" id="testimonials">
        <div className="overlay" />
        <div className="container">
        <div className="content">
            <ul className="testi-shuffle">
            <li />
            <li className="active" />
            <li />
            </ul>
            <div className="person">
            <span className="qoute-icon">
                <FontAwesomeIcon icon={faQuoteLeft} />
            </span>
            <div className="img">
                <Image src={image24} alt="Image" loading={"lazy"}></Image>
            </div>
            <p className="arabic">
                محترف وسلس في التعامل. يتجاوب بشكل ممتاز مع التغييرات ويحول الأفكار
                إلى واقع. ممتاز جدا!
            </p>
            <div className="person-info">
                <span className="person-name">Al Salt Al Bahri</span>
                <span className="person-title">Client (Thrive AI)</span>
            </div>
            </div>
            <div className="person active">
            <span className="qoute-icon">
                <FontAwesomeIcon icon={faQuoteLeft} />
            </span>
            <div className="img">
                <Image src={image25} alt="Image" loading={"lazy"}></Image>
                
            </div>
            <p>
                Very competent and patient, did exactly what we needed, prompt and
                high quality work. Would be delighted to work together again.
            </p>
            <div className="person-info">
                <span className="person-name">Philip Allan</span>
                <span className="person-title">An Upwork client</span>
            </div>
            </div>
            <div className="person">
            
            <span className="qoute-icon">
                <FontAwesomeIcon icon={faQuoteLeft} />
            </span>
            <div className="img">
                <Image src={image26} alt="Image" loading={"lazy"}></Image>
                
            </div>
            <p className="arabic">فنان ما شاء الله</p>
            <div className="person-info">
                <span className="person-name arabic">عبد العزيز العنزي</span>
                <span className="person-title">Triple Clean</span>
            </div>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Testimonials