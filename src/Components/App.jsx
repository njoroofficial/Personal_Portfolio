import About from "./About";
import Contact from "./Contact";
import Header from "./Header";
import Hero from "./Hero";
import FeaturedProjects from "./FeaturedProjects";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <FeaturedProjects />
        <About />
        <Contact />
      </main>
    </div>
  );
}
