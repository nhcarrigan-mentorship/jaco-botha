import Image from "next/image";

import Hero from "@/Components/206ce/Hero";

export default function Home() {
  return (
    <div className="bg-(--bg-primary)">
      <main className="flex flex-col items-center">
        <Hero
          title="206_CE"
          tagline="Simplify Everything"
          ctas={[{ label: "Contact", href: "/contact" }]}
          itemformat=""
          listformat=""
          imageSrc="/Logo.png"
          imageAlt="Company Logo"
          imageSize={200}
        />

      </main>
    </div>
  );
}
