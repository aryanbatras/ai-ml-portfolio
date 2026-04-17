import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter, Terminal } from 'lucide-react';
const SKILLS = [
  "Python", "PyTorch", "TensorFlow", "C++", "JavaScript", 
  "Scikit-learn", "OpenCV", "Deep Learning", "CNNs", 
  "Transformers", "LLMs", "FastAPI", "React", "SQL", "Docker"
];
export function SkillsAndFooter() {
  return (
    <footer id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
        <div>
          <h2 className="text-3xl font-bold mb-8">Technical Expertise</h2>
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
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
          <p className="text-muted-foreground text-lg mb-8">
            Always open to discussing research collaborations, AI opportunities, or just geeky conversations about tech.
          </p>
          <div className="flex items-center gap-6">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-orange-500 transition-colors">
              <Github className="h-7 w-7" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-orange-500 transition-colors">
              <Linkedin className="h-7 w-7" />
            </a>
            <a href="mailto:ashutosh@example.com" className="text-muted-foreground hover:text-orange-500 transition-colors">
              <Mail className="h-7 w-7" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-orange-500 transition-colors">
              <Twitter className="h-7 w-7" />
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
          <a href="#" className="hover:text-foreground transition-colors">LeetCode</a>
          <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
        </div>
      </div>
    </footer>
  );
}