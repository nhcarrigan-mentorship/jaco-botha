import Hero from "@/206ce/Hero";
import ServiceList from "@/206ce/ServiceList";

export default function WebDev() {
  return (
    <section>
      <ServiceList
        heading="Inside our websites are...a"
        subheading="Optimized for ..."
        itemStyle="card"
        services={[
          {
            title: "Search Engines",
            description:
              "Metadata API's, Dynamic changing to your needs, JSON-LD for rich search results in google, Deep Linking, Semantic HTML, private AuthO-routes ",
            link: "/",
          },
          {
            title: "Performance",
            description:
              "Partial Prerendering, Faster builds, React Compiler, Tailwind v4, Turbopack",
            link: "/",
          },
          {
            title: "Search Engine Optimization",
            description:
              "Metadata API's, Dynamic changing to your needs, JSON-LD for rich search results in google, Deep Linking, Semantic HTML, private AuthO-routes ",
            link: "/",
          },
        ]}
        layout="grid"
        columns={1}
      />
    </section>
  );
}
