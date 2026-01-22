import Link from "next/link";
import { notFound } from "next/navigation";

type Post = {
  title: string;
  content: string;
  date: string;
  slug: string;
};

async function getPost(slug: string): Promise<Post | null> {
  const res = await fetch(
    "https://lightgray-woodcock-892473.hostingersite.com/graphql",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
          query GetPostBySlug($slug: ID!) {
            post(id: $slug, idType: SLUG) {
              title
              content
              date
              slug
            }
          }
        `,
        variables: { slug },
      }),
      cache: "no-store",
    }
  );

  if (!res.ok) return null;

  const json = await res.json();
  return json?.data?.post ?? null;
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // ✅ REQUIRED IN NEXT 16
  const { slug } = await params;

  const post = await getPost(slug);

  if (!post) return notFound();

  return (
    <>
      {/* Header */}
      <section className="bg-light py-5">
        <div className="container">
          <p className="small text-muted">
            TurboGecko › Blog
          </p>

          <h1 className="fw-bold display-6 mt-2">
            {post.title}
          </h1>

          <p className="text-muted mt-2">
            By TurboGecko •{" "}
            {new Date(post.date).toLocaleDateString()}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            {/* Main */}
            <div className="col-lg-8">
              <article
                className="bg-white p-4 shadow-sm rounded blog-content"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>

            {/* Sidebar */}
            <div className="col-lg-4">
              <div className="bg-white p-4 shadow-sm rounded">
                <h5 className="fw-bold">
                  Want better rankings?
                </h5>
                <p className="text-muted mt-2">
                  Get a free SEO audit and growth roadmap.
                </p>
                <Link
                  href="/contact"
                  className="btn btn-success w-100 mt-3"
                >
                  Get SEO Audit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Reading */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="fw-bold">Recommended Reading</h2>
            <Link href="/blog" className="text-success fw-semibold">
              See all →
            </Link>
          </div>

          <div className="row g-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="col-md-4">
                <div className="card border-0 shadow-sm h-100">
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                    className="card-img-top"
                    alt="Recommended"
                  />
                  <div className="card-body">
                    <small className="text-muted">5 min read</small>
                    <h5 className="mt-2">
                      SEO Growth Strategy {i}
                    </h5>
                    <p className="text-muted">
                      Practical insights to grow traffic and conversions.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
