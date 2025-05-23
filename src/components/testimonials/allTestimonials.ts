
export type Testimonial = {
    id: string,
    name: string,
    title: string,
    country: string,
    countryCode: string,
    textEn?: string,
    textAr?: string,
}


const allTestimonials : Testimonial[] = [
    {
        id: "1",
        name: "Al Salt Al Bahri",
        title: "Thrive AI",
        country: "Oman",
        countryCode: "om",
        textAr: "محترف وسلس في التعامل. يتجاوب بشكل ممتاز مع التغييرات ويحول الأفكار إلى واقع. ممتاز جدا!",
    },
    {
        id: "2",
        name: "Philip Allan",
        title: "An Upwork client",
        country: "Canada",
        countryCode: "ca",
        textEn: "Very competent and patient, did exactly what we needed, prompt and high quality work. Would be delighted to work together again.",
    },
    {
        id: "3",
        name: "Abdalaziz Al-Anzi",
        title: "Triple Clean",
        country: "Saudi Arabia",
        countryCode: "sa",
        textAr: "فنان ما شاء الله",
    },
    {
        id: "4",
        name: "Ammar Abdallatif",
        title: "Al-Assema Compressors",
        country: "Egypt",
        countryCode: "eg",
        textAr: "خمس نجوم في التعامل والجودة والتسليم في الموعد والاحترافية",
    },
    {
        id: "5",
        name: "Mohmed Abdalfttah",
        title: "Abdalfttah Academy",
        country: "Spain",
        countryCode: "es",
        textEn: "An amazing professional — incredibly flexible, approachable, and always delivers exactly what you ask for. He go above and beyond to understand your needs and provide valuable, tailored solutions. The quality of service is outstanding, and the pricing reflects great value. Highly recommended!"
    }
]

export default allTestimonials;