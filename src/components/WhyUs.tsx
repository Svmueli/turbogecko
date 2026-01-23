export default function WhyUs() {
  return (
    <section className="py-5 bg-white">
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Left Content */}
          <div className="col-lg-6">
            <span
              className="fw-semibold text-uppercase small"
              style={{ color: "#6DBE45" }} 
            >
              Why Us
            </span>

            <h2 className="fw-bold mt-2 mb-4">
              Built for brands that want to win search , not chase it.
            </h2>

            <ul className="list-unstyled text-muted">
              <li className="d-flex align-items-start mb-3">
                <span
                  className="me-3 fw-bold"
                  style={{ color: "#6DBE45" }}
                >
                  ✓
                </span>
                SEO-first development from day one , not an afterthought.
              </li>

              <li className="d-flex align-items-start mb-3">
                <span
                  className="me-3 fw-bold"
                  style={{ color: "#6DBE45" }}
                >
                  ✓
                </span>
                Obsessed with performance, Core Web Vitals, and clean code.
              </li>

              <li className="d-flex align-items-start mb-3">
                <span
                  className="me-3 fw-bold"
                  style={{ color: "#6DBE45" }}
                >
                  ✓
                </span>
                AI-assisted insights backed by human SEO expertise.
              </li>

              <li className="d-flex align-items-start mb-3">
                <span
                  className="me-3 fw-bold"
                  style={{ color: "#6DBE45" }}
                >
                  ✓
                </span>
                Clear strategy, transparent reporting, measurable outcomes.
              </li>

              <li className="d-flex align-items-start">
                <span
                  className="me-3 fw-bold"
                  style={{ color: "#6DBE45" }}
                >
                  ✓
                </span>
                Systems built for sustainable, long-term growth — not hacks.
              </li>
            </ul>
          </div>

          {/* Right Highlight Card */}
          <div className="col-lg-6">
            <div className="p-5 rounded-4 bg-light border shadow-sm">
              <h5 className="fw-bold mb-3">
                More than an agency. A growth partner.
              </h5>
              <p className="text-muted mb-0">
                UnlinkedSEO doesn’t just launch websites or chase rankings.
                We design scalable growth systems that compound over time ,
                combining technical SEO, AI intelligence, and high-performance
                engineering.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
