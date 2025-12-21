import { motion } from "framer-motion";
import { useEffect } from "react";

export default function AboutSabri() {
    useEffect(() => {
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.innerHTML = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Sabri Abounozha",
    "url": "https://sabri414.github.io/#/about-sabri-abounozha",
    "mainEntity": {
      "@type": "Person",
      "name": "Sabri Abounozha",
      "url": "https://sabri414.github.io/",
      "sameAs": [
        "https://www.instagram.com/sabri_414/",
        "https://www.linkedin.com/in/sabri-abounozha-67081a26a/",
        "https://github.com/sabri414",
        "https://www.youtube.com/@s7gamer1"
      ],
      "jobTitle": "Developer • Creator • Storyteller",
      "description": "Sabri Abounozha is a developer, creator, and storyteller focused on building human-centered software and documenting his journey."
    }
  });

  document.head.appendChild(script);

  return () => {
    document.head.removeChild(script);
  };
}, []);

  return (
    <div className="min-h-screen bg-sabriGray text-sabriLight px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <motion.h1
          className="text-4xl font-title text-sabriBlue mb-6"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Sabri Abounozha
        </motion.h1>

        <motion.p
          className="text-gray-300 text-lg leading-relaxed mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.6 }}
        >
          Welcome — I’m <span className="font-semibold text-white">Sabri Abounozha</span>, a developer and
          creator building human-centered apps and sharing my journey online.
          This page is a deeper introduction to who I am, what I build, and what I value.
        </motion.p>

        <div className="space-y-8">
          <section className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h2 className="text-2xl font-title mb-3">Quick bio</h2>
            <p className="text-gray-300 leading-relaxed">
              I’m a Computer Science student at Oregon State University and a content creator.
              I enjoy building products that are practical, clean, and easy to use — and documenting
              the process as I learn and grow.
            </p>
          </section>

          <section className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h2 className="text-2xl font-title mb-3">What I build</h2>
            <ul className="text-gray-300 list-disc pl-5 space-y-2">
              <li>
                <span className="font-semibold text-white">Tasktix</span> — a productivity-focused project
                connecting student workflows and project organization.
              </li>
              <li>
                <span className="font-semibold text-white">Corvallis City</span> — a Kotlin app showcasing
                local recommendations (built with Jetpack Compose).
              </li>
              <li>
                <span className="font-semibold text-white">Flight Search</span> — an Android app built with
                Compose + Room to search and manage flight data.
              </li>
            </ul>
          </section>

          <section className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h2 className="text-2xl font-title mb-3">What I care about</h2>
            <p className="text-gray-300 leading-relaxed">
              I care about discipline, progress, and building a life that reflects my values.
              I’m especially interested in UI/UX, human-computer interaction, and creating technology that
              feels simple and empowering.
            </p>
          </section>

          <section className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h2 className="text-2xl font-title mb-3">Find me online</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Here are the official places where I share work and updates:
            </p>
            <div className="flex flex-wrap gap-3">
                 <a
                className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 transition"
                href="https://www.instagram.com/sabri_414/"
                target="_blank"
                rel="noreferrer"
                >
                Instagram
                </a>

                <a
                className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 transition"
                href="https://www.linkedin.com/in/sabri-abounozha-67081a26a/"
                target="_blank"
                rel="noreferrer"
                >
                LinkedIn
                </a>
              <a className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 transition" href="https://github.com/sabri414" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 transition" href="https://www.youtube.com/@s7gamer1" target="_blank" rel="noreferrer">
                YouTube
              </a>
            </div>
          </section>

          <p className="text-sm text-gray-400">
            Tip: If you’re here from Google searching “Sabri Abounozha,” this is my official portfolio.
          </p>
        </div>
      </div>
    </div>
  );
}
