import React from 'react'
import "./nav.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faCommentDots, faHouse, faPhone, faStar } from '@fortawesome/free-solid-svg-icons'
const Nav = () => {
  return (
    <nav>
        <ul>
            <li className="active">
                <a href="#home">
                    <span>Home</span>
                    <span>
                        <FontAwesomeIcon icon={faHouse}/>
                    </span>
                </a>
            </li>
            <li>
                <a href="#latest">
                    <span>Latest</span>
                    <span>
                        <FontAwesomeIcon icon={faStar} />
                    </span>
                </a>
            </li>
            <li>
                <a href="#skills">
                    <span>Work</span>
                    <span>
                        <FontAwesomeIcon icon={faCode} />
                    </span>
                </a>
            </li>
            <li>
                <a href="#testimonials">
                    <span>Testimonials</span>
                    <span>
                        <FontAwesomeIcon icon={faCommentDots} />
                    </span>
                </a>
            </li>
            <li>
                <a href="#contact">
                    <span>Contact</span>
                    <span>
                        <FontAwesomeIcon icon={faPhone} />
                    </span>
                </a>
            </li>
        </ul>
    </nav>
  )
}

export default Nav