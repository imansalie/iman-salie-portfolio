import { FileText, Github, Linkedin, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ProjectCard } from "@/components/ProjectCard";
import { Navbar } from "@/components/Navbar";

const Index = () => {
  const projects = [
    {
      title: "Project 1",
      description: "Description for Project 1",
      githubUrl: "#",
      demoUrl: "#",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Project 2",
      description: "Description for Project 2",
      githubUrl: "#",
      demoUrl: "#",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Project 3",
      description: "Description for Project 3",
      githubUrl: "#",
      demoUrl: "#",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Project 4",
      description: "Description for Project 4",
      githubUrl: "#",
      demoUrl: "#",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="snap-x-mandatory h-screen flex overflow-x-scroll">
      <Navbar />
      
      {/* Home Section */}
      <section id="home" className="section-slide flex flex-col items-center justify-center relative">
        <div className="text-center animate-fadeIn">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-playfair">
            Software Developer
          </h1>
          <p className="text-lg text-muted-foreground">
            Building beautiful and functional web experiences
          </p>
        </div>
        <div className="absolute bottom-12 flex flex-col items-center gap-8">
          <Button asChild variant="outline" size="lg">
            <a href="/path-to-your-cv.pdf" target="_blank" rel="noopener noreferrer">
              <FileText className="mr-2 h-4 w-4" />
              Download CV
            </a>
          </Button>
          <div className="flex gap-6">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="mailto:your.email@example.com">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-slide flex items-center">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 font-playfair">About Me</h2>
          <p className="text-lg text-muted-foreground mb-8">
            [Your description here] Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="section-slide flex items-center">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 font-playfair">Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-slide flex items-center">
        <div className="container max-w-xl">
          <h2 className="text-3xl font-bold mb-8 font-playfair">Contact Me</h2>
          <form className="space-y-6">
            <Input placeholder="Your Name" />
            <Input type="email" placeholder="Your Email" />
            <Textarea placeholder="Your Message" className="min-h-[150px]" />
            <Button className="w-full">
              <Send className="mr-2 h-4 w-4" />
              Send Message
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Index;