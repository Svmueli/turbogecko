export default function Hero() {
  return (
    <section className="py-5 py-lg-6 bg-light overflow-hidden">
      <div className="container">
        <div className="row align-items-center g-5">

          {/* Left Content */}
          <div className="col-lg-6">

            <span className="badge bg-success-subtle text-success mb-3 px-3 py-2 fw-medium">
              SEO • AI SEO • Web Development
            </span>

            <h1 className="display-5 fw-bold mt-3 col-lg-11">
              The growth agency brands trust to win search.
            </h1>

            <p className="lead text-muted mt-3 col-lg-10">
              We turn organic visibility into measurable revenue through
              AI-powered SEO and high-performance websites built to scale.
            </p>

            <div className="d-flex flex-wrap gap-3 mt-4">
              <a href="#contact" className="btn btn-success btn-lg px-4">
                Stand Out in Search
              </a>
              <a href="#services" className="btn btn-outline-success btn-lg px-4">
                Our Services
              </a>
            </div>

            <p className="text-muted small mt-4">
              Trusted by startups, SMEs & growth-driven teams
            </p>
          </div>

          {/* Right Hero Image */}
          <div className="col-lg-6 position-relative">

            <div className="rounded-4 overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1600&auto=format&fit=crop"
                alt="SEO and web performance strategy team collaborating"
                className="img-fluid w-100"
                loading="eager"
              />
            </div>

            {/* Floating Proof Card */}
            <div
              className="position-absolute bottom-0 start-50 translate-middle-x bg-white shadow-sm rounded-4 p-4"
              style={{ width: "88%", maxWidth: "500px" }}
            >
              <div className="row text-center">
                <div className="col-4">
                  <h4 className="fw-bold text-success mb-0">3×</h4>
                  <p className="small text-muted mb-0">Traffic Growth</p>
                </div>
                <div className="col-4">
                  <h4 className="fw-bold text-success mb-0">120%</h4>
                  <p className="small text-muted mb-0">Lead Increase</p>
                </div>
                <div className="col-4">
                  <h4 className="fw-bold text-success mb-0">&lt;1s</h4>
                  <p className="small text-muted mb-0">Page Speed</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
