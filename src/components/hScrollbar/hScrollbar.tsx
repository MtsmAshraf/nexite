// import React, { useCallback, useEffect, useRef } from 'react'
// import "./h-scrollbar.css"
// const HScrollbar = () => {
//   const scroller: any = useRef();
//   const scrollerHandler = useCallback(() => {
//     let height = document.body.offsetHeight;
//     console.log(height)
//     console.log(scrollY)
//       scroller.current.style.cssText = `
//       width: ${scrollY * 120 / height}%;
//     `
//   },[])
//   useEffect(()=> {
//     window.addEventListener("scroll",scrollerHandler)
// })
//   return (
//     <div className="scroller">
//         <span ref={scroller} />
//     </div>
//   )
// }

// export default HScrollbar