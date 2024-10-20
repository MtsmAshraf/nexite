import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import image24 from "../../../public/assets/images/profileIcon.webp"
import image25 from "../../../public/assets/images/profileIcon.webp"
import image26 from "../../../public/assets/images/profileIcon.webp"

import "./testimonials.css"
const Testimonials = () => {
    const liOne: any = useRef()
    const liTwo: any = useRef()
    const liThree: any = useRef()
    const testimonials: any = useRef()
    const [testiScrolled, setTestiScrolled] = useState(false)
    let animationIndex = 1
    const scrollTestiSection = () => {
        if(testimonials.current){
            if(testimonials.current.offsetTop <= window.scrollY + 400){
                setTestiScrolled(true)
            }
        }
    }
    const activeOne = () => {
        document.querySelectorAll(".testi-shuffle li").forEach((li, index) => {
            if(index === 0){
                li.classList.add("active")
                animationIndex = index;
            }
            else{
                li.classList.remove("active")
            }
        })
        document.querySelectorAll(".testimonials .person").forEach((person, index) => {
            if(index === 0){
                person.classList.add("active")
                animationIndex = index;
            }
            else{
                person.classList.remove("active")
            }
        })
    }
    const activeTwo =  () => {
        document.querySelectorAll(".testi-shuffle li").forEach((li, index) => {
            if(index === 1){
                li.classList.add("active")
                animationIndex = index;
            }
            else{
                li.classList.remove("active")
            }
        })
        document.querySelectorAll(".testimonials .person").forEach((person, index) => {
            if(index === 1){
                person.classList.add("active")
            }
            else{
                person.classList.remove("active")
            }
        })
    }
    const activeThree =  () => {
        document.querySelectorAll(".testi-shuffle li").forEach((li, index) => {
            if(index === 2){
                li.classList.add("active")
                animationIndex = index;
            }
            else{
                li.classList.remove("active")
            }
        })
        document.querySelectorAll(".testimonials .person").forEach((person, index) => {
            if(index === 2){
                person.classList.add("active")
            }
            else{
                person.classList.remove("active")
            }
        })
    }
    useEffect(() => {
        liOne.current.addEventListener("click", activeOne)
        liTwo.current.addEventListener("click", activeTwo)
        liThree.current.addEventListener("click", activeThree)

        window.addEventListener("scroll", scrollTestiSection)
        setInterval(() => {
            if(animationIndex === 0){
                activeOne()
                animationIndex++
            }else if(animationIndex === 1){
                activeTwo()
                animationIndex++
            }else if(animationIndex === 2){
                activeThree()
                animationIndex = 0
            }
        }, 5000);
    },[])
  return (
    <section ref={testimonials} className={testiScrolled ? "testimonials" + " " + "testiScrolled" : "testimonials"} id="testimonials">
        <div className="overlay" />
        <h2>Testimonials</h2>
        <div className="container">
        <div className="content">
            <ul className="testi-shuffle">
                <li ref={liOne} />
                <li ref={liTwo} className="active" />
                <li ref={liThree} />
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