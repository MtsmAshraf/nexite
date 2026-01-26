import { StaticImageData } from "next/image";

import elNaggar from "../../../public/assets/images/al-nggar.png" 
import abdalfttahAcademy from "../../../public/assets/images/abdelfttah-academy.webp" 
import thriveAi from "../../../public/assets/images/thrive-ai.webp"
import alAssema from "../../../public/assets/images/al-assema.webp"
import smartGeneration from "../../../public/assets/images/smart-generation.webp"
import tripleClean from "../../../public/assets/images/triple-clean.webp"
import vuertfolio from "../../../public/assets/images/vuertfolio.webp"
import mo3Shop from "../../../public/assets/images/mo3shop.webp"
import blackDash from "../../../public/assets/images/black-dash-1.webp"
import bentofolio from "../../../public/assets/images/bentfolio.webp"
import dashboard from "../../../public/assets/images/dashboard.webp"
import stimulus from "../../../public/assets/images/stimulus.webp"
import spaceTourism from "../../../public/assets/images/space.webp"
import ramadanNight from "../../../public/assets/images/ramadan-nights-bg.webp"
import icsf from "../../../public/assets/images/icsf.png"
import alMahdy from "../../../public/assets/images/al-mahdy.png"
import sahlCars from "../../../public/assets/images/sahl-cars.png"
import byteStore from "../../../public/assets/images/byte-store.png"
import schilddruesenmedizin from "../../../public/assets/images/schilddruesenmedizin.jpg"
import neuroCure from "../../../public/assets/images/neurocure.jpg"


export type Project = {
    id: string,
    title: string,
    link: string,
    img: StaticImageData
}


const allProjects : Project[] = [
    // hightest id => 20
    {
        id: "13",
        title: "Abdalfttah Academy",
        link: "https://www.abdalfttah-academy.com/",
        img: abdalfttahAcademy
    },
    {
        id: "18",
        title: "Byte Store",
        link: "https://byte-eg.com/",
        img: byteStore
    },
    {
        id: "1",
        title: "Thrive AI",
        link: "https://thrive-ai-nine.vercel.app/",
        img: thriveAi
    },
    {
        id: "20",
        title: "NeuroCure",
        link: "https://neurocure.vercel.app/",
        img: neuroCure
    },
    {
        id: "19",
        title: "Schilddrüsenmedizin",
        link: "https://www.schilddruesenmedizin.at",
        img: schilddruesenmedizin
    },
    {
        id: "15",
        title: "ICSF",
        link: "https://www.icsf-eg.com",
        img: icsf
    },
    {
        id: "14",
        title: "El-Naggar",
        link: "https://muhamedelnaggar.com/",
        img: elNaggar
    },
    {
        id: "2",
        title: "Al-Assema",
        link: "https://alassemacompressor.com",
        img: alAssema
    },
    {
        id: "16",
        title: "Al Mahdy",
        link: "https://almahdy-eg.com/",
        img: alMahdy
    },
    {
        id: "3",
        title: "Smart Generation",
        link: "https://smartgeneration-eg.com",
        img: smartGeneration
    },
    {
        id: "4",
        title: "Triple Clean",
        link: "https://triple-clean-2-7kyc.vercel.app/",
        img: tripleClean
    },
    {
        id: "17",
        title: "Sahl Cars",
        link: "https://sahlcars.com/",
        img: sahlCars
    },
    {
        id: "5",
        title: "Vuertfolio",
        link: "https://vuertfolio.netlify.app/",
        img: vuertfolio
    },
    {
        id: "6",
        title: "Mo3Shop",
        link: "https://mo3shop.vercel.app/",
        img: mo3Shop
    },
    {
        id: "7",
        title: "Black Dash",
        link: "https://black-dashboard-2.vercel.app/",
        img: blackDash
    },
    {
        id: "8",
        title: "Bentofolio",
        link: "https://bentfolio.vercel.app/",
        img: bentofolio
    },
    {
        id: "9",
        title: "Dashboard",
        link: "https://dashboard-sepia-six.vercel.app/",
        img: dashboard
    },
    {
        id: "10",
        title: "Stimulus",
        link: "https://stimulus-rho.vercel.app/",
        img: stimulus
    },
    {
        id: "11",
        title: "Space Tourism",
        link: "https://space-tourism-vert-two.vercel.app/",
        img: spaceTourism
    },
    {
        id: "12",
        title: "Ramadan Night",
        link: "https://ramadan-night.netlify.app/",
        img: ramadanNight
    }
]

export default allProjects;