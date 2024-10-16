import React from 'react'
import "./nav.css"
const Nav = () => {
  return (
    <nav>
        <ul>
        <li className="active">
            <a href="#home">
            <span>home</span>
            </a>
        </li>
        <li>
            <a href="#latest">
            <span>latest</span>
            </a>
        </li>
        {/* <li><a href="#info"><span>info</span></a></li>
        <li><a href="#about"><span>about</span></a></li> */}
        <li>
            <a href="#skills">
            <span>work</span>
            </a>
        </li>
        <li>
            <a href="#testimonials">
            <span>testimonials</span>
            </a>
        </li>
        <li>
            <a href="#contact">
            <span>contact</span>
            </a>
        </li>
        </ul>
    </nav>
  )
}

export default Nav