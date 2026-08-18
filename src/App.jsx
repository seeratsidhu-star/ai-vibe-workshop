import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Phases from "./components/Phases";
import Register from "./components/Register";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <div className="bg-grid" aria-hidden="true" />
      <div className="bg-texture" aria-hidden="true" />
      <div className="bg-grain" aria-hidden="true" />
      <Header />
      <main>
        <Hero />
        <About />
        <Phases />
        <Register />
      </main>
      <Footer />
    </>
  );
}
