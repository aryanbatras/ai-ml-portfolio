import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
const PROJECTS = [
  {
    title: "Mood Spotify Recommendation",
    description: "An AI system that suggests personalized Spotify playlists based on facial emotion detection using DeepFace and Flask.",
    tags: ["Python", "Deepface", "Spotify API", "Flask"],
    link: "#",
    github: "https://github.com/Ashutoshbhat"
  },
  {
    title: "Tissue Aberration Mapping",
    description: "Deep learning model for pixel-level identification of tissue anomalies in histopathological images using U-Net architectures.",
    tags: ["PyTorch", "Computer Vision", "U-Net", "CUDA"],
    link: "#",
    github: "https://github.com/Ashutoshbhat"
  },
  {
    title: "Generative Text-to-Art",
    description: "A pipeline utilizing stable diffusion models for fine-tuned artistic generation based on specific prompt engineering.",
    tags: ["Diffusion Models", "Transformers", "Python"],
    link: "#",
    github: "https://github.com/Ashutoshbhat"
  },
  {
    title: "LLM Search Engine",
    description: "Semantic search engine built using Vector Databases (Pinecone) and LangChain to query across massive PDF archives.",
    tags: ["LangChain", "OpenAI", "Pinecone", "Next.js"],
    link: "#",
    github: "https://github.com/Ashutoshbhat"
  }
];
export function ProjectsSection() {
  return (
    <section id="projects" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
      <div className="bg-secondary/30 dark:bg-secondary/10 rounded-[2.5rem] p-8 md:p-16 lg:p-20 border border-border/40 shadow-sm">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-4"
          >
            Selected <span className="text-orange-500">Research</span> & Projects
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Experimental explorations in deep learning, computer vision, and scalable software architecture.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <Card className="h-full flex flex-col hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border-border/60 dark:border-white/5 bg-background group overflow-hidden">
                <CardHeader className="space-y-5 pb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <Badge 
                        key={tag} 
                        variant="secondary" 
                        className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 bg-secondary/80 group-hover:bg-orange-500 group-hover:text-white transition-colors"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-bold group-hover:text-orange-500 transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-base mt-3 leading-relaxed text-muted-foreground/90">
                      {project.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardFooter className="mt-auto pt-4 gap-4 pb-8">
                  <Button variant="outline" size="sm" className="rounded-full gap-2 font-semibold border-orange-200/50 hover:border-orange-500 transition-colors" asChild>
                    <a href={project.github} target="_blank" rel="noreferrer"><Github className="h-4 w-4" /> Code</a>
                  </Button>
                  <Button variant="ghost" size="sm" className="rounded-full gap-2 font-semibold text-orange-500 hover:text-orange-600 hover:bg-orange-50 dark:hover:bg-orange-950/20" asChild>
                    <a href={project.link}><ExternalLink className="h-4 w-4" /> Live Demo</a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}