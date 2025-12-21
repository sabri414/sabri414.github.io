import { motion } from "framer-motion";

export default function ContactPage() {
  const email = "abounozs@oregonstate.edu";

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      alert("Email copied to clipboard!");
    } catch {
      // fallback
      window.prompt("Copy this email:", email);
    }
  };

  return (
    <div className="min-h-screen bg-sabriGray text-sabriLight px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          className="text-4xl font-title text-sabriBlue mb-4"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact
        </motion.h1>

        <motion.p
          className="text-gray-300 text-lg leading-relaxed mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.6 }}
        >
          Want to collaborate, ask a question, or talk about a project? Reach out
          — I’m easiest to reach by email.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Email card */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h2 className="text-2xl font-title mb-3">Email</h2>
            <p className="text-gray-300 mb-5">
              <span className="text-white font-semibold">{email}</span>
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href={`mailto:${email}?subject=Portfolio%20Contact`}
                className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-sabriBlue text-white shadow-soft hover:bg-blue-500 transition"
              >
                Email Me
              </a>

              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-white/10 text-sabriLight border border-white/15 hover:bg-white/15 transition"
              >
                Copy Email
              </button>
            </div>
          </div>

          {/* Socials card */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h2 className="text-2xl font-title mb-3">Social</h2>
            <p className="text-gray-300 mb-5">
              You can also find me here:
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.linkedin.com/in/sabri-abounozha-67081a26a/"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 rounded-lg bg-white/10 border border-white/15 hover:bg-white/15 transition"
              >
                LinkedIn
              </a>

              <a
                href="https://www.instagram.com/sabri_414/"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 rounded-lg bg-white/10 border border-white/15 hover:bg-white/15 transition"
              >
                Instagram
              </a>

              <a
                href="https://github.com/sabri414"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 rounded-lg bg-white/10 border border-white/15 hover:bg-white/15 transition"
              >
                GitHub
              </a>

              <a
                href="https://www.youtube.com/@s7gamer1"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 rounded-lg bg-white/10 border border-white/15 hover:bg-white/15 transition"
              >
                YouTube
              </a>
            </div>
          </div>
        </div>

        <p className="text-sm text-gray-400 mt-10">
          I usually respond within a reasonable time. Thanks for reaching out.
        </p>
      </div>
    </div>
  );
}
