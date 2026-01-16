/* CSS */

import "./globals.css";

/* SEO */
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "206_CE Services",
  description: "Everything Simplified",
  openGraph: {
    title: "206_CE Services",
    description: "Everything Simplified",
    url: "https://206CE.github.io/",
    siteName: "206_CE Services",
    images: [
      {
        url: "https://206CE.github.io/Logo/logo_res_OG.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "206_CE Services",
    description: "Everything Simplified",
    images: "https://206CE.github.io/Logo/logo_res_OG.png",
  },
};

/* FONT */
import { Audiowide } from "next/font/google";

const AudioW = Audiowide({
  weight: "400",
  subsets: ["latin"],
});

import Logo from "@/Components/206ce/Logo";
import Navigation from "@/Components/206ce/Navigation";

import BackButton from "@/Components/206ce/BackNav";
import Social from "@/Components/206ce/Social";
import ContactInfo from "@/Components/206ce/ContactInfo";
import Copyright from "@/Components/206ce/copyright";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${AudioW.className} antialiased`}>
        <div className="flex flex-row items-center gap-4 bg-(--bg-primary)">
          <Logo
            text="206_CE"
            imagePath="/Logo.png"
            size={100}
          />
          <Navigation
            itemClassName="btn"
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: "About", href: "/about" },
              { label: "Contact", href: "/contact" },
            ]}
          />
        </div>
        {children}
        <footer className="bg-(--bg-primary)">
          <BackButton />
          <Social linkStyle="btn"
            urls={[
              "https://www.linkedin.com/in/jaco-botha-886b7b95/",
              "https://www.facebook.com/jaco.botha.12139",
              "https://github.com/206CE",
              "https://discord.com/users/1337346807100866580",
              "https://x.com/206Roaches",
            ]}
          />
          <ContactInfo cellphone="+27 079 497 2646" email="jacobotha206@gmail.com"/>
          <Copyright />
        </footer>
      </body>
    </html>
  );
}
