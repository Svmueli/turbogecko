export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="py-5 bg-light">
        <div className="container text-center">
          <h1 className="display-4 fw-bold">
            We Help Businesses Win on Google
          </h1>
          <p className="lead text-muted mt-3">
            TurboGecko is a performance-driven SEO and web growth agency built for modern brands.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2 className="fw-bold">Our Mission</h2>
              <p className="text-muted mt-3">
                We exist to help companies grow predictably through search, user experience,
                and conversion-focused websites — not vanity metrics.
              </p>
            </div>
            <div className="col-md-6">
              <div className="bg-success bg-opacity-10 p-4 rounded">
                <h5 className="fw-bold text-success">What makes us different</h5>
                <ul className="mt-3 text-muted">
                  <li>ROI-focused SEO</li>
                  <li>Conversion-optimized websites</li>
                  <li>Technical expertise</li>
                  <li>Transparent reporting</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-5 bg-success text-white text-center">
        <div className="container">
          <h2 className="fw-bold">Ready to grow?</h2>
          <p className="mt-3">
            Let’s turn your website into a revenue engine.
          </p>
          <a href="#contact" className="btn btn-light btn-lg mt-3">
            Get a Free SEO Audit
          </a>
        </div>
      </section>
    </>
  );
}
