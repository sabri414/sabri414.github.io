import { motion } from "framer-motion";

const Philosophy = () => {
  return (
    <div className="min-h-screen bg-sabriGray text-sabriLight px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <motion.h1
          className="text-4xl font-title text-sabriBlue mb-6"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Living Philosophy
        </motion.h1>

        <motion.p
          className="text-gray-300 text-lg leading-relaxed mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.6 }}
        >
          This page is where I share the principles I try to live by—how I think
          about growth, discipline, health, and building a life I’m proud of.
        </motion.p>

        <div className="space-y-6">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h2 className="text-xl font-title text-sabriLight mb-2">
              Core beliefs
            </h2>
            <ul className="text-gray-300 list-disc pl-5 space-y-2">
              <li>Consistency beats intensity.</li>
              <li>Small habits compound.</li>
              <li>Build systems, not motivation.</li>
              <li>Health is a foundation, not a goal.</li>
            </ul>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h2 className="text-xl font-title text-sabriLight mb-2">
              Healthy habits I practice
            </h2>
            <ul className="text-gray-300 list-disc pl-5 space-y-2">
              <li>Daily movement (walks, gym, or anything that keeps me active)</li>
              <li>High-protein meals + smarter eating out</li>
              <li>Sleep routine: consistent wake time</li>
              <li>Weekly reflection and planning</li>
            </ul>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h2 className="text-xl font-title text-sabriLight mb-2">
              What I’m working on right now
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Staying disciplined while balancing school, projects, and content
              creation—without burning out.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Philosophy;
