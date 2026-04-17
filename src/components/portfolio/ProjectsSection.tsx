import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
const PROJECTS = [
  {
    title: "Mood Spotify Recommendation",
    description: "An AI system that suggests personalized Spotify playlists based on facial emotion detection.",
    tags: ["Python", "Deepface", "Spotify API", "Flask"],
    link: "#",
    github: "#"
  },
  {
    title: "Tissue Aberration Mapping",
    description: "Deep learning model for pixel-level identification of tissue anomalies in histopathological images.",
    tags: ["PyTorch", "Computer Vision", "U-Net", "CUDA"],
    link: "#",
    github: "#"
  },
  {
    title: "Generative Text-to-Art",
    description: "A pipeline utilizing stable diffusion models for fine-tuned artistic generation based on specific prompts.",
    tags: ["Diffusion Models", "Transformers", "Python"],
    link: "#",
    github: "#"
  },
  {
    title: "LLM Search Engine",
    description: "Semantic search engine built using Vector Databases and LangChain to query across massive PDF archives.",
    tags: ["LangChain", "OpenAI", "Pinecone", "Next.js"],
    link: "#",
    github: "#"
  }
];
export function ProjectsSection() {
  return (
    <section id="projects" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 bg-secondary/50 rounded-3xl">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Selected Research & Projects</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Experimental explorations in deep learning and software architecture.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="h-full flex flex-col hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-border/50 overflow-hidden group">
              <CardHeader className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <Badge key={tag} variant="secondary" className="font-mono text-xs px-2.5 py-0.5">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div>
                  <CardTitle className="text-2xl font-bold">{project.title}</CardTitle>
                  <CardDescription className="text-base mt-2 leading-relaxed">
                    {project.description}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardFooter className="mt-auto pt-6 gap-4">
                <Button variant="outline" size="sm" className="rounded-full gap-2" asChild>
                  <a href={project.github}><Github className="h-4 w-4" /> Code</a>
                </Button>
                <Button variant="ghost" size="sm" className="rounded-full gap-2 text-orange-500 hover:text-orange-600 hover:bg-orange-50" asChild>
                  <a href={project.link}><ExternalLink className="h-4 w-4" /> Live Demo</a>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}