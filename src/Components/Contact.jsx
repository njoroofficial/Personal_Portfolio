"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Calendar,
  MessageCircle,
} from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I&apos;m always open to discussing new opportunities,
            collaborations, or just having a chat about technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Let&apos;s Connect</h3>
            <p className="text-muted-foreground mb-8">
              Whether you&apos;re looking for a developer, have a project in mind,
              or just want to connect, I&apos;d love to hear from you. Feel free to
              reach out through any of the channels below.
            </p>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-muted-foreground">mosesn579@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-muted-foreground">+254 704 125 004</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-muted-foreground">Nairobi, Kenya</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-semibold mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <Button variant="outline" size="icon" asChild>
                  <a
                    href="https://github.com/njoroofficial"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open Moses Njoroge GitHub profile"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a
                    href="https://www.linkedin.com/in/moses-njoroge-44b465247/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open Moses Njoroge LinkedIn profile"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div id="getInTouch">
            <Card>
              <CardHeader>
                <CardTitle>Ways to Reach Me</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=mosesn579@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 rounded-lg border p-4 transition-colors hover:bg-muted"
                >
                  <Mail className="h-5 w-5 mt-1 text-primary" />
                  <div>
                    <p className="font-medium">Email me directly</p>
                    <p className="text-sm text-muted-foreground">
                      Best for project details, collaboration ideas, and formal
                      opportunities.
                    </p>
                  </div>
                </a>

                <a
                  href="https://wa.me/254704125004"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 rounded-lg border p-4 transition-colors hover:bg-muted"
                >
                  <Phone className="h-5 w-5 mt-1 text-primary" />
                  <div>
                    <p className="font-medium">Call or WhatsApp</p>
                    <p className="text-sm text-muted-foreground">
                      Ideal for quick chats and urgent conversations.
                    </p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/moses-njoroge-44b465247/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 rounded-lg border p-4 transition-colors hover:bg-muted"
                >
                  <MessageCircle className="h-5 w-5 mt-1 text-primary" />
                  <div>
                    <p className="font-medium">Message me on LinkedIn</p>
                    <p className="text-sm text-muted-foreground">
                      Great for networking and professional introductions.
                    </p>
                  </div>
                </a>

                <div className="rounded-lg bg-primary/10 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    <p className="font-semibold">Current availability</p>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Open to internships, freelance work, and software engineering
                    opportunities.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
