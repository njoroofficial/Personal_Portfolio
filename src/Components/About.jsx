import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import educations, { proffesionals } from "@/lib/qualifications";
import { Award, GraduationCap, User } from "lucide-react";

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

        {/* Qualifications section */}
        <div className="grid gap-8 md:grid-cols-3">
          {/* Education qualification card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <GraduationCap className="mr-2 h-5 w-5 text-primary" />
                Education
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {educations.map((education) => {
                return (
                  <div>
                    <h4 className="font-semibold">{education.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {education.institute}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {education.year}
                    </p>
                  </div>
                );
              })}
            </CardContent>
          </Card>

          {/* Certification Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Award className="mr-2 h-5 w-5" />
                Certifications
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Badge variant="secondary" className="mb-2">
                  Google Certified
                </Badge>
                <h4 className="font-semibold">Cybersecurity Specialization</h4>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc px-4">
                  <li>Foundations of Cybersecurity</li>
                  <li>Manage Security Risks</li>
                  <li>Networks and Network Security</li>
                  <li>Linux and SQL Tools</li>
                </ul>
              </div>
              <div>
                <Badge variant="secondary" className="mb-2">
                  IBM Certified
                </Badge>
                <h4 className="font-semibold">Data Science Practitioner</h4>
                <p className="text-sm text-muted-foreground">
                  Issued: Dec 2023
                </p>
              </div>
              <div>
                <Badge variant="secondary" className="mb-2">
                  Moringa School
                </Badge>
                <h4 className="font-semibold">Software Engineering</h4>
                <p className="text-sm text-muted-foreground">In Progress</p>
              </div>
            </CardContent>
          </Card>

          {/* Professional Affiliations Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <User className="mr-2 h-5 w-5" />
                Professional Affiliations
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {proffesionals.map((proffesional) => {
                return (
                  <div>
                    <h4 className="font-semibold">{proffesional.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {proffesional.year}
                    </p>
                  </div>
                );
              })}

              <div className="pt-4">
                <Badge variant="outline">IEEE Recognition 2024</Badge>
                <p className="text-sm text-muted-foreground mt-2">
                  Acknowledged for commitment to technological advancement
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
