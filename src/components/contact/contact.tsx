import React, { useRef, useState } from 'react'
import "./contact.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faCheck, faXmark } from '@fortawesome/free-solid-svg-icons'
const Contact = () => {
  const [showPopUp, setShowPopUp] = useState(false)
  const [correct, setCorrect] = useState(false)
  const [wrong, setWrong] = useState(false)
  const username: any = useRef();
  const email: any = useRef();
  const msg: any = useRef();
  const onsubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const body = new FormData(e.target as HTMLFormElement)
    fetch("/api/sent", {
      method: "POST",
      body, 
    }).then(res => {
      if(res.status){
        setShowPopUp(true)
        setTimeout(() => {
          setShowPopUp(false)
        }, 3000);
      }
      if(res.status === 200){
        setCorrect(true)
        setTimeout(() => {
          setCorrect(false)
        }, 4000);
        username.current.value = "";
        email.current.value = "";
        msg.current.value = "";
      }else{
        setWrong(true)
        setTimeout(() => {
          setWrong(false)
        }, 4000);
      }
    })
  }
  return (
    <section className="contact parallax" id="contact">
        <div className={showPopUp ? "pop-up" + " " + "shown" : "pop-up"}>
          {
            correct && (
              <>
                <span className='correct'>
                    <FontAwesomeIcon icon={faCheck} />
                  </span>
                  <p>
                    Message Sent!
                  </p>
              </>
            )
          }
          {
            wrong && (
              <>
                <span className='error'>
                  <FontAwesomeIcon icon={faXmark} />
                </span>
                <p>
                  Something Went Wrong, Try Again!
                </p>
              </>
            )
          }
        </div>
        <div className="overlay" />
        <div className="container">
          <h2>Send me a message!</h2>
          <p>Got a question or proposal, or just want to say hello? Go ahead.</p>
          <form onSubmit={onsubmit}>
              <div className="in">
                <label htmlFor="">Your Name</label>
                <input ref={username} required type="text" id="name" name='username' placeholder="Enter Your Name" />
              </div>
              <div className="in">
                <label htmlFor="">Your Email</label>
                <input ref={email} required type="email" id="mail" placeholder="Enter Your Email" />
              </div>
              <div className='text-area'>
                <label htmlFor="">Your Message</label>
                <textarea ref={msg}
                    placeholder="Hi, I think we need to design system for our products at Company X, How soon can you hop on to discuss this?"
                    defaultValue={""}
                />
              </div>
              <button className='main-button'>
                <span>Send</span>
                <FontAwesomeIcon icon={faArrowRight}/>
              </button>
          </form>
        </div>
    </section>
  )
}

export default Contact