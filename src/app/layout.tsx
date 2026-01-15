import "./globals.css";

import type { Metadata } from "next";
import { Audiowide } from "next/font/google";

const AudioW = Audiowide({
  weight: "400",
  subsets: ["latin"],
});

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

import Link from "next/link";
import Image from "next/image";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${AudioW.className} antialiased`}>
        <div className="flex flex-row items-center gap-4 bg-(--bg-primary)">
          <div className="flex flex-row items-center mx-4">
            <Image src={"/Logo.png"} alt="Logo" width={100} height={100}/>
            <h1 className="text-(--primary) text-3xl">206_CE</h1>
          </div>
          <nav className="border-l-4 border-(--secondary) pl-4 flex flex-row gap-3 text-4xl text-(--primary)">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
        {children}
        <footer>

        </footer>
      </body>
    </html>
  );
}
