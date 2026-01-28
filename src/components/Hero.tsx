export default function Hero() {
  const brandGreen = "#6DBE45";

  return (
    <section className="py-5 py-lg-6 bg-light overflow-hidden">
      <div className="container">
        <div className="row align-items-center g-5">

          {/* Left Content */}
          <div className="col-lg-7">
            <span 
              className="badge mb-3 px-3 py-2 fw-medium"
              style={{ backgroundColor: "#f0f9ec", color: brandGreen }}
            >
              ⚡︎ SEO . AI SEO . Web Development
            </span>

            <h1 className="display-5 fw-bold mt-3 col-lg-11">
              The growth agency brands trust to win search.
            </h1>

            <p className="lead text-muted mt-3 col-lg-10">
              We turn organic visibility into measurable revenue through
              AI-powered SEO and high-performance websites built to scale.
            </p>

            <div className="d-flex flex-wrap gap-3 mt-4">
              <a href="./get-a-quote" className="btn-brand-primary">
                Stand Out in Search
              </a>
              <a href="./services" className="btn-brand-outline">
                Our Services
              </a>
            </div>

            <p className="text-muted small mt-4">
              Trusted by startups, SMEs & growth-driven teams
            </p>
          </div>

          {/* Right Hero Image (Portrait & Brand Consistent) */}
          <div className="col-lg-5 position-relative">
            <div 
              className="rounded-4 overflow-hidden shadow-lg mx-auto" 
              style={{ maxWidth: "380px" }} 
            >
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1000&auto=format&fit=crop"
                alt="Digital Marketing Team Strategy"
                className="img-fluid w-100"
                style={{ height: "520px", objectFit: "cover" }} 
                loading="eager"
              />
            </div>

            {/* Floating Proof Card */}
            <div
              className="position-absolute bottom-0 start-50 translate-middle-x bg-white shadow-sm rounded-4 p-4 mb-n3"
              style={{ width: "92%", maxWidth: "420px", borderBottom: `4px solid ${brandGreen}` }}
            >
              <div className="row text-center">
                <div className="col-4 px-1">
                  <h4 className="fw-bold mb-0" style={{ color: brandGreen }}>3×</h4>
                  <p className="small text-muted mb-0">Traffic Growth</p>
                </div>
                <div className="col-4 px-1">
                  <h4 className="fw-bold mb-0" style={{ color: brandGreen }}>120%</h4>
                  <p className="small text-muted mb-0">Lead Increase</p>
                </div>
                <div className="col-4 px-1">
                  <h4 className="fw-bold mb-0" style={{ color: brandGreen }}>&lt;1s</h4>
                  <p className="small text-muted mb-0">Page Speed</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        .btn-brand-primary {
          background-color: #6DBE45;
          color: white;
          padding: 12px 28px;
          border-radius: 6px;
          font-weight: 600;
          text-decoration: none;
          display: inline-block;
          transition: background 0.2s ease;
          border: none;
          text-align: center;
        }

        .btn-brand-primary:hover {
          background-color: #5da33a;
          color: white;
        }

        .btn-brand-outline {
          background-color: transparent;
          color: #6DBE45;
          padding: 12px 28px;
          border-radius: 6px;
          font-weight: 600;
          text-decoration: none;
          display: inline-block;
          border: 2px solid #6DBE45;
          transition: all 0.2s ease;
          text-align: center;
        }

        .btn-brand-outline:hover {
          background-color: #6DBE45;
          color: white;
        }
      `}</style>
    </section>
  );
}