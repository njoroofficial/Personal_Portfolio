import About from "./About";
import Header from "./Header";
import Hero from "./Hero";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
      </main>
    </div>
  );
}
