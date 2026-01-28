"use client";

export default function WhyUs() {
  const brandGreen = "#6DBE45";

  const benefits = [
    {
      title: "SEO-First Engineering",
      text: "Development is never an afterthought. We build architectures designed to be crawled, indexed, and ranked from day one."
    },
    {
      title: "Performance Obsessed",
      text: "We optimize for Core Web Vitals and clean code, ensuring your site is lightning-fast for both users and search engines."
    },
    {
      title: "Hybrid Intelligence",
      text: "AI-assisted data processing backed by seasoned human expertise to find the competitive gaps others miss."
    },
    {
      title: "Sustainable Systems",
      text: "No shortcuts. We build growth systems that compound value over time, ensuring long-term organic dominance."
    }
  ];

  return (
    <section className="py-5 bg-white overflow-hidden">
      <div className="container py-lg-5">
        <div className="row align-items-center g-5">
          
          {/* Left Content */}
          <div className="col-lg-6">
            <span
              className="fw-bold text-uppercase small"
              style={{ color: brandGreen, letterSpacing: '2px' }} 
            >
              The Unlinked Advantage
            </span>

            <h2 className="display-5 fw-black mt-3 mb-4 lh-sm">
              Built for brands that want to <span style={{ color: brandGreen }}>win search</span>, not chase it.
            </h2>

            <div className="mt-5">
              {benefits.map((item, index) => (
                <div key={index} className="d-flex align-items-start mb-4 benefit-item">
                  <div className="icon-wrap me-3 mt-1">
                    <i className="bi bi-check-circle-fill" style={{ color: brandGreen }}></i>
                  </div>
                  <div>
                    <h5 className="fw-bold mb-1 text-dark" style={{ fontSize: '1.1rem' }}>{item.title}</h5>
                    <p className="text-muted small mb-0">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Highlight Card - Green Contrast Version */}
          <div className="col-lg-6">
            <div className="position-relative">
              {/* Decorative Accent (Swapped to subtle dark glow) */}
              <div className="accent-blob" style={{ backgroundColor: '#212529' }}></div>
              
              <div 
                className="partner-card p-4 p-md-5 text-white shadow-lg position-relative z-1"
                style={{ backgroundColor: brandGreen }}
              >
                <h4 className="fw-bold mb-4 text-white">
                  More than an agency. <br/>
                  <span className="text-dark">A growth partner.</span>
                </h4>
                <p className="text-white opacity-90 mb-4 lh-lg">
                  UnlinkedSEO doesn’t just launch websites or chase rankings. 
                  We design scalable growth systems that compound over time, 
                  combining technical SEO, AI intelligence, and high-performance engineering.
                </p>
                
                <hr className="bg-white opacity-25 my-4" />
                
                <div className="row g-3">
                  <div className="col-6">
                    <div className="h3 fw-bold mb-0 text-white">100%</div>
                    <div className="small text-uppercase opacity-75 fw-bold text-white">SEO Native</div>
                  </div>
                  <div className="col-6 border-start border-white border-opacity-25">
                    <div className="h3 fw-bold mb-0 text-white">90+</div>
                    <div className="small text-uppercase opacity-75 fw-bold text-white">Page Speed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .fw-black { font-weight: 900; }
        
        .icon-wrap i {
          font-size: 1.25rem;
        }

        .partner-card {
          border-radius: 0; 
          border-left: 5px solid #212529; /* Dark contrast border */
        }

        .accent-blob {
          position: absolute;
          width: 350px;
          height: 350px;
          top: -60px;
          right: -60px;
          opacity: 0.05;
          filter: blur(100px);
          border-radius: 50%;
        }

        .benefit-item {
          transition: transform 0.3s ease;
        }

        .benefit-item:hover {
          transform: translateX(10px);
        }

        @media (max-width: 991px) {
          .display-5 { font-size: 2.2rem; }
        }
      `}</style>
    </section>
  );
}