import Link from "next/link";

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-light py-5">
        <div className="container text-center">
          <h1 className="fw-bold display-5">
            SEO Insights & Growth Resources
          </h1>
          <p className="lead text-muted mt-3">
            Learn how to grow traffic, conversions, and revenue through search.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            {[
              {
                title: "Citation Differences in AI Overviews vs AI Mode",
                excerpt:
                  "We analyzed how Google’s AI cites sources and what it means for SEO strategy.",
                read: "6 min read",
                slug: "ai-overviews-vs-ai-mode"
              },
              {
                title: "How to Optimize for Answer Engines",
                excerpt:
                  "A practical framework to appear inside AI-powered search results.",
                read: "5 min read",
                slug: "answer-engine-optimization"
              },
              {
                title: "Technical SEO Checklist for 2025",
                excerpt:
                  "A complete technical SEO checklist for modern websites.",
                read: "7 min read",
                slug: "technical-seo-checklist-2025"
              }
            ].map((post, i) => (
              <div key={i} className="col-md-4">
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-decoration-none text-dark"
                >
                  <div className="card h-100 border-0 shadow-sm">
                    <img
                      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                      className="card-img-top"
                      alt={post.title}
                    />
                    <div className="card-body">
                      <small className="text-muted">{post.read}</small>
                      <h5 className="fw-bold mt-2">
                        {post.title}
                      </h5>
                      <p className="text-muted">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
