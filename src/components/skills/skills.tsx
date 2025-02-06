import React, { useCallback, useEffect, useRef, useState } from 'react'

import "./skills.css"
import { faArrowRight, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import allProjects, { Project } from './allProjects'

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

    
    const [scrolledOne, setScrolledOne] = useState(false)
    // const [scrolledTwo, setScrolledTwo] = useState(false)
    const boxOne: any = useRef()
    // const boxTwo: any = useRef()
    const scrollboxOne = useCallback(() => {
        if(boxOne.current){
            if(boxOne.current.offsetTop <= scrollY + 350){
                setScrolledOne(true)
            }else{
                setScrolledOne(false)
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
        window.addEventListener("scroll",scrollboxOne)
        // window.addEventListener("scroll",scrollboxTwo)
    })


    // ########################################
  return (
    <section className="skills parallax" id="skills">
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
            <div className={scrolledOne ? "box" + " " + "scrolled" : "box"} ref={boxOne}>
                <h2>I design &amp; build stuff</h2>
                <p>
                Personal, Company, Events, Dashboard and More with different styles,
                ideas and catergories. <br />
                Check them out!
                </p>
                <button className='main-button' onClick={() => {openWork()}}>
                    <span>SEE MY WORK</span>
                    <FontAwesomeIcon icon={faArrowRight} />
                </button>
            </div>
        </div>
    </section>
  )
}

export default Skills