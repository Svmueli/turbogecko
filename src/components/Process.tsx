"use client";

const steps = [
  {
    number: "01",
    title: "Audit & Intel",
    desc: "Deep technical SEO audits and AI-assisted insights to uncover growth blockers others miss.",
    icon: "bi-search"
  },
  {
    number: "02",
    title: "The Roadmap",
    desc: "A prioritized execution strategy aligned with business revenue, not just vanity rankings.",
    icon: "bi-map"
  },
  {
    number: "03",
    title: "Speed Execution",
    desc: "Fast-tracked technical fixes and AI SEO automation rolled out with engineering precision.",
    icon: "bi-lightning-charge"
  },
  {
    number: "04",
    title: "Scale & Dominate",
    desc: "Continuous refinement to compound organic growth and maintain long-term search authority.",
    icon: "bi-trophy"
  }
];

export default function Process() {
  const brandGreen = "#6DBE45";

  return (
    <section className="py-5 bg-light overflow-hidden">
      <div className="container py-lg-5 position-relative">
        
        {/* Header */}
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-8">
            <span className="fw-bold text-uppercase small" style={{ color: brandGreen, letterSpacing: '2px' }}>
              The Framework
            </span>
            <h2 className="display-6 fw-black mt-3 mb-4">
              A Proven System for Predictable Growth
            </h2>
          </div>
        </div>

        {/* Process Flow Line (Desktop Only) */}
        <div className="process-line d-none d-lg-block" style={{ backgroundColor: brandGreen, opacity: 0.2 }}></div>

        {/* Steps Grid */}
        <div className="row g-4 position-relative z-1">
          {steps.map((step, index) => (
            <div key={index} className="col-md-6 col-lg-3">
              <div className="process-card text-center text-lg-start h-100">
                
                {/* Number Circle */}
                <div className="step-number-wrap mb-4">
                  <div className="step-number" style={{ backgroundColor: brandGreen }}>
                    {step.number}
                  </div>
                </div>

                <div className="p-4 bg-white border-0 shadow-sm h-100 card-body-hover">
                  <div className="d-flex align-items-center gap-2 mb-3">
                    <i className={`bi ${step.icon}`} style={{ color: brandGreen, fontSize: '1.2rem' }}></i>
                    <h5 className="fw-bold mb-0">{step.title}</h5>
                  </div>
                  <p className="text-muted small mb-0 lh-lg">
                    {step.desc}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .fw-black { font-weight: 900; }

        .process-line {
          position: absolute;
          top: 62%;
          left: 10%;
          right: 10%;
          height: 2px;
          z-index: 0;
        }

        .step-number-wrap {
          display: flex;
          justify-content: center;
        }

        @media (min-width: 992px) {
          .step-number-wrap { justify-content: flex-start; padding-left: 2rem; }
        }

        .step-number {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          color: white;
          display: grid;
          place-items: center;
          font-weight: 800;
          font-size: 0.9rem;
          border: 4px solid #f8f9fa;
          position: relative;
          z-index: 2;
        }

        .card-body-hover {
          transition: all 0.3s ease;
          border-top: 3px solid transparent !important;
        }

        .process-card:hover .card-body-hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.08) !important;
          border-top: 3px solid ${brandGreen} !important;
        }

        @media (max-width: 991px) {
          .process-line { display: none; }
        }
      `}</style>
    </section>
  );
}