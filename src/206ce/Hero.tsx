/* 1.0.3

  CSS:
  --text-primary
  --text-tertiary
  --text-secondary

*/

"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
export interface Cta {
  label: string;
  href: string;
}

interface HeroProps {
  title?: string;
  tagline?: string;
  ctas?: Cta[];
  itemformat?: string;
  listformat?: string;
  imageSrc?: string;
  imageAlt?: string;
  imageSize?: number;
  animation?: React.ReactNode; // For custom GSAP, Lottie, or SVG animation
}

const Hero: React.FC<HeroProps> = ({
  title = "Compute Everything",
  tagline = "From Origin to Convergence. One Entity. Many Minds.",
  ctas,
  imageSrc,
  imageAlt = "Alternate text",
  imageSize,
  animation,
  itemformat,
}) => {
  return (
    <section className="p-5 bg-(--bg-secondary) mx-10 border-(--border) border-2">
      <div className="flex flex-col items-center">
        {/* Optional image display */}
        <div className="">
          {imageSrc && (
            <div className="p-10">
              <Image
                src={imageSrc}
                alt={imageAlt ?? "Alternate Text"}
                className=""
                width={imageSize || 20}
                height={imageSize || 20}
                priority
              />
            </div>
          )}
          <h1 className="text-5xl md:text-6xl font-extrabold bg-linear-to-r pb-2 from-(--text-primary) via-(--text-tertiary) to-(--text-secondary) bg-clip-text text-transparent">
            {title}
          </h1>
        </div>
        {tagline && (
          <h4 className="mt-4 text-xl text-(--text-secondary) ">
            {tagline}
          </h4>
        )}
        <ul className="mt-6 flex justify-center  flex-wrap">
          {(ctas ?? []).map((cta, idx) => (
            <Link
              key={idx}
              href={cta.href}
              className="transition duration-300 transform hover:scale-110"
            >
              <li className={`px-6 py-2  text-(--text-primary) ${itemformat}`}>
                {cta.label}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      {/* Optional animation node (SVG, Lottie, etc.) */}
      {animation && (
        <div className="absolute inset-0 -z-10 pointer-events-none">
          {animation}
        </div>
      )}
    </section>
  );
};

export default Hero;
