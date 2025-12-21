import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { posts } from "../data/posts";

export default function BlogPost() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  // Optional SEO: BlogPosting schema
  useEffect(() => {
    if (!post) return;

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": post.title,
      "datePublished": post.date,
      "author": { "@type": "Person", "name": "Sabri Abounozha" },
      "mainEntityOfPage": `https://sabriabounozha.com/blog/${post.slug}`,
      "description": post.excerpt
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
        <p className="text-sm text-gray-400 mb-8">{post.date}</p>

        <div className="space-y-6 text-base sm:text-lg leading-relaxed text-gray-300">
          {post.content.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </article>
    </div>
  );
}
