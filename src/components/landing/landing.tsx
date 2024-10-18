import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import "./landing.css"
import image2 from "../../../public/assets/images/logos/react-2.svg"
import image3 from "../../../public/assets/images/logos/html-5-logo.svg"
import image4 from "../../../public/assets/images/logos/css-3.svg"
import image5 from "../../../public/assets/images/logos/logo-javascript.svg"
import image6 from "../../../public/assets/images/logos/tailwind-css.svg"
import image7 from "../../../public/assets/images/logos/bootstrap-4.svg"
import image8 from "../../../public/assets/images/logos/sass-1.svg"
import image9 from "../../../public/assets/images/logos/icons8-github.svg"
import image10 from "../../../public/assets/images/logos/nextjs.svg"
import image11 from "../../../public/assets/images/profile-removebg-preview.png"
import SocialUl from '../socialUl/socialUl'

const Landing = () => {
    
    const [loaded, setLoaded] = useState(false)
    useEffect(() => {
            setTimeout(() => {
            setLoaded(true)
            }, 700);
    },[])
  return (
    <section className={loaded ? "landing" + " " + "loaded": "landing"} id="home">
        <div className="container">
        <div className="text">
            <h2 style={{ height: 200 }}>Moatasim Ashraf</h2>
            <p>
            No Introductions, here is
            <a href="#skills"> my work</a>
            </p>
            <p>
            And here is
            <a
                className="resume-link"
                href="./documents/Moatasim-Ashraf.pdf"
                target="_blank"
            >
                {" "}
                my Resume
            </a>
            </p>
            <div className="skills-icons">
            <span>
                <Image src={image10} alt="Image" loading={"lazy"}></Image>
            </span>
            <span>
                <Image src={image2} alt="Image" loading={"lazy"}></Image>
            </span>
            <span>
                <Image src={image3} alt="Image" loading={"lazy"}></Image>
            </span>
            <span>
                <Image src={image4} alt="Image" loading={"lazy"}></Image>
            </span>
            <span>
                <Image src={image5} alt="Image" loading={"lazy"}></Image>
            </span>
            <span>
                <Image src={image6} alt="Image" loading={"lazy"}></Image>
            </span>
            <span>
                <Image src={image7} alt="Image" loading={"lazy"}></Image>
            </span>
            <span>
                <Image src={image8} alt="Image" loading={"lazy"}></Image>
            </span>
            <span>
                <Image src={image9} alt="Image" loading={"lazy"}></Image>
            </span>
            </div>
            <SocialUl />
        </div>
        <div className="img">
            <Image src={image11} alt="Image" loading={"lazy"}></Image>
        </div>
        </div>
    </section>
  )
}

export default Landing