import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import "./landing.css"
import image2 from "../../../public/assets/images/logos/react-2.svg"
import image3 from "../../../public/assets/images/logos/html-5-logo.svg"
import image4 from "../../../public/assets/images/logos/Official_CSS_new_Logo.png"
import image5 from "../../../public/assets/images/logos/logo-javascript.svg"
import image6 from "../../../public/assets/images/logos/tailwind-css.svg"
import image7 from "../../../public/assets/images/logos/bootstrap-4.svg"
import image8 from "../../../public/assets/images/logos/sass-1.svg"
import image9 from "../../../public/assets/images/logos/icons8-github-100.png"
import image10 from "../../../public/assets/images/logos/icons8-next.js-100.png"
// import myCv from "../../../public/assets/documents/Moatasim-Ashraf.pdf"
import myProfile from "../../../public/assets/images/my-profile.png"

import SocialUl from '../socialUl/socialUl'
import DownloadButton from '../downloadBtn/downloadBtn'
// import Link from 'next/link'



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
                <div className="profile">
                    <Image src={myProfile} alt='Moatasim Ashraf Profile Picture'></Image>
                </div>
                <h2>Moatasim Ashraf</h2>
                <h3>Next.js/React.js Front-End Developer</h3>
                <p>
                No Introductions, here is
                <a href="#skills"> my work</a>
                </p>
                <p>
                And here is
                <a
                    className="resume-link"
                    // href={"../../../public/Moatasim-Ashraf.pdf"}
                    href={"https://drive.google.com/file/d/1OOvgDG81ZoGjyR5AsUEG-IuxIjZ1jQ9E/view?usp=sharing"}
                    target="_blank"
                >
                    {" "}
                    my Resume
                </a>
                <DownloadButton></DownloadButton>
                </p>
                <div className="skills-icons">
                <span>
                    <Image src={image10} alt="Image" loading={"lazy"} width={2000} height={2000}></Image>
                </span>
                <span>
                    <Image src={image2} alt="Image" loading={"lazy"} width={2000} height={2000}></Image>
                </span>
                <span>
                    <Image src={image3} alt="Image" loading={"lazy"} width={2000} height={2000}></Image>
                </span>
                <span>
                    <Image src={image4} alt="Image" loading={"lazy"} width={2000} height={2000}></Image>
                </span>
                <span>
                    <Image src={image5} alt="Image" loading={"lazy"} width={2000} height={2000}></Image>
                </span>
                <span>
                    <Image src={image6} alt="Image" loading={"lazy"} width={2000} height={2000}></Image>
                </span>
                <span>
                    <Image src={image7} alt="Image" loading={"lazy"} width={2000} height={2000}></Image>
                </span>
                <span>
                    <Image src={image8} alt="Image" loading={"lazy"} width={2000} height={2000}></Image>
                </span>
                <span>
                    <Image src={image9} alt="Image" loading={"lazy"} width={2000} height={2000}></Image>
                </span>
                </div>
                <SocialUl />
            </div>
        
        </div>
    </section>
  )
}

export default Landing