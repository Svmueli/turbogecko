export default function Process() {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5">
          <span
            className="fw-semibold text-uppercase small"
            style={{ color: "#6DBE45" }}
          >
            Our Process
          </span>
          <h2 className="fw-bold mt-2">
            A proven system for predictable growth
          </h2>
          <p className="text-muted mt-2 col-lg-7 mx-auto">
            Every engagement follows a structured, data-driven framework
            designed to turn organic visibility into revenue.
          </p>
        </div>

        {/* Steps */}
        <div className="row g-4">
          {/* Step 1 */}
          <div className="col-md-6 col-lg-3">
            <div className="h-100 p-4 bg-white border rounded-4 shadow-sm">
              <span
                className="fw-bold small"
                style={{ color: "#6DBE45" }}
              >
                STEP 01
              </span>
              <h6 className="fw-bold mt-2">Audit & Intelligence</h6>
              <p className="text-muted mb-0">
                Deep technical SEO audits, crawl analysis, Core Web Vitals,
                and AI-assisted insights to uncover growth blockers.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="col-md-6 col-lg-3">
            <div className="h-100 p-4 bg-white border rounded-4 shadow-sm">
              <span
                className="fw-bold small"
                style={{ color: "#6DBE45" }}
              >
                STEP 02
              </span>
              <h6 className="fw-bold mt-2">Strategy & Roadmap</h6>
              <p className="text-muted mb-0">
                A clear, prioritized SEO and growth roadmap aligned to
                business goals , not vanity metrics.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="col-md-6 col-lg-3">
            <div className="h-100 p-4 bg-white border rounded-4 shadow-sm">
              <span
                className="fw-bold small"
                style={{ color: "#6DBE45" }}
              >
                STEP 03
              </span>
              <h6 className="fw-bold mt-2">Execution & Optimization</h6>
              <p className="text-muted mb-0">
                Technical fixes, content execution, AI SEO automation,
                and high-performance development rolled out fast.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="col-md-6 col-lg-3">
            <div className="h-100 p-4 bg-white border rounded-4 shadow-sm">
              <span
                className="fw-bold small"
                style={{ color: "#6DBE45" }}
              >
                STEP 04
              </span>
              <h6 className="fw-bold mt-2">Measure, Scale & Win</h6>
              <p className="text-muted mb-0">
                Continuous measurement, testing, and refinement to
                compound growth and dominate search long-term.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
