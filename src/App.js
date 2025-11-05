import logo from './logo.svg';
import './App.css';
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-sabriGray min-h-screen text-sabriLight font-sans">
      <section className="flex flex-col justify-center items-center text-center min-h-screen">
        <h1 className="text-5xl font-title text-sabriBlue mb-4">
          Sabri Abounozha
        </h1>
        <p className="text-lg max-w-2xl text-gray-300">
          Developer • Creator • Storyteller <br />
          Building apps that connect people and creativity.
        </p>
        <a
          href="#about"
          className="mt-10 bg-sabriBlue text-white px-6 py-3 rounded-lg shadow-soft hover:bg-blue-500 transition"
        >
          View My Work
        </a>
      </section>

      <About />
      <Projects />
      <Contact />
    </div>
  );
}


export default App;
