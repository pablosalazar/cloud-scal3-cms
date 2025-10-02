import Image from "next/image";

export const Services = () => {
  const services = [
    {
      icon: "/shape-circle.svg",
      bgColor: "bg-[#EDDDB6]",
      title: "Product Strategy",
      description:
        "We work backwards from your ideal customer outcome to shape a winning product strategy.",
      features: [
        "Business model design: SaaS vs. customer-deployed",
        "AWS-aligned roadmap development",
        "Strategic fit with AWS programs and ecosystem",
        "Foundation Technical Review (FTR) preparation",
      ],
    },
    {
      icon: "/shape-circle.svg",
      bgColor: "bg-[#D7F1D3]",
      title: "Launch With Technical Precision",
      description:
        "Whether you're launching a SaaS product, AMI, or API, streamline your onboarding journey into the AWS Marketplace.",
      features: [
        "Marketplace onboarding & deployment support",
        "Product vetting & listing optimization",
        "Marketplace CRM Integration and Go-live readiness review",
        "Packaging strategy: AMI, AMI with CFT, container, or API",
      ],
    },
    {
      icon: "/shape-circle.svg",
      bgColor: "bg-[#BAE7EF]",
      title: "Market & Ecosystem Development",
      description:
        "We help you drive adoption and amplify your reach across the AWS ecosystem.",
      features: [
        "Alignment with AWS Sales, Product, and Partner teams",
        "Strategic MDF (Marketing Development Funds) alignment",
        "Marketplace CRM integration",
        "GTM execution in tandem with AWS co-sell motion",
      ],
    },
  ];

  return (
    <section className="bg-app py-20 px-5 ">
      <div className="container mx-auto">
        {/* Title */}
        <h2 className="text-4xl font-bold text-white/80 text-center tracking-[-0.741px] mb-14">
          End-to-End Guidance for AWS Marketplace Success
        </h2>

        {/* Services Grid */}
        <div className="flex gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex-1 bg-white rounded-4xl p-8 text-[#2D2F31]"
            >
              {/* Icon */}
              <div
                className={`w-[40px] h-[40px] ${service.bgColor} rounded-4xl flex items-center justify-center mb-3`}
              >
                <Image
                  src={service.icon}
                  alt={`${service.title} Icon`}
                  className="w-[20px] h-[20px]"
                  width={20}
                  height={20}
                />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-2">{service.title}</h3>

              {/* Description */}
              <p className="text-md font-normal leading-[1.6] mb-6">
                {service.description}
              </p>

              {/* Features List */}
              <ul className="space-y-5">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center gap-3.5 font-light leading-[1.7]"
                  >
                    <div className="w-7 h-7 flex-shrink-0 mt-0.5">
                      <Image
                        src="/checkmark-with-circle.png"
                        alt="Check"
                        className="w-full h-full object-contain"
                        width={20}
                        height={20}
                      />
                    </div>
                    <span className="text-normal">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
