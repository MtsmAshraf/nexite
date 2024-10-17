import { faLink, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React, { useCallback, useRef, useState } from 'react'

import image12 from "../../../public/assets/images/thrive-ai.jpg"
import image13 from "../../../public/assets/images/logos/icons8-react-16.png"
import image14 from "../../../public/assets/images/logos/html5-logo-31813.png"
import image15 from "../../../public/assets/images/logos/icons8-css-logo-48.png"
import image16 from "../../../public/assets/images/logos/icons8-javascript-48.png"
import image17 from "../../../public/assets/images/logos/icons8-github.svg"
import image18 from "../../../public/assets/images/triple-clean.jpg"
import image19 from "../../../public/assets/images/logos/icons8-react-16.png"
import image20 from "../../../public/assets/images/logos/html5-logo-31813.png"
import image21 from "../../../public/assets/images/logos/icons8-css-logo-48.png"
import image22 from "../../../public/assets/images/logos/icons8-javascript-48.png"
import image23 from "../../../public/assets/images/logos/icons8-github.svg"

import "./hero.css"
const Hero = () => {
    const [scrolled, setScrolled] = useState(false)
    const [scrolledOne, setScrolledOne] = useState(false)
    const [scrolledTwo, setScrolledTwo] = useState(false)
    const heroSection: any = useRef()
    const heroItemOne: any = useRef()
    const heroItemTwo: any = useRef()
    const scrollSection = useCallback(() => {
        if(heroSection.current){
            if(heroSection.current.offsetTop <= window.scrollY + 400){
                setScrolled(true)
            }else{
                setScrolled(false)
            }
        }
    },[])
    const scrollHeroItemOne = useCallback(() => {
        if(heroItemOne.current){
            if(heroItemOne.current.offsetTop <= window.scrollY + 400){
                setScrolledOne(true)
            }else{
                setScrolledOne(false)
            }
        }
        },[])
        const scrollHeroItemTwo = useCallback(() => {
            if(heroItemTwo.current){
                if(heroItemTwo.current.offsetTop <= window.scrollY + 400){
                    setScrolledTwo(true)
                }else{
                    setScrolledTwo(false)
                }
            }
        },[])
        window.addEventListener("scroll", scrollSection)
        window.addEventListener("scroll",scrollHeroItemOne)
        window.addEventListener("scroll",scrollHeroItemTwo)
    
  return (
    <section ref={heroSection} className={scrolled ? "hero" + " " + "scrolled" : "hero"} id="latest">
        <h1>My Latest Work</h1>
        <div className="container">
            <div className={scrolledOne ? "hero-item" + " " + "scrolled" : "hero-item"} ref={heroItemOne}>
            <h2>Thrive AI</h2>
            <p>
                An Omani AI company for AI solutions for the goverment and the
                medical organizations in Oman
            </p>
            <p>
                [THE ORIGINAL CONTENT WAS REPLACED BY A DUMMY AS THE CLIENT
                REQUESTED]
            </p>
            <a
                href="https://thrive-ai-nine.vercel.app"
                target="_blank"
                className="project"
            >
                <Image src={image12} alt="Image" loading={"lazy"}></Image>
                
            </a>
            <div className="details">
                <div className="project-info">
                <div>
                    <h3>Technology used</h3>
                    <ul>
                    <li>
                        <div className="img">
                        <Image src={image13} alt="Image" loading={"lazy"}></Image>
                        
                        </div>
                        <span>React.js</span>
                    </li>
                    <li>
                        <div className="img">
                        <Image src={image14} alt="Image" loading={"lazy"}></Image>
                        
                        </div>
                        <span>HTML</span>
                    </li>
                    <li>
                        <div className="img">
                        <Image src={image15} alt="Image" loading={"lazy"}></Image>
                        
                        </div>
                        <span>CSS</span>
                    </li>
                    <li>
                        <div className="img">
                        <Image src={image16} alt="Image" loading={"lazy"}></Image>
                        
                        </div>
                        <span>JavaScript</span>
                    </li>
                    <li>
                        <div className="img">
                        <Image src={image17} alt="Image" loading={"lazy"}></Image>
                        
                        </div>
                        <span>Github</span>
                    </li>
                    </ul>
                    <a href="https://thrive-ai-nine.vercel.app" target="_blank">
                    <p>Project Link</p>
                    <span>
                        <FontAwesomeIcon icon={faLink} />
                    </span>
                    </a>
                </div>
                <div className="client-rating">
                    <h3>Client&apos;s Rating</h3>
                    <ul>
                    <li>
                        <FontAwesomeIcon icon={faStar} />
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faStar} />
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faStar} />
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faStar} />
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faStar} />
                    </li>
                    </ul>
                    <p className="arabic">
                    محترف وسلس في التعامل. يتجاوب بشكل ممتاز مع التغييرات ويحول
                    الأفكار إلى واقع. ممتاز جدا!
                    </p>
                    <p>
                    Professional and smooth in dealing. Responds excellently to
                    changes and turns ideas into reality. Very excellent!
                    </p>
                </div>
                </div>
            </div>
            </div>
            <div className={scrolledTwo ? "hero-item" + " " + "scrolled" : "hero-item"} ref={heroItemTwo}>
            <h2>Triple Clean</h2>
            <p>A car cleaning service for Grand Hayah hotel in Saudi Arabia</p>
            <a
                href="https://triple-clean-2-7kyc.vercel.app/"
                target="_blank"
                className="project"
            >
                <Image src={image18} alt="Image" loading={"lazy"}></Image>
                
            </a>
            <div className="details">
                <div className="project-info">
                <div>
                    <h3>Technology used</h3>
                    <ul>
                    <li>
                        <div className="img">
                        <Image src={image19} alt="Image" loading={"lazy"}></Image>
                        
                        </div>
                        <span>React.js</span>
                    </li>
                    <li>
                        <div className="img">
                        <Image src={image20} alt="Image" loading={"lazy"}></Image>
                        
                        </div>
                        <span>HTML</span>
                    </li>
                    <li>
                        <div className="img">
                        <Image src={image21} alt="Image" loading={"lazy"}></Image>
                        
                        </div>
                        <span>CSS</span>
                    </li>
                    <li>
                        <div className="img">
                        <Image src={image22} alt="Image" loading={"lazy"}></Image>
                        
                        </div>
                        <span>JavaScript</span>
                    </li>
                    <li>
                        <div className="img">
                        <Image src={image23} alt="Image" loading={"lazy"}></Image>
                        
                        </div>
                        <span>Github</span>
                    </li>
                    </ul>
                    <a href="https://triple-clean-2-7kyc.vercel.app/" target="_blank">
                    <p>Project Link</p>
                    <span>
                        <FontAwesomeIcon icon={faLink} />
                    </span>
                    </a>
                </div>
                <div className="client-rating">
                    <h3>Client&apos;s Rating</h3>
                    <ul>
                    <li>
                        <FontAwesomeIcon icon={faStar} />
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faStar} />
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faStar} />
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faStar} />
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faStar} />
                    </li>
                    </ul>
                    <p className="arabic">فنان ما شاء الله</p>
                    <p>An artist, Mashallah.</p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
  )
}

export default Hero