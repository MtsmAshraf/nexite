import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Moatasim Ashraf",
  description: "The website of The Front-End Developer, Moatasim Ashraf",
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
