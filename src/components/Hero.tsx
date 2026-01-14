export default function Hero() {
  return (
    <section className="py-5 py-lg-6 bg-light">
      <div className="container">
        <div className="row align-items-center g-5">
          
          {/* Left Content */}
          <div className="col-lg-6">
            <span className="badge bg-success mb-3 px-3 py-2">
              SEO & Web Development Agency
            </span>

            <h1 className="display-5 fw-bold mt-3">
              SEO & Websites That <span className="text-success">Drive Real Growth</span>
            </h1>

            <p className="lead text-muted mt-3">
              TurboGecko helps ambitious brands increase visibility, traffic, and
              revenue through data-driven SEO and high-performance websites.
            </p>

            <div className="d-flex flex-wrap gap-3 mt-4">
              <a href="#contact" className="btn btn-success btn-lg px-4">
                Get a Free SEO Audit
              </a>
              <a href="#services" className="btn btn-outline-success btn-lg px-4">
                View Our Services
              </a>
            </div>

            {/* Trust line */}
            <p className="text-muted small mt-4">
              Trusted by startups, SMEs & growing brands
            </p>
          </div>

          {/* Right Visual / Stats */}
          <div className="col-lg-6 text-center">
            <div className="bg-white shadow-sm rounded-4 p-4">
              <div className="row text-center">
                <div className="col-4">
                  <h3 className="fw-bold text-success">3×</h3>
                  <p className="small text-muted">Traffic Growth</p>
                </div>
                <div className="col-4">
                  <h3 className="fw-bold text-success">120%</h3>
                  <p className="small text-muted">Lead Increase</p>
                </div>
                <div className="col-4">
                  <h3 className="fw-bold text-success">Fast</h3>
                  <p className="small text-muted">Load Speeds</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
