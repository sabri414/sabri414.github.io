import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Philosophy from "./pages/Philosophy";
import AboutSabri from "./pages/AboutSabri";
import Resume from "./pages/Resume";
import ContactPage from "./pages/ContactPage";
import ProjectsPage from "./pages/ProjectsPage";

import { Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
  return (
    <>
      <section className="flex flex-col justify-center items-center text-center min-h-screen space-y-6">
        <motion.img
          src={`${process.env.PUBLIC_URL}/sabri-preview.jpg`}
          alt="Sabri Abounozha"
          className="w-48 h-48 rounded-full object-cover shadow-lg border-4 border-sabriBlue"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />

        <motion.h1
          className="text-5xl font-title text-sabriBlue mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          Sabri Abounozha
        </motion.h1>

        <motion.p
          className="text-lg max-w-2xl text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.6 }}
        >
          Developer • Creator • Storyteller <br />
          Building apps that connect people and creativity.
        </motion.p>

        <motion.button
  type="button"
  onClick={() => {
    const el = document.getElementById("about");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }}
  className="mt-6 bg-sabriBlue text-white px-6 py-3 rounded-lg shadow-soft hover:bg-blue-500 transition"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.2, delay: 0.9 }}
>
  View My Work
</motion.button>

      </section>

      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default function App() {
  return (
    <div className="bg-sabriGray min-h-screen text-sabriLight font-sans">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/philosophy" element={<Philosophy />} />
        <Route path="/about-sabri-abounozha" element={<AboutSabri />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </div>
  );
}