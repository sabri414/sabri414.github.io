import { Link } from "react-router-dom";
import { posts } from "../data/posts";

function formatDate(dateStr) {
  const d = new Date(dateStr);
  // If date is not parseable, just return original
  if (Number.isNaN(d.getTime())) return dateStr;
  return d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
}

export default function Blog() {
  const sortedPosts = [...posts].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <div className="min-h-screen bg-sabriGray text-sabriLight px-4 sm:px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-title text-sabriBlue mb-3">
          Philosophy & Writing
        </h1>
        <p className="text-gray-300 mb-10">
          Short essays on how I think, how I build, and the habits I’m trying to live by.
        </p>

        <div className="space-y-6">
          {sortedPosts.map((p) => (
            <Link
              key={p.slug}
              to={`/blog/${p.slug}`}
              className="block bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                <h2 className="text-2xl font-title text-white">{p.title}</h2>
                <span className="text-sm text-gray-400">{formatDate(p.date)}</span>
              </div>

              <p className="text-gray-300 mt-3">{p.excerpt}</p>

              <div className="flex flex-wrap gap-2 mt-4">
                {p.tags?.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-full bg-white/10 border border-white/10 text-gray-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
