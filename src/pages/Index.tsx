
import { FileText, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/ProjectCard";
import { Navbar } from "@/components/Navbar";

const Index = () => {
  const projects = [
    {
      title: "Smart-City-Dashboard",
      description: "Integrates real-time traffic updates, weather forecasts, and local news for a specific city",
      githubUrl: "https://github.com/imansalie/Smart-City-Dashboard.git",
      demoUrl: "#",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "AI-Enhanced-Cybersecurity-Threat-Detector",
      description: "Combining artificial intelligence and cybersecurity to proactively identify and mitigate potential threats",
      githubUrl: "https://github.com/imansalie/AI-Enhanced-Cybersecurity-Threat-Detector.git",
      demoUrl: "#",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Beauty-Trends-And-Social-Media-Sentiment-Analyzer",
      description: "Analyze social media posts, product reviews, and beauty forums to identify sentiment and trends in the beauty industry",
      githubUrl: "https://github.com/imansalie/Beauty-Trends-And-Social-Media-Sentiment-Analyzer.git",
      demoUrl: "#",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "AI-Powered-Chatbot-for-Customer-Support",
      description: "AI-driven chatbot designed to provide tailored customer support and answer FAQs directly on a website.",
      githubUrl: "https://github.com/imansalie/AI-Powered-Chatbot-for-Customer-Support.git",
      demoUrl: "#",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const skills = [
    { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "HTML5/CSS3"] },
    { category: "Backend", items: ["Node.js", "Express", "Python", "Django", "REST APIs"] },
    { category: "DevOps&Databases", items: ["MySQL", "MongoDB", "PostgreSQL", "Docker", "AWS", "Git", "CI/CD"] },
  ];

  return (
    <div className="snap-x-mandatory h-screen flex overflow-x-scroll">
      <Navbar />
      
      {/* Home Section */}
      <section id="home" className="section-slide flex flex-col items-center justify-center min-h-screen relative w-full">
        <div className="text-center animate-fadeIn px-4 pt-16 md:pt-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-playfair">
            Software Developer|Software Engineer 
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
          Building seamless digital experiences through code, creativity, and clean engineering.
          </p>
        </div>
        <div className="absolute bottom-8 md:bottom-12 left-0 right-0 flex flex-col items-center gap-6 px-4">
          <Button asChild variant="outline" size="lg" className="w-full max-w-[200px]">
            <a href="https://drive.google.com/file/d/17JrBWs1UQoZLBN5eIZJL4odJ6OBmU8hD/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <FileText className="mr-2 h-4 w-4" />
              Download CV
            </a>
          </Button>
          <div className="flex gap-4">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/imansalie" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://www.linkedin.com/in/imaan-salie-dev" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="mailto:imansalie10@gmail.com">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-slide flex items-center min-h-screen w-full">
        <div className="container max-w-4xl px-4 md:px-6 py-16 md:py-0">
          <h2 className="text-3xl font-bold mb-8 font-playfair">About Me</h2>
          <p className="text-lg text-muted-foreground mb-12">
          Innovative full-stack developer constantly evolving and pushing boundaries. From crafting sleek front-end designs to optimizing scalable back-end systems, I’m passionate about creating impactful solutions. With a growing interest in AI and Spring Boot, I’m always learning, adapting, and ready to tackle the next big challenge.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skills.map((skillGroup, index) => (
              <div key={index} className="p-6 rounded-lg bg-secondary/50">
                <h3 className="text-xl font-semibold mb-4 font-playfair">{skillGroup.category}</h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-muted-foreground">{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="section-slide flex items-center min-h-screen w-full">
        <div className="container px-4 md:px-6 py-16 md:py-0">
          <h2 className="text-3xl font-bold mb-8 font-playfair">Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
