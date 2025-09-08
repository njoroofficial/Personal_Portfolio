import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            {/* My Image */}
            <img
              src="././assets/myself.jpg"
              alt="Moses Image"
              className="w-48 h-48 rounded-full mx-auto mb-8 object-cover border-4 border-primary/20"
            />
          </div>

          {/* Welcome text */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Moses Njoroge Wairimu
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Aspiring Computer Scientist | Tech Enthusiast
          </p>

          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Dedicated Computer Science undergraduate with expertise in
            cybersecurity, data science, and full-stack development. Passionate
            about Web3, blockchain, and leveraging technology to solve
            real-world problems.
          </p>

          {/* Communication buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button>
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>
            <Button variant="outline">
              <Github className="mr-2 h-4 w-4" /> GitHub
            </Button>
            <Button variant="outline">
              <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
