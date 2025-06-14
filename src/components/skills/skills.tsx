import React, { useCallback, useEffect, useRef, useState } from 'react'

import "./skills.css"
import { faArrowRight, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import allProjects, { Project } from './allProjects'
import MainHeading from '../MainHeading/MainHeading'

const Skills = () => {
    const [showWork, setShowWork] = useState(false)
    // const [showApps, setShowApps] = useState(false)
    const openWork = () => {
        setShowWork(true)
    }
    const closeWork = () => {
        setShowWork(false)
    }
    // const openApps = () => {
    //     setShowApps(true)
    // }
    // const closeApps = () => {
    //     setShowApps(false)
    // }

    // ########################################

    
    const [scrolled, setScrolled] = useState(false)
    // const [scrolledTwo, setScrolledTwo] = useState(false)
    const myWork: any = useRef()
    // const boxTwo: any = useRef()
    const scrollMyWork = useCallback(() => {
        if(myWork.current){
            if(myWork.current.offsetTop <= scrollY + 350){
                setScrolled(true)
            }else{
                setScrolled(false)
            }
        }
    },[])
    // const scrollboxTwo = useCallback(() => {
    //     if(boxTwo.current){
    //         if(boxTwo.current.offsetTop <= scrollY + 350){
    //             setScrolledTwo(true)
    //         }else{
    //             setScrolledTwo(false)
    //         }
    //     }
    // },[])
    useEffect(()=> {
        window.addEventListener("scroll",scrollMyWork)
        // window.addEventListener("scroll",scrollboxTwo)
    })


    // ########################################
  return (
    <section ref={myWork} className="skills parallax" id="skills">
        <MainHeading scrolled={scrolled}>My Work</MainHeading>
        <div className={showWork ? "other-work" + " " + "shown": "other-work"}>
            <h1>My Work</h1>
            <FontAwesomeIcon onClick={() => {closeWork()}} icon={faXmark} />
            {/* <h2>My Work</h2> */}
            <div className="other-work-links">
            {
                allProjects.map((project: Project) => {
                    return(
                        <div key={project.id} style={{ backgroundImage: `url(${project.img.src})` }}>
                            <a href={project.link} target="_blank">
                                {project.title}
                            </a>
                        </div>
                    )
                })
            }
            </div>
        </div>
        <div className="overlay" />
        <div className="container">
            <div className={scrolled ? "box" + " " + "scrolled" : "box"}>
                <h2>I design &amp; build stuff</h2>
                <p>
                Personal websites, Companies websites, Events websites, Dashboard, SaaS, E-commerce and More in different styles,
                ideas and catergories.
                </p>
                <button className='main-button' onClick={() => {openWork()}}>
                    <span>Check them out!</span>
                    <FontAwesomeIcon icon={faArrowRight} />
                </button>
            </div>
        </div>
    </section>
  )
}

export default Skills