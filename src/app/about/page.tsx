import About from "@/206ce/About";
import Team from "@/206ce/Team";

export default function AboutP() {
  return (
    <section>
      <section>
        <Team
          heading="The CE_206 Team"
          subheading="We are here for everyone"
          listStyle="text-(--primary) text-2xl flex flex-col items-center justify-center"
          cardStyle="group flex flex-col items-center text-center p-6 bg-(--bg-secondary) rounded-brand shadow-2xl border-(--border) border-4"
          members={[
            {
              id: 1,
              name: "Jaco Botha",
              role: "CEO",
              bio: "From theory to practice, to leading to learning.",
              imgUrl: "/My_Pic.jpg",
              size: 50,
            },
          ]}
        />
      </section>
      <section>
        <About
          companyName="CE_206"
          tagline="One number, many forms."
          description="At CE_206, we believe that the funture economy is service centered. Products have taken the back seat in the economy. The line between consumer and producer is increasingly hard to destinguish. Using technology we can create a network of services that can serve everyone and create a space in the economy for everyone to deliver services. You dont need to be a big coorporation to organize."
          mission="Deliver services so that others can deliver their services and expand the economy to a sustainable, interdependent network of service providers and consumers that all play a part in contributing to the betterment of mankind as a whole."
          vision="To architect this framework we must aproach the economy from a service management perspective. This will increase the amount of services available and provide services to those that need it."
          values={[
            "Everyone has something to offer.",
            "Everyone needs something sometimes.",
            "Improvement of services improve quality of life.",
          ]}
        />
      </section>
    </section>
  );
}
