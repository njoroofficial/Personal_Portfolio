import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20"
    >
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <img
              src="././assets/myself.jpg"
              alt="Moses Njoroge, junior software developer and computer science undergraduate"
              className="w-48 h-48 rounded-full mx-auto mb-8 object-cover border-4 border-primary/20"
            />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 ">
            Moses Njoroge Wairimu
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Junior Software Developer | Tech Enthusiast
          </p>

          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Junior Software Engineer with hands-on experience building scalable
            web applications using React, Next.js, FastAPI, and Supabase.
            Combines strong foundations in data science and cybersecurity with
            practical networking knowledge. Passionate about backend
            optimization, system reliability, and delivering user-centric
            solutions.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button asChild>
              <a href="#getInTouch">
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a
                href="https://github.com/njoroofficial"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" /> GitHub
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a
                href="https://www.linkedin.com/in/moses-njoroge-44b465247"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
