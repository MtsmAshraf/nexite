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
import wordpress from "../../../public/assets/images/logos/wordpress-icon.svg"
import elementor from "../../../public/assets/images/logos/elementor-icon.svg"
import hostinger from "../../../public/assets/images/logos/hostinger.svg"
import wpBakery from "../../../public/assets/images/logos/wpbakery.png"


import elNaggar from "../../../public/assets/images/al-nggar.png" 
import icsf from "../../../public/assets/images/icsf.png" 
import alMahdy from "../../../public/assets/images/al-mahdy.png" 
import sahlCars from "../../../public/assets/images/sahl-cars.png" 
import byteStore from "../../../public/assets/images/byte-store.png" 
import schilddruesenmedizin from "../../../public/assets/images/schilddruesenmedizin.jpg"
import neuroCure from "../../../public/assets/images/neurocure.jpg"
import amgoe from "../../../public/assets/images/amgo.jpg"


import abdelfttahLogo from "../../../public/assets/images/image-removebg-preview.png"
import elNaggarLogo from "../../../public/assets/images/alnggar-logo.svg" 
import thriveAiLogo from "../../../public/assets/images/Thrive Ai-01.png"
import alAssemaLogo from "../../../public/assets/images/logo-removebg.webp"
import smartGenerationLogo from "../../../public/assets/images/logo.png"
import tripleCleanLogo from "../../../public/assets/images/tri-logo-removebg-hd.png"
import icsfLogo from "../../../public/assets/images/icsf-logo.png"
import alMahdyLogo from "../../../public/assets/images/al-mahdy-logo.png"
import sahlCarsLogo from "../../../public/assets/images/sahl-cars-logo.webp"
import byteStoreLogo from "../../../public/assets/images/byte-store-logo.png"
import schilddruesenmedizinLogo from "../../../public/assets/images/schilddruesenmedizin-logo.webp"
import neuroCureLogo from "../../../public/assets/images/neurocure-logo.png"
import amgoeLogo from "../../../public/assets/images/AMGOE-logo.png"


type TechUsed = {
    id: string,
    name: string,
    imgSrc: StaticImageData
}

