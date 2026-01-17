export default function WhoWeServePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-light py-5">
        <div className="container text-center">
          <h1 className="fw-bold display-5">
            Industries We Help Grow
          </h1>
          <p className="lead text-muted mt-3">
            TurboGecko partners with ambitious brands that want measurable growth.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            {[
              {
                title: "SaaS & Tech",
                desc: "We help SaaS companies increase demos, trials, and MRR through scalable SEO."
              },
              {
                title: "Ecommerce",
                desc: "From product pages to category domination, we turn traffic into revenue."
              },
              {
                title: "Professional Services",
                desc: "Law firms, agencies, and consultants who need high-intent leads."
              },
              {
                title: "Startups",
                desc: "Early-stage companies looking to establish authority and organic traction."
              },
              {
                title: "Local Businesses",
                desc: "Local SEO strategies that drive calls, visits, and bookings."
              },
              {
                title: "Enterprise Brands",
                desc: "Large-scale SEO programs with technical depth and performance reporting."
              }
            ].map((item, i) => (
              <div key={i} className="col-md-4">
                <div className="card h-100 shadow-sm border-0">
                  <div className="card-body">
                    <h5 className="fw-bold text-success">
                      {item.title}
                    </h5>
                    <p className="text-muted">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="fw-bold text-center mb-4">
            Why These Brands Choose TurboGecko
          </h2>

          <div className="row text-center">
            <div className="col-md-3">
              <h5 className="fw-bold">Revenue First</h5>
              <p className="text-muted">
                We don’t chase traffic — we chase conversions.
              </p>
            </div>
            <div className="col-md-3">
              <h5 className="fw-bold">Data-Driven</h5>
              <p className="text-muted">
                Every decision is backed by analytics and testing.
              </p>
            </div>
            <div className="col-md-3">
              <h5 className="fw-bold">Search Experts</h5>
              <p className="text-muted">
                SEO is our core, not an add-on service.
              </p>
            </div>
            <div className="col-md-3">
              <h5 className="fw-bold">Scalable Systems</h5>
              <p className="text-muted">
                Strategies that grow with your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-5 text-center bg-success text-white">
        <div className="container">
          <h2 className="fw-bold">
            Let’s See If We’re a Fit
          </h2>
          <p className="mt-3">
            Get a free strategy session tailored to your industry.
          </p>
          <button className="btn btn-light btn-lg mt-3 fw-bold text-success">
            GET A QUOTE
          </button>
        </div>
      </section>
    </>
  );
}
