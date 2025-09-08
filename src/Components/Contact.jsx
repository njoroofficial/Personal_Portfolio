import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Contact section welcome text */}
        <div className="text-center mb-16">
          <h2 className="font-bold text-3xl md:text-4xl mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or
            just having a chat about technology
          </p>
        </div>
        {/* Main Contact Section */}
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold">Let`s Connect</h3>
            <p className="text-muted-foreground mb-8">
              Whether you're looking for a developer, have a project in mind, or
              just want to connect, I'd love to hear from you. Feel free to
              reach out through any of the channels below.
            </p>
            <div></div>
          </div>
          {/* contact form card*/}
          <Card>
            <CardHeader>
              <CardTitle>Send Me a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      Name
                    </label>
                    <Input type="name" placeholder="Your name" />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Email
                    </label>
                    <Input type="email" placeholder="your.email@gmail.com" />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="font-medium text-sm mb-2 block"
                  >
                    Subject
                  </label>
                  <Input type="subject" placeholder="What`s this about" />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="font-medium text-sm mb-2 block"
                  >
                    Message
                  </label>
                  <Textarea
                    type="subject"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>

                <Button type="submit" className="w-full">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
