import { faLink, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React, { useCallback, useEffect, useRef, useState } from 'react'


import heroItems from "./heroItems"

import "./hero.css"
import HeroItem from './heroItem/heroItem'
const Hero = () => {
    const [scrolled, setScrolled] = useState(false)
    const heroSection: any = useRef()
    const scrollSection = useCallback(() => {
        if(heroSection.current){
            if(heroSection.current.offsetTop <= window.scrollY + 400){
                setScrolled(true)
            }else{
                setScrolled(false)
            }
        }
    },[])
    
    useEffect(() => {
        window.addEventListener("scroll", scrollSection)
    })
    
  return (
    <section ref={heroSection} className={scrolled ? "hero" + " " + "scrolled" : "hero"} id="latest">
        <h1>My Latest Work</h1>
        <div className="container">
            {
                heroItems.map((item) => {
                    return(
                        <HeroItem key={item.id}>
                            <h2 style={{color: item.itemColor}}>{item.title}</h2>
                            <p>
                                {item.description}
                            </p>
                            {item.note &&  
                                <p>
                                    {item.note}
                                </p>
                            }
                            <a
                                href={item.href}
                                target="_blank"
                                className="project"
                                style={{ borderColor: item.itemColor,  boxShadow: `0px 5px 17px -4px ${item.itemColor}` }}
                            >
                                <Image src={item.src} alt={item.alt} loading={"lazy"} width={2000} height={2000}></Image>
                            </a>
                            <div className="details" style={{ borderColor: item.itemColor }}>
                                <div className="project-info">
                                <div style={{ borderColor: item.itemColor }}>
                                    <h3>Technology used</h3>
                                    <ul>
                                        {
                                            item.techUsed.map((tech) => {
                                                return(
                                                    <li key={tech.id}>
                                                        <div className="img">
                                                            <Image src={tech.imgSrc} alt={`${tech.name} image`} loading={"lazy"} width={2000} height={2000}></Image>
                                                        </div>
                                                        <span>{tech.name}</span>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                    <a style={{ color: item.itemColor, borderBottom: `1px solid ${item.itemColor}`, boxShadow: `2px 2px 24px -2px ${item.itemColor}`}} href={item.href} target="_blank">
                                        <p>Project Link</p>
                                        <span>
                                            <FontAwesomeIcon icon={faLink} />
                                        </span>
                                    </a>
                                </div>
                                <div className="client-rating">
                                    <h3>Client&apos;s Rating</h3>
                                    <ul>
                                        {
                                            item.clientStars.map((star) => {
                                                return(
                                                    <li key={star}>
                                                        <FontAwesomeIcon icon={faStar} />
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                    <p className="arabic">
                                        {item.clientRatingAr}
                                    </p>
                                    <p>
                                        {item.clientRatingEn}
                                    </p>
                                </div>
                                </div>
                            </div>
                        </HeroItem>
                    )
                })
            }
        </div>
    </section>
  )
}

export default Hero