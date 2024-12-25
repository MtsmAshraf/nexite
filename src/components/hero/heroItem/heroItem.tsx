import React, { useCallback, useEffect, useRef, useState } from 'react'

const HeroItem = ({
    children,
}: {
    children: React.ReactNode,
}) => {
    const [scrolled, setScrolled] = useState(false)
    const heroItem: any = useRef()
    const scrollHeroItem = useCallback(() => {
        if(heroItem.current){
            if(heroItem.current.offsetTop <= scrollY + 400){
                setScrolled(true)
            }else{
                setScrolled(false)
            }
        }
    },[])
    useEffect(() => {
        window.addEventListener("scroll",scrollHeroItem)
    })
  return (
    <div className={scrolled ? "hero-item" + " " + "scrolled" : "hero-item"} ref={heroItem}>
        {
            children
        }
    </div>
  )
}

export default HeroItem