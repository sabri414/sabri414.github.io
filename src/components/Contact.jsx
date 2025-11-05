const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-sabriLight text-sabriGray py-20 px-6 text-center"
    >
      <h2 className="text-4xl font-title font-bold mb-6 text-sabriBlue">
        Let’s Connect
      </h2>

      <p className="max-w-2xl mx-auto text-lg text-gray-700 mb-10">
        Whether you want to collaborate on a project, talk about technology,
        or just say hi — I’d love to hear from you!  
        You can find me on social media or send me a message anytime.
      </p>

      <div className="flex justify-center flex-wrap gap-6">
        <a
          href="https://www.linkedin.com/in/sabri-abounozha-67081a26a/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-sabriBlue text-white px-6 py-3 rounded-lg shadow-soft hover:bg-blue-500 transition"
        >
          LinkedIn
        </a>

        <a
          href="https://www.instagram.com/sabri_414"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white px-6 py-3 rounded-lg shadow-soft hover:opacity-90 transition"
        >
          Instagram
        </a>

        <a
          href="https://www.youtube.com/@s7gamer1"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-600 text-white px-6 py-3 rounded-lg shadow-soft hover:bg-red-700 transition"
        >
          YouTube
        </a>

        <a
          href="https://github.com/sabri414"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-900 text-white px-6 py-3 rounded-lg shadow-soft hover:bg-gray-800 transition"
        >
          GitHub
        </a>
      </div>

      <p className="text-gray-500 mt-12 text-sm">
        © {new Date().getFullYear()} Sabri Abounozha. Built with ❤️ using React
        & Tailwind CSS.
      </p>
    </section>
  );
};

export default Contact;
