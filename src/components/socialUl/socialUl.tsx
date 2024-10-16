import React from 'react'
import { faFacebookF, faGithub, faLinkedinIn, faUpwork, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./social-ul.css"
const SocialUl = () => {
  return (
    <ul className="main-social-links">
        <li>
            <a
                href="mailto:mo32000a@gmail.com"
                className="gmail"
                target="_blank"
                title="Gmail"
            >
            <FontAwesomeIcon icon={faPaperPlane} />
            </a>
        </li>
        <li>
            <a
                href="https://wa.me/201024994652"
                className="whatsapp"
                target="_blank"
            >
                <FontAwesomeIcon icon={faWhatsapp} />
            </a>
        </li>
        <li>
            <a target="_blank" href="https://www.facebook.com/moatasim.ashraf">
            <FontAwesomeIcon icon={faFacebookF} />
            </a>
        </li>
        <li>
            <a target="_blank" href="https://www.linkedin.com/in/motasim-ashraf-018827324">
            <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
        </li>
        <li>
            <a target="_blank" href="https://www.upwork.com/freelancers/~01c6a198d369e76392?mp_source=share">
            <FontAwesomeIcon icon={faUpwork} />
            </a>
        </li>
        <li>
            <a target="_blank" href="https://github.com/MtsmAshraf">
            <FontAwesomeIcon icon={faGithub} />
            </a>
        </li>
    </ul>
  )
}

export default SocialUl