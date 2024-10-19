import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import image1 from "../../../public/assets/images/Logo-noBg.webp"
import "./header.css"
import Link from 'next/link'
const Header = () => {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
      setTimeout(() => {
        setLoaded(true)
      }, 500);
  },[])
  return (
    <header className={loaded ? "header" + " " + "loaded": "header"}>
        <Link href="/">
        <Image src={image1} alt="Image" loading={"lazy"}></Image>
        </Link>
    </header>
  )
}

export default Header