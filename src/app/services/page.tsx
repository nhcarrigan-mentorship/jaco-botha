import ServiceList from "@/206ce/ServiceList";

export default function Services() {
  return (
    <section>
      <div className="">
        <ServiceList
          heading="Our Service Offerings"
          subheading="Services Simplified"
          services={[
            {
              title: "Website Development",
              description:
                "From basic to advanced websites custom built with added Content Management Systems that Users can update themselves.",
              imgUrl: "/Web_Development.png",
              imgSize: 200,
              link: "/services/webdev",
            },
            {
              title: "Service Management",
              description: "We manage your services to retain clients.",
              imgUrl: "/service_management.png",
              imgSize: 200,
              link: "/services/servicemanagement",
            },
            {
              title: "Training & Tutoring",
              description: "We teach and train anyone who needs to excel",
              imgUrl: "/Training_Learning.png",
              imgSize: 200,
              link: "/services/training",
            },
          ]}
          layout="grid"
          columns={3}
        />
      </div>
    </section>
  );
}
