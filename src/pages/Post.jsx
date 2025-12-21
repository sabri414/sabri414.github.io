import { useParams } from "react-router-dom";

const content = {
  "living-philosophy": {
    title: "My Living Philosophy as a Builder",
    body: `
I believe life is something you *build*, not something you rush through.

Curiosity is my compass. I question systems, habits, and defaults — not to rebel,
but to understand. Understanding creates freedom.

I value restraint. Not everything needs to be optimized, posted, or monetized.
Some things are meant to compound quietly.

I build with people in mind. Technology should reduce friction, not increase noise.
The best systems feel invisible.

I believe consistency beats intensity.
Small deliberate actions, repeated daily, shape identity.

And finally — I believe creativity is a responsibility.
If you’re capable of building something that helps others think, feel, or live better,
you probably should.
`,
  },
};

const Post = () => {
  const { slug } = useParams();
  const post = content[slug];

  if (!post) return <p className="p-10">Post not found.</p>;

  return (
    <article className="max-w-3xl mx-auto py-20 px-6 text-sabriLight">
      <h1 className="text-4xl font-title text-sabriBlue mb-6">
        {post.title}
      </h1>
      <div className="space-y-6 text-lg leading-relaxed text-gray-300 whitespace-pre-line">
        {post.body}
      </div>
    </article>
  );
};

export default Post;
