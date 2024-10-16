import Image from 'next/image'
import React from 'react'
import image1 from "../../../public/assets/images/Logo-noBg.png"
import "./header.css"
import Link from 'next/link'
const Header = () => {
  return (
    <header className="header">
        <Link href="/">
        <Image src={image1} alt="Image" loading={"lazy"}></Image>
        </Link>
    </header>
  )
}

export default Header