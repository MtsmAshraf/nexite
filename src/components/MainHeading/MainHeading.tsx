import React from 'react'
import "./main-heading.css"
const MainHeading = ({
    children,
    scrolled
} : {
    children: React.ReactNode,
    scrolled: boolean
}) => {
  return (
    <h1 className={scrolled ? 'main-heading scrolled' : 'main-heading'}>{children}</h1>
  )
}

export default MainHeading