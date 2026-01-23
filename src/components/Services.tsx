export default function Services() {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-5">
          <span
            className="fw-semibold text-uppercase small"
            style={{ color: "#6DBE45" }} // Screaming Frog green
          >
            Services
          </span>
          <h2 className="fw-bold mt-2">What TurboGecko Does Best</h2>
          <p className="text-muted mt-2 col-lg-7 mx-auto">
            Data-driven SEO and high-performance web development, enhanced by AI
            where it matters most.
          </p>
        </div>

        {/* Services Grid */}
        <div className="row g-4">
          {/* Technical SEO */}
          <div className="col-md-6 col-lg-3">
            <div className="p-4 h-100 border rounded-4 bg-white shadow-sm">
              <h5 className="fw-bold mb-2">Technical SEO</h5>
              <p className="text-muted mb-0">
                Advanced site audits, Core Web Vitals, crawl optimization, and
                indexing fixes that search engines love.
              </p>
            </div>
          </div>

          {/* AI SEO */}
          <div className="col-md-6 col-lg-3">
            <div className="p-4 h-100 border rounded-4 bg-white shadow-sm">
              <h5 className="fw-bold mb-2">
                AI SEO <span style={{ color: "#6DBE45" }}>+</span>
              </h5>
              <p className="text-muted mb-0">
                AI-powered audits, keyword clustering, SERP intelligence, and
                predictive insights to rank faster with less guesswork.
              </p>
            </div>
          </div>

          {/* SEO Strategy */}
          <div className="col-md-6 col-lg-3">
            <div className="p-4 h-100 border rounded-4 bg-white shadow-sm">
              <h5 className="fw-bold mb-2">SEO Strategy</h5>
              <p className="text-muted mb-0">
                Search intent mapping, content planning, and execution strategies
                built to drive measurable revenue.
              </p>
            </div>
          </div>

          {/* Web Development */}
          <div className="col-md-6 col-lg-3">
            <div className="p-4 h-100 border rounded-4 bg-white shadow-sm">
              <h5 className="fw-bold mb-2">Web Development</h5>
              <p className="text-muted mb-0">
                Lightning-fast, SEO-first websites built with Next.js and
                WordPress for performance at scale.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
