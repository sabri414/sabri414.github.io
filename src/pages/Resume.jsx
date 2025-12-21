import { motion } from "framer-motion";

export default function Resume() {
  return (
    <div className="min-h-screen bg-sabriGray text-sabriLight px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10"
        >
          <div>
            <h1 className="text-4xl font-title text-sabriBlue">Resume</h1>
            <p className="text-gray-300 mt-2">
              Sabri Abounozha • Corvallis, OR • 480-300-2122 • abounozs@oregonstate.edu
            </p>
          </div>

           <a
            className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-sabriBlue text-white shadow-soft hover:bg-blue-500 transition"
            href={`${process.env.PUBLIC_URL}/Sabri_Abounozha_Resume.pdf`}
            target="_blank"
            rel="noreferrer"
        >
            Download Resume (PDF)
        </a>

        <a
            className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-white/10 text-sabriLight border border-white/15 hover:bg-white/15 transition"
            href={`${process.env.PUBLIC_URL}/Sabri_Abounozha_Resume.docx`}
            download
        >
            Download Resume (DOCX)
        </a>
        </motion.div>

        {/* EDUCATION */}
        <section className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-6">
          <h2 className="text-2xl font-title mb-4">Education</h2>

          <div className="space-y-4 text-gray-300">
            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                <p className="font-semibold text-white">Oregon State University</p>
                <p className="text-sm text-gray-400">B.S. Computer Science • Jun. 2026</p>
              </div>
              <p>GPA 3.83 • Human-Computer Interaction</p>
            </div>

            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                <p className="font-semibold text-white">Rio Salado College</p>
                <p className="text-sm text-gray-400">Associate of Art • Aug. 2024</p>
              </div>
              <p>GPA 3.64</p>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-6">
          <h2 className="text-2xl font-title mb-4">Computer Science Projects</h2>

          <div className="space-y-5 text-gray-300">
            <div>
              <p className="font-semibold text-white">Tasktix — Capstone Project (Enterprise Productivity App)</p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Collaborated with a full engineering team in an Agile/Scrum environment</li>
                <li>Built a full client-server application designed for multi-user office environments</li>
              </ul>
            </div>

            <div>
              <p className="font-semibold text-white">Music Streaming Database System</p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Designed and implemented a relational database for managing songs and playlists</li>
                <li>Focused on normalization, relational integrity, and efficient SQL queries</li>
              </ul>
            </div>

            <div>
              <p className="font-semibold text-white">Web Application — Playlist Organizer</p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Led a team of four to build a CRUD web application for user-generated music lists</li>
                <li>Implemented add/delete/update playlist features and dynamic category filters</li>
              </ul>
            </div>

            <div>
              <p className="font-semibold text-white">Habit Tracking Mobile App</p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Created an Android app that tracks daily habits and custom goals</li>
                <li>Designed the UI/UX and integrated Kotlin-based view models</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-6">
          <h2 className="text-2xl font-title mb-4">Skills</h2>

          <div className="text-gray-300 space-y-3">
            <p>
              <span className="font-semibold text-white">Languages:</span>{" "}
              Python, Java, JavaScript, C++, C#, SQL, PHP, Kotlin, GLSL, MATLAB, HTML
            </p>
            <p>
              <span className="font-semibold text-white">Tools/Frameworks:</span>{" "}
              OpenMP, SIMD, MPI, OpenCL, Git/GitHub, Linux, REST APIs
            </p>
            <p>
              <span className="font-semibold text-white">Other:</span> Fluent in Arabic and English
            </p>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h2 className="text-2xl font-title mb-4">Work Experience</h2>

          <div className="space-y-5 text-gray-300">
            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                <p className="font-semibold text-white">Sparklight/Cable One — Technical Support Specialist</p>
                <p className="text-sm text-gray-400">Phoenix, AZ • Jan 2020 – Jun 2020</p>
              </div>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Assessed and responded to outages</li>
                <li>Matched consumers with cable streaming services</li>
                <li>Provided technical support and customer service</li>
              </ul>
            </div>

            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                <p className="font-semibold text-white">Maxim Integrated — Fab Operator</p>
                <p className="text-sm text-gray-400">Beaverton, OR • Sept 2021 – Dec 2021</p>
              </div>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Conducted maintenance for fragile microchips</li>
                <li>Completed detailed work with chemicals</li>
                <li>Transported delicate chips for processing</li>
              </ul>
            </div>
          </div>
        </section>

        <p className="text-sm text-gray-400 mt-10">
            This page reflects my current resume content.
        </p>

      </div>
    </div>
  );
}
