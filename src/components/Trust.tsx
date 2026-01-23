import Image from "next/image";

const logos = [
  { src: "/logos/startup.svg", alt: "Startup client" },
  { src: "/logos/saas.svg", alt: "SaaS company" },
  { src: "/logos/ecommerce.svg", alt: "E-commerce brand" },
  { src: "/logos/agency.svg", alt: "Digital agency" },
  { src: "/logos/enterprise.svg", alt: "Enterprise client" },
];

export default function Trust() {
  return (
    <section className="py-5 border-top border-bottom bg-white">
      <div className="container text-center">

        {/* Headline */}
        <p className="text-uppercase text-muted small fw-semibold mb-3">
          Trusted by Growing Brands
        </p>

        {/* Logos */}
        <div className="d-flex flex-wrap justify-content-center align-items-center gap-4 gap-md-5">
          {logos.map((logo, i) => (
            <div
              key={i}
              className="opacity-75 hover-opacity transition"
              style={{ filter: "grayscale(100%)" }}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={40}
                className="img-fluid"
              />
            </div>
          ))}
        </div>

        {/* Micro trust line */}
        <p className="text-muted small mt-4 mb-0">
          Startups • SMEs • SaaS • E-commerce • Agencies
        </p>

      </div>

      {/* Hover styling */}
      <style jsx>{`
        .hover-opacity:hover {
          filter: grayscale(0%);
          opacity: 1 !important;
        }
        .transition {
          transition: all 0.3s ease;
        }
      `}</style>
    </section>
  );
}
