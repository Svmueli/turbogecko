export default function Services() {
  return (
    <>
      <section className="py-5 bg-light text-center">
        <div className="container">
          <h1 className="display-4 fw-bold">Our Growth Services</h1>
          <p className="lead text-muted mt-3">
            Everything you need to outrank competitors and convert traffic into revenue.
          </p>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            {[
              ["SEO Services", "Rank higher and drive high-intent traffic."],
              ["Web Design & Development", "Beautiful, fast, conversion-optimized websites."],
              ["Technical SEO", "Fix site issues that block your growth."],
              ["Conversion Optimization", "Turn visitors into customers."],
            ].map(([title, desc]) => (
              <div key={title} className="col-md-6">
                <div className="border p-4 rounded h-100">
                  <h4 className="fw-bold text-success">{title}</h4>
                  <p className="text-muted mt-2">{desc}</p>
                  <a href="#" className="text-success fw-semibold">
                    Learn More →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
