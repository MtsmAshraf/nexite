import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Moatasim Ashraf",
  description: "The website of The Front-End Developer, Moatasim Ashraf. building websites for Companies, People portfolios, SaaS websites, E-commerce, landing pages and more. موقع مطور الواجهة الأمامية معتصم أشرف، متخصص في إنشاء مواقع الويب للشركات، ومواقع البورتفوليو الشخصية، ومواقع البرمجيات كخدمة (SaaS)، ومواقع التجارة الإلكترونية،صفحات الهبوط وغيرها.",
  abstract: "The website of The Front-End Developer, Moatasim Ashraf. building websites for Companies, People portfolios, SaaS websites, E-commerce, landing pages and more. موقع مطور الواجهة الأمامية معتصم أشرف، متخصص في إنشاء مواقع الويب للشركات، ومواقع البورتفوليو الشخصية، ومواقع البرمجيات كخدمة (SaaS)، ومواقع التجارة الإلكترونية،صفحات الهبوط وغيرها.",
  creator: "Moatasim Ashraf",
  publisher: "Moatasim Ashraf",
  keywords: [
    "Moatasim Ashraf",
    "Frontend Developer",
    "Next.js Developer",
    "React Developer",
    "Web Developer Egypt",
    "JavaScript Developer",
    "UI Developer",
    "Portfolio",
    "Modern Web Development",
    "Responsive Web Design",
    "Freelance Frontend Developer",
    "Tailwind CSS Developer",
    "Web Application Developer",
    "Best Frontend Developer Portfolio 2025",
    "Hire a Frontend Developer in Egypt",
    "Professional Next.js Developer Portfolio",
    "Modern Web Portfolio using Next.js",
    "Building Fast and Responsive Websites",
    "Creative Frontend Developer Portfolio",
    "Clean and Modern Web Design Portfolio"
  ],
  authors: [{ name: "Moatasim Ashraf", url: "https://moatasimashraf.com" }],
  category: "Web Development, Front-End Development, Front-End Web Development, Programming. تطوير الويب، تطوير الواجهة الأمامية، تطوير واجهة المستخدم للويب، البرمجة.",
  openGraph: {
    title: "Moatasim Ashraf | Frontend Developer Portfolio",
    description:
      "Frontend developer based in Egypt, building modern, responsive web applications using Next.js, React, and Tailwind CSS.",
    url: "https://moatasimashraf.com",
    siteName: "Moatasim Ashraf Portfolio",
    images: [
      {
        url: "https://moatasimashraf.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmy-profile.f09cd5a4.png&w=1080&q=75", // replace with your actual image
        width: 1200,
        height: 630,
        alt: "Moatasim Ashraf - Frontend Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Moatasim Ashraf | Frontend Developer Portfolio",
    description:
      "Frontend developer specializing in Next.js, React, and Tailwind CSS.",
    images: ["https://moatasimashraf.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmy-profile.f09cd5a4.png&w=1080&q=75"], // same as OG image
  },
  metadataBase: new URL("https://moatasimashraf.com"),
  alternates: {
    canonical: "https://moatasimashraf.com",
  },
};
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
