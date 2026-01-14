export default function Services() {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">What TurboGecko Does Best</h2>
          <p className="text-muted mt-2">
            Growth-focused SEO and high-performance web development.
          </p>
        </div>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="p-4 h-100 border rounded">
              <h5 className="fw-bold">Technical SEO</h5>
              <p className="text-muted">
                Site audits, Core Web Vitals, indexing, and crawl optimization.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="p-4 h-100 border rounded">
              <h5 className="fw-bold">SEO Strategy</h5>
              <p className="text-muted">
                Keyword research, content planning, and ranking execution.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="p-4 h-100 border rounded">
              <h5 className="fw-bold">Web Development</h5>
              <p className="text-muted">
                Fast, SEO-friendly Next.js & WordPress websites.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
