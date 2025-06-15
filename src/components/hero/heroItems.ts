import { StaticImageData } from "next/image"

import image1 from "../../../public/assets/images/thrive-ai.webp"
import image2 from "../../../public/assets/images/triple-clean.webp"
import image3 from "../../../public/assets/images/al-assema.webp"
import image4 from "../../../public/assets/images/smart-generation.webp"
import image5 from "../../../public/assets/images/abdelfttah-academy.webp"
import image14 from "../../../public/assets/images/logos/html-5-logo.svg"
import image15 from "../../../public/assets/images/logos/Official_CSS_new_Logo.png"
import image16 from "../../../public/assets/images/logos/logo-javascript.svg"
import image17 from "../../../public/assets/images/logos/icons8-github-light.svg"
import image19 from "../../../public/assets/images/logos/react-2.svg"
import image20 from "../../../public/assets/images/logos/icons8-next.js-100.png"
import image21 from "../../../public/assets/images/logos/logo-typescript.svg"
import elNaggar from "../../../public/assets/images/al-nggar.png" 

import abdelfttahLogo from "../../../public/assets/images/image-removebg-preview.png"
import elNaggarLogo from "../../../public/assets/images/alnggar-logo.svg" 
import thriveAiLogo from "../../../public/assets/images/Thrive Ai-01.png"
import alAssemaLogo from "../../../public/assets/images/logo-removebg.webp"
import smartGenerationLogo from "../../../public/assets/images/logo.png"
import tripleCleanLogo from "../../../public/assets/images/tri-logo-removebg-hd.png"

type TechUsed = {
    id: string,
    name: string,
    imgSrc: StaticImageData
}

export type HeroItemT = {
    id: string,
    title: string,
    description: string,
    note: string,
    href: string,
    projectLogo: StaticImageData,
    src: StaticImageData,
    alt: string,
    techUsed: TechUsed[],
    clientStars: number[],
    clientRatingAr: string,
    clientRatingEn: string,
    itemColor: string
}

