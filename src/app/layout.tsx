import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Moatasim Ashraf",
  description: "The website of The Front-End Developer, Moatasim Ashraf. building websites for Companies, People portfolios, SaaS websites, E-commerce, landing pages and more. موقع مطور الواجهة الأمامية معتصم أشرف، متخصص في إنشاء مواقع الويب للشركات، ومواقع البورتفوليو الشخصية، ومواقع البرمجيات كخدمة (SaaS)، ومواقع التجارة الإلكترونية،صفحات الهبوط وغيرها.",
  abstract: "The website of The Front-End Developer, Moatasim Ashraf. building websites for Companies, People portfolios, SaaS websites, E-commerce, landing pages and more. موقع مطور الواجهة الأمامية معتصم أشرف، متخصص في إنشاء مواقع الويب للشركات، ومواقع البورتفوليو الشخصية، ومواقع البرمجيات كخدمة (SaaS)، ومواقع التجارة الإلكترونية،صفحات الهبوط وغيرها.",
  category: "Web Development, Front-End Development, Front-End Web Development, Programming. تطوير الويب، تطوير الواجهة الأمامية، تطوير واجهة المستخدم للويب، البرمجة."
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
