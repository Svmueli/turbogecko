export default function CTA() {
  return (
    <section
      className="py-5 py-lg-6 text-white position-relative overflow-hidden"
      style={{ backgroundColor: "#6DBE45" }}
    >
      <div className="container position-relative">
        <div className="row justify-content-center text-center">
          <div className="col-lg-8">

            <span className="fw-semibold text-uppercase small opacity-75">
              Free Growth Assessment
            </span>

            <h2 className="fw-bold display-6 mt-3">
              Ready to own your search market?
            </h2>

            <p className="lead mt-3 opacity-90">
              Get a no-obligation SEO & website audit that shows exactly
              what’s holding your growth back and how to fix it.
            </p>

            <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">
              <a
                href="#contact"
                className="btn btn-light btn-lg px-5 fw-semibold"
              >
                Get My Free Audit
              </a>

              <a
                href="#services"
                className="btn btn-outline-light btn-lg px-5 fw-semibold"
              >
                See How We Work
              </a>
            </div>

            <p className="small mt-4 opacity-75">
              No spam. No sales pressure. Just clear, actionable insights.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}
