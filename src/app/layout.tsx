/* CSS */

import "./globals.css";
/* auth0 */

import { Auth0Provider } from "@auth0/nextjs-auth0/client";
import LoginOut from "@/206ce/LoginOut";

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

import Logo from "@/206ce/Logo";
import Navigation from "@/206ce/Navigation";

import BackButton from "@/206ce/BackNav";
import Social from "@/206ce/Social";
import ContactInfo from "@/206ce/ContactInfo";
import Copyright from "@/206ce/CopyRight";
import LoginButton from "@/components/LoginButton";
import Profile from "@/components/Profile";
import LogoutButton from "@/components/LogoutButton";
import Image from "next/image";

import logo from "../../public/Logos.webp";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-(--bg-primary) ${AudioW.className} antialiased`}>
        <Auth0Provider>
          <div className="flex items-center space-x-2 gap-4 bg-(--bg-secondary)">
            <div
              className="flex gap-1 p-3 items-center "
              id="Logo"
            >
              <Image
                src={logo}
                width={50}
                height={20}
                alt="Logo"
              />
              <h3 className="text-(--primary) text-2xl">CE_206</h3>
            </div>

            <div className="ml-6">
              <Navigation
                itemClassName="btn"
                items={[
                  { label: "HOME", href: "/" },
                  { label: "SERVICES", href: "/services" },
                  { label: "ABOUT", href: "/about" },
                  { label: "CONTACT", href: "/contact" },
                  { label: "BLOG", href: "/blog" },
                ]}
              />
            </div>
            <div className="mr-1">
              <LoginOut itemClassName="text-nowrap btn cursor-pointer" />
            </div>
          </div>
          {children}
          <footer className="bg-(--bg-primary) pt-4">
            <BackButton />
            <Social
              linkStyle="btn"
              urls={[
                "https://www.linkedin.com/in/jaco-botha-886b7b95/",
                "https://www.facebook.com/jaco.botha.12139",
                "https://github.com/206CE",
                "https://discord.com/users/1337346807100866580",
                "https://x.com/206Roaches",
              ]}
            />
            <ContactInfo
              cellphone="+27 079 497 2646"
              email="jacobotha206@gmail.com"
            />
            <Copyright />
          </footer>
        </Auth0Provider>
      </body>
    </html>
  );
}
