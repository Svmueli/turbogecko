const WP_API = process.env.NEXT_PUBLIC_WP_API;

if (!WP_API) {
  throw new Error("NEXT_PUBLIC_WP_API is not defined");
}

export async function getPosts() {
  const res = await fetch(`${WP_API}/posts?_embed`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  return res.json();
}

export async function getPostBySlug(slug: string) {
  if (!slug) return null;

  const res = await fetch(
    `${WP_API}/posts?slug=${slug}&_embed`,
    {
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch post");
  }

  const posts = await res.json();
  return posts[0] ?? null;
}
