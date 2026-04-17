import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, Terminal, Cpu, Database, ArrowUpCircle } from 'lucide-react';
const SKILLS = [
  "Python", "Pandas", "Scikit-Learn", "Seaborn", "NumPy", "Matplotlib",
  "Classification", "NLP", "Data Preprocessing", "PyTorch",
  "Web Design", "Streamlit", "Data Visualization", "Git"
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
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  return (
    <footer id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-24 items-start">
        <div className="space-y-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-10">
              <Cpu className="h-7 w-7 text-orange-500" />
              <h2 className="text-4xl font-display font-bold">Technical Stack</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {SKILLS.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.04 }}
                  className="px-5 py-2.5 bg-secondary hover:bg-orange-500 hover:text-white dark:bg-white/5 dark:hover:bg-orange-500/80 rounded-2xl text-sm font-semibold transition-all cursor-default shadow-sm hover:shadow-orange-500/20"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Database className="h-6 w-6 text-orange-500" />
              <h3 className="text-xl font-bold">Tools & Platforms</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {TOOLS.map((tool) => (
                <span key={tool} className="px-4 py-1.5 bg-orange-50 dark:bg-orange-950/20 text-orange-700 dark:text-orange-400 border border-orange-100 dark:border-orange-900/40 rounded-xl text-xs font-mono font-medium">
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
        <div className="flex flex-col justify-center bg-orange-500/5 dark:bg-orange-500/[0.02] p-8 md:p-12 rounded-[2.5rem] border border-orange-500/10">
          <h2 className="text-4xl font-display font-bold mb-6">Let's Connect</h2>
          <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
            I'm always open to discussing research collaborations, AI opportunities, or exploring how we can build something impactful together.
          </p>
          <div className="space-y-4 mb-10">
            <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-5 p-5 rounded-2xl bg-background hover:bg-orange-500 hover:text-white transition-all group shadow-sm">
              <div className="p-3 bg-secondary rounded-xl group-hover:bg-white/20 transition-colors">
                <Mail className="h-6 w-6" />
              </div>
              <span className="text-base font-semibold truncate">{CONTACT_INFO.email}</span>
            </a>
            <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center gap-5 p-5 rounded-2xl bg-background hover:bg-orange-500 hover:text-white transition-all group shadow-sm">
              <div className="p-3 bg-secondary rounded-xl group-hover:bg-white/20 transition-colors">
                <Phone className="h-6 w-6" />
              </div>
              <span className="text-base font-semibold">{CONTACT_INFO.phone}</span>
            </a>
          </div>
          <div className="flex items-center gap-6">
            <a href={CONTACT_INFO.github} target="_blank" rel="noreferrer" className="p-3 text-muted-foreground hover:text-orange-500 hover:scale-110 transition-all">
              <Github className="h-8 w-8" />
            </a>
            <a href={CONTACT_INFO.linkedin} target="_blank" rel="noreferrer" className="p-3 text-muted-foreground hover:text-orange-500 hover:scale-110 transition-all">
              <Linkedin className="h-8 w-8" />
            </a>
          </div>
        </div>
      </div>
      <div className="pt-12 border-t border-border/60 flex flex-col md:flex-row items-center justify-between gap-8 text-sm text-muted-foreground">
        <div className="flex items-center gap-2 font-medium">
          <Terminal className="h-4 w-4" />
          <span>© {new Date().getFullYear()} Ashutosh Bhat • Portfolio</span>
        </div>
        <div className="flex items-center gap-8 font-semibold">
          <a href="#contact" className="hover:text-orange-500 transition-colors">Resume</a>
          <a href="#projects" className="hover:text-orange-500 transition-colors">Projects</a>
          <button onClick={scrollToTop} className="flex items-center gap-2 text-orange-500 hover:text-orange-600 transition-colors group">
            Back to Top
            <ArrowUpCircle className="h-4 w-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}