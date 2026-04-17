import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, Terminal, Cpu, Layout, Database } from 'lucide-react';
const SKILLS = [
  "Python", "Pandas", "sklearn", "seaborn", "numpy", "Matplotlib", 
  "Classification", "Vectorization", "Stemming", "Data preprocessing pandas", 
  "Web Design", "NLP", "Data Visualization"
];
const TOOLS = [
  "Google Colab", "ChatGPT", "Streamlit", "GitHub", "Heroku", "VS Code"
];
const CONTACT_INFO = {
  phone: "+91 9103932485",
  linkedin: "https://www.linkedin.com/in/ashutosh-bhat-800470288",
  github: "https://github.com/Ashutoshbhat",
  email: "ashutoshbhat1010@gmail.com"
};
export function SkillsAndFooter() {
  return (
    <footer id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
        <div className="space-y-12">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Cpu className="h-6 w-6 text-orange-500" />
              <h2 className="text-3xl font-bold">Technical Stack</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {SKILLS.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium hover:bg-orange-500 hover:text-white transition-colors cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Database className="h-5 w-5 text-orange-500" />
              <h3 className="text-xl font-bold">Tools & Platforms</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {TOOLS.map((tool, index) => (
                <span key={tool} className="px-3 py-1 bg-orange-50 dark:bg-orange-950/20 text-orange-600 dark:text-orange-400 border border-orange-100 dark:border-orange-900/50 rounded-md text-xs font-mono">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
          <p className="text-muted-foreground text-lg mb-8">
            Always open to discussing research collaborations, AI opportunities, or just geeky conversations about tech.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-orange-500 hover:text-white transition-all group">
              <Mail className="h-6 w-6 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium truncate">{CONTACT_INFO.email}</span>
            </a>
            <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-orange-500 hover:text-white transition-all group">
              <Phone className="h-6 w-6 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium">{CONTACT_INFO.phone}</span>
            </a>
          </div>
          <div className="flex items-center gap-6 pt-4">
            <a href={CONTACT_INFO.github} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-orange-500 transition-colors">
              <Github className="h-8 w-8" />
            </a>
            <a href={CONTACT_INFO.linkedin} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-orange-500 transition-colors">
              <Linkedin className="h-8 w-8" />
            </a>
          </div>
        </div>
      </div>
      <div className="pt-12 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <Terminal className="h-4 w-4" />
          <span>© {new Date().getFullYear()} Ashutosh Bhat</span>
        </div>
        <div className="flex items-center gap-8">
          <a href="#" className="hover:text-foreground transition-colors">Resume</a>
          <a href="#" className="hover:text-foreground transition-colors">Projects</a>
          <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
        </div>
      </div>
    </footer>
  );
}