export type HeroItemT = {
    id: string,
    title: string,
    description: string,
    note?: string,
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
    // hightest id => 13
    {
        id: "5",
        title: "Abdalfttah Academy",
        description: "An Educational website for registering and selling the courses of the passionate PhD candidate Mohmed Abdalfttah, in the field of biology and bioinformatics.",
        note: "",
        href: "https://www.abdalfttah-academy.com/",
        projectLogo: abdelfttahLogo,
        src: image5,
        alt: "Abdalfttah Academy project",
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
        id: "10",
        title: "Byte Store",
        description: "A PC store, specialized in used and new PCs and laptops and their accessories ",
        href: "https://byte-eg.com/",
        projectLogo: byteStoreLogo,
        src: byteStore,
        alt: "Byte Store Project",
        techUsed: [
            {
                id: "1",
                name: "WordPress",
                imgSrc: wordpress
            },
            {
                id: "2",
                name: "Elementor",
                imgSrc: elementor
            },
            {
                id: "3",
                name: "Hostinger",
                imgSrc: hostinger
            }
        ],
        clientStars: [1,2,3,4,5],
        clientRatingAr: "",
        clientRatingEn: "",
        itemColor: "#102d4e"
    },
    {
        id: "1",
        title: "Thrive AI",
        description: "An Omani AI company for AI solutions for the goverment and the medical organizations in Oman",
        note: "[THE ORIGINAL CONTENT WAS REPLACED BY A DUMMY AS THE CLIENT REQUESTED]",
        href: "https://thrive-ai-nine.vercel.app",
        projectLogo: thriveAiLogo,
        src: image1,
        alt: "Thrive AI project",
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
        id: "12",
        title: "NeuroCure",
        description: "A website for a Neurology clinic in Vienna of Dr. Muhammed Yacob ",
        href: "https://neurocure.vercel.app/",
        projectLogo: neuroCureLogo,
        src: neuroCure,
        alt: "NeuroCure - A website for a Neurology clinic in Vienna of Dr. Muhammed Yacob",
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
        clientRatingAr: "",
        clientRatingEn: "",
        itemColor: "#c2bb92"
    },
    {
        id: "11",
        title: "Schilddrüsenmedizin",
        description: "A website for a Throyd clinic in Vienna of Dr. Fairoz Muhammed ",
        href: "https://www.schilddruesenmedizin.at/",
        projectLogo: schilddruesenmedizinLogo,
        src: schilddruesenmedizin,
        alt: "Schilddrüsenmedizin - A website for a Throyd clinic in Vienna of Dr. Fairoz Muhammed",
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
        clientRatingAr: "لديه صبر ويستمع أكثر مما يتكلم ولا يكثر بالوعود ويحول هذا كله إلى إنجاز ولا يمل من كثرة التعديل ..حتى بعد تسليم العمل ..تعامل بأخلاق عالية. بارك الله فيه.",
        clientRatingEn: "He is patient and listens more than he talks. He doesn’t make too many promises and turns everything into real achievements. He never gets tired of making adjustments, even after delivering the work. He behaves with great ethics and manners. May God bless him.",
        itemColor: "#1197f0"
    },
    {
        id: "13",
        title: "AMGÖ",
        description: "The Website of AMGÖ - The Arab Medical Association in Austria",
        href: "https://amgoe.at/",
        projectLogo: amgoeLogo,
        src: amgoe,
        alt: "AMGÖ Project",
        techUsed: [
            {
                id: "1",
                name: "WordPress",
                imgSrc: wordpress
            },
            {
                id: "2",
                name: "wpbakery",
                imgSrc: wpBakery
            },
            {
                id: "3",
                name: "Hostinger",
                imgSrc: hostinger
            }
        ],
        clientStars: [1,2,3,4,5],
        clientRatingAr: "",
        clientRatingEn: "",
        itemColor: "#102d4e"
    },
    {
        id: "7",
        title: "ICSF",
        description: "The Website of International Center for Safety & Fire Company specialized in Comprehensive fire safety solutions, fire alarm systems, and emergency response training.",
        href: "https://www.icsf-eg.com",
        projectLogo: icsfLogo,
        src: icsf,
        alt: "ICSF - International Center for Safety & Fire Company website project",
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
        clientRatingAr: "ممتاز",
        clientRatingEn: "Perfect",
        itemColor: "#cf292b"
    },
    {
        id: "6",
        title: "El-Naggar",
        description: "The website of the academic researcher, Dr. Muhammad El-Naggar.",
        note: "re-styling the website hosted on Fourthwall platfrom to match the client's visual identity",
        href: "https://muhamedelnaggar.com/",
        projectLogo: elNaggarLogo,
        src: elNaggar,
        alt: "Al-Naggar website project",
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
        id: "3",
        title: "Al-Assema Compressor",
        description: "Al Assema Company is one of the leading companies specializing in compressed air technology, integrated engineering and industrial solutions, and production line equipment.",
        note: "",
        href: "https://alassemacompressor.com/en",
        projectLogo: alAssemaLogo,
        src: image3,
        alt: "Al-Assema Compressors project",
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
        id: "8",
        title: "Al-Mahdy",
        description: "The Website of Al Mahdy Safety for Industrial Safety Services",
        note: "",
        href: "https://almahdy-eg.com/",
        projectLogo: alMahdyLogo,
        src: alMahdy,
        alt: "Al-Mahdy project",
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
        clientRatingAr: "ممتاز",
        clientRatingEn: "Perfect",
        itemColor: "#ad2424",
    },
    {
        id: "4",
        title: "Smart Generation",
        description: "An introductory website for the Egyptian company Smart Generation, a leader in the fields of engineering, construction, engineering supplies, low-current systems, central cooling and air conditioning, plumbing works, and more.",
        note: "",
        href: "https://smartgeneration-eg.com",
        projectLogo: smartGenerationLogo,
        src: image4,
        alt: "Smart Generation project",
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
        alt: "Triple Clean project",
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
    {
        id: "9",
        title: "Sahl Cars",
        description: "The Website of Sahl Cars for Financing cars in Saudi Arabia",
        note: "",
        href: "https://sahlcars.com/",
        projectLogo: sahlCarsLogo,
        src: sahlCars,
        alt: "Sahl Cars project",
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
        clientRatingAr: "شهادة لله هذا شخص يخاف الله في عمله وتعامله تعامل بكل أخلاق و ذمة اتشرفت بالأخ معتصم و هذا مو آخر تعامل",
        clientRatingEn: "Honestly, this is a person who fears God in his work and dealings. He treats others with the utmost ethics and integrity. It was an honor dealing with Brother Moatasim, and this will definitely not be the last time we work together.",
        itemColor: "#38207f",
    },
]

export default heroItems;