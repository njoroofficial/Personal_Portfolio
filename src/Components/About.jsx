export default function About() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Welcome About Section Text */}
        <div className="text-center mb-16">
          <h2 className="font-bold text-3xl md:text-4xl mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn more about my educational background, certifications, and
            professional journey
          </p>
        </div>
        {/* About section summary */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div>
            <h3 className="font-semibold text-2xl mb-6">
              Professional Summary
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Dedicated Computer Science undergraduate with expertise in
              cybersecurity, data science, and full-stack development. Certified
              by Google and IBM in critical tech domains, and actively engaged
              with IEEE communities. Passionate about Web3, blockchain, and
              leveraging technology to solve real-world problems.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Strong foundation in programming, networking, and data analysis,
              coupled with a commitment to continuous learning and staying at
              the forefront of technological advancement.
            </p>
          </div>
          <div>
            <img
              src="./src/assets/modern-tech-workspace.png"
              alt="Tech workspace"
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
