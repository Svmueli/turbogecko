import Link from "next/link";

type Post = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  date: string;
};

async function getPosts(): Promise<Post[]> {
  const res = await fetch(
    "https://lightgray-woodcock-892473.hostingersite.com/graphql",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
          query GetPosts {
            posts(first: 10) {
              nodes {
                id
                title
                slug
                excerpt
                date
              }
            }
          }
        `,
      }),
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  const json = await res.json();
  return json.data.posts.nodes;
}

export default async function BlogPage() {
  const posts = await getPosts();

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
            {posts.map((post) => (
              <div key={post.id} className="col-md-4">
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
                      <small className="text-muted">
                        {new Date(post.date).toDateString()}
                      </small>
                      <h5 className="fw-bold mt-2">{post.title}</h5>
                      <p className="text-muted">
                        {post.excerpt
                          ? post.excerpt.replace(/<[^>]+>/g, "")
                          : "Read our latest insights on SEO, growth, and performance marketing."}
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
