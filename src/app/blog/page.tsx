export const dynamic = "force-dynamic";

import { getPosts } from "@/wp-cms/lib/wordpress";
import Link from "next/link";

export default async function BlogPage() {
  let posts: any[] = [];

  try {
    posts = await getPosts();
  } catch (error) {
    console.error("Failed to fetch blog posts:", error);
  }

  return (
    <>
      <section className="bg-light py-5">
        <div className="container text-center">
          <h1 className="fw-bold display-5">
            SEO Insights & Growth Resources
          </h1>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row g-4">

            {posts.length === 0 && (
              <p className="text-center text-muted">
                No blog posts available at the moment.
              </p>
            )}

            {posts.map((post: any) => (
              <div key={post.id} className="col-md-4">
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-decoration-none text-dark"
                >
                  <div className="card h-100 border-0 shadow-sm">
                    <img
                      src={
                        post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                      }
                      className="card-img-top"
                      alt={post.title.rendered}
                    />
                    <div className="card-body">
                      <h5
                        className="fw-bold mt-2"
                        dangerouslySetInnerHTML={{
                          __html: post.title.rendered,
                        }}
                      />
                      <p
                        className="text-muted"
                        dangerouslySetInnerHTML={{
                          __html: post.excerpt.rendered,
                        }}
                      />
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
