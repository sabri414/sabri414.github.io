const projects = [
  {
    name: "Tasktix",
    description:
      "A productivity app that integrates GitHub and Canvas to help students automate their workflow and manage assignments efficiently.",
    link: "https://github.com/Tasktix/Tasktix",
  },
  {
    name: "Corvallis City",
    description:
      "A Kotlin-based mobile app showcasing local restaurants, parks, and attractions around Corvallis, built with Jetpack Compose and Room.",
    link: "https://github.com/sabri414/CorvallisCityApp",
  },
  {
    name: "Flight Search App",
    description:
      "A Jetpack Compose and Room-powered app that lets users search, filter, and save flight data in a sleek Android interface.",
    link: "https://github.com/sabri414/FlightSearchApp",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-sabriGray text-sabriLight py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-title font-bold mb-10 text-sabriBlue">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-sabriLight text-sabriGray p-6 rounded-2xl shadow-soft hover:shadow-lg hover:-translate-y-1 transition-transform duration-300"
            >
              <h3 className="text-2xl font-title mb-3 text-sabriBlue">
                {project.name}
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sabriBlue font-semibold hover:underline"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
