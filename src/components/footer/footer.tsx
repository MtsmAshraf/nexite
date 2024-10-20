import React from 'react'
import "./footer.css"
import SocialUl from '../socialUl/socialUl'
import Image from 'next/image'
import logo from "../../../public/assets/images/Logo-noBg.webp"
const Footer = () => {
  return (
    <footer>
        <SocialUl />
        <div className='logo'>
          <Image loading='lazy' src={logo} alt='Moatasim logo'></Image>
        </div>
    </footer>
  )
}

export default Footer