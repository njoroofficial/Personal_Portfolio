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
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h3>Professional Summary</h3>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
}
