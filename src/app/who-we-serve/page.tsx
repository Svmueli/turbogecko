export default function WhoWeServe() {
  return (
    <>
      <section className="py-5 bg-light text-center">
        <div className="container">
          <h1 className="display-4 fw-bold">Who We Serve</h1>
          <p className="lead text-muted mt-3">
            We work with growth-focused businesses across industries.
          </p>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            {["Startups", "Small Businesses", "E-commerce", "Local Brands", "Enterprises"].map(
              (item) => (
                <div key={item} className="col-md-4">
                  <div className="border rounded p-4 text-center h-100">
                    <h5 className="fw-bold">{item}</h5>
                    <p className="text-muted mt-2">
                      Growth-focused SEO strategies tailored for {item.toLowerCase()}.
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
}
