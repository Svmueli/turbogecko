"use client";

const brands = [
  { name: "VANTAGE", style: "spaced", industry: "SaaS" },
  { name: "Lumina", style: "serif", industry: "FinTech" },
  { name: "ORBIT", style: "bold-italic", industry: "E-commerce" },
  { name: "kinetic", style: "mono", industry: "AI Tech" },
  { name: "NEXUS", style: "modern", industry: "Enterprise" },
];

export default function Trust() {
  const brandGreen = "#6DBE45";

  return (
    <section className="trust-section position-relative border-top border-bottom bg-white">
      {/* Visual Split Background - Left side Green, Right side White */}
      <div className="side-bg-overlay d-none d-lg-block">
        <div className="left-fill" style={{ backgroundColor: brandGreen }}></div>
      </div>

      <div className="container position-relative z-2">
        <div className="row g-0 align-items-center">
          
          {/* LEFT CONTENT: AUTHORITY & METRICS (Within Container Margins) */}
          <div className="col-lg-5 py-5 py-lg-6 pe-lg-5" style={{ backgroundColor: brandGreen }}>
            {/* Mobile-only background color handled via inline style and responsive classes */}
            <div className="text-white">
              <span className="fw-bold small text-uppercase mb-3 d-block" style={{ letterSpacing: '4px', opacity: 0.9 }}>
                Market Authority
              </span>
              <h3 className="display-6 fw-black mb-4 lh-sm">
                Powering Growth for <br className="d-none d-xl-block" />
                <span className="text-dark">50+ Global Leaders</span>
              </h3>
              
              <div className="performance-box mt-4 mt-lg-5">
                <p className="small fw-bold mb-1 opacity-75 text-uppercase">Average Performance</p>
                <div className="d-flex align-items-baseline gap-2">
                  <h4 className="fw-black mb-0 display-5" style={{ color: '#212529' }}>+142%</h4>
                </div>
                <p className="small fw-bold mt-1 mb-0 text-white">ORGANIC TRAFFIC LIFT</p>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT: LOGO GALLERY (Within Container Margins) */}
          <div className="col-lg-7 py-5 py-lg-6 ps-lg-5 bg-white">
            <div className="row row-cols-2 row-cols-md-3 g-4 g-lg-5 justify-content-center align-items-center">
              {brands.map((brand, i) => (
                <div key={i} className="col">
                  <div className="brand-logo-wrap text-center">
                    <span className={`brand-logo-design ${brand.style}`}>
                      {brand.name}
                    </span>
                    <span className="brand-subtext text-muted d-block mt-2">
                      {brand.industry}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        .fw-black { font-weight: 900; }
        .z-2 { z-index: 2; }
        
        .trust-section {
          overflow: hidden;
        }

        /* Responsive Split Background */
        .side-bg-overlay {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
        }
        
        /* This creates the infinite green look to the left of the container */
        .left-fill {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 50%; /* Fills half the screen with green */
        }

        /* Content Spacing */
        .py-lg-6 { padding-top: 6rem; padding-bottom: 6rem; }
        
        .performance-box {
          border-left: 4px solid #212529;
          padding-left: 1.5rem;
        }

        /* LOGO DESIGN STYLES */
        .brand-logo-design {
          font-size: 1.3rem;
          color: #212529;
          display: block;
        }

        .spaced { letter-spacing: 6px; font-weight: 900; text-transform: uppercase; font-size: 0.85rem; }
        .serif { font-family: 'Georgia', serif; font-style: italic; font-weight: 400; }
        .bold-italic { font-weight: 900; font-style: italic; letter-spacing: -1px; text-transform: uppercase; }
        .mono { font-family: 'Courier New', monospace; font-weight: 700; letter-spacing: -0.5px; }
        .modern { font-weight: 300; letter-spacing: 4px; text-transform: uppercase; font-size: 0.95rem; }

        .brand-subtext {
          font-size: 0.6rem;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        @media (max-width: 991px) {
          .col-lg-5 {
            padding-left: 1.5rem;
            padding-right: 1.5rem;
          }
          .performance-box {
            margin-bottom: 2rem;
          }
        }

        @media (min-width: 992px) {
            /* Ensures the green and white columns align with the center split */
            .col-lg-5 { padding-right: 3rem !important; }
            .col-lg-7 { padding-left: 3rem !important; }
        }
      `}</style>
    </section>
  );
}