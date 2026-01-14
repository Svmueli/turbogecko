import Link from "next/link";

const posts = [
  {
    slug: "ai-overviews-vs-ai-mode",
    title: "AI Overviews vs AI Mode",
    excerpt:
      "We analyzed over 1,500 queries to understand how AI citations differ.",
    date: "Sep 5, 2025",
    author: "TurboGecko Research",
  },
];

export default function BlogPage() {
  return (
    <div className="bg-light py-5">
      <div className="container">
        <h1 className="fw-bold mb-4">TurboGecko Blog</h1>

        <div className="row">
          {posts.map((post) => (
            <div key={post.slug} className="col-md-6 mb-4">
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <h4>{post.title}</h4>
                  <p className="text-muted">{post.excerpt}</p>
                  <small className="text-muted">
                    {post.author} • {post.date}
                  </small>

                  <div className="mt-3">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="btn btn-success btn-sm"
                    >
                      Read Article
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
