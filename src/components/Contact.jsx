const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-sabriLight text-sabriGray py-16 sm:py-20 px-4 sm:px-6 text-center"
    >
      <h2 className="text-3xl sm:text-4xl font-title font-bold mb-5 sm:mb-6 text-sabriBlue">
        Let’s Connect
      </h2>

      <p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-700 mb-8 sm:mb-10 leading-relaxed">
        Whether you want to collaborate on a project, talk about technology,
        or just say hi — I’d love to hear from you!
        You can find me on social media or send me a message anytime.
      </p>

      <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center flex-wrap gap-3 sm:gap-6 max-w-2xl mx-auto">
        <a
          href="mailto:abounozs@oregonstate.edu?subject=Portfolio%20Contact"
          className="w-full sm:w-auto bg-sabriBlue text-white px-6 py-3 rounded-lg shadow-soft hover:bg-blue-500 transition"
        >
          Email Me
        </a>

        <a
          href="https://www.linkedin.com/in/sabri-abounozha-67081a26a/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto bg-sabriBlue text-white px-6 py-3 rounded-lg shadow-soft hover:bg-blue-500 transition"
        >
          LinkedIn
        </a>

        <a
          href="https://www.instagram.com/sabri_414"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white px-6 py-3 rounded-lg shadow-soft hover:opacity-90 transition"
        >
          Instagram
        </a>

        <a
          href="https://www.youtube.com/@s7gamer1"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto bg-red-600 text-white px-6 py-3 rounded-lg shadow-soft hover:bg-red-700 transition"
        >
          YouTube
        </a>

        <a
          href="https://github.com/sabri414"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto bg-gray-900 text-white px-6 py-3 rounded-lg shadow-soft hover:bg-gray-800 transition"
        >
          GitHub
        </a>
      </div>

      <p className="text-gray-500 mt-10 sm:mt-12 text-xs sm:text-sm">
        © {new Date().getFullYear()} Sabri Abounozha. Built with ❤️ using React
        & Tailwind CSS.
      </p>
    </section>
  );
};

export default Contact;
