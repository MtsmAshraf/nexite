import React, { useCallback, useRef, useState } from 'react'

import "./skills.css"
import { faArrowRight, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Skills = () => {
    const [showWork, setShowWork] = useState(false)
    const [showApps, setShowApps] = useState(false)
    const openWork = () => {
        setShowWork(true)
    }
    const closeWork = () => {
        setShowWork(false)
    }
    const openApps = () => {
        setShowApps(true)
    }
    const closeApps = () => {
        setShowApps(false)
    }

    // ########################################

    
    const [scrolledOne, setScrolledOne] = useState(false)
    const [scrolledTwo, setScrolledTwo] = useState(false)
    let boxOne: any = useRef()
    let boxTwo: any = useRef()
    let scrollboxOne = useCallback(() => {
        if(boxOne.current.offsetTop <= window.scrollY + 350){
                setScrolledOne(true)
            }else{
                setScrolledOne(false)
            }
        },[scrolledOne])
        let scrollboxTwo = useCallback(() => {
            if(boxTwo.current.offsetTop <= window.scrollY + 350){
                setScrolledTwo(true)
            }else{
                setScrolledTwo(false)
            }
        },[scrolledTwo])
        window.addEventListener("scroll",scrollboxOne)
        window.addEventListener("scroll",scrollboxTwo)


    // ########################################
  return (
    <section className="skills parallax" id="skills">
        <div className={showWork ? "other-work" + " " + "shown": "other-work"}>
        <h1>My Work</h1>
        <FontAwesomeIcon onClick={() => {closeWork()}} icon={faXmark} />
        {/* <h2>My Work</h2> */}
        <div className="other-work-links">
            <div className="vuertfolio">
            <a href="https://vuertfolio.netlify.app/" target="_blank">
                Vuertfolio
            </a>
            </div>
            <div className="mo3shop">
            <a href="https://mo3shop.vercel.app/" target="_blank">
                Mo3Shop
            </a>
            </div>
            <div className="black-dashboard">
            <a href="https://black-dashboard-2.vercel.app/" target="_blank">
                BlackDash
            </a>
            </div>
            <div className="bentfolio">
            <a href="https://bentfolio.vercel.app/" target="_blank">
                Bentfolio
            </a>
            </div>
            <div className="thrive-ai">
            <a href="https://thrive-ai-nine.vercel.app//" target="_blank">
                Thrive AI
            </a>
            </div>
            {/* <div class="open-app">
                <a href="https://open-app-seven.vercel.app/" target="_blank">open-app</a>
            </div> */}
            {/* <div class="dashboard"> 
                <a href="7 Templare seven/jTemp7.html" target="_blank">Dashboard</a>
            </div> */}
            <div className="stimulus">
            <a href="4 template four/jTemp4.html" target="_blank">
                Stimulus
            </a>
            </div>
            {/* <div class="chain">
                <a href="5 template five/jTemp5.html" target="_blank">Chain</a>
            </div> */}
            <div className="event">
            <a href="6 Template six/jTemp6.html" target="_blank">
                Event
            </a>
            </div>
            {/* <div class="john-doe">
                <a href="JohnDoe/temp 6.html" target="_blank">JohnDoe</a>
            </div> */}
            {/* <div class="dream">
                <a href="5 Template five css/temp5.html" target="_blank">Dream Company</a>
            </div> */}
            {/* <div class="edu">
                <a href="4 Template four css/temp4.html" target="_blank">EDU Meeting</a>
            </div> */}
            <div className="template">
            <a href="3 Template three css/temp3.html" target="_blank">
                Template
            </a>
            </div>
            {/* <div class="bondi">
                <a href="Bootstrap template/index.html" target="_blank">Bondi</a>
            </div> */}
            {/* <div class="vanilla">
                <a href="3 template three vanilla/jTemp3.html" target="_blank">Vanilla</a>
            </div> */}
            {/* <div class="grayscale">
                <a href="Bootstrap template 2/index.html" target="_blank">Grayscale</a>
            </div> */}
            {/* <div class="design">
                <a href="Bootstrap template 3/index.html" target="_blank">Design</a>
            </div> */}
            <div className="space">
            <a href="4 four/index.html" target="_blank">
                Space Tourism
            </a>
            </div>
            {/* <div class="bootstrap-dashboard">
                <a href="https://dashboardbootsrap.netlify.app/" target="_blank">Bootstrap Dashboard</a>
            </div> */}
            <div className="ramadan-night">
            <a href="https://ramadan-night.netlify.app/" target="_blank">
                Ramadan Night
            </a>
            </div>
            {/* <div class="digitf">
                <a color="#ffff00" href="https://digitf-store.netlify.app/" target="_blank">Digitf</a>
            </div> */}
            {/* <div class="mstskp">
                <a href="https://mstskp-site.netlify.app/" target="_blank">MSTSKP</a>
            </div> */}
        </div>
        </div>
        <div className={showApps ? "apps" + " " + "shown": "apps"}>
        <h1>My Apps</h1>
        <FontAwesomeIcon onClick={() => {closeApps()}} icon={faXmark} />
        <div className="apps-links">
            <div className="url-shrtr">
            <a href="https://url-shrtr.netlify.app/" target="_blank">
                url.shrtr
            </a>
            </div>
            <div className="weight">
            <a href="https://weight-app.netlify.app/" target="_blank">
                Weight App
            </a>
            </div>
            <div className="color-palette">
            <a href="https://color-matched.netlify.app/" target="_blank">
                Palette Generator
            </a>
            </div>
            <div className="typathon">
            <a
                href="https://typathon-am5z-6lfdbnqzb-mtsmashraf.vercel.app/"
                target="_blank"
            >
                Typathon
            </a>
            </div>
            <div className="rps">
            <a href="7 seven/index.html" target="_blank">
                R,P,S
            </a>
            </div>
            {/* <div class="credit-card">
                <a href="1 one/index.html" target="_blank">Credit Card</a>
            </div>
            <div class="countdown">
                <a href="6 six/index.html" target="_blank">Countdown</a>
            </div>
            
            <div class="draw-app">
                <a href="draw app/index.html" target="_blank">Draw App</a>
            </div>
            <div class="weather-app">
                <a href="weather app/index.html" target="_blank">Weather App</a>
            </div>
            <div class="quiz-game">
                <a href="game test/Game2test.html" target="_blank">Quiz Game</a>
            </div> */}
            {/* <div class="to">
                <a href="project two/index.html" target="_blank">To-do App</a>
            </div> */}
            <div className="picasa">
            <a href="Picasa Game/index.html" target="_blank">
                Picasa Game
            </a>
            </div>
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
            <button onClick={() => {openWork()}}>
                <span>SEE MY WORK </span>
                <FontAwesomeIcon icon={faArrowRight} />
            </button>
        </div>
        <div className={scrolledTwo ? "box" + " " + "scrolled" : "box"} ref={boxTwo}>
            <h2>I also build apps and games</h2>
            <p>
            Simple apps which is usable on phone by converting it to an IOS or
            Android apps.Quizes games in Arabic, which is competitive and
            question-diverse. <br />
            Check them out
            </p>
            <button onClick={() => {openApps()}} className="game">
                <span>SHOW APPS</span>
                <FontAwesomeIcon icon={faArrowRight} />
            </button>
        </div>
        </div>
    </section>
  )
}

export default Skills