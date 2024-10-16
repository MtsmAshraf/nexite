import Image from 'next/image'
import React from 'react'
import "./landing.css"
import image2 from "../../../public/assets/images/logos/icons8-react-16.png"
import image3 from "../../../public/assets/images/logos/html5-logo-31813.png"
import image4 from "../../../public/assets/images/logos/icons8-css-logo-48.png"
import image5 from "../../../public/assets/images/logos/icons8-javascript-48.png"
import image6 from "../../../public/assets/images/logos/tailwind-css.svg"
import image7 from "../../../public/assets/images/logos/icons8-bootstrap-logo-48.png"
import image8 from "../../../public/assets/images/logos/icons8-sass-48.png"
import image9 from "../../../public/assets/images/logos/icons8-github-50.png"
import image10 from "../../../public/assets/images/logos/nextjs.svg"
import image11 from "../../../public/assets/images/profile-removebg-preview.png"
import SocialUl from '../socialUl/socialUl'

const Landing = () => {
  return (
    <section className="landing" id="home">
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