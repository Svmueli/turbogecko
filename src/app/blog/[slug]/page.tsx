import { notFound } from "next/navigation";
import { getPostBySlug } from "@/wp-cms/lib/wordpress";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;

  if (!slug) {
    return notFound();
  }

  const post = await getPostBySlug(slug);

  if (!post) {
    return notFound();
  }

  return (
    <>
      {/* Article Section */}
      <div className="bg-light py-5">
        <div className="container">
          <p className="small text-muted">Blog</p>

          <div className="row">
            {/* Main Content */}
            <div className="col-lg-8">
              <h1 className="fw-bold mb-3">{post.title.rendered}</h1>

              <div
                className="bg-white p-4 shadow-sm rounded"
                dangerouslySetInnerHTML={{
                  __html: post.content.rendered,
                }}
              />
            </div>

            {/* Sidebar */}
            <div className="col-lg-4">
              <div className="bg-white p-4 shadow-sm rounded">
                <h5 className="fw-bold">Need SEO Help?</h5>
                <p className="text-muted">
                  Get a free SEO audit tailored to your website.
                </p>
                <button className="btn btn-success w-100">
                  Get SEO Audit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
