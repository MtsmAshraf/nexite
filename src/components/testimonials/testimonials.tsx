import { faChevronLeft, faChevronRight, faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/bundle';
import 'swiper/css/effect-cards';
import "./testimonials.css"
import allTestimonials, { Testimonial } from './allTestimonials'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectCoverflow, Navigation, Pagination } from 'swiper/modules'
const Testimonials = () => {
    const testimonials: any = useRef()
    const [testiScrolled, setTestiScrolled] = useState(false)
    const scrollTestiSection = () => {
        if(testimonials.current){
            if(testimonials.current.offsetTop <= window.scrollY + 400){
                setTestiScrolled(true)
            }
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", scrollTestiSection)
    },[])
  return (
    <section ref={testimonials} className={testiScrolled ? "testimonials" + " " + "testiScrolled" : "testimonials"} id="testimonials">
        <div className="overlay" />
        <h2>Testimonials</h2>
        <div className="container">
            <div className="content">
                <Swiper
                    loop
                    autoplay={{
                        delay: 7000,
                    }}
                    slidesPerView= {1}
                    spaceBetween={80}
                    pagination={{
                        clickable: true,
                        el: `.pagination`
                    }}
                    modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
                    navigation={{
                        nextEl: `.featured-swiper-button-next`,
                        prevEl: `.featured-swiper-button-prev`
                    }}
                    grabCursor={true}
                    effect={'coverflow'}
                    centeredSlides={true}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    className={`mySwiperProd`}
                    autoHeight={true}
                    > 
                        {
                            allTestimonials.map((testimonial: Testimonial) => {
                                const flag = `https://flagcdn.com/w2560/${testimonial.countryCode.toLocaleLowerCase()}.png`
                                return(
                                    <SwiperSlide key={testimonial.id} className={"SwiperSlide"}>
                                        <div className='person'>
                                            <span className="qoute-icon">
                                                <FontAwesomeIcon icon={faQuoteLeft} />
                                            </span>
                                            <div className="img">
                                                <Image src={flag} alt={`${testimonial.country} flag image`} loading={"lazy"} width={2500} height={2500}></Image>
                                            </div>
                                            {
                                                testimonial.textEn ? <p>{testimonial.textEn}</p> : null 
                                            }
                                            {
                                                testimonial.textAr ? <p className="arabic">{testimonial.textAr}</p> : null 
                                            }
                                            <div className="person-info">
                                                <span className="person-name">
                                                    {testimonial.name}
                                                </span>
                                                <span className="person-title">
                                                    {testimonial.title}
                                                </span>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }
                </Swiper>
                <div className={"pagination-div"}>
                    <div className={`pagination`}></div>
                </div>
                <div className={"btns"}>
                    <button className={`featured-swiper-button-prev`}>
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                    <button className={`featured-swiper-button-next`}>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Testimonials