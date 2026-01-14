import Link from "next/link";

export default function BlogPost() {
  return (
    <>
      {/* Article Section */}
      <div className="bg-light py-5">
        <div className="container">
          <p className="small text-muted">
            SEO Agency › Learn › AI Overviews vs AI Mode
          </p>

          <div className="row">
            {/* Main Content */}
            <div className="col-lg-8">
              <h1 className="fw-bold mb-3">
                Citation Differences in AI Overviews vs AI Mode
              </h1>

              <p className="lead text-muted">
                We analyzed over 1,500 queries to understand how AI citations
                differ in Google’s AI systems.
              </p>

              <p className="text-muted mb-4">
                By TurboGecko Research • Sep 5, 2025 • Answer Engine Optimization
              </p>

              <div className="bg-white p-4 shadow-sm rounded">
                <p>
                  Google has reshaped search through AI Overviews and AI Mode.
                  These changes affect how brands get cited and discovered.
                </p>

                <p>
                  Companies that optimize for both traditional SEO and AI-driven
                  answers will dominate search visibility.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-lg-4">
              <div className="bg-white p-4 shadow-sm rounded">
                <h5 className="fw-bold">What You’ll Learn</h5>
                <ul className="list-unstyled mt-3">
                  <li>• What are AI Overviews?</li>
                  <li>• How AI citations differ</li>
                  <li>• How to win AI search visibility</li>
                </ul>

                <button className="btn btn-success w-100 mt-3">
                  Get SEO Audit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recommended Reading */}
      <div className="bg-white py-5">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="fw-bold">Recommended Reading</h2>
            <Link href="/blog" className="text-success fw-semibold">
              See All →
            </Link>
          </div>

          <div className="row">
            {/* Card 1 */}
            <div className="col-md-4">
              <div className="card border-0 shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
                  className="card-img-top"
                />
                <div className="card-body">
                  <small className="text-muted">5 min read</small>
                  <h5 className="mt-2">
                    AI SEO Reporting Guide
                  </h5>
                  <p className="text-muted">
                    How to measure visibility and AI search impact.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-md-4">
              <div className="card border-0 shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4"
                  className="card-img-top"
                />
                <div className="card-body">
                  <small className="text-muted">6 min read</small>
                  <h5 className="mt-2">
                    Are Your Pages AI-Ready?
                  </h5>
                  <p className="text-muted">
                    A technical checklist for AEO success.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-md-4">
              <div className="card border-0 shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                  className="card-img-top"
                />
                <div className="card-body">
                  <small className="text-muted">5 min read</small>
                  <h5 className="mt-2">
                    Formatting Content for AI
                  </h5>
                  <p className="text-muted">
                    How to structure content for AI retrieval.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
