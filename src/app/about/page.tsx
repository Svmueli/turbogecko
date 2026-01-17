export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-light py-5">
        <div className="container text-center">
          <h1 className="fw-bold display-5">
            We Build Search Engines Into Revenue Machines
          </h1>
          <p className="lead text-muted mt-3">
            TurboGecko is a performance-first SEO and web growth agency focused on
            measurable business impact.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2 className="fw-bold mb-3">Our Story</h2>
              <p className="text-muted">
                TurboGecko was founded with one belief: SEO should drive revenue,
                not vanity metrics. Too many businesses invest in rankings that
                never convert.
              </p>
              <p className="text-muted">
                We exist to bridge that gap — combining technical SEO, conversion-focused
                design, and data-backed strategy to help brands grow predictably.
              </p>
            </div>

            <div className="col-md-6">
              <div className="bg-success bg-opacity-10 p-4 rounded">
                <h5 className="fw-bold text-success">Our Mission</h5>
                <p className="mb-0 text-muted">
                  To help ambitious brands turn organic traffic into consistent,
                  scalable revenue.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="fw-bold text-center mb-5">What We Stand For</h2>

          <div className="row g-4">
            {[
              {
                title: "Revenue Over Rankings",
                desc: "Traffic only matters if it converts into customers."
              },
              {
                title: "Transparency",
                desc: "Clear reporting, honest expectations, real results."
              },
              {
                title: "Technical Excellence",
                desc: "SEO is engineering — we treat it that way."
              },
              {
                title: "Long-Term Growth",
                desc: "We build systems that compound over time."
              }
            ].map((value, i) => (
              <div key={i} className="col-md-3">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body text-center">
                    <h5 className="fw-bold text-success">
                      {value.title}
                    </h5>
                    <p className="text-muted">
                      {value.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-5">
        <div className="container">
          <h2 className="fw-bold text-center mb-4">
            How We Work With Clients
          </h2>

          <div className="row text-center">
            <div className="col-md-3">
              <h5 className="fw-bold">Audit & Research</h5>
              <p className="text-muted">
                Deep technical and competitive analysis.
              </p>
            </div>
            <div className="col-md-3">
              <h5 className="fw-bold">Strategy</h5>
              <p className="text-muted">
                Revenue-driven SEO roadmap.
              </p>
            </div>
            <div className="col-md-3">
              <h5 className="fw-bold">Execution</h5>
              <p className="text-muted">
                Technical fixes, content, and optimization.
              </p>
            </div>
            <div className="col-md-3">
              <h5 className="fw-bold">Scale</h5>
              <p className="text-muted">
                Continuous growth and iteration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-5 bg-success text-white text-center">
        <div className="container">
          <h2 className="fw-bold">
            Ready to Grow With Purpose?
          </h2>
          <p className="mt-3">
            Let’s talk about how SEO can drive real business results.
          </p>
          <button className="btn btn-light btn-lg fw-bold text-success mt-3">
            GET A QUOTE
          </button>
        </div>
      </section>
    </>
  );
}
