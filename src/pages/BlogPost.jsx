import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { posts } from "../data/posts";

function formatDate(dateStr) {
  const d = new Date(dateStr);
  if (Number.isNaN(d.getTime())) return dateStr;
  return d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
}

export default function BlogPost() {
  const { slug } = useParams();

  const sortedPosts = [...posts].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  const index = sortedPosts.findIndex((p) => p.slug === slug);
  const post = index >= 0 ? sortedPosts[index] : null;

  const prevPost = index >= 0 ? sortedPosts[index + 1] : null; // older
  const nextPost = index > 0 ? sortedPosts[index - 1] : null;   // newer

  // Optional SEO: BlogPosting schema
  useEffect(() => {
    if (!post) return;

    const script = document.createElement("script");
    script.type = "application/ld+json";

    // Since you're using HashRouter, the "real" URL is with /#/ for deep links.
    // This doesn't break anything; it just reflects the actual route format on GH Pages.
    const canonical = `https://sabriabounozha.com/#/blog/${post.slug}`;

    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      datePublished: post.date,
      author: { "@type": "Person", name: "Sabri Abounozha" },
      mainEntityOfPage: canonical,
      description: post.excerpt
    });

    document.head.appendChild(script);
    return () => document.head.removeChild(script);
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen bg-sabriGray text-sabriLight px-4 sm:px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-300">Post not found.</p>
          <Link className="text-sabriBlue hover:underline" to="/blog">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-sabriGray text-sabriLight px-4 sm:px-6 py-16">
      <article className="max-w-3xl mx-auto">
        <Link className="text-sabriBlue hover:underline" to="/blog">
          ← Back to Blog
        </Link>

        <h1 className="text-4xl font-title text-sabriBlue mt-6 mb-2">
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-8">
          <p className="text-sm text-gray-400">{formatDate(post.date)}</p>

          {post.tags?.length ? (
            <div className="flex flex-wrap gap-2">
              {post.tags.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2.5 py-1 rounded-full bg-white/10 border border-white/10 text-gray-200"
                >
                  {t}
                </span>
              ))}
            </div>
          ) : null}
        </div>

        <div className="space-y-6 text-base sm:text-lg leading-relaxed text-gray-300">
          {post.content.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          {prevPost ? (
            <Link
              to={`/blog/${prevPost.slug}`}
              className="text-sabriBlue hover:underline"
            >
              ← Previous: {prevPost.title}
            </Link>
          ) : <span />}

          {nextPost ? (
            <Link
              to={`/blog/${nextPost.slug}`}
              className="text-sabriBlue hover:underline sm:text-right"
            >
              Next: {nextPost.title} →
            </Link>
          ) : null}
        </div>
      </article>
    </div>
  );
}
