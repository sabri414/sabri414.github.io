const About = () => {
  return (
    <section id="about" className="bg-sabriLight text-sabriGray py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-title font-bold mb-6 text-sabriBlue">
          About Me
        </h2>

        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          Hi, I’m <strong>Sabri Abounozha</strong>, a computer science student
          at <strong>Oregon State University</strong> with a passion for
          building creative, human-centered technology. My journey into tech
          started with curiosity — I wanted to understand how things work, from
          the code behind apps to the emotions behind great design.
        </p>

        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          I’ve worked on projects like <strong>Tasktix</strong>, a productivity
          app that connects GitHub and Canvas for student workflow automation,
          and <strong>Corvallis City</strong>, a Kotlin app that showcases local
          recommendations for students and travelers.
        </p>

        <p className="text-lg leading-relaxed text-gray-700">
          Outside of coding, I’m a content creator on YouTube and Instagram,
          where I share stories about technology, personal growth, and modern
          life. My goal is to bridge the gap between art and technology—creating
          experiences that inspire and connect people around the world.
        </p>
      </div>
    </section>
  );
};

export default About;
