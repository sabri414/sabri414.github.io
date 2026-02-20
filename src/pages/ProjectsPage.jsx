import { useMemo, useState } from "react";
import { motion } from "framer-motion";

const PROJECTS = [
  {
    name: "Tasktix",
    tagline: "Capstone productivity app",
    description:
      "A team-built productivity project focused on organizing tasks and improving student workflows.",
    tags: ["Web", "React", "Team", "Capstone"],
    links: {
      github: "https://github.com/Tasktix/Tasktix",
      demo: "" // optional
    }
  },
  {
    name: "Corvallis City",
    tagline: "Local recommendations app",
    description:
      "A Kotlin app showcasing local restaurants, parks, and attractions around Corvallis.",
    tags: ["Android", "Kotlin", "Jetpack Compose"],
    links: {
      github: "https://github.com/sabri414/CorvallisCityApp",
      demo: ""
    }
  },
  {
    name: "Flight Search",
    tagline: "Compose + Room app",
    description:
      "An Android app that lets users search, filter, and save flight data using a clean UI.",
    tags: ["Android", "Kotlin", "Room", "Jetpack Compose"],
    links: {
      github: "https://github.com/sabri414/FlightSearchApp",
      demo: ""
    }
  },
  {
  name: "Music Application",
  tagline: "CRUD music library app",
  description:
    "Music application built with JavaScript that allows users to create, replace, update, and delete audio content through a clean and intuitive interface. This project focuses on architecture, user interaction design, and state management within a native environment.",
  tags: ["Web", "JavaScript", "HTML", "CSS"],
  links: {
    github: "https://github.com/sabri414/MusicApplication",
    demo: ""
  }
},
{
  name: "Magic Math",
  tagline: "Interactive math practice app",
  description:
    "Interactive web application designed to help users practice and improve their math skills through a structured and engaging interface. The project emphasizes logical problem-solving, dynamic UI updates, and building responsive web applications using JavaScript.",
  tags: ["Web", "JavaScript", "HTML", "CSS"],
  links: {
    github: "https://github.com/sabri414/MagicMath",
    demo: ""
  }
},
{
  name: "Cool 3D Torus",
  tagline: "3D geometry + transformations",
  description:
    "Computer graphics project that renders a 3D torus and explores core 3D concepts like transformations, camera perspective, and geometry setup. Built to strengthen my understanding of 3D rendering pipelines and scene composition.",
  tags: ["Graphics", "3D", "OpenGL", "Shaders"],
  links: {
    github: "https://github.com/sabri414/Cool3DTorus",
    demo: ""
  }
},
{
  name: "Animated Carousel Horse",
  tagline: "Animation + scene motion",
  description:
    "Computer graphics project that animates a carousel horse within a 3D scene. Focused on smooth motion, timing, and transformation hierarchies—building an intuition for animation loops and object movement in 3D environments.",
  tags: ["Graphics", "3D", "Animation", "OpenGL"],
  links: {
    github: "https://github.com/sabri414/AnimatedCarouselHorse",
    demo: ""
  }
},
{
  name: "3D Dog Lighting",
  tagline: "Lighting + shading practice",
  description:
    "3D graphics project exploring lighting and shading techniques on a dog model. Built to practice how light direction, intensity, and material properties affect a scene—helping me understand the fundamentals behind realistic rendering.",
  tags: ["Graphics", "3D", "Lighting", "Shaders"],
  links: {
    github: "https://github.com/sabri414/3DDogLighting",
    demo: ""
  }
},
{
  name: "KeyTime Animation",
  tagline: "Keyframe-based animation system",
  description:
    "Computer graphics project implementing keyframe (keytime) animation to control object motion over time. Focused on interpolation, timing control, and smooth transitions between animation states within a 3D environment.",
  tags: ["Graphics", "3D", "Animation", "OpenGL"],
  links: {
    github: "https://github.com/sabri414/KeyTimeAnimation",
    demo: ""
  }
},
{
  name: "Texture Mapping",
  tagline: "2D textures applied to 3D geometry",
  description:
    "Graphics project exploring texture mapping techniques by applying 2D images onto 3D surfaces. Strengthened understanding of UV coordinates, texture sampling, and how shaders integrate image data into rendering pipelines.",
  tags: ["Graphics", "3D", "OpenGL", "Shaders", "Texture Mapping"],
  links: {
    github: "https://github.com/sabri414/TextureMapping",
    demo: ""
  }
},
{
  name: "Snake Shader",
  tagline: "Custom GLSL shader effects",
  description:
    "Shader-focused graphics project using GLSL to create dynamic visual effects. Explored fragment shader manipulation, color transformations, and procedural animation techniques within the GPU rendering pipeline.",
  tags: ["Graphics", "Shaders", "GLSL", "OpenGL"],
  links: {
    github: "https://github.com/sabri414/SnakeShaders",
    demo: ""
  }
},
{
  name: "Dino Shader 2",
  tagline: "Advanced lighting + shader experimentation",
  description:
    "Advanced shader project experimenting with lighting models and fragment shader logic on a 3D dinosaur model. Focused on understanding light interaction, material properties, and programmable shading techniques.",
  tags: ["Graphics", "3D", "Shaders", "GLSL", "Lighting"],
  links: {
    github: "https://github.com/sabri414/DinoShaders2",
    demo: ""
  }
}


];

const ALL_TAGS = ["All", "Web", "Android", "React", "Kotlin", "Jetpack Compose", "Room", "Team", "Capstone", "JavaScript", "HTML", "CSS", "Graphics", "3D", "OpenGL", "Shaders", "Animation", "Lighting"];

function ProjectCard({ project }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col">
      <div className="mb-3">
        <h3 className="text-xl font-title text-white">{project.name}</h3>
        <p className="text-gray-400">{project.tagline}</p>
      </div>

      <p className="text-gray-300 leading-relaxed flex-1">{project.description}</p>

      <div className="flex flex-wrap gap-2 mt-5">
        {project.tags.map((t) => (
          <span
            key={t}
            className="text-xs px-2.5 py-1 rounded-full bg-white/10 border border-white/10 text-gray-200"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-3 mt-6">
        {project.links.github && (
          <a
            href={project.links.github}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-lg bg-sabriBlue text-white hover:bg-blue-500 transition"
          >
            GitHub
          </a>
        )}

        {project.links.demo && (
          <a
            href={project.links.demo}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-lg bg-white/10 border border-white/15 hover:bg-white/15 transition"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  const [tag, setTag] = useState("All");
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();

    return PROJECTS.filter((p) => {
      const matchesTag = tag === "All" || p.tags.includes(tag);
      const matchesQuery =
        !query ||
        p.name.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.tags.some((t) => t.toLowerCase().includes(query));
      return matchesTag && matchesQuery;
    });
  }, [tag, q]);

  return (
    <div className="min-h-screen bg-sabriGray text-sabriLight px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h1 className="text-4xl font-title text-sabriBlue mb-3">Projects</h1>
          <p className="text-gray-300 text-lg">
            A collection of apps and coursework projects I’ve built—focused on clean UI, usability, and real-world value.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between mb-8">
          <div className="flex flex-wrap gap-2">
            {ALL_TAGS.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setTag(t)}
                className={`px-3 py-2 rounded-lg text-sm border transition ${
                  tag === t
                    ? "bg-white/10 border-white/20"
                    : "bg-white/5 border-white/10 hover:bg-white/10"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search projects..."
            className="w-full md:w-80 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sabriLight placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white/10"
          />
        </div>

        {filtered.length === 0 ? (
          <p className="text-gray-400">No projects match your filters.</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p) => (
              <ProjectCard key={p.name} project={p} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