const heroItems : HeroItemT[] = [
    {
        id: "5",
        title: "Abdalfttah Academy",
        description: "An Educational website for registering and selling the courses of the passionate PhD candidate Mohmed Abdalfttah, in the field of biology and bioinformatics.",
        note: "",
        href: "https://www.abdalfttah-academy.com/",
        projectLogo: abdelfttahLogo,
        src: image5,
        alt: "Abdalfttah Academy project image",
        techUsed: [
            {
                id: "1",
                name: "Next.js",
                imgSrc: image20
            },
            {
                id: "2",
                name: "HTML",
                imgSrc: image14
            },
            {
                id: "3",
                name: "CSS",
                imgSrc: image15
            },
            {
                id: "4",
                name: "TypeScript",
                imgSrc: image21
            },
            {
                id: "5",
                name: "Github",
                imgSrc: image17
            },
        ],
        clientStars: [1,2,3,4,5],
        clientRatingAr: "شخص محترف رائع — يتمتع بمرونة كبيرة، وسهل التعامل، ويقدّم دائمًا ما تطلبه بدقة. يبذل جهدًا إضافيًا لفهم احتياجاتك وتقديم حلول قيّمة ومخصصة. جودة الخدمة ممتازة، والأسعار تعكس قيمة رائعة. أوصي به بشدة!",
        clientRatingEn: "An amazing professional — incredibly flexible, approachable, and always delivers exactly what you ask for. He go above and beyond to understand your needs and provide valuable, tailored solutions. The quality of service is outstanding, and the pricing reflects great value. Highly recommended!",
        itemColor: "#415ede"
    },
    {
        id: "6",
        title: "El-Naggar",
        description: "The website of the academic researcher, Dr. Muhammad El-Naggar.",
        note: "re-styling the website hosted on Fourthwall platfrom to match the client's visual identity",
        href: "https://muhamedelnaggar.com/",
        projectLogo: elNaggarLogo,
        src: elNaggar,
        alt: "Al-Naggar website project image",
        techUsed: [
            {
                id: "1",
                name: "HTML",
                imgSrc: image14
            },
            {
                id: "2",
                name: "CSS",
                imgSrc: image15
            },
            {
                id: "3",
                name: "JavaScript",
                imgSrc: image16
            },
        ],
        clientStars: [1,2,3,4,5],
        clientRatingAr: "",
        clientRatingEn: "",
        itemColor: "#666"
    },
    {
        id: "1",
        title: "Thrive AI",
        description: "An Omani AI company for AI solutions for the goverment and the medical organizations in Oman",
        note: "[THE ORIGINAL CONTENT WAS REPLACED BY A DUMMY AS THE CLIENT REQUESTED]",
        href: "https://thrive-ai-nine.vercel.app",
        projectLogo: thriveAiLogo,
        src: image1,
        alt: "Thrive AI project image",
        techUsed: [
            {
                id: "1",
                name: "React.js",
                imgSrc: image19
            },
            {
                id: "2",
                name: "HTML",
                imgSrc: image14
            },
            {
                id: "3",
                name: "CSS",
                imgSrc: image15
            },
            {
                id: "4",
                name: "JavaScript",
                imgSrc: image16
            },
            {
                id: "5",
                name: "Github",
                imgSrc: image17
            },
        ],
        clientStars: [1,2,3,4,5],
        clientRatingAr: "محترف وسلس في التعامل. يتجاوب بشكل ممتاز مع التغييرات ويحول الأفكار إلى واقع. ممتاز جدا!",
        clientRatingEn: "Professional and smooth in dealing. Responds excellently to changes and turns ideas into reality. Very excellent!",
        itemColor: "#0077fe"
    },
    {
        id: "3",
        title: "Al-Assema Compressor",
        description: "Al Assema Company is one of the leading companies specializing in compressed air technology, integrated engineering and industrial solutions, and production line equipment.",
        note: "",
        href: "https://alassemacompressor.com/en",
        projectLogo: alAssemaLogo,
        src: image3,
        alt: "Al-Assema Compressors project image",
        techUsed: [
            {
                id: "1",
                name: "Next.js",
                imgSrc: image20
            },
            {
                id: "2",
                name: "React.js",
                imgSrc: image19
            },
            {
                id: "3",
                name: "HTML",
                imgSrc: image14
            },
            {
                id: "4",
                name: "CSS",
                imgSrc: image15
            },
            {
                id: "5",
                name: "TypeScript",
                imgSrc: image21
            },
            {
                id: "6",
                name: "Github",
                imgSrc: image17
            },
        ],
        clientStars: [1,2,3,4,5],
        clientRatingAr: "خمس نجوم في التعامل والجودة ووقت التنفيذ والاحترافية",
        clientRatingEn: "Five stars for communication, quality, delivery time, and professionalism",
        itemColor: "#14365c"
    },
    {
        id: "4",
        title: "Smart Generation",
        description: "An introductory website for the Egyptian company Smart Generation, a leader in the fields of engineering, construction, engineering supplies, low-current systems, central cooling and air conditioning, plumbing works, and more.",
        note: "",
        href: "https://smartgeneration-eg.com",
        projectLogo: smartGenerationLogo,
        src: image4,
        alt: "Smart Generation project image",
        techUsed: [
            {
                id: "1",
                name: "Next.js",
                imgSrc: image20
            },
            {
                id: "2",
                name: "React.js",
                imgSrc: image19
            },
            {
                id: "3",
                name: "HTML",
                imgSrc: image14
            },
            {
                id: "4",
                name: "CSS",
                imgSrc: image15
            },
            {
                id: "5",
                name: "TypeScript",
                imgSrc: image21
            },
            {
                id: "6",
                name: "Github",
                imgSrc: image17
            },
        ],
        clientStars: [1,2,3,4,5],
        clientRatingAr: "",
        clientRatingEn: "",
        itemColor: "#e8af06"
    },
    {
        id: "2",
        title: "Triple Clean",
        description: "A car cleaning service for Grand Hayah hotel in Saudi Arabia",
        note: "",
        href: "https://triple-clean-2-7kyc.vercel.app/",
        projectLogo: tripleCleanLogo,
        src: image2,
        alt: "Triple Clean project image",
        techUsed: [
            {
                id: "1",
                name: "React.js",
                imgSrc: image19
            },
            {
                id: "2",
                name: "HTML",
                imgSrc: image14
            },
            {
                id: "3",
                name: "CSS",
                imgSrc: image15
            },
            {
                id: "4",
                name: "JavaScript",
                imgSrc: image16
            },
            {
                id: "5",
                name: "Github",
                imgSrc: image17
            },
        ],
        clientStars: [1,2,3,4,5],
        clientRatingAr: "فنان ما شاء الله",
        clientRatingEn: "An artist, Mashallah.",
        itemColor: "#405ca8"
    },
]

export default heroItems